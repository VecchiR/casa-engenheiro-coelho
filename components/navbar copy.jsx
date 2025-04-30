'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
// import { assets } from '../../assets/assets';
// import ThemeSwitcher from './ThemeSwitcher';
// import Logo from './Logo';
// import ContactButton from './ContactButton';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const sideMenuRef = useRef();

  useEffect(() => {
    setMounted(true); // Ensure the component is mounted before rendering
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  if (!mounted) return null; // Prevent rendering until mounted

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? 'bg-white/50 backdrop-blur-lg shadow-sm dark:shadow-sm dark:shadow-[hsla(0,0%,100%,20%)] dark:bg-dark-theme '
            : ''
        }`}
      >
        <a href="#top" className='text-2xl font-semibold'>MestreAndré</a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ''
              : 'bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent'
          } `}
        >
          <li>
            <a href="#specs">Especificações</a>
          </li>
          <li>
            <a href="#galeria">Galeria</a>
          </li>
          <li>
            <a href="#local">Localização</a>
          </li>
          <li>
            <a href="#subsidio">Subsídio</a>
          </li>
          <li>
            <a href="#faq">Perguntas Frequentes</a>
          </li>
          <li>
            <a href="#whatsapp">Whatsapp</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="block md:hidden ml-3" onClick={openMenu}>
            {/* <Image src={theme === 'dark' || resolvedTheme === 'dark' ? assets.menu_white : assets.menu_black} alt="" className="w-6" /> */}
          </button>
        </div>

        {/* ------- mobile menu ----------- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-dark-hover dark:text-white"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            {/* <Image src={theme === 'dark' || resolvedTheme === 'dark' ? assets.close_white : assets.close_black} alt="" className="w-5 cursor-pointer" /> */}
          </div>

          <li>
            <a href="#specs" onClick={closeMenu}>
              Especificações
            </a>
          </li>
          <li>
            <a href="#galeria" onClick={closeMenu}>
              Galeria
            </a>
          </li>
          <li>
            <a href="#local" onClick={closeMenu}>
              Localização
            </a>
          </li>
          <li>
            <a href="#subsidio" onClick={closeMenu}>
              Subsídio
            </a>
          </li>
          <li>
            <a href="#faq" onClick={closeMenu}>
              Perguntas Frequentes
            </a>
          </li>
          <li>
            <a href="#whatsapp" onClick={closeMenu}>
              Whatsapp
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
