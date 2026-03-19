import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

    const navigate = useNavigate();

    //Function to Show Mobile Menu
    const showMobileMenu = () => {
        //Get the Mobile Menu
        const mobileMenu = document.getElementById('mobileMenu')

        //If it is Hidden Add it, remove it
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden')
        }
    }

    return (
        <header className='flex justify-between items-center w-full py-5 sm:px-10 px-5'>
            <nav className='flex w-full screen-max-width'>
                <div className='cursor-pointer py-5 '>
                    <div className='flex w-32 py-1 items-center justify-center'>
                        <img src={appleImg} alt='Apple' className='w-8 h-10' onClick={() => navigate('/')} />
                    </div>
                </div>

                <div className='flex flex-auto justify-center max-sm:hidden'>
                    <a className='cursor-pointer px-8 text-slate-300 hover:text-white hover:underline transition-all' href='/iphone'>iPhones</a>
                    <a className='cursor-pointer px-8 text-slate-300 hover:text-white hover:underline transition-all' onClick={() => navigate('/macbook')}>Mac</a>
                    <nav className='cursor-pointer px-8 text-slate-300 hover:text-white hover:underline transition-all' onClick={() => navigate('/')}>Products</nav>
                    <nav className='cursor-pointer px-8 text-slate-300 hover:text-white hover:underline transition-all' onClick={() => navigate('/support')}>Support</nav>
                </div>
                <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                    <img src={searchImg} alt='search' className='w-6 h-6' />
                    <img src={bagImg} alt='bag' onClick={showMobileMenu} className='w-6 h-6 lg:hidden md:hidden sm:block' />
                </div>

                <div id='mobileMenu' className='hidden fixed max-h-fit p-2 bottom-0 right-0 left-0 top-16 md:hidden z-40'>
                <nav className='flex flex-col gap-6 items-center bg-black bg-opacity-100 backdrop-blur- md'>
                    <nav className='cursor-pointer px-8 text-slate-300 hover:text-white hover:underline transition-all' onClick={() => navigate('/iphone')}>iPhones</nav>
                    <nav className='cursor-pointer px-8 text-slate-300 hover:text-white hover:underline transition-all' onClick={() => navigate('/macbook')}>Mac</nav>
                    <nav className='cursor-pointer px-8 text-slate-300 hover:text-white hover:underline transition-all' onClick={() => navigate('/')}>Products</nav>
                    <nav className='cursor-pointer px-8 text-slate-300 hover:text-white hover:underline transition-all' onClick={() => navigate('/support')}>Support</nav>
                </nav>
            </div>
            </nav>
        </header>
    )
}

export default NavBar
