
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { searchImages } from '@/lib/imageApi';

interface BlogImageProps {
  blogSlug: string;
  imageIndex: number; // 0-3 (hero, section1, section2, section3)
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean; // Solo para hero
}

export default function BlogImage({
  blogSlug,
  imageIndex,
  alt,
  width = 1200,
  height = 600,
  className = '',
  priority = false
}: BlogImageProps) {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function loadImage() {
      try {
        setLoading(true);
        
        // Generar query basado en slug e índice
        const queryMap: Record<string, string[]> = {
          'gruas-proyectos-infraestructura-vial': [
            'industrial crane bridge construction',
            'highway crane infrastructure',
            'bridge building crane',
            'infrastructure crane project'
          ],
          'izamiento-tanques-almacenamiento': [
            'tank lifting industrial crane',
            'storage tank installation',
            'industrial tank hoisting',
            'heavy tank equipment'
          ],
          'transporte-equipos-mineros': [
            'mining equipment transport lowboy',
            'heavy mining machinery truck',
            'excavator transport highway',
            'mining equipment logistics'
          ],
          'coordinacion-izamientos-multiples-gruas': [
            'multiple cranes working together',
            'synchronized crane lifting',
            'tandem crane operation',
            'heavy rigging multiple cranes'
          ],
          'costo-alquiler-grua-venezuela': [
            'industrial crane rental service',
            'heavy equipment rental yard',
            'crane rental business',
            'equipment rental pricing'
          ],
          'servicio-gruas-24-7-venezuela': [
            'crane service 24 hours night',
            'emergency heavy lifting crane',
            'industrial crane emergency',
            'night crane operation'
          ],
          'soporte-proyectos-pdvsa': [
            'oil refinery crane construction',
            'petroleum industrial crane',
            'petrochemical plant crane',
            'oil field heavy lifting'
          ],
          'rigging-industrial-calculos': [
            'industrial rigging safety equipment',
            'crane rigging calculation',
            'load rigging engineering',
            'rigging equipment inspection'
          ]
        };

        const queries = queryMap[blogSlug] || ['industrial crane', 'heavy lifting'];
        const query = queries[imageIndex] || queries[0];

        const images = await searchImages(query, { 
          limit: 1, 
          width, 
          height 
        });

        if (mounted && images.length > 0) {
          setImageUrl(images[0].url);
          setError(false);
        } else if (mounted) {
          setError(true);
        }
      } catch (err) {
        console.error('Error loading blog image:', err);
        if (mounted) {
          setError(true);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadImage();

    return () => {
      mounted = false;
    };
  }, [blogSlug, imageIndex, width, height]);

  // Placeholder mientras carga o si hay error
  if (loading || error || !imageUrl) {
    return (
      <div 
        className={`relative bg-gradient-to-br from-equiser-blue to-blue-900 flex items-center justify-center ${className}`}
        style={{ width: '100%', height: `${height}px` }}
      >
        <div className="text-center text-white p-6">
          <div className="text-4xl mb-2">🏗️</div>
          {loading ? (
            <p className="text-sm">Cargando imagen...</p>
          ) : (
            <>
              <p className="font-bold text-lg mb-1">{alt}</p>
              <p className="text-xs opacity-75">GRÚAS EQUISER C.A.</p>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-lg shadow-xl ${className}`}
      style={{ width: '100%', height: `${height}px` }}
    >
      <Image
        src={imageUrl}
        alt={alt}
        fill
        sizes={`(max-width: 768px) 100vw, (max-width: 1200px) 80vw, ${width}px`}
        className="object-cover"
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        quality={85}
        onError={() => setError(true)}
      />
      
      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      
      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <p className="text-white text-sm font-medium">{alt}</p>
      </div>
    </motion.div>
  );
}
