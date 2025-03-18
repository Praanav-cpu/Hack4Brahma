"use client"

import { useEffect, useState, useRef } from "react"

interface CountUpProps {
  start?: number
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
  separator?: string
}

export default function CountUp({
  start = 0,
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator = ",",
}: CountUpProps) {
  const [count, setCount] = useState(start)
  const countRef = useRef(start)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    startTimeRef.current = Date.now()
    const step = () => {
      const now = Date.now()
      const elapsed = now - (startTimeRef.current || now)
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for more natural counting
      const easedProgress = 1 - Math.pow(1 - progress, 3)

      const value = start + easedProgress * (end - start)
      const roundedValue = decimals
        ? Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
        : Math.floor(value)

      if (countRef.current !== roundedValue) {
        countRef.current = roundedValue
        setCount(roundedValue)
      }

      if (progress < 1) {
        timerRef.current = setTimeout(step, 16)
      }
    }

    step()

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [start, end, duration, decimals])

  const formatNumber = (num: number) => {
    return num
      .toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
      .replace(/,/g, separator)
  }

  return (
    <span className="font-mono">
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  )
}

