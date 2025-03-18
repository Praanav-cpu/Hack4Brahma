import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface PrizeCardProps {
  position: string
  amount: string
  icon: ReactNode
  className?: string
}

export default function PrizeCard({ position, amount, icon, className }: PrizeCardProps) {
  // Determine the border color based on position
  const getBorderColor = () => {
    switch (position) {
      case "1st":
        return "group-hover:border-yellow-500/70 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]"
      case "2nd":
        return "group-hover:border-gray-400/70 group-hover:shadow-[0_0_15px_rgba(156,163,175,0.3)]"
      case "3rd":
        return "group-hover:border-amber-700/70 group-hover:shadow-[0_0_15px_rgba(180,83,9,0.3)]"
      default:
        return "group-hover:border-green-500/50 group-hover:shadow-[0_0_15px_rgba(0,128,0,0.3)]"
    }
  }

  // Determine the icon background color based on position
  const getIconBgColor = () => {
    switch (position) {
      case "1st":
        return "bg-yellow-900/30 border-yellow-500/50 text-yellow-500"
      case "2nd":
        return "bg-gray-800/30 border-gray-400/50 text-gray-400"
      case "3rd":
        return "bg-amber-900/30 border-amber-700/50 text-amber-700"
      default:
        return "bg-green-900/30 border-green-500/50 text-green-500"
    }
  }

  // Determine the amount text color based on position
  const getAmountColor = () => {
    switch (position) {
      case "1st":
        return "text-yellow-500"
      case "2nd":
        return "text-gray-400"
      case "3rd":
        return "text-amber-700"
      default:
        return "text-green-500"
    }
  }

  return (
    <Card
      className={cn(
        "group relative overflow-hidden bg-black/70 border-green-900/50 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300",
        getBorderColor(),
        className,
      )}
    >
      <div className="absolute -inset-1 bg-green-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative p-6 text-center">
        <div
          className={cn(
            "w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full border",
            getIconBgColor(),
          )}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{position} Place</h3>
        <div className={cn("text-3xl font-bold mb-2", getAmountColor())}>{amount}</div>
        <p className="text-gray-400 text-sm">+ Special recognition and additional prizes</p>

        {/* Military-style decoration */}
        <div className="absolute top-2 right-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="rgba(0, 128, 0, 0.3)"
              strokeWidth="2"
            />
            <path
              d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
              stroke="rgba(0, 128, 0, 0.3)"
              strokeWidth="2"
            />
            <path
              d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
              fill="rgba(0, 128, 0, 0.3)"
            />
          </svg>
        </div>

        {/* Military-style corner decorations */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-500/30"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-green-500/30"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-green-500/30"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-500/30"></div>
      </div>
    </Card>
  )
}

