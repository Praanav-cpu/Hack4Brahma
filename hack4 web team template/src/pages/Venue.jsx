// src/pages/Venue.jsx
import BattleMap from "../components/battle-map"
import { Calendar, Clock, MapPin } from "lucide-react"

function Venue() {
  return (
    <section id="venue" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">VENUE LOCATION</h2>
          <p className="text-gray-400">
            The mission will be conducted at our secure base of operations. Familiarize yourself with the location and
            surrounding area.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="h-[400px] relative">
            <BattleMap />
          </div>
          <div className="bg-black/30 border border-green-900/50 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-green-500">BASE COORDINATES</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <span className="font-bold text-gray-200">Location</span>
                  <p className="text-gray-400">Tech Innovation Center, Bangalore</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <span className="font-bold text-gray-200">Operation Dates</span>
                  <p className="text-gray-400">October 15-17, 2023</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <span className="font-bold text-gray-200">Reporting Hours</span>
                  <p className="text-gray-400">Check-in begins at 0800 hours</p>
                </div>
              </div>
            </div>
            <button className="w-full bg-green-700 hover:bg-green-600 text-white py-3">GET DIRECTIONS</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Venue
