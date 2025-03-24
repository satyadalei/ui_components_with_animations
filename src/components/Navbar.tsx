const Navbar = () => {
    return (
        <header className="px-5 py-3" >
            <div className="flex justify-between items-center border border-white/30 rounded-full py-1 px-3 md:px-6 h-14 md:h-16 max-w-4xl mx-auto" >
                <div className="flex items-center gap-2" >
                    <div className="w-6 h-6 round-md bg-lime-400" >
                    </div>
                    <h1 className="text-xl font-bold text-white/90" >Layers</h1>
                </div>

                <div className="block md:hidden" >
                    <div className="flex flex-col gap-1" >
                        <div className="w-8 h-[3px] rounded-full bg-white/70" ></div>
                        <div className="w-8 h-[3px] rounded-full bg-white/70" ></div>
                        <div className="w-8 h-[3px] rounded-full bg-white/70" ></div>
                    </div>
                </div>

                <div className="hidden md:flex" >
                    <button className="border-2 border-white/50 px-4 py-2 rounded-full text-lg font-medium mr-5" >Log in</button>
                    <button className="bg-lime-400 px-4 py-2 rounded-full text-black font-bold" >Sign Up</button>
                </div>
            </div>
        </header>
    )
}

export default Navbar