<template>
  <section class="customer">
    <div class="container">
      <h1>
        Happy Customers
      </h1>
      <h2>
        A happy customer isn’t just someone who makes a purchase with you today. A truly happy customer is one who will be loyal to you and your business for a long time to come.
      </h2>
      <swiper
          :slides-per-view="1"
          :space-between="10"
          :loop="true"
          :centeredSlides="true"
          :breakpoints="{ 1024: { slidesPerView: 3, spaceBetween: 50, } }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
      >
        <swiper-slide>
          <div class="customer__slide">
            <div class="customer__slide-wrapper">
              <div class="customer__person">
                <div class="customer__person-img">
                  <img src="@/assets/40.png" alt="">
                </div>
                <div class="customer__person-text">
                  <div class="customer__person-name">
                    Nie Chan
                  </div>
                  <div class="customer__person-sub">
                    Zurich
                  </div>
                </div>
              </div>
              <div class="customer__person-feedback">
                <p>
                  Labore recusandae illo sit quisquam. Sequi velit deserunt tempore delectus et. Odio impedit incidunt ratione debitis pariatur consequatur.
                </p>
              </div>
            </div>
            <div class="customer__slide-bg"></div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="customer__slide">
            <div class="customer__slide-wrapper">
              <div class="customer__person">
                <div class="customer__person-img">
                  <img src="@/assets/41.png" alt="">
                </div>
                <div class="customer__person-text">
                  <div class="customer__person-name">
                    Alex Young
                  </div>
                  <div class="customer__person-sub">
                    Zurich
                  </div>
                </div>
              </div>
              <div class="customer__person-feedback">
                <p>
                  Labore recusandae illo sit quisquam. Sequi velit deserunt tempore delectus et. Odio impedit incidunt ratione debitis pariatur consequatur.
                </p>
              </div>
            </div>
            <div class="customer__slide-bg"></div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="customer__slide">
            <div class="customer__slide-wrapper">
              <div class="customer__person">
                <div class="customer__person-img">
                  <img src="@/assets/42.png" alt="">
                </div>
                <div class="customer__person-text">
                  <div class="customer__person-name">
                    Niha Torns
                  </div>
                  <div class="customer__person-sub">
                    Zurich
                  </div>
                </div>
              </div>
              <div class="customer__person-feedback">
                <p>
                  Labore recusandae illo sit quisquam. Sequi velit deserunt tempore delectus et. Odio impedit incidunt ratione debitis pariatur consequatur.
                </p>
              </div>
            </div>
            <div class="customer__slide-bg"></div>
          </div>
        </swiper-slide>
        ...
      </swiper>
    </div>
  </section>
</template>
<style lang="sass">
.customer
  padding: 64px 10px
  background: #fdfdfd
  overflow: hidden
  position: relative
  @media (max-width: 911px)
    padding: 20px 10px
  .container
    flex-direction: column
    h1
      font-family: Rubik, sans-serif
      font-style: normal
      font-weight: bold
      font-size: 32px
      line-height: 44px
      text-align: center
      color: #1D4772
      @media (max-width: 911px)
        font-size: 20px
        line-height: 137%
    h2
      font-family: Open Sans, sans-serif
      font-style: normal
      font-weight: normal
      font-size: 17px
      line-height: 26px
      text-align: center
      color: #102941
      margin: 16px auto 0 auto
      max-width: 776px
      @media (max-width: 911px)
        text-align: left
        max-width: 100%
        margin: 10px 0 0 0
        font-size: 14px
        line-height: 152%
    .swiper-container
      max-width: 100%
      overflow: visible
      .swiper-wrapper
        display: flex
        padding: 64px 0
        @media (max-width: 1024px)
          padding: 30px 0
        .swiper-slide
          .customer__slide
            position: relative
            .customer__slide-wrapper
              display: flex
              position: relative
              z-index: 2
              background: #ffffff
              flex-direction: column
              border-radius: 10px
              padding: 30px 21px 25px 30px
              @media (max-width: 911px)
                padding: 15px
              .customer__person
                display: flex
                align-items: center
                .customer__person-img
                  width: 50px
                  height: 50px
                  border-radius: 50%
                  overflow: hidden
                  border: 1px solid #29ABE2
                  @media (max-width: 911px)
                    width: 40px
                    height: 40px
                  img
                    width: 100%
                    height: 100%
                    object-fit: cover
                .customer__person-text
                  display: flex
                  flex-direction: column
                  margin-left: 21px
                  @media (max-width: 911px)
                    margin-left: 10px
                  .customer__person-name
                    font-family: Rubik, sans-serif
                    font-style: normal
                    font-weight: 500
                    font-size: 18px
                    line-height: 18px
                    color: #102941
                    @media (max-width: 911px)
                      font-size: 16px
                      line-height: 100%
                  .customer__person-sub
                    font-family: Rubik, sans-serif
                    font-style: normal
                    font-weight: normal
                    font-size: 14px
                    line-height: 14px
                    color: #102941
                    margin-top: 5px
                    @media (max-width: 911px)
                      font-size: 12px
                      line-height: 100%
              .customer__person-feedback
                margin-top: 8px
                p
                  font-family: Open Sans, sans-serif
                  font-style: normal
                  font-weight: normal
                  font-size: 17px
                  line-height: 26px
                  color: #102941
                  @media (max-width: 911px)
                    font-size: 14px
                    line-height: 152%
            .customer__slide-bg
              width: 79.5%
              z-index: 1
              transform: translateX(-50%)
              left: 50%
              height: 130%
              top: 0
              position: absolute
              background: #29ABE2
              opacity: 0.06
              filter: blur(114px)
              border-radius: 10px
</style>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>