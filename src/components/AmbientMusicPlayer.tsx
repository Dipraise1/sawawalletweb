'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function AmbientMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.08) // Very subtle ambient level

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = volume
    audio.loop = true

    // No autoplay attempt on mount — browsers block it anyway, and calling
    // play() forces the ~576KB track to start downloading on every page load,
    // defeating preload="none". Playback begins on first user interaction.
    const handleFirstInteraction = () => {
      if (audio.paused) {
        audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
      }
      document.removeEventListener('click', handleFirstInteraction)
      document.removeEventListener('touchstart', handleFirstInteraction)
    }

    document.addEventListener('click', handleFirstInteraction)
    document.addEventListener('touchstart', handleFirstInteraction)

    return () => {
      document.removeEventListener('click', handleFirstInteraction)
      document.removeEventListener('touchstart', handleFirstInteraction)
    }
  }, [volume])

  const toggleMusic = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <audio ref={audioRef} src="/background-music.m4a" preload="none" />

      {/* Subtle music control - bottom right, very discreet */}
      <motion.button
        onClick={toggleMusic}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-forest-green/20 text-forest-green/70 hover:text-forest-green hover:border-forest-green/40 shadow-sm transition-all duration-300"
        aria-label={isPlaying ? "Pause ambient music" : "Play ambient music"}
        title={isPlaying ? "Pause music" : "Play music"}
        suppressHydrationWarning
      >
        <span className="text-lg leading-none">
          {isPlaying ? '♪' : '♫'}
        </span>
      </motion.button>

      {/* Very faint visual indicator when playing */}
      {isPlaying && (
        <div 
          className="fixed bottom-7 right-16 text-[10px] font-mono tracking-[1px] text-forest-green/30 pointer-events-none"
          suppressHydrationWarning
        >
          AMBIENT
        </div>
      )}
    </>
  )
}
