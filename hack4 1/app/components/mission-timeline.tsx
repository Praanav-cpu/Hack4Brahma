import { Calendar, Clock, Flag, Code, Coffee, Lightbulb, Presentation, Trophy, Users } from "lucide-react"

export default function MissionTimeline() {
  const timelineItems = [
    {
      date: "October 10, 2023",
      time: "2000 hours",
      title: "Registration Deadline",
      description:
        "Last chance to enlist your team for the operation. All personnel must complete registration by this time.",
      icon: <Flag className="h-5 w-5 text-green-500" />,
    },
    {
      date: "October 15, 2023",
      time: "0800 hours",
      title: "Deployment Begins",
      description:
        "Check-in and registration at the base camp. All teams must report to HQ for ID verification and kit distribution.",
      icon: <Users className="h-5 w-5 text-green-500" />,
    },
    {
      date: "October 15, 2023",
      time: "1000 hours",
      title: "Mission Briefing",
      description:
        "Opening ceremony and detailed explanation of the hackathon tracks. Commanding officers will outline mission objectives.",
      icon: <Presentation className="h-5 w-5 text-green-500" />,
    },
    {
      date: "October 15, 2023",
      time: "1200 hours",
      title: "Operation Commences",
      description:
        "Hacking begins. Teams start working on their projects. Tactical resources and mentors deployed to assist teams.",
      icon: <Code className="h-5 w-5 text-green-500" />,
    },
    {
      date: "October 15, 2023",
      time: "2000 hours",
      title: "Tactical Refreshment",
      description: "Dinner break and networking session. Opportunity to interact with mentors and industry experts.",
      icon: <Coffee className="h-5 w-5 text-green-500" />,
    },
    {
      date: "October 16, 2023",
      time: "1200 hours",
      title: "Midway Assessment",
      description:
        "Progress check and mentorship sessions. Teams will receive feedback on their current development trajectory.",
      icon: <Lightbulb className="h-5 w-5 text-green-500" />,
    },
    {
      date: "October 17, 2023",
      time: "1200 hours",
      title: "Code Freeze",
      description:
        "All development stops. Prepare for presentations. Teams must finalize their solutions and prepare demonstration materials.",
      icon: <Clock className="h-5 w-5 text-green-500" />,
    },
    {
      date: "October 17, 2023",
      time: "1400 hours",
      title: "Mission Debrief",
      description:
        "Project presentations and demonstrations. Each team will have 5 minutes to present and 3 minutes for Q&A.",
      icon: <Presentation className="h-5 w-5 text-green-500" />,
    },
    {
      date: "October 17, 2023",
      time: "1800 hours",
      title: "Awards Ceremony",
      description:
        "Recognition of top-performing teams and closing ceremony. Medals and prizes will be distributed to winning teams.",
      icon: <Trophy className="h-5 w-5 text-green-500" />,
    },
  ]

  return (
    <div className="relative">
      {/* Center line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-green-900/50 transform -translate-x-1/2"></div>

      <div className="space-y-12">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`timeline-item relative flex ${index % 2 === 0 ? "justify-start" : "justify-end"} md:items-center`}
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 w-4 h-4 bg-green-500 rounded-full transform -translate-x-1/2 z-10"></div>

            {/* Content */}
            <div
              className={`w-full md:w-5/12 bg-black/70 border border-green-900/50 rounded-lg p-4 
                ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-green-500" />
                <span className="text-sm text-green-500 font-mono">{item.date}</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-4 w-4 text-green-500" />
                <span className="text-sm text-green-500 font-mono">{item.time}</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

