"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronUp, FileQuestion } from "lucide-react"

interface FaqItemProps {
  question: string
  answer: string
  className?: string
}

export default function FaqItem({ question, answer, className }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card
      className={cn(
        "group relative overflow-hidden bg-black/70 border-green-900/50 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300",
        isOpen && "border-green-500/50",
        className,
      )}
    >
      <button
        className="w-full p-4 text-left flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-md bg-green-900/30 border border-green-500/50 text-green-500">
            <FileQuestion className="h-4 w-4" />
          </div>
          <h3 className="font-bold font-mono">{question}</h3>
        </div>
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-900/30 border border-green-500/50 text-green-500">
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>
      </button>

      <div className={cn("overflow-hidden transition-all duration-300", isOpen ? "max-h-96" : "max-h-0")}>
        <div className="px-4 pb-4 pt-0 text-gray-400">
          <div className="pl-11 pr-2 py-3 border-l-2 border-green-900/50 ml-4">{answer}</div>
        </div>
      </div>

      {/* Military-style corner decorations */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-green-500/30"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-green-500/30"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-green-500/30"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-green-500/30"></div>
    </Card>
  )
}

