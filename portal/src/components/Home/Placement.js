import Swiper from "swiper";
import React, { useEffect } from "react";
import "./Placement.css"
import cand1 from "../assests/images/user1.jpg"
import cand2 from "../assests/images/user2.jpg"
import cand3 from "../assests/images/user3.jpg"
import cand4 from "../assests/images/user4.jpg"

export default function Placement(){

  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

    // Cleanup function to destroy Swiper instance when component unmounts
    return () => {
      swiper.destroy();
    };
  }, []);

  return( 
    <><div id="placement">
      <section className="mySwiper">
    <p style={{color:'#213da0',fontSize:'36px'}}>PLACEMENTS !!</p>
<div class="swiper-wrapper" >

  <div class="card swiper-slide" >
    <div class="card__image" >
      <img src={cand1} alt="card"/>
    </div>

    <div class="card__content">
      <span class="card__title">Elizabeth</span>
      <span class="card__name">ZOHO</span>
      <p class="card__text">Software Engineer </p>
      <p>10L per Annum</p>
    </div>
  </div>

  <div class="card swiper-slide">
    <div class="card__image">
      <img src={cand2} alt="card"/>
    </div>

    <div class="card__content">
      <span class="card__title">Jessica</span>
      <span class="card__name">TCS</span>
      <p class="card__text">UI Designer</p>
      <p>4.5L per Annum</p>
    </div>
  </div>

  <div class="card swiper-slide">
    <div class="card__image">
      <img src={cand3} alt="card"/>
    </div>

    <div class="card__content">
      <span class="card__title">John</span>
      <span class="card__name">Accenture</span>
      <p class="card__text">Web Developer</p>
      <p>5.4L per Annum</p>
    </div>
  </div>

  <div class="card swiper-slide">
    <div class="card__image">
      <img src={cand4} alt="card"/>
    </div>

    <div class="card__content">
      <span class="card__title">Ava</span>
      <span class="card__name">Infosys</span>
      <p class="card__text">Mobile Designer</p>
      <p>5L per Annum</p>
    </div>
  </div>

</div>
</section></div>
<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
    </>
  )
}