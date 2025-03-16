"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface ParallaxSectionProps {
  className?: string
  speed?: number
  pattern?: "grid" | "dots" | "radar" | "none"
}

export default function ParallaxSection({ className = "", speed = -0.1, pattern = "grid" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const element = ref.current
    if (!element) return

    gsap.to(element, {
      y: () => ScrollTrigger.maxScroll(window) * speed,
      ease: "none",
      scrollTrigger: {
        start: "top top",
        end: "bottom bottom",
        invalidateOnRefresh: true,
        scrub: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [speed])

  const getPatternStyle = () => {
    switch (pattern) {
      case "grid":
        return {
          backgroundImage: `
            linear-gradient(to right, rgba(0, 128, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 128, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }
      case "dots":
        return {
          backgroundImage: "radial-gradient(rgba(0, 128, 0, 0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }
      case "radar":
        return {
          background: "radial-gradient(circle at center, rgba(0, 128, 0, 0.1) 0%, transparent 70%)",
        }
      default:
        return {}
    }
  }

  return (
    <div ref={ref} className={className}>
      <div className="w-full h-full" style={getPatternStyle()}></div>
    </div>
  )
}

