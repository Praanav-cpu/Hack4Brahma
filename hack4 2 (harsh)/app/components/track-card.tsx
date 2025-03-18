import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface TrackCardProps {
  title: string
  description: string
  icon: ReactNode
  className?: string
}

export default function TrackCard({ title, description, icon, className }: TrackCardProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden bg-black/70 border-green-900/50 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300",
        className,
      )}
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-green-500 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300"></div>
      <div className="relative p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-md bg-green-900/30 border border-green-500/50 text-green-500">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </Card>
  )
}

