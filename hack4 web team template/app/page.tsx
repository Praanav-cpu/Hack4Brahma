"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CountUp } from "@/components/ui/count-up";
import { MissionTimeline } from "@/components/mission-timeline";
import { PrizeCard } from "@/components/prize-card";
import { TrackCard } from "@/components/track-card";
import { ProfileCard } from "@/components/profile-card";
import { FaqItem } from "@/components/faq-item";
import { Menu, X, ChevronDown, ChevronUp, Shield, Target, Code, Users } from "lucide-react";

// Data
const stats = [
  { label: "Prize Pool", value: 50000, prefix: "₹", suffix: "+" },
  { label: "Registrations", value: 500, suffix: "+" },
  { label: "Hackers", value: 200, suffix: "+" },
  { label: "Projects", value: 75, suffix: "+" },
];

const partners = [
  { name: "Partner 1", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Partner 2", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Partner 3", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Partner 4", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Partner 5", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Partner 6", logo: "/placeholder.svg?height=80&width=160" },
];

const prizes = [
  { position: "1st", amount: "₹25,000", icon: <Shield className="h-8 w-8" /> },
  { position: "2nd", amount: "₹15,000", icon: <Target className="h-8 w-8" /> },
  { position: "3rd", amount: "₹10,000", icon: <Code className="h-8 w-8" /> },
];

const tracks = [
  {
    title: "Cyber Defense",
    description: "Develop solutions for military-grade cybersecurity challenges and threat detection systems.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Tactical Communications",
    description: "Create secure communication systems that can operate in hostile environments with limited connectivity.",
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: "Reconnaissance Tech",
    description: "Build innovative surveillance and intelligence gathering solutions using cutting-edge technology.",
    icon: <Code className="h-6 w-6" />,
  },
  {
    title: "Combat Support",
    description: "Design applications that enhance battlefield awareness and decision-making capabilities.",
    icon: <Users className="h-6 w-6" />,
  },
];

const organizers = [
  { name: "Major Sharma", role: "Lead Organizer", image: "/placeholder.svg?height=200&width=200" },
  { name: "Captain Singh", role: "Technical Lead", image: "/placeholder.svg?height=200&width=200" },
  { name: "Lieutenant Patel", role: "Operations", image: "/placeholder.svg?height=200&width=200" },
  { name: "Sergeant Kumar", role: "Logistics", image: "/placeholder.svg?height=200&width=200" },
];

const volunteers = [
  { name: "Corporal Gupta", role: "Technical Support", image: "/placeholder.svg?height=150&width=150" },
  { name: "Private Reddy", role: "Registration", image: "/placeholder.svg?height=150&width=150" },
  { name: "Private Joshi", role: "Participant Support", image: "/placeholder.svg?height=150&width=150" },
  { name: "Private Verma", role: "Judging Assistant", image: "/placeholder.svg?height=150&width=150" },
  { name: "Private Malhotra", role: "Event Support", image: "/placeholder.svg?height=150&width=150" },
  { name: "Private Das", role: "Technical Assistant", image: "/placeholder.svg?height=150&width=150" },
];

const faqs = [
  {
    question: "What is Hack4Brahma?",
    answer: "Hack4Brahma is a hackathon themed around Special Forces - Indian Army, where participants develop innovative solutions to challenges inspired by military operations and requirements.",
  },
  {
    question: "Who can participate?",
    answer: "The hackathon is open to all college students, professionals, and tech enthusiasts with a passion for innovation and problem-solving in the defense sector.",
  },
  {
    question: "Do I need to have a team?",
    answer: "Teams of 2-4 members are recommended, but solo participants are also welcome. We'll have a team formation session for those looking to join forces with others.",
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, any hardware you plan to use, and valid ID proof. Food and refreshments will be provided throughout the event.",
  },
  {
    question: "Is there a registration fee?",
    answer: "No, participation in Hack4Brahma is completely free. However, pre-registration is mandatory due to limited seats.",
  },
  {
    question: "Will there be mentors available?",
    answer: "Yes, we'll have technical mentors and domain experts from the defense sector to guide participants throughout the hackathon.",
  },
];

const galleryImages = [
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
];

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="stat-card bg-black/80 border-green-900/50 backdrop-blur-sm p-6 text-center hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,128,0,0.3)] min-h-[120px] flex flex-col justify-center relative"
              >
                <h3 className="text-gray-300 font-mono text-lg mb-4">{stat.label}</h3>
                <div className="text-3xl md:text-4xl font-bold text-green-500">
                  <CountUp
                    start={0}
                    end={stat.value}
                    prefix={stat.prefix || ""}
                    suffix={stat.suffix || ""}
                    duration={2}
                    delay={0}
                  />
                </div>
              </Card>
            ))}
          </div> 