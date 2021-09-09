<template>
  <section class="about">
    <div class="container">
      <div class="about__text">
        <h1>
          About us
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor nisi, posuere vitae tincidunt et, molestie sit amet purus. <span>Pellentesque</span> consectetur tortor a fermentum blandit.
          <br>
          <br>
          Consequatur sapiente tenetur. Libero totam et vel cupiditate quo quidem. Nobis dolore amet. Sit voluptas ut. Eos quis natus sapiente esse odit sint culpa aut. Mollitia <span>qui quam iste</span> assumenda ullam.
        </p>
      </div>
      <div class="about__img">
        <img src="@/assets/15.png" alt="">
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.about
  padding: 40px 10px 95px 10px
  @media (max-width: 1200px)
    padding: 20px 10px
  .container
    justify-content: space-between
    @media (max-width: 1200px)
      align-items: center
    @media (max-width: 600px)
      flex-direction: column-reverse
    .about__text
      width: 42.6%
      @media (max-width: 911px)
        width: 50%
      @media (max-width: 600px)
        width: 100%
      h1
        font-family: Rubik, sans-serif
        font-style: normal
        font-weight: bold
        font-size: 64px
        line-height: 86px
        color: #29ABE2
        @media (max-width: 911px)
          font-size: 40px
          line-height: 134%
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
        span
          color: #29ABE2
          font-weight: 700
    .about__img
      width: 28.6%
      margin-right: 54px
      @media (max-width: 1200px)
        width: 40%
      @media (max-width: 911px)
        margin-right: 0
      @media (max-width: 600px)
        width: 100%
        height: 200px
        margin-bottom: 10px
      img
        width: 100%
        height: 100%
        object-fit: contain


</style>




















