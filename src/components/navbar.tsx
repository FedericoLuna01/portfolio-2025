"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Globe, Zap, Mail, Smile } from "lucide-react"
import { Button } from "./ui/button"

interface NavItem {
  icon: typeof Globe
  id: string
  label: string
  color: string
}

const navItems: NavItem[] = [
  { icon: Globe, id: "section1", label: "World", color: "#f00" },
  { icon: Zap, id: "section2", label: "Flash", color: "#0f0" },
  { icon: Mail, id: "section3", label: "Mail", color: "#0ff" },
  { icon: Smile, id: "section4", label: "Smile", color: "#00f" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("section1")

  useEffect(() => {
    setActiveSection(navItems[1].id)
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
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="relative flex items-center gap-2 rounded-md backdrop-blur-sm bg-white/20 p-2 shadow-lg">
        {navItems.map(({ icon: Icon, id, label }) => (
          <Button
            size="icon"
            variant="outline"
            className="relative"
            key={id}
            onClick={() => {
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <Icon
              className="h-7 w-7"
            />
            <span className="sr-only">{label}</span>
            {activeSection === id && (
              <motion.span
                layoutId="bubble"
                className="absolute z-10 h-1 w-2/3 left-2 -translate-x-1/2 -bottom-[9px] rounded-full bg-white"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </Button>
        ))}
      </nav>
    </div>
  )
}