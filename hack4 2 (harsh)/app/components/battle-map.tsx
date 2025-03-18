"use client"

import { useEffect, useRef } from "react"

export default function BattleMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.clientWidth
        canvas.height = parent.clientHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Draw tactical map
    const drawMap = () => {
      if (!ctx) return

      // Background
      ctx.fillStyle = "#0a1a0a"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Grid lines
      ctx.strokeStyle = "rgba(0, 128, 0, 0.2)"
      ctx.lineWidth = 1

      const gridSize = 30
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw topographic contours
      ctx.strokeStyle = "rgba(0, 128, 0, 0.15)"
      ctx.lineWidth = 1

      for (let i = 0; i < 5; i++) {
        const radius = 100 + i * 50
        ctx.beginPath()
        ctx.arc(canvas.width * 0.7, canvas.height * 0.3, radius, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Draw roads
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
      ctx.lineWidth = 3

      // Main road
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.1, canvas.height * 0.5)
      ctx.lineTo(canvas.width * 0.9, canvas.height * 0.5)
      ctx.stroke()

      // Secondary roads
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
      ctx.lineWidth = 2

      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.3, canvas.height * 0.1)
      ctx.lineTo(canvas.width * 0.3, canvas.height * 0.9)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.7, canvas.height * 0.2)
      ctx.lineTo(canvas.width * 0.7, canvas.height * 0.8)
      ctx.stroke()

      // Draw venue location (target)
      const centerX = canvas.width * 0.5
      const centerY = canvas.height * 0.5

      // Outer circle
      ctx.beginPath()
      ctx.arc(centerX, centerY, 20, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(0, 255, 0, 0.8)"
      ctx.lineWidth = 2
      ctx.stroke()

      // Inner circle
      ctx.beginPath()
      ctx.arc(centerX, centerY, 10, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(0, 255, 0, 0.5)"
      ctx.fill()

      // Crosshair
      ctx.strokeStyle = "rgba(0, 255, 0, 0.8)"
      ctx.lineWidth = 1

      ctx.beginPath()
      ctx.moveTo(centerX - 30, centerY)
      ctx.lineTo(centerX + 30, centerY)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(centerX, centerY - 30)
      ctx.lineTo(centerX, centerY + 30)
      ctx.stroke()

      // Draw landmarks
      const drawLandmark = (x: number, y: number, label: string, type = "default") => {
        if (type === "airport") {
          // Airport icon
          ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
          ctx.beginPath()
          ctx.arc(x, y, 5, 0, Math.PI * 2)
          ctx.fill()

          ctx.strokeStyle = "rgba(255, 255, 255, 0.7)"
          ctx.beginPath()
          ctx.arc(x, y, 10, 0, Math.PI * 1.5)
          ctx.stroke()
        } else if (type === "railway") {
          // Railway station icon
          ctx.strokeStyle = "rgba(255, 255, 255, 0.7)"
          ctx.lineWidth = 1

          // Horizontal line
          ctx.beginPath()
          ctx.moveTo(x - 8, y)
          ctx.lineTo(x + 8, y)
          ctx.stroke()

          // Vertical lines
          for (let i = -6; i <= 6; i += 4) {
            ctx.beginPath()
            ctx.moveTo(x + i, y - 3)
            ctx.lineTo(x + i, y + 3)
            ctx.stroke()
          }
        } else if (type === "metro") {
          // Metro icon
          ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
          ctx.beginPath()
          ctx.arc(x, y, 4, 0, Math.PI * 2)
          ctx.fill()

          ctx.strokeStyle = "rgba(255, 255, 255, 0.7)"
          ctx.beginPath()
          ctx.arc(x, y, 8, 0, Math.PI * 2)
          ctx.stroke()
        } else {
          // Default landmark
          ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
          ctx.beginPath()
          ctx.arc(x, y, 5, 0, Math.PI * 2)
          ctx.fill()
        }

        // Label
        ctx.font = "10px monospace"
        ctx.fillStyle = "rgba(0, 255, 0, 0.8)"
        ctx.fillText(label, x + 12, y + 4)
      }

      drawLandmark(canvas.width * 0.2, canvas.height * 0.3, "Kempegowda Airport", "airport")
      drawLandmark(canvas.width * 0.8, canvas.height * 0.6, "Railway Station", "railway")
      drawLandmark(canvas.width * 0.4, canvas.height * 0.7, "Metro Station", "metro")
      drawLandmark(canvas.width * 0.6, canvas.height * 0.3, "Tech Park")

      // Draw restricted areas
      ctx.strokeStyle = "rgba(255, 50, 50, 0.3)"
      ctx.setLineDash([5, 5])
      ctx.lineWidth = 2

      ctx.beginPath()
      ctx.arc(canvas.width * 0.8, canvas.height * 0.2, 40, 0, Math.PI * 2)
      ctx.stroke()
      ctx.setLineDash([])

      ctx.font = "10px monospace"
      ctx.fillStyle = "rgba(255, 50, 50, 0.7)"
      ctx.fillText("RESTRICTED", canvas.width * 0.8 - 35, canvas.height * 0.2)

      // Draw coordinates
      ctx.font = "10px monospace"
      ctx.fillStyle = "rgba(0, 255, 0, 0.6)"
      ctx.fillText(`LAT: 12°58'N`, 10, 20)
      ctx.fillText(`LON: 77°35'E`, 10, 35)
      ctx.fillText(`HACK4BRAHMA HQ`, centerX - 50, centerY - 30)

      // Draw compass
      const compassX = canvas.width - 50
      const compassY = 50
      const compassRadius = 20

      ctx.beginPath()
      ctx.arc(compassX, compassY, compassRadius, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(0, 255, 0, 0.5)"
      ctx.lineWidth = 1
      ctx.stroke()

      // N
      ctx.beginPath()
      ctx.moveTo(compassX, compassY - compassRadius + 5)
      ctx.lineTo(compassX, compassY - 5)
      ctx.strokeStyle = "rgba(0, 255, 0, 0.8)"
      ctx.lineWidth = 2
      ctx.stroke()

      ctx.font = "10px monospace"
      ctx.fillStyle = "rgba(0, 255, 0, 0.8)"
      ctx.fillText("N", compassX - 3, compassY - compassRadius - 5)

      // E
      ctx.beginPath()
      ctx.moveTo(compassX + 5, compassY)
      ctx.lineTo(compassX + compassRadius - 5, compassY)
      ctx.stroke()

      ctx.fillText("E", compassX + compassRadius + 5, compassY + 3)

      // S
      ctx.beginPath()
      ctx.moveTo(compassX, compassY + 5)
      ctx.lineTo(compassX, compassY + compassRadius - 5)
      ctx.stroke()

      ctx.fillText("S", compassX - 3, compassY + compassRadius + 12)

      // W
      ctx.beginPath()
      ctx.moveTo(compassX - 5, compassY)
      ctx.lineTo(compassX - compassRadius + 5, compassY)
      ctx.stroke()

      ctx.fillText("W", compassX - compassRadius - 12, compassY + 3)

      // Scan line effect
      const scanLineY = ((Date.now() % 4000) / 4000) * canvas.height

      ctx.fillStyle = "rgba(0, 255, 0, 0.1)"
      ctx.fillRect(0, scanLineY, canvas.width, 2)

      // Add some noise/static effect
      if (Math.random() > 0.7) {
        for (let i = 0; i < 50; i++) {
          const x = Math.random() * canvas.width
          const y = Math.random() * canvas.height
          const size = Math.random() * 2

          ctx.fillStyle = `rgba(0, 255, 0, ${Math.random() * 0.2})`
          ctx.fillRect(x, y, size, size)
        }
      }

      // Add timestamp
      const now = new Date()
      const timeString = now.toLocaleTimeString("en-US", { hour12: false })
      ctx.font = "10px monospace"
      ctx.fillStyle = "rgba(0, 255, 0, 0.8)"
      ctx.fillText(`TIME: ${timeString}`, canvas.width - 100, canvas.height - 20)
      ctx.fillText(`TACTICAL MAP v1.0`, canvas.width - 130, canvas.height - 5)
    }

    // Animation loop
    let animationId: number

    const animate = () => {
      drawMap()
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

