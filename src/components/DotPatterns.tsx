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

export const DashedPattern = () => {
    return <section className='h-screen bg-white flex justify-center items-center' >
        <div className='border border-red-500 ' >
            <div className="relative">
                {Array.from({ length: 24 }).map((_, i) => {
                    return (
                        <div key={i} style={{
                            rotate: `${(360 / 24) * i}deg`
                        }} className='flex gap-2 my-2 absolute left-1/2 top-1/2 origin-left' >
                            {Array.from({ length: 10 }).map((_, index) => {
                                return (
                                    <div key={index} className='w-5 h-1 bg-gray-200 rounded-md' ></div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
}