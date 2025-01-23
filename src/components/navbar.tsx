"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Globe, Zap, Mail, Smile } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  icon: typeof Globe
  id: string
  label: string
}

const navItems: NavItem[] = [
  { icon: Globe, id: "section1", label: "World" },
  { icon: Zap, id: "section2", label: "Flash" },
  { icon: Mail, id: "section3", label: "Mail" },
  { icon: Smile, id: "section4", label: "Smile" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("section1")

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    // Create an observer for each section
    navItems.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id)
              }
            })
          },
          { threshold: 0.5 }, // Trigger when section is 50% visible
        )

        observer.observe(section)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2">
      <nav className="relative flex items-center gap-2 rounded-md backdrop-blur-sm bg-white/20 p-2 shadow-lg">
        {navItems.map(({ icon: Icon, id, label }) => (
          <button
            key={id}
            onClick={() => {
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
            }}
            className={cn(
              "relative rounded-full p-3 transition-colors hover:bg-gray-100",
              activeSection === id ? "text-gray-950" : "text-gray-200",
            )}
          >
            <Icon className="h-5 w-5" />
            <span className="sr-only">{label}</span>
            {activeSection === id && (
              <motion.span
                layoutId="bubble"
                className="absolute z-10 bg-red-500 h-1 w-2/3 left-2 -translate-x-1/2 -bottom-2 rounded-full"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </button>
        ))}
      </nav>
    </div>
  )
}