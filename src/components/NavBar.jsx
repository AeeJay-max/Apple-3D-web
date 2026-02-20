import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

    const navigate = useNavigate();

    return (
        <header className='flex justify-between items-center w-full py-5 sm:px-10 px-5'>
            <nav className='flex w-full screen-max-width'>
                <div className='cursor-pointer py-5 '>
                    <div className='flex w-32 py-1 items-center justify-center'>
                        <img src={appleImg} alt='Apple' className='w-8 h-10' onClick={() => navigate('/')} />
                    </div>
                </div>

                <div className='flex flex-auto justify-center max-sm:hidden'>
                    <nav className='cursor-pointer px-8 text-slate-300 hover:text-white hover:underline transition-all' onClick={() => navigate('/')}>iPhones</nav>
                    <nav className='cursor-pointer px-8 text-slate-300 hover:text-white hover:underline transition-all' >Mac</nav>
                    <nav className='cursor-pointer px-8 text-slate-300 hover:text-white hover:underline transition-all'>Products</nav>
                    <nav className='cursor-pointer px-8 text-slate-300 hover:text-white hover:underline transition-all'>Support</nav>
                </div>
                <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                    <img src={searchImg} alt='search' className='w-6 h-6' />
                    <img src={bagImg} alt='bag' className='w-6 h-6' />
                </div>

            </nav>
        </header>
    )
}

export default NavBar
