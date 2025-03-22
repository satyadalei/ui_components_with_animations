import { useEffect, useRef, useState } from "react";
import Tag from "./Tag";
import { useScroll, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";

const text = " full sh*t stack developer with 1+ years of experience in building scalable web applications.  Interested in cross-functional teams, collaboration, and a hunger for learning to build products that solve real-world problems";

const splittedText = text.split(" ");

const Introduction = () => {
    const scrollTarget = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({ target: scrollTarget, offset: ['start end', 'end end'] });

    const currentWord = useTransform(scrollYProgress, [0, 1], [0, splittedText.length]);

    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        currentWord.on("change", (latestValue) => {
            setCurrentWordIndex(latestValue);
        })
    }, [currentWord])

    return (
        <section className="py-24 lg:py-40" >
            <div className="container px-2" >
                <div className="sticky top-20 lg:top-10" >
                    <div className="text-center" >
                        <Tag>Hi! I am Satya, from 🌏 Earth</Tag>
                    </div>
                    <div className="text-center text-4xl md:text-6xl lg:text-7xl font-medium mt-10" >
                        <span>Your creative</span> {" "}
                        <span>
                            {splittedText.map((text, index) => {
                                return (
                                    <span key={index} className={twMerge("transition duration-500 text-white/15", index < currentWordIndex && "text-white")} >
                                        {text === "sh*t" ? 
                                        <span style={{ textDecoration: 'line-through', textDecorationThickness: '0.1em', textDecorationColor: 'inherit' }}>
                                            {text}
                                        </span> : " " + text+ " "}
                                    </span>
                                )
                            })}
                        </span>
                        <br />
                        <span className="text-lime-400 block" >That&apos;s why I am here.</span>
                    </div>
                </div>
                <div ref={scrollTarget} className="h-[150vh]" >

                </div>
            </div>
        </section>
    )
}

export default Introduction