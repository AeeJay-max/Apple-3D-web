import React from 'react'

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
      <div className='screen-max-width'>
        <div>
          <p className='font-semibold text-gray text-xs'>
            More ways to shop: {' '}
            <span className='underline text-blue'>Find an Apple Store {' '}</span>
            or {' '}
            <span className='underline text-blue'>other retailers {' '}</span>
            near you.
          </p>
          <p className='font-semibold text-gray text-xs'>
            Or call 000800-040-1966
          </p>
        </div>

        <div className='bg-neutral-700 my-5 h-[1px] w-full' />
        <div className='flex md:flex-row flex-col md:items-center justify-between'>
          <p className='font-semibold text-gray text-xs'>Copyright @2026 Apple Inc. All rights reserved.</p>
          <div className='flex'>
            <p className='font-semibold text-gray text-xs mx-2'>Privacy Policy</p>
            <p className='font-semibold text-gray text-xs mx-2'>|</p>
            <p className='font-semibold text-gray text-xs mx-2'>Terms of Use</p>
            <p className='font-semibold text-gray text-xs mx-2'>|</p>
            <p className='font-semibold text-gray text-xs mx-2'>Sales Policy</p>
            <p className='font-semibold text-gray text-xs mx-2'>|</p>
            <p className='font-semibold text-gray text-xs mx-2'>Legal</p>
            <p className='font-semibold text-gray text-xs mx-2'>|</p>
            <p className='font-semibold text-gray text-xs mx-2'>Site Map</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
