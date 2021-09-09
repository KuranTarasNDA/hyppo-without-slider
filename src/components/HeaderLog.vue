<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="header__logo">
        <img src="@/assets/01.png" alt="">
      </router-link>
      <div class="header__menu">
        <router-link active-class="active" to="/" class="header-link">
          Homepage
        </router-link>
        <router-link active-class="active" to="/mortgage" class="header-link">
          Mortgages in Switzerland
        </router-link>
        <router-link active-class="active" to="/my-mortgages" class="header-link">
          My profile
        </router-link>
        <router-link active-class="active" to="/request" class="header-link">
          Request a mortgage
        </router-link>
        <router-link active-class="active" to="/about" class="header-link">
          About us
        </router-link>
        <router-link active-class="active" to="/faq" class="header-link">
          FAQ
        </router-link>
      </div>
      <div class="header__buttons">
        <router-link to="/login" class="header__button">
          <span>
            Logout
          </span>
          <div class="header__button-bg"></div>
        </router-link>
      </div>
      <div @click="addScroll" class="header__mob">
        <div class="header__mob-menu">
          <router-link to="/" class="header__mob-link">Homepage</router-link>
          <router-link to="/mortgage" class="header__mob-link">Mortgages in Switzerland</router-link>
          <router-link to="/my-mortgages" class="header__mob-link">My profile</router-link>
          <router-link to="/request" class="header__mob-link">Request a mortgage</router-link>
          <router-link to="/about" class="header__mob-link">About</router-link>
          <router-link to="/faq" class="header__mob-link">FAQ</router-link>
        </div>
        <div class="header__mob-buttons">
          <router-link to="/login" class="btn">
          <span>
            Logout
          </span>
            <div class="btn-bg"></div>
          </router-link>
        </div>
      </div>
      <div @click="burger" class="header__burger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </header>
</template>
<style lang="sass">
.header
  background: #FFFFFF
  position: relative
  z-index: 5
  padding: 0 10px
  @media (max-width: 1024px)
    height: 104px
  .container
    align-items: center
    justify-content: space-between
    padding: 39px 0
    background: #ffffff
    @media (max-width: 1024px)
      padding: 20px 0
    .header__menu
      @media (max-width: 1024px)
        display: none
      .header-link
        font-family: Open Sans, sans-serif
        font-style: normal
        font-weight: normal
        font-size: 17px
        line-height: 26px
        color: #102941
        &:not(:last-child)
          margin-right: 24px
          @media (max-width: 1200px)
            margin-right: 15px
        @media (max-width: 1200px)
          font-size: 16px
      .active
        color: #29ABE2
        position: relative
        &:after
          content: ''
          position: absolute
          left: 0
          bottom: -6.5px
          width: 100%
          height: 4px
          background: #8CC5F9
  .header__buttons
    display: flex
    @media (max-width: 1024px)
      display: none
    .header__button
      display: flex
      position: relative
      &:not(:last-child)
        margin-right: 32px
        @media (max-width: 1200px)
          margin-right: 20px
      span
        background: #29ABE2
        border-radius: 10px
        cursor: pointer
        font-family: Open Sans, sans-serif
        font-style: normal
        font-weight: bold
        font-size: 18px
        line-height: 25px
        color: #FFFFFF
        padding: 20px 0
        width: 134px
        text-align: center
        position: relative
        z-index: 2
        @media (max-width: 1200px)
          width: 100px
          padding: 15px 0
          font-size: 16px
      .header__button-bg
        width: 94px
        pointer-events: none
        height: 47px
        left: 50%
        transform: translateX(-50%)
        position: absolute
        bottom: -3px
        z-index: 1
        background: rgba(95, 122, 126, 0.22)
        filter: blur(54px)
        border-radius: 10px
  .header__burger
    flex-direction: column
    justify-content: space-between
    width: 30px
    height: 20px
    display: none
    @media (max-width: 1024px)
      display: flex
    div
      width: 100%
      height: 2px
      border-radius: 10px
      background: #29ABE2
  .header__mob
    display: none
    position: fixed
    height: calc(100vh - 104px)
    z-index: 20
    background: #FFFFFF
    width: 100vw
    left: 0
    top: 104px
    flex-direction: column
    opacity: 0
    visibility: hidden
    transition-duration: 0.3s
    @media (max-width: 1024px)
      display: flex
    .header__mob-menu
      display: flex
      flex-direction: column
      margin: 30px auto 0 auto
      .header__mob-link
        font-family: Open Sans, sans-serif
        font-style: normal
        font-weight: normal
        font-size: 17px
        line-height: 26px
        text-align: center
        color: #102941
        &:not(:last-child)
          margin-bottom: 25px
    .header__mob-buttons
      display: flex
      justify-content: space-between
      padding: 0 20px
      margin-top: auto
      margin-bottom: 20px
      .btn
        margin: 0
        width: 150px
  .header__mob_active
    opacity: 1
    visibility: visible

.header__top
  .container
    position: fixed
    left: 10px
    top: 0
    width: calc(100vw - 20px)
</style>
<script>
export default {
  name: 'vue',
  methods: {
    burger: function () {
      document.querySelector('.header__mob').classList.toggle('header__mob_active')
      document.querySelector('.header').classList.toggle('header__top')
      document.querySelector('body').classList.toggle('scroll')
    },
    addScroll: function () {
      document.querySelector('.header__mob').classList.remove('header__mob_active')
      document.querySelector('body').classList.remove('scroll')
      document.querySelector('.header').classList.remove('header__top')
    }
  }
}
</script>












