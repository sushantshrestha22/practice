import React from 'react'
import { Icon } from '@iconify/react';
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import images from './images.jpg'

export default function Right() {
    return (
        <>
            <div className='w-[28%] h-[82vh]  absolute top-[71px] right-[15px]'>
                <div className='w-[110px] h-[130px] absolute top-[20px] left-[20px] bg-rose-400'>
                    <img src={image1} alt="" height="130px" width="110px"/>
                    <div className='flex gap-[5px] absolute top-[0px] left-[120px] text-white'>
                        <Icon icon="ic:round-star" height={20} className='text-sky-400' />
                        <p className='relative top-[-2px]'>N/A</p>
                        <p className='relative top-[-2px] left-[10px] font-bold'>HD</p>
                    </div>
                    <div className='  absolute  font-mono top-[30px] left-[125px] text-white h-[50px] w-[200px] text-md font-bold '> 
                        Heart of Stone
                    </div>
                    <div className='absolute top-[60px] left-[125px] text-white w-[200px] h-[60px] truncate text-xs'>
                    An intelligence operative for a shadowy global peacekeeping agency races to stop a hacker from stealing its most valuable — and dangerous — weapon.
                    </div>
                    <div className=' flex absolute gap-2 px-[6px] py-[2px] font-mono bottom-[0px] left-[125px] w-[130px] text-white font-bold bg-gray-600 rounded-md text-center'>
                    <Icon icon="ion:play" height={20}/>
                        Watch now
                    </div>
                </div>
                <div className='w-[110px] h-[130px] absolute top-[180px] left-[20px] bg-blue-400'>
                    <img src={image2} alt="" />
                    <div className='flex gap-[5px] absolute top-[0px] left-[120px] text-white'>
                        <Icon icon="ic:round-star" height={20} className='text-sky-400' />
                        <p className='relative top-[-2px]'>N/A</p>
                        <p className='relative top-[-2px] left-[10px] font-bold'>HD</p>
                    </div>
                    <div className='  absolute  font-mono top-[30px] left-[125px] text-white h-[50px] w-[200px]  text-md font-bold '>
                        The Little Mermaid
                    </div>
                    <div className='absolute top-[60px] left-[125px] text-white w-[200px] h-[60px] truncate text-xs'>
                    The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.
                    </div>
                    <div className=' flex absolute gap-2 px-[6px] py-[2px] font-mono bottom-[0px] left-[125px] w-[130px] text-white font-bold bg-gray-600 rounded-md text-center'>
                    <Icon icon="ion:play" height={20}/>
                        Watch now
                    </div>
                    
                </div>
                <div className='w-[110px] h-[130px] absolute bottom-[20px] left-[20px] bg-rose-400'>
                    <img src={images} alt="" />
                    <div className='flex gap-[5px] absolute top-[0px] left-[120px] text-white'>
                        <Icon icon="ic:round-star" height={20} className='text-sky-400' />
                        <p className='relative top-[-2px]'>N/A</p>
                        <p className='relative top-[-2px] left-[10px] font-bold'>HD</p>
                    </div>
                    <div className='  absolute  font-mono top-[30px] left-[125px] text-white h-[50px] w-[200px]  text-md font-bold '>
                        The Flash
                    </div>
                    <div className='absolute top-[60px] left-[125px] text-white w-[200px] h-[60px] truncate text-xs'>
                    When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?
                    </div>
                   
                    <div className=' flex absolute gap-2 px-[6px] py-[2px] font-mono bottom-[0px] left-[125px] w-[130px] text-white font-bold bg-gray-600 rounded-md text-center'>
                    <Icon icon="ion:play" height={20}/>
                        Watch now
                    </div>
                </div>

            </div>
        </>
    )
}
