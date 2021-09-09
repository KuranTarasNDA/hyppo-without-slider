<template>
  <section class="mortgage">
    <div class="container">
      <h1>
        Mortgages in Switzerland
      </h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor nisi, posuere vitae tincidunt et, molestie sit amet purus.
      </h2>
      <div class="mortgage__all">
        <div class="mortgage__item">
          <div class="mortgage__item-cont">
            <div class="mortgage__item-title">
              Mortgage market Switzerland 2021: moderate growth even during the pandemic
            </div>
            <div class="mortgage__item-img">
              <img src="@/assets/28.png" alt="">
            </div>
            <router-link to="/amortgage" class="mortgage-btn">
              <span>Read more</span>
              <div class="mortgage-btn-bg"></div>
            </router-link>
          </div>
          <div class="mortgage__item-bg"></div>
        </div>
        <div class="mortgage__item">
          <div class="mortgage__item-cont">
            <div class="mortgage__item-title">
              Mortgage for the holiday home
            </div>
            <div class="mortgage__item-img">
              <img src="@/assets/29.png" alt="">
            </div>
            <router-link to="/amortgage" class="mortgage-btn">
              <span>Read more</span>
              <div class="mortgage-btn-bg"></div>
            </router-link>
          </div>
          <div class="mortgage__item-bg"></div>
        </div>
        <div class="mortgage__item">
          <div class="mortgage__item-cont">
            <div class="mortgage__item-title">
              Mortgage for the holiday home
            </div>
            <div class="mortgage__item-img">
              <img src="@/assets/30.png" alt="">
            </div>
            <router-link to="/amortgage" class="mortgage-btn">
              <span>Read more</span>
              <div class="mortgage-btn-bg"></div>
            </router-link>
          </div>
          <div class="mortgage__item-bg"></div>
        </div>
        <div class="mortgage__item">
          <div class="mortgage__item-cont">
            <div class="mortgage__item-title">
              Mortgage market Switzerland 2021: moderate growth even during the pandemic
            </div>
            <div class="mortgage__item-img">
              <img src="@/assets/31.png" alt="">
            </div>
            <router-link to="/amortgage" class="mortgage-btn">
              <span>Read more</span>
              <div class="mortgage-btn-bg"></div>
            </router-link>
          </div>
          <div class="mortgage__item-bg"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.mortgage
  padding: 40px 10px 104px 10px
  @media (max-width: 600px)
    padding: 20px 10px 50px 10px
  .container
    flex-direction: column
    h1
      font-family: Rubik, sans-serif
      font-style: normal
      font-weight: bold
      font-size: 64px
      line-height: 86px
      color: #29ABE2
      @media (max-width: 600px)
        font-size: 40px
        line-height: 134%
    h2
      font-family: Open Sans, sans-serif
      font-style: normal
      font-weight: normal
      font-size: 17px
      line-height: 26px
      color: #102941
      margin: 16px 0 32px 0
      max-width: 525px
      @media (max-width: 600px)
        line-height: 152%
        font-size: 14px
        margin: 5px 0 15px 0
    .mortgage__all
      display: grid
      grid-template-columns: 1fr 1fr
      grid-gap: 72px 70px
      @media (max-width: 911px)
        grid-gap: 15px
      @media (max-width: 600px)
        grid-template-columns: 1fr
      .mortgage__item
        position: relative
        display: flex
        .mortgage__item-cont
          background: #FFFFFF
          border-radius: 24px
          padding: 24px 24px 50px 24px
          display: flex
          flex-direction: column
          z-index: 2
          width: 100%
          position: relative
          @media (max-width: 911px)
            padding: 20px
            border-radius: 12px
          .mortgage__item-title
            font-family: Rubik, sans-serif
            font-style: normal
            font-weight: bold
            font-size: 24px
            line-height: 25px
            color: #102941
            margin-bottom: 58px
            @media (max-width: 911px)
              font-size: 18px
              margin-bottom: 20px
              text-align: center
          .mortgage__item-img
            width: 100%
            max-width: 535px
            margin-bottom: 48px
            margin-top: auto
            @media (max-width: 911px)
              max-width: 300px
              margin: auto auto 24px auto
            img
              width: 100%
              height: 100%
              object-fit: contain
          .mortgage-btn
            position: relative
            margin: 0 auto
            cursor: pointer
            display: flex
            span
              font-family: Open Sans, sans-serif
              font-style: normal
              font-weight: bold
              font-size: 18px
              line-height: 25px
              color: #FFFFFF
              z-index: 2
              border-radius: 10px
              text-align: center
              padding: 17.5px
              background: #29ABE2
              position: relative
              width: 250px
              @media (max-width: 911px)
                width: 170px
                padding: 7.5px
                font-size: 16px
                line-height: 138%
            .mortgage-btn-bg
              position: absolute
              width: 211px
              height: 100%
              pointer-events: none
              background: rgba(95, 122, 126, 0.22)
              filter: blur(54px)
              border-radius: 10px
              z-index: 1
              transform: translate(-50%, 50%)
              left: 50%
              top: 0
      .mortgage__item-bg
        position: absolute
        width: 100%
        height: calc(100% + 8px)
        left: 0
        top: 0
        background: #0D1025
        opacity: 0.06
        filter: blur(114px)
        border-radius: 10px
        z-index: 1
</style>