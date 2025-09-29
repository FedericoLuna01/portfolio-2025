"use client"

import { accent } from "@/styles/fonts"
import { useOutsideClick } from "@/utils/use-outside-click"
import { useScroll, useTransform, motion } from "motion/react"
import { MoveUpRightIcon } from "lucide-react"
import { useRef, useState } from "react"
import { data, Project } from "@/data/data"
import { cn } from "@/lib/utils"

const Work = () => {
  const [selected, setSelected] = useState("")
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  })

  const borderRadius = useTransform(scrollYProgress, [0, 1], [1, 100])
  const margin = useTransform(scrollYProgress, [0, 1], [0, 20])

  return (
    <>
      <Modal
        selected={selected} setSelected={setSelected}
      />
      <motion.section
        id="section3"
        className="min-h-screen bg-[#e2e2e2] relative flex items-center justify-center"
        ref={ref}
      >
        <motion.div
          style={{ borderRadius, marginLeft: margin, marginRight: margin }}
          className="bg-background w-full h-full min-h-screen"
        >
          <div className="container mx-auto h-full px-4 py-20 pb-36 gap-y-20 xl:gap-y-0 xl:pt-0 xl:pb-20 grid grid-cols-1 xl:grid-cols-2">
            <div>
              <h3 className={`text-2xl md:text-5xl font-bold text-center uppercase ${accent.className} pb-5`}>
                Proyectos <br />recientes
              </h3>
              <div className="flex items-center xl:items-start justify-center gap-y-10 flex-col">
                {
                  data.projects.map((project, index) => (
                    <ProjectItem
                      project={project}
                      key={index}
                      setSelected={setSelected}
                    />
                  ))
                }
              </div>
            </div>
            <div>
              <h3 className={`text-2xl md:text-5xl font-bold text-center uppercase ${accent.className} pb-5`}>
                Landing <br />Pages
              </h3>
              <div className="flex items-center xl:items-start justify-center gap-y-10 flex-col">
                {
                  data.landingProjects.map((project, index) => (
                    <ProjectItem
                      project={project}
                      key={index}
                      setSelected={setSelected}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default Work

const Modal = ({ selected, setSelected }: {
  selected: Project["images"][number]
  setSelected: (selected: Project["images"][number]) => void,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => setSelected(""))

  if (!selected) return null

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 cursor-pointer overflow-hidden"
    >
      <div
        className="flex items-center justify-center h-full p-4"
      >
        <div
          ref={ref}
          className="cursor-default"
        >
          <motion.img
            layoutId={selected}
            src={selected}
            width={800}
            height={400}
            alt={"Imagen del proyecto ampliada"}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  )
}

const ProjectItem = ({ project, setSelected }: { project: Project, setSelected: (selected: Project["images"][number]) => void }) => {
  return <div
    className="flex flex-col items-center w-full text-center"
  >
    <div className="flex flex-col items-center">
      {
        project.url ? (
          <a
            href={project.url || ""}
            target="_blank"
            className="flex items-center justify-start gap-1 relative w-fit group"
          >
            <span className="w-full absolute h-[2px] bg-muted-foreground bottom-0" />
            <h4 className="font-bold text-xl md:text-2xl group-hover:brightness-90">{project.title}</h4>
            <MoveUpRightIcon className="w-4 h-4 group-hover:brightness-90" />
          </a>
        ) : (
          <div
            className="flex items-center justify-start gap-1 relative w-fit group"
          >
            <span className="w-full absolute h-[2px] bg-muted-foreground bottom-0" />
            <h4 className="font-bold text-xl md:text-2xl group-hover:brightness-90">{project.title}</h4>
          </div>
        )
      }

      <p className="text-muted-foreground">
        {project.description}
      </p>
    </div>
    <div className="flex flex-col md:flex-row items-center gap-2 mt-3">
      {
        project.images.map((image, index) => (
          <motion.img
            layoutId={image}
            key={index}
            src={image}
            width={200}
            height={100}
            alt={`Imagen del proyecto ${project.title}`}
            className={cn("rounded-md shadow-md border-border border hover:cursor-pointer hover:shadow-zinc-700 transition-shadow duration-200", {
              "md:-ml-12 -mt-4 md:mt-0": index > 0,
            })}
            style={{
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            onClick={() => setSelected(image)}
          />
        ))
      }
    </div>
  </div>
}