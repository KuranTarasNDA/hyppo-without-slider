<template>
  <section class="word">
    <div class="container">
      <div class="word__img">
        <svg width="60" height="38" viewBox="0 0 60 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 38H33V16.72L43.5 0H57L51 15.2H60V38ZM27 38H0V16.72L10.5 0H24L18 15.2H27V38Z" fill="#102941"/>
        </svg>
      </div>
      <div class="word__text">
        “Lusto iure id ad. Doloremque et molestiae perspiciatis quis voluptas ut sed. Omnis praesentium doloremque ipsa eveniet. Itaque aut ea accusantium error impedit impedit. Minima quisquam fuga sed maxime vitae non fuga. Quo asperiores ut autem unde mollitia.”
      </div>
      <div class="word__author">
        Lorem Ipsum
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.word
  background: #FBFBFB
  padding: 0 10px
  .container
    align-items: center
    flex-direction: column
    max-width: 1140px
    padding: 80px 0
    @media (max-width: 1024px)
      padding: 55px 0
    @media (max-width: 600px)
      padding: 40px 0
    .word__img
      transform: translateX(-3px)
      svg
        width: 45px
        @media (max-width: 600px)
          width: 30px
          height: 20px
    .word__text
      margin: 43px 0 16px 0
      font-family: Rubik, sans-serif
      font-style: normal
      font-weight: normal
      font-size: 32px
      line-height: 44px
      color: #102941
      @media (max-width: 1024px)
        margin: 30px 0 12px 0
        font-size: 26px
        line-height: 137%
      @media (max-width: 600px)
        font-size: 18px
        margin: 21.5px 0 15px 0
    .word__author
      font-family: Rubik, sans-serif
      font-style: normal
      font-weight: bold
      font-size: 22px
      line-height: 28px
      color: #102941
      margin-left: auto
      @media (max-width: 1024px)
        font-size: 18px
        line-height: 127%
      @media (max-width: 600px)
        font-size: 14px
</style>

















