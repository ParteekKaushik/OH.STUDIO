import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center pt-16'>
        <div className='w-3/5 text-center'>
        <h1 className='text-7xl font-semibold leading-tight'>A brand and product designer working with clients globally</h1>
        </div>

        <div className='pt-8 pb-3'>
            <ul className='flex'>
                <li className='mx-2 rounded-2xl px-2 py-1 text-sm font-semibold'>Expertise</li>
                <li className='mx-2 bg-nav-color rounded-2xl px-2 py-1 text-sm font-semibold'>Branding</li>
                <li className='mx-2 bg-nav-color rounded-2xl px-2 py-1 text-sm font-semibold'>Product</li>
                <li className='mx-2 bg-nav-color rounded-2xl px-2 py-1 text-sm font-semibold'>Design Systems</li>
            </ul>
        </div>
    </div>
  )
}

export default Hero