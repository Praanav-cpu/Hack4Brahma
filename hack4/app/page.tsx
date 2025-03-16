"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Award,
  Calendar,
  ChevronDown,
  Clock,
  Code,
  Compass,
  Globe,
  MapPin,
  Menu,
  Shield,
  Target,
  Trophy,
  Users,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import CountUp from "./components/count-up"
import MissionTimeline from "./components/mission-timeline"
import ParallaxSection from "./components/parallax-section"
import PrizeCard from "./components/prize-card"
import TrackCard from "./components/track-card"
import ProfileCard from "./components/profile-card"
import FaqItem from "./components/faq-item"
import BattleMap from "./components/battle-map"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const headerRef = useRef(null)
  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const timelineRef = useRef(null)
  const partnersRef = useRef(null)
  const prizesRef = useRef(null)
  const venueRef = useRef(null)
  const galleryRef = useRef(null)
  const tracksRef = useRef(null)
  const organizersRef = useRef(null)
  const faqRef = useRef(null)
  const volunteersRef = useRef(null)

  useEffect(() => {
    // Set loaded state after a short delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isLoaded) return

    // Header animation
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })

    // Hero section animation
    gsap.from(heroRef.current?.querySelectorAll(".animate-in"), {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.5,
    })

    // Stats counter animation
    gsap.from(statsRef.current?.querySelectorAll(".stat-card"), {
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
    })

    // Timeline animation
    gsap.from(timelineRef.current?.querySelectorAll(".timeline-item"), {
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top 75%",
      },
      x: (index) => (index % 2 === 0 ? -50 : 50),
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
    })

    // Partners animation
    gsap.from(partnersRef.current?.querySelectorAll(".partner-logo"), {
      scrollTrigger: {
        trigger: partnersRef.current,
        start: "top 80%",
      },
      scale: 0.8,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
    })

    // Prizes animation
    gsap.from(prizesRef.current?.querySelectorAll(".prize-card"), {
      scrollTrigger: {
        trigger: prizesRef.current,
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
    })

    // Tracks animation
    gsap.from(tracksRef.current?.querySelectorAll(".track-card"), {
      scrollTrigger: {
        trigger: tracksRef.current,
        start: "top 75%",
      },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.7,
    })

    // Organizers animation
    gsap.from(organizersRef.current?.querySelectorAll(".profile-card"), {
      scrollTrigger: {
        trigger: organizersRef.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
    })

    // FAQ animation
    gsap.from(faqRef.current?.querySelectorAll(".faq-item"), {
      scrollTrigger: {
        trigger: faqRef.current,
        start: "top 80%",
      },
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
    })

    // Volunteers animation
    gsap.from(volunteersRef.current?.querySelectorAll(".profile-card"), {
      scrollTrigger: {
        trigger: volunteersRef.current,
        start: "top 85%",
      },
      y: 20,
      opacity: 0,
      stagger: 0.08,
      duration: 0.5,
    })

    // Scroll indicator animation
    gsap.to(".scroll-indicator", {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    })

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [isLoaded])

  const navItems = [
    { name: "Mission Brief", href: "#about" },
    { name: "Timeline", href: "#timeline" },
    { name: "Allies", href: "#partners" },
    { name: "War Chest", href: "#prizes" },
    { name: "Base Camp", href: "#venue" },
    { name: "Mission Directives", href: "#tracks" },
    { name: "Commanders", href: "#organizers" },
    { name: "Field Manual", href: "#faq" },
  ]

  const stats = [
    { label: "Prize Pool", value: 50000, prefix: "₹", suffix: "+" },
    { label: "Registrations", value: 500, suffix: "+" },
    { label: "Hackers", value: 200, suffix: "+" },
    { label: "Projects", value: 75, suffix: "+" },
  ]

  const partners = [
    { name: "Partner 1", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Partner 2", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Partner 3", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Partner 4", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Partner 5", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Partner 6", logo: "/placeholder.svg?height=80&width=160" },
  ]

  const prizes = [
    { position: "1st", amount: "₹25,000", icon: <Trophy className="h-8 w-8" /> },
    { position: "2nd", amount: "₹15,000", icon: <Award className="h-8 w-8" /> },
    { position: "3rd", amount: "₹10,000", icon: <Shield className="h-8 w-8" /> },
  ]

  const tracks = [
    {
      title: "Cyber Defense",
      description: "Develop solutions for military-grade cybersecurity challenges and threat detection systems.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Tactical Communications",
      description:
        "Create secure communication systems that can operate in hostile environments with limited connectivity.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      title: "Reconnaissance Tech",
      description: "Build innovative surveillance and intelligence gathering solutions using cutting-edge technology.",
      icon: <Compass className="h-6 w-6" />,
    },
    {
      title: "Combat Support",
      description: "Design applications that enhance battlefield awareness and decision-making capabilities.",
      icon: <Target className="h-6 w-6" />,
    },
  ]

  const organizers = [
    { name: "Major Sharma", role: "Lead Organizer", image: "/placeholder.svg?height=200&width=200" },
    { name: "Captain Singh", role: "Technical Lead", image: "/placeholder.svg?height=200&width=200" },
    { name: "Lieutenant Patel", role: "Operations", image: "/placeholder.svg?height=200&width=200" },
    { name: "Sergeant Kumar", role: "Logistics", image: "/placeholder.svg?height=200&width=200" },
  ]

  const volunteers = [
    { name: "Corporal Gupta", role: "Technical Support", image: "/placeholder.svg?height=150&width=150" },
    { name: "Private Reddy", role: "Registration", image: "/placeholder.svg?height=150&width=150" },
    { name: "Private Joshi", role: "Participant Support", image: "/placeholder.svg?height=150&width=150" },
    { name: "Private Verma", role: "Judging Assistant", image: "/placeholder.svg?height=150&width=150" },
    { name: "Private Malhotra", role: "Event Support", image: "/placeholder.svg?height=150&width=150" },
    { name: "Private Das", role: "Technical Assistant", image: "/placeholder.svg?height=150&width=150" },
  ]

  const faqs = [
    {
      question: "What is Hack4Brahma?",
      answer:
        "Hack4Brahma is a hackathon themed around Special Forces - Indian Army, where participants develop innovative solutions to challenges inspired by military operations and requirements.",
    },
    {
      question: "Who can participate?",
      answer:
        "The hackathon is open to all college students, professionals, and tech enthusiasts with a passion for innovation and problem-solving in the defense sector.",
    },
    {
      question: "Do I need to have a team?",
      answer:
        "Teams of 2-4 members are recommended, but solo participants are also welcome. We'll have a team formation session for those looking to join forces with others.",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your laptop, charger, any hardware you plan to use, and valid ID proof. Food and refreshments will be provided throughout the event.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "No, participation in Hack4Brahma is completely free. However, pre-registration is mandatory due to limited seats.",
    },
    {
      question: "Will there be mentors available?",
      answer:
        "Yes, we'll have technical mentors and domain experts from the defense sector to guide participants throughout the hackathon.",
    },
  ]

  const galleryImages = [
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
  ]

  return (
    <div className="relative bg-[#0a0c0f] text-gray-100 min-h-screen overflow-x-hidden">
      {/* Splash Screen */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0c0f]">
          <div className="text-center">
            <div className="relative w-full h-[60vh] mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border-4 border-green-500/50 rounded-full animate-ping"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="h-24 w-24 text-green-500 animate-pulse" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-green-500">HACK</span>4<span className="text-green-500">BRAHMA</span>
            </h1>
            <p className="text-xl font-mono text-gray-400">INITIALIZING MISSION...</p>
          </div>
        </div>
      )}

      {/* Header */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-900/50"
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-green-500" />
            <span className="font-mono text-xl font-bold tracking-tight text-green-500">HACK4BRAHMA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-green-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-green-700 hover:bg-green-600 text-white">ENLIST NOW</Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-green-900/50">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-green-500" />
              <span className="font-mono text-xl font-bold tracking-tight text-green-500">HACK4BRAHMA</span>
            </Link>
            <Button variant="ghost" size="icon" className="text-gray-300" onClick={() => setMobileMenuOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-gray-300 hover:text-green-500 transition-colors py-2 border-b border-green-900/30"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-green-700 hover:bg-green-600 text-white mt-4">ENLIST NOW</Button>
          </nav>
        </div>
      )}

      {/* Hero Section - CodeHunt Style */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background image with military ship/vehicle instead of sailing ship */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,12,15,0.7)] via-transparent to-[rgba(10,12,15,0.9)]"></div>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Military Operation Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Military vehicle/ship overlay */}
        <div className="absolute bottom-0 left-0 z-10 w-1/2 h-2/3 pointer-events-none">
          <Image
            src="/placeholder.svg?height=800&width=800"
            alt="Military Vehicle"
            width={800}
            height={800}
            className="object-contain object-bottom"
          />
        </div>

        {/* Main content */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 mb-6 border border-green-500/50 bg-black/50 rounded-sm animate-in">
              <span className="font-mono text-green-500 text-sm tracking-wider">OPERATION HACKATHON</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-in">
              <span className="text-green-500">HACK</span>4<span className="text-green-500">BRAHMA</span>
            </h1>

            <p className="text-xl md:text-2xl font-mono mb-8 text-gray-300 animate-in">SPECIAL FORCES - INDIAN ARMY</p>

            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto animate-in">
              Join the elite ranks of innovators in this military-themed hackathon. Deploy your skills, execute your
              strategy, and conquer the challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-in">
              <Button className="bg-green-700 hover:bg-green-600 text-white text-lg py-6 px-8">ENLIST NOW</Button>
              <Button
                variant="outline"
                className="border-green-700 text-green-500 hover:bg-green-900/30 text-lg py-6 px-8"
              >
                MISSION BRIEF
              </Button>
            </div>

            <div className="animate-in scroll-indicator">
              <ChevronDown className="h-8 w-8 mx-auto text-green-500 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Tactical overlay elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 opacity-30">
          {/* Radar scan effect */}
          <div className="absolute top-20 right-20 w-40 h-40 border-2 border-green-500/30 rounded-full">
            <div className="absolute inset-0 border-2 border-green-500/20 rounded-full animate-ping"></div>
          </div>

          {/* Grid lines */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 128, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 128, 0, 0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>

          {/* Coordinates */}
          <div className="absolute bottom-10 left-10 font-mono text-green-500/70 text-sm">
            <div>LAT: 12°58'N</div>
            <div>LON: 77°35'E</div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0c0f] to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" ref={statsRef} className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 border border-green-500/50 bg-black/50 rounded-sm">
              <span className="font-mono text-green-500 text-sm tracking-wider">RECON MISSION</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">MISSION BRIEF</h2>
            <p className="text-gray-400">
              Hack4Brahma is an elite hackathon inspired by the Special Forces of the Indian Army. Our mission is to
              bring together the brightest minds to develop innovative solutions for challenges faced in tactical and
              strategic operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="stat-card bg-black/50 border-green-900/50 backdrop-blur-sm p-6 text-center hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,128,0,0.3)]"
              >
                <h3 className="text-gray-400 font-mono text-sm mb-2">{stat.label}</h3>
                <div className="text-3xl md:text-4xl font-bold text-green-500">
                  <CountUp start={0} end={stat.value} prefix={stat.prefix || ""} suffix={stat.suffix || ""} />
                </div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-green-500/20 rounded-lg blur-xl"></div>
              <div className="relative bg-black/70 border border-green-900/50 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Special Forces Training"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-500">OPERATION DETAILS</h3>
              <p className="text-gray-300 mb-6">
                This 36-hour hackathon challenges participants to develop solutions across various domains including
                cybersecurity, tactical communications, reconnaissance technology, and combat support systems.
              </p>
              <p className="text-gray-300 mb-6">
                Teams will be evaluated based on innovation, technical complexity, practical applicability in the field,
                and presentation of their solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-700 hover:bg-green-600 text-white">VIEW OBJECTIVES</Button>
                <Button variant="outline" className="border-green-700 text-green-500 hover:bg-green-900/30">
                  DOWNLOAD BRIEF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" ref={timelineRef} className="py-20 bg-black/50 relative">
        <ParallaxSection className="absolute inset-0 z-0" speed={-0.2} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 border border-green-500/50 bg-black/50 rounded-sm">
              <span className="font-mono text-green-500 text-sm tracking-wider">OPERATION TIMELINE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">MISSION SCHEDULE</h2>
            <p className="text-gray-400">
              Strategic planning is crucial for mission success. Review the operation timeline to prepare for each phase
              of the hackathon.
            </p>
          </div>

          <MissionTimeline />
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" ref={partnersRef} className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 border border-green-500/50 bg-black/50 rounded-sm">
              <span className="font-mono text-green-500 text-sm tracking-wider">ALLIES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">COMMUNITY PARTNERS</h2>
            <p className="text-gray-400">
              Our mission is supported by these strategic allies who provide resources, expertise, and support to ensure
              operational success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="partner-logo bg-black/30 border border-green-900/30 rounded-lg p-4 flex items-center justify-center hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,128,0,0.2)]"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="max-h-16 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" ref={prizesRef} className="py-20 bg-black/50 relative">
        <ParallaxSection className="absolute inset-0 z-0" speed={-0.15} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 border border-green-500/50 bg-black/50 rounded-sm">
              <span className="font-mono text-green-500 text-sm tracking-wider">WAR CHEST</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">PRIZE POOL</h2>
            <p className="text-gray-400">
              Complete your mission objectives and be rewarded for your excellence. Top-performing teams will receive
              recognition and substantial rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {prizes.map((prize, index) => (
              <PrizeCard
                key={index}
                position={prize.position}
                amount={prize.amount}
                icon={prize.icon}
                className="prize-card"
              />
            ))}
          </div>

          <div className="bg-black/70 border border-green-900/50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-center text-green-500">SPECIAL RECOGNITIONS</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-gray-200">Best Technical Implementation</span>
                  <p className="text-gray-400 text-sm">₹5,000 + Mentorship opportunity with defense tech experts</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Target className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-gray-200">Most Innovative Solution</span>
                  <p className="text-gray-400 text-sm">₹5,000 + Opportunity to present to military innovation cell</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Code className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-gray-200">Best UI/UX Design</span>
                  <p className="text-gray-400 text-sm">₹3,000 + Design workshop access</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Users className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-gray-200">Best Rookie Team</span>
                  <p className="text-gray-400 text-sm">₹2,000 + Special mentorship package</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" ref={venueRef} className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 border border-green-500/50 bg-black/50 rounded-sm">
              <span className="font-mono text-green-500 text-sm tracking-wider">OPERATION BASE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">VENUE LOCATION</h2>
            <p className="text-gray-400">
              The mission will be conducted at our secure base of operations. Familiarize yourself with the location and
              surrounding area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="h-[400px] relative">
              <div className="absolute -inset-1 bg-green-500/20 rounded-lg blur-xl"></div>
              <div className="relative h-full w-full bg-black/70 border border-green-900/50 rounded-lg overflow-hidden">
                <BattleMap />
              </div>
            </div>
            <div className="bg-black/30 border border-green-900/50 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-green-500">BASE COORDINATES</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-200">Location</span>
                    <p className="text-gray-400">Tech Innovation Center, Bangalore</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-200">Operation Dates</span>
                    <p className="text-gray-400">October 15-17, 2023</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-200">Reporting Hours</span>
                    <p className="text-gray-400">Check-in begins at 0800 hours</p>
                  </div>
                </div>
              </div>

              <h4 className="font-bold text-gray-200 mb-2">Nearby Strategic Points:</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-gray-400">Kempegowda International Airport (30 mins)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-gray-400">Bangalore Railway Station (15 mins)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-gray-400">Metro Station - Indiranagar (5 mins)</span>
                </li>
              </ul>

              <Button className="w-full bg-green-700 hover:bg-green-600 text-white">GET DIRECTIONS</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" ref={galleryRef} className="py-20 bg-black/50 relative">
        <ParallaxSection className="absolute inset-0 z-0" speed={-0.1} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 border border-green-500/50 bg-black/50 rounded-sm">
              <span className="font-mono text-green-500 text-sm tracking-wider">RECON ARCHIVES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">MISSION GALLERY</h2>
            <p className="text-gray-400">
              Intelligence from previous operations. Review these images to prepare for your mission.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-green-900/50 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <h4 className="text-white font-bold">Previous Mission {index + 1}</h4>
                  <p className="text-gray-300 text-sm">Tactical operation documentation</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" ref={tracksRef} className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 border border-green-500/50 bg-black/50 rounded-sm">
              <span className="font-mono text-green-500 text-sm tracking-wider">MISSION DIRECTIVES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">HACKATHON TRACKS</h2>
            <p className="text-gray-400">
              Choose your specialization and focus your team's expertise on one of these critical mission areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tracks.map((track, index) => (
              <TrackCard
                key={index}
                title={track.title}
                description={track.description}
                icon={track.icon}
                className="track-card"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section id="organizers" ref={organizersRef} className="py-20 bg-black/50 relative">
        <ParallaxSection className="absolute inset-0 z-0" speed={-0.2} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 border border-green-500/50 bg-black/50 rounded-sm">
              <span className="font-mono text-green-500 text-sm tracking-wider">COMMANDERS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">ORGANIZING TEAM</h2>
            <p className="text-gray-400">
              Meet the commanding officers who have planned and will oversee this operation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizers.map((person, index) => (
              <ProfileCard
                key={index}
                name={person.name}
                role={person.role}
                image={person.image}
                className="profile-card"
                size="large"
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" ref={faqRef} className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 border border-green-500/50 bg-black/50 rounded-sm">
              <span className="font-mono text-green-500 text-sm tracking-wider">FIELD MANUAL</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="text-gray-400">
              Review the field manual for answers to common questions about the operation.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid gap-4">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} className="faq-item" />
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section id="volunteers" ref={volunteersRef} className="py-20 bg-black/50 relative">
        <ParallaxSection className="absolute inset-0 z-0" speed={-0.1} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 border border-green-500/50 bg-black/50 rounded-sm">
              <span className="font-mono text-green-500 text-sm tracking-wider">CAPTAINS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">VOLUNTEER TEAM</h2>
            <p className="text-gray-400">These dedicated personnel will provide support throughout the operation.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {volunteers.map((person, index) => (
              <ProfileCard
                key={index}
                name={person.name}
                role={person.role}
                image={person.image}
                className="profile-card"
                size="small"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 mb-6 border border-green-500/50 bg-black/50 rounded-sm">
              <span className="font-mono text-green-500 text-sm tracking-wider">DEPLOYMENT IMMINENT</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">ARE YOU READY FOR THE MISSION?</h2>
            <p className="text-xl text-gray-300 mb-10">
              Join the ranks of elite developers and innovators. Enlist now for Hack4Brahma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-700 hover:bg-green-600 text-white text-lg py-6 px-8">ENLIST NOW</Button>
              <Button
                variant="outline"
                className="border-green-700 text-green-500 hover:bg-green-900/30 text-lg py-6 px-8"
              >
                CONTACT COMMAND
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-green-900/50 py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Shield className="h-8 w-8 text-green-500" />
                <span className="font-mono text-xl font-bold tracking-tight text-green-500">HACK4BRAHMA</span>
              </Link>
              <p className="text-gray-400 text-sm">
                A Special Forces themed hackathon bringing innovation to defense technology.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-200 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-400 hover:text-green-500 text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-200 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: info@hack4brahma.com</li>
                <li>Phone: +91 9876543210</li>
                <li>Location: Bangalore, India</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-200 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-green-900/30 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Hack4Brahma. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

