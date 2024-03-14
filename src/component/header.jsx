import React from 'react'
import { Icon } from '@iconify/react';
import { useState } from 'react';

// import {images} from './images.jpg'
const imag = [

    { image1: 'image/1326003.jpg', image2: 'image/download.jpg', topic: 'Loki', describe: 'After stealing the Tesseract during the events of "Avengers: Endgame." an alternate version of Loki is brought to the mysterious Time Variance Authority, a bureaucratic organization that exists outside of time and space and monitors the timeline. They give Loki a choice: face being erased from existence due to being a “time variant”or help fix the timeline and stop a greater threat.' },
    { image1: 'image/25505.jpg', image2: 'image/055e0861df7dc6f2ba3e120d25fa179d.jpg', topic: 'Game Of Thrones', describe: 'Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Nights Watch, is all that stands between the realms of men and icy horrors beyond.' },
    { image1: 'image/1319528.jpg', image2: 'image/thumb-330165.jpg', topic: 'The Witcher', describe:" The witcher Geralt, a mutated monster hunter, struggles to find his place in a world where people often prove more wicked than beasts. Based on Andrzej Sapkowski's Witcher Saga." },
    { image1: 'image/1315600.jpg', image2: 'image/thumb-630115.jpg', topic: 'The Equalizer 3', describe: 'Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends protector by taking on the mafia.' },
    { image1: 'image/backdrop-1920.jpg', image2: 'image/146676_1_large.jpg', topic: 'Nowhere', describe: "A mother's worst nightmare comes true when her teenage daughter goes missing." },
]

export default function Left() {
    const [slide, setslide] = useState(0)

    function previous() {
        setslide(slide === 0 ? imag.length - 1 : slide - 1)
    }
    function next() {
        setslide(slide === imag.length - 1 ? 0 : slide + 1)
    }

    return (
        <>
            <div className='bg-gray-800 realtive pt-[20px] pl-[20px] w-[98.75vw] h-[100vh]'>
                <div onClick={previous} className={`absolute top-[280px] left-[40px] h-[50px] w-[30px] bg-gray-600 text-white flex justify-center pt-[15px] rounded-md `}>
                    <Icon icon="fa6-solid:greater-than" hFlip={true} height={20} />
                </div>
                <div onClick={next} className={`absolute top-[280px] left-[850px] h-[50px] w-[30px] bg-gray-600 text-white flex justify-center  pt-[15px] rounded-md`}>
                    <Icon icon="fa6-solid:greater-than" height={20} />
                </div>

                {imag.map((a, i) => {
                    return (
                        <div key={i} className={` ${slide === i ? 'block' : 'hidden'} `}>
                           

                            <img src={a.image1} alt="" height="90vh" width="70%" />
                          

                            <div className='w-[120px] h-[150px] absolute top-[381px] left-[50px]'>
                                   <img src={a.image2} alt="" />
                            </div>
                            <div className='  absolute leading-10 font-mono top-[370px] left-[280px] text-sky-500 h-[50px] text-2xl tracking-wide font-bold '>
                               {a.topic} 
                            </div>
                            <div className='flex gap-[5px] absolute top-[410px] left-[280px] text-white'>
                            <Icon icon="ic:round-star" height={20} className='text-sky-400' /> 
                            <p className='relative top-[-2px]'>N/A</p>
                            <p className='relative top-[-2px] left-[10px] font-bold'>HD</p>
                            </div>

                            <div className=' absolute top-[440px] left-[280px] text-white w-[500px] text-sm text-justify text-gray-300'>
                                <p>{a.describe}</p>
                            </div>
                            <div className='text-sky-500 absolute top-[375px] left-[200px]'>
                                <Icon icon="octicon:play-24" height={60} />
                            </div>

                        </div>
                    )
                })}
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, alias.
            </div>
        </>
    )
}
