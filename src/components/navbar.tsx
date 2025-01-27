"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Globe, Zap, BriefcaseBusinessIcon, SendIcon, CircleUserIcon } from "lucide-react"
import { Button } from "./ui/button"

interface NavItem {
  icon: typeof Globe
  id: string
  label: string
  color: string
}

const navItems: NavItem[] = [
  { icon: Zap, id: "home", label: "Flash", color: "#f00" },
  { icon: CircleUserIcon, id: "about", label: "User", color: "#0f0" },
  { icon: BriefcaseBusinessIcon, id: "section3", label: "Briefcase", color: "#0ff" },
  { icon: SendIcon, id: "contact", label: "Send Icon", color: "#00f" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setActiveSection(navItems[1].id)
    const observers: IntersectionObserver[] = []

    const handleScroll = () => {
      setIsVisible(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)

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
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={`fixed left-1/2 -translate-x-1/2 z-50 transition-top duration-300 ${isVisible ? 'top-8' : '-top-[10%]'}`}>
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