import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiCopyright } from 'react-icons/bi'
import { FaDiscord, FaEnvelope, FaPhone, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <div id='footer-content'>
        <section id='first-section'>
          <Image src='/assets/images/kiwi_logo2.png' alt='Logo avec slogan du site' width={500} height={180} />
          <h4>KiWi Solutions {<BiCopyright />} 2024</h4>
          <p>Besoins d&apos;un site complet ou d&apos;une refonte ? <a href='#'>Contactez-nous !<FaEnvelope size={'32'} className='contact-envelope'/></a></p>

          <div id='socials'>
            <ul>
              <li><a href='#'><FaEnvelope size={'32'} /></a></li>
              <li><a href='#'><FaPhone size={'32'} /></a></li>
              <li><a href='#'><FaTwitter size={'32'} /></a></li>
              <li><a href='#'><FaDiscord size={'32'} /></a></li>
            </ul>
          </div>
        </section>
        <section id='second-section'>
          <h4>NAVIGATION RAPIDE</h4>
          <ul>
              <li><Link href='/' id='home'>Accueil</Link></li>
              <li><Link href='#' id='services'>Services</Link></li>
              <li><Link href='#' id='contact'>Contact</Link></li>
              <li><Link href='#' id='about'>À propos</Link></li>
          </ul>
        </section>
        <section id='third-section'>
          <h4>LIENS UTILES</h4>
          <ul>
            <li><Link href='/legals'>Mentions légales</Link></li>
          </ul>
        </section>
      </div>
    </footer>
  )
}
