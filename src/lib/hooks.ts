'use client'

import { useInView as useFramerInView } from 'framer-motion'
import { useRef } from 'react'

export function useInView(options?: {
  once?: boolean
  margin?: string
  amount?: number | 'some' | 'all'
}) {
  const ref = useRef(null)
  const isInView = useFramerInView(ref, {
    once: true,
    margin: '-100px' as any,
    ...options
  })
  
  return { ref, isInView }
}
