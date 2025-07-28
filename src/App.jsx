import { useState } from 'react'
import HeroSection4 from './hero'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      {/* <div class="grid gap-4 m-4 sm:grid-cols-12">
        <div class="min-h-[100px] rounded-2xl bg-amber-400 shadow-2xl  sm:col-span-2 " ></div>
        <div class="min-h-[100px] rounded-2xl bg-red-400 shadow-2xl sm:col-span-8 "></div>
        <div class="min-h-[100px] rounded-2xl bg-blue-400 shadow-2xl sm:col-span-2 "></div>
      </div>


      <div class="grid gap-1 m-1 grid-cols-12 ">
        <div class="min-h-[500px] rounded-xl bg-red-400 col-span-7 ">
          <div class="min-h-[400px] rounded-xl bg-black mt-20 ">
            <h1 class="text-white ">NFT are sole here </h1>
          </div>
        </div>
        <div class="min-h-[500px] rounded-xl bg-teal-400 col-span-5 " >
          <div class="min-h-[450px] rounded-xl bg-black mt-9  "></div>
        </div>
      </div> */}

        <HeroSection4 />

    </>
  )
}

export default App
