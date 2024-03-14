import React from 'react'
import { Icon } from '@iconify/react';
import { useState } from 'react';
export default function Navbar() {
    const [show, setshow] = useState(0);
    return (
        <>
            <div className={`bg-gray-600  ${show === 0 ? 'h-[50px]' : 'h-[100px]'}`}>
                <div className=' flex justify-between'>
                    <div className='flex w-[100px] h-[32px] bg-gray-500 rounded-md text-white pt-[3px] pl-[10px] box-border gap-2 relative left-[20px] top-[9px]'>
                        <Icon icon="mingcute:menu-fill" className='mt-[5px]' />
                        <p className=''>Browser</p>
                    </div>
                    <div className='relative top-[9px]'>
                        <Icon icon="twemoji:letter-s" width="40" height="30" />
                    </div>
                    <div className='flex text-white relative top-[9px] right-[20px] '>
                        <Icon icon="mi:search" width="40" height="30" onClick={() => { setshow(show === 0 ? 1 : 0) }} />
                        <Icon icon="basil:user-outline" width="40" height="30" />
                    </div>
                </div>
                <div className={`flex justify-center ${show === 0 ? 'hidden' : 'block'}`}>
                    <input type="search " className='h-[30px] w-[1250px] relative top-[20px] rounded-md outline-none pl-[10px]' />
                </div>
            </div>
        </>
    )
}
