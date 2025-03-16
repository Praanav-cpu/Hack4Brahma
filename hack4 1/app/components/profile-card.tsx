import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Github, Linkedin, Twitter, Medal, Shield } from "lucide-react"

interface ProfileCardProps {
  name: string
  role: string
  image: string
  className?: string
  size?: "small" | "large"
  specialization?: string
  achievements?: string[]
}

export default function ProfileCard({
  name,
  role,
  image,
  className,
  size = "large",
  specialization = "",
  achievements = [],
}: ProfileCardProps) {
  // Military ranks and their corresponding colors
  const getRankColor = (role: string) => {
    if (role.includes("Major") || role.includes("Lead")) return "border-yellow-500/50"
    if (role.includes("Captain") || role.includes("Technical")) return "border-blue-500/50"
    if (role.includes("Lieutenant") || role.includes("Operations")) return "border-green-500/50"
    if (role.includes("Sergeant") || role.includes("Logistics")) return "border-red-500/50"
    if (role.includes("Corporal")) return "border-purple-500/50"
    return "border-gray-500/50"
  }

  return (
    <Card
      className={cn(
        "group relative overflow-hidden bg-black/70 border-green-900/50 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300",
        className,
      )}
    >
      <div className="relative p-4">
        <div className={cn("relative mx-auto overflow-hidden rounded-lg mb-4 border-2", getRankColor(role))}>
          <div className={cn("relative overflow-hidden", size === "large" ? "w-40 h-40" : "w-24 h-24")}>
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={size === "large" ? 200 : 150}
              height={size === "large" ? 200 : 150}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Military-style overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Rank insignia for large cards */}
          {size === "large" && (
            <div className="absolute -top-2 -right-2 bg-black/70 rounded-full p-1 border border-green-500/50">
              {role.includes("Major") || role.includes("Lead") ? (
                <Shield className="h-5 w-5 text-yellow-500" />
              ) : role.includes("Captain") || role.includes("Technical") ? (
                <Shield className="h-5 w-5 text-blue-500" />
              ) : role.includes("Lieutenant") || role.includes("Operations") ? (
                <Shield className="h-5 w-5 text-green-500" />
              ) : role.includes("Sergeant") || role.includes("Logistics") ? (
                <Shield className="h-5 w-5 text-red-500" />
              ) : (
                <Shield className="h-5 w-5 text-gray-400" />
              )}
            </div>
          )}
        </div>

        <h3 className={cn("font-bold text-center mb-1", size === "large" ? "text-xl" : "text-base")}>{name}</h3>
        <p className="text-gray-400 text-center text-sm mb-2">{role}</p>

        {specialization && size === "large" && (
          <p className="text-green-500 text-center text-xs mb-3 font-mono">{specialization}</p>
        )}

        {size === "large" && achievements.length > 0 && (
          <div className="flex items-center justify-center gap-1 mb-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center" title={achievement}>
                <Medal className="h-3 w-3 text-yellow-500" />
              </div>
            ))}
          </div>
        )}

        {size === "large" && (
          <div className="flex justify-center gap-3">
            <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              <Github className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              <Facebook className="h-4 w-4" />
            </Link>
          </div>
        )}

        {/* Military-style corner decorations for large cards */}
        {size === "large" && (
          <>
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-green-500/30"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-green-500/30"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-green-500/30"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-green-500/30"></div>
          </>
        )}
      </div>
    </Card>
  )
}

