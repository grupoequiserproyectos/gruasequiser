#!/bin/bash

echo "==================================="
echo "VERIFICACIÓN DE SISTEMA DE BLOGS"
echo "==================================="
echo ""

# 1. Verificar archivo dinámico
echo "✓ Verificando archivo de rutas dinámicas..."
if [ -f "app/[locale]/blog/[slug]/page.tsx" ]; then
    echo "  ✅ app/[locale]/blog/[slug]/page.tsx existe"
else
    echo "  ❌ app/[locale]/blog/[slug]/page.tsx NO existe"
fi
echo ""

# 2. Verificar funciones en blog-data.ts
echo "✓ Verificando funciones en lib/blog-data.ts..."
FUNCTIONS=("getAllBlogSlugs" "getBlogBySlug" "getRelatedArticles" "getFeaturedArticles" "getArticlesByCategory")
for func in "${FUNCTIONS[@]}"; do
    if grep -q "export function $func" lib/blog-data.ts; then
        echo "  ✅ $func existe"
    else
        echo "  ❌ $func NO existe"
    fi
done
echo ""

# 3. Contar blogs
echo "✓ Contando blogs en lib/blog-data.ts..."
BLOG_COUNT=$(grep -c "slug:" lib/blog-data.ts)
echo "  📊 Blogs encontrados: $BLOG_COUNT"
echo ""

# 4. Verificar tamaño del archivo
echo "✓ Verificando tamaño del archivo de datos..."
FILE_SIZE=$(wc -c < lib/blog-data.ts)
FILE_SIZE_KB=$((FILE_SIZE / 1024))
echo "  📦 Tamaño: ${FILE_SIZE_KB} KB"
echo ""

# 5. Verificar componentes
echo "✓ Verificando componentes de blog..."
COMPONENTS=("blog-home-page.tsx" "blog-article-page.tsx" "blog-newsletter.tsx")
for comp in "${COMPONENTS[@]}"; do
    if [ -f "components/blog/$comp" ]; then
        echo "  ✅ $comp existe"
    else
        echo "  ❌ $comp NO existe"
    fi
done
echo ""

echo "==================================="
echo "VERIFICACIÓN COMPLETA"
echo "==================================="
