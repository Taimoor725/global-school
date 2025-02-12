import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import SchoolCarad from "@/components/common/home/SchoolCards";
import Schools from "@/utlities/SchoolsData";
import { useSchoolStore } from "@/stores/UseStore";

function Home() {
  return (
      <div className="relative overflow-x-hidden w-screen h-screen">
          <div className="w-screen h-screen absolute top-0 bg-black/40 z-[1]"></div>
          <Landing />
          <SocialMedia />
          <div className="w-screen">
          <Cards />
          </div>
      </div>
  );
}
export default Home;






const Cards = () => {

  const {setIndex,index}=useSchoolStore();
  useEffect(()=>{
      console.log(index)
  },[index])

  return (
    <div className="h-screen py-10 px-40 gap-10 w-full overflow-hidden bg-gray-200 grid grid-cols-4">
      {Schools.map((school, index) => (
        <div onClick={()=>setIndex(index)}> 
        <SchoolCarad school={school}/>
          </div>
      ))}
    </div>
  );
};





const SocialMedia=()=>{
  return(
    <div className="flex flex-col w-20 gap-6 justify-center items-center h-auto absolute right-7 top-1/2 -translate-y-1/2 z-10">
        <div>
            <Image src={"/icons/facbook.svg"} width={200} height={200} className="w-12 h-12 object-cover"/>
        </div>
        <div>
            <Image src={"/icons/insta.svg"} width={200} height={200} className="w-12 h-12 object-cover"/>
        </div>
        <div>
            <Image src={"/icons/linkdin.svg"} width={200} height={200} className="w-12 h-12 object-cover"/>
        </div>
        <div>
            <Image src={"/icons/x.svg"} width={200} height={200} className="w-12 h-12 object-cover"/>
        </div>
    </div>
  )
}

const Landing=()=>{
    return(
        <div className="w-screen h-screen text-white">
                <ImageSlider/>
        </div>
    )
}

const images = [
  "/home/11.jpg",
  "/home/12.jpg",
  "/home/13.jpg",
];

function ImageSlider() {
  const [index, setIndex] = useState(0);
  // const [color,setCol]=useState(["bg-white"])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="absolute w-full h-full"
        >
          <Image
            src={images[index]}
            alt="slider image"
            width={1080}
            height={1080}
            className=" object-cover w-full h-full overflow-hidden"
          />

          
        </motion.div>
        <div className="flex absolute bottom-7 left-1/2 -translate-x-1/2 z-10 gap-4">
              <div className={`w-10 h-10 rounded-full border-[4px] ${index === 0 ? "bg-white":""}`}>
              </div> 
              <div className={`w-10 h-10 rounded-full border-[4px] ${index === 1 ? "bg-white":""}`}>
              </div>
              <div className={`w-10 h-10 rounded-full border-[4px] ${index === 2 ? "bg-white":""}`}>
              </div>
          </div>


      <AnimatePresence mode="wait" >
      {index === 0 && (
        <motion.div
          key="block-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col absolute top-[40%] left-[30%] w-1/2 z-10"
        >
          <div className="text-7xl font-semibold">Lorem</div>
          <div className="text-xl font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </motion.div>
      )}

      {index === 1 && (
        <motion.div
          key="block-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col absolute top-[40%] left-[30%] w-1/2 z-10"
        >
          <div className="text-7xl font-semibold">Dolor Sit</div>
          <div className="text-xl font-light">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </motion.div>
      )}

      {index === 2 && (
        <motion.div
          key="block-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col absolute top-[40%] left-[30%] w-1/2 z-10"
        >
          <div className="text-7xl font-semibold">Amet Consectetur</div>
          <div className="text-xl font-light">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    </div>
  );
}
