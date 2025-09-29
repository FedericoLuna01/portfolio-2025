import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionValue, useTransform } from "motion/react"
import Image from "next/image";
import { useEffect, useState } from "react";

const WORD_INFO = {
  "Figma,": { position: "top-0 -left-[200px] xl:-left-[300px]", image: "/figma.svg", size: [70, 70] },
  "Next.js": { position: "top-10 -right-[500px] xl:-right-[700px]", image: "/nextjs_logo_light.svg", size: [190, 100] },
  "Tailwind": { position: "top-10 -left-[200px] xl:-left-[200px]", image: "/tailwindcss.svg", size: [80, 80] },
  "PostgreSQL": { position: "top-4 -right-[200px] xl:-right-[500px]", image: "/postgresql.svg", size: [70, 70] },
  "Prisma.": { position: "top-6 -left-[400px] xl:-left-[500px]", image: "/prisma.svg", size: [70, 70] }
} as const;

const Word = ({ children, progress, range }:
  {
    children: React.ReactNode,
    progress: MotionValue<number>,
    range: [number, number]
  }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const [showTag, setShowTag] = useState(false);

  const specificWords = ["Figma,", "Next.js", "Tailwind", "PostgreSQL", "Prisma."];
  const isSpecificWord = specificWords.includes(children as string);

  useEffect(() => {
    // Función para manejar cambios en la opacidad
    const handleOpacityChange = (latestOpacity: number) => {
      // Verificar si la opacidad es 1 (o muy cercana a 1 para evitar problemas de punto flotante)
      if (latestOpacity >= 0.99 && isSpecificWord && !showTag) {
        setShowTag(true);
      }
      // Si la opacidad es 0, ocultar la etiqueta
      if (latestOpacity <= 0.01 && showTag) {
        setShowTag(false);
      }
    };

    // Suscribirse a los cambios de opacidad
    const unsubscribe = opacity.on("change", handleOpacityChange);

    // Cleanup: cancelar la suscripción cuando el componente se desmonte
    return () => {
      unsubscribe();
    };
  }, [opacity, children, isSpecificWord, showTag]);

  const wordInfo = WORD_INFO[children as keyof typeof WORD_INFO];

  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
      >
        {children}
      </motion.span>

      <AnimatePresence>
        {showTag && isSpecificWord && wordInfo && (
          <motion.div
            key={children as string}
            exit={{ opacity: 0, scale: 0.5, y: -10 }}
            initial={{ opacity: 0, scale: 0.5, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: -40 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn("hidden xl:flex absolute bg-white p-4 rounded-md z-10 border-4 border-black", wordInfo.position)}
          >
            <Image
              src={`${wordInfo.image}`}
              alt={(children as string).replace(/[,.]/, '')}
              width={wordInfo.size[0]}
              height={wordInfo.size[1]}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  )
}

export default Word