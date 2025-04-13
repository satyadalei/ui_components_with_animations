import React from 'react'

const DotPatterns = () => {
    return (
        <section className="relative w-[300px] h-[300px] mx-auto my-10" >
            <div>
                {Array.from({ length: 24 }).map((_, index) => {
                    return (
                        <div
                            key={index}
                            className="absolute left-1/2 top-1/2 origin-left"
                            style={{
                                rotate: `${(360 / 24) * index}deg`,
                            }}
                        >
                            <div className="flex gap-1 items-center">
                                {Array.from({ length: 5 }).map((_, i) => {
                                    return (
                                        <div
                                            key={i}
                                            style={{
                                                width: `${i * 1.1}px`,
                                                height: `${i * 1.1}px`,
                                            }}
                                            className="bg-gradient-to-r from-sky-500 to-green-400 rounded-full"
                                        ></div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>

    )
}

export default DotPatterns