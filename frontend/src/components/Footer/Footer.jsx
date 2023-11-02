import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
            <footer class="footer">
              <div class="waves">
                <div class="wave" id="wave1"></div>
                <div class="wave" id="wave2"></div>
                <div class="wave" id="wave3"></div>
                <div class="wave" id="wave4"></div>
              </div>
              <ul class="social-icon">
              
                <li class="social-icon__item"><a class="social-icon__link" href="https://github.com/morlabhaskar?tab=repositories" target='blanck'><i class="fa-brands fa-github"></i></a></li>
                <li class="social-icon__item"><a class="social-icon__link" href="https://www.linkedin.com/in/bhaskar-morla-429738258/" target='blanck'><i class="fa-brands fa-linkedin"></i></a></li>
                <li class="social-icon__item"><a class="social-icon__link" href="https://www.instagram.com/bhaskar_nani_goud/" target='blanck'><i class="fa-brands fa-instagram"></i></a></li>
                <li class="social-icon__item"><a class="social-icon__link" href="https://www.facebook.com/bhaskar.nani.7564" target='blanck'><i class="fa-brands fa-facebook"></i></a></li>
                <li class="social-icon__item"><a class="social-icon__link" href="https://twitter.com/Bhaskar_nani073" target='blanck'><i class="fa-brands fa-twitter"></i></a></li>
              </ul>
              <ul class="menu">
                <li class="menu__item"><a class="menu__link" >Shop</a></li>
                <li class="menu__item"><a class="menu__link">Mens</a></li>
                <li class="menu__item"><a class="menu__link">Womens</a></li>
                <li class="menu__item"><a class="menu__link">Kids</a></li>

              </ul>
              <p>&copy;Created by Bhaskar Morla</p>
        </footer>
    </div>
  )
}

export default Footer