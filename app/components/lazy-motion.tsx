
'use client'

import dynamic from 'next/dynamic'
import { ComponentType } from 'react'

// Lazy load Framer Motion components
export const LazyMotion = dynamic(
  () => import('framer-motion').then((mod) => mod.LazyMotion),
  { ssr: true }
)

export const m = dynamic(
  () => import('framer-motion').then((mod) => mod.m as any),
  { ssr: false }
) as any

export const AnimatePresence = dynamic(
  () => import('framer-motion').then((mod) => mod.AnimatePresence),
  { ssr: false }
)

// Lazy load animation features
export const loadFeatures = () =>
  import('framer-motion').then((res) => res.domAnimation)
