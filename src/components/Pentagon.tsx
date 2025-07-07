import textureImage from "../assets/texture_image.jpg"

const Pentagon = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-violet-400 from-10% via-gray-200 via-40% to-violet-400 flex justify-center items-center">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat opacity-30 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url(${textureImage})` }}
      />

      <div className="w-[90%] bg-white h-[80%] rounded-md shadow-md" >
        <div style={{
          clipPath: `polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)`
        }} className='border border-red-500 w-40 h-40 bg-sky-500' ></div>
      </div>
    </div>

  )
}

export default Pentagon