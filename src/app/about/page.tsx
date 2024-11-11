import React from 'react'
import Image from 'next/image'
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import Link from 'next/link';

const About = () => {
  return (
    <div> 
        <h2 className='mt-20 text-center text-4xl font-bold underline text-cyan-600'>About Me</h2>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
      alt="hero"
      src="/image/my_pic.jpeg"
      width={200}
      height={100}
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium hover:text-white text-cyan-600">
        I'm a passionate Developer
      </h1>
      <p className="mb-8 leading-relaxed text-cyan-200">
      I'm a front-end developer skilled in HTML, CSS, JavaScript, TypeScript, and Next.js. I craft clean, responsive interfaces and am diving into the world of AI with a focus on integrating intelligent solutions into web experiences. Still early in my journey, but driven by curiosity and a constant desire to grow. Ready to turn ideas into impactful digital experiences.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-[30px] text-blue-400 border-0 py-2 px-6 rounded text-lg">
        <Link href="https://www.linkedin.com/in/syeda-bismah-jaffri-2962302b8"><BsLinkedin /></Link>
        </button>
        <button className="inline-flex text-[30px] text-white border-0 py-2 px-6 rounded text-lg">
        <FaGithubSquare />
        </button>
        <button className="inline-flex text-[30px] text-pink-500 border-0 py-2 px-6 rounded text-lg">
        <Link href="https://www.instagram.com/_syeda_bismah110"><SiInstagram /></Link>
        </button>
        <button className="inline-flex text-[30px] text-blue-600 border-0 py-2 px-6 rounded text-lg">
        <Link href="https://facebook.com/SyedaBisma"><FaFacebookMessenger /></Link>
        </button>
        <button className="inline-flex text-[30px] text-purple-800 border-0 py-2 px-6 rounded text-lg">
        <Link href="https://discordapp.com/users/1211971385828839437"><BsDiscord /></Link>
        </button>
      </div>
    </div>
    <Skills/>
  </div>
</section>

    </div>
  )
}

export default About


  export const Skills = () => {
  return (
    <div> 
       <h2 className='mt-20 mb-24 text-center text-4xl font-bold underline text-cyan-600'>My Skills</h2>
       <ul className=''>
        <li className='mb-3 text-2xl text-white ' >HTML</li><div className='w-[180%] ml-1 mb-4 h-4 bg-green-600 rounded-2xl'></div>
        <li className='mb-3 text-2xl text-white ' >CSS</li><div className='w-[140%] ml-1 mb-4 h-4 bg-red-700 rounded-2xl'></div>
        <li className='mb-3 text-2xl text-white ' >Javascript</li><div className='w-[130%] ml-1 mb-4 h-4 bg-yellow-500 rounded-2xl'></div>
        <li className='mb-3 text-2xl text-white ' >Typescript</li><div className='w-[180%] ml-1 mb-4 h-4 bg-blue-700 rounded-2xl'></div>
        <li className='mb-3 text-2xl text-white ' >Next.js</li><div className='w-[120%] ml-1 mb-4 h-4 bg-purple-700 rounded-2xl'></div>
       </ul>
        </div>
  )
}
