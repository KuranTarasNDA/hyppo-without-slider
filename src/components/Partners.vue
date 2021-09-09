<template>
  <section class="partners">
    <div class="container">
      <div class="partners__item">
        <img src="@/assets/05.png" alt="">
      </div>
      <div class="partners__item">
        <img src="@/assets/06.png" alt="">
      </div>
      <div class="partners__item">
        <img src="@/assets/07.png" alt="">
      </div>
      <div class="partners__item">
        <img src="@/assets/08.png" alt="">
      </div>
      <div class="partners__item">
        <img src="@/assets/09.png" alt="">
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.partners
  background: #fbfbfb
  padding: 0 10px
  @media (max-width: 1024px)
    padding: 20px 10px
  .container
    max-width: 1135px
    align-items: center
    justify-content: space-between
    @media (max-width: 1024px)
      flex-direction: column
    .partners__item
      &:first-child
        margin: 0 -5px
        @media (max-width: 1024px)
          margin: -26.1px -5px
      &:nth-child(2)
        margin: 0 -16.87px
        @media (max-width: 1024px)
          margin: -4.68px -16.87px
      &:nth-child(3)
        margin: 0 -43.85px
        @media (max-width: 1024px)
          margin: -74.05px -43.85px
      &:nth-child(4)
        margin: 0 -3px 0 0
        @media (max-width: 1024px)
          margin: 0 -3px -3.58px 0
      &:nth-child(5)
        margin: 0 -9.35px
        @media (max-width: 1024px)
          margin: -4.32px -9.35px
      img
        width: 100%
        object-fit: contain
        @media (max-width: 1024px)
          margin-bottom: 40px
</style>