'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { FaRegMoon, FaSun } from 'react-icons/fa'
import { MdTranslate } from 'react-icons/md'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    localStorage.setItem('theme', 'dark')
    document.documentElement.classList.add('dark')
  }, [])

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }

    setDarkMode(!darkMode)
  }

  return (
    <header>
      <div id='header-content'>
        <section>
          <Link href='/'>
            <img src='/assets/images/favicon/favicon.ico' alt='Logo du site' />
          </Link>
        </section>
        <section>
          <nav>
            <ul>
              <li><Link href='/' id='home'>Accueil</Link></li>
              <li><Link href='#' id='services'>Services</Link></li>
              <li><Link href='#' id='contact'>Contact</Link></li>
              <li><Link href='#' id='about'>À propos</Link></li>
            </ul>
          </nav>
        </section>
        <section>
          <ul>
            <li onClick={toggleDarkMode}>
              {darkMode ? <FaRegMoon size={'24'} /> : <FaSun size={'24'} />}
            </li>
            <li><MdTranslate size={'24'} /></li>
          </ul>
        </section>
      </div>
    </header>
  )
}