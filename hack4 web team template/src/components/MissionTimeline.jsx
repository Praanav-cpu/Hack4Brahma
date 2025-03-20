const events = [
    { date: "Day 1", description: "Opening Ceremony & Hacking Begins" },
    { date: "Day 2", description: "Mentoring & Submission Deadline" },
    { date: "Day 3", description: "Judging & Award Ceremony" },
  ];
  
  function MissionTimeline() {
    return (
      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={index} className="flex gap-4 items-center">
            <span className="text-green-500 font-bold">{event.date}</span>
            <span className="text-gray-300">{event.description}</span>
          </div>
        ))}
      </div>
    );
  }
  
  export default MissionTimeline;
  