<template>
  <section class="been">
    <div class="container">
      <div class="been__img">
        <img src="@/assets/03.png" alt="">
      </div>
      <div class="been__text">
        <h1>
          Mortgage Has Never Been Easier
        </h1>
        <p>
          Our vision is simple; to put you on a successful path to homeownership.  As the future unfolds, we are preparing to help you own every dream – your home and much more.
        </p>
        <ul>
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM10.001 16.413L6.99545 13.4139C6.6047 13.024 6.60391 12.3912 6.99369 12.0003C7.38371 11.6092 8.01701 11.6085 8.40793 11.9987L9.999 13.587L14.586 9C14.9765 8.60953 15.6095 8.60953 16 9C16.3905 9.39046 16.3905 10.0235 16 10.414L10.001 16.413Z" fill="#18DD8E"/>
            </svg>
            <span>
              Powerfull online protection
            </span>
          </li>
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM10.001 16.413L6.99545 13.4139C6.6047 13.024 6.60391 12.3912 6.99369 12.0003C7.38371 11.6092 8.01701 11.6085 8.40793 11.9987L9.999 13.587L14.586 9C14.9765 8.60953 15.6095 8.60953 16 9C16.3905 9.39046 16.3905 10.0235 16 10.414L10.001 16.413Z" fill="#18DD8E"/>
            </svg>
            <span>
              Convenient online mode
            </span>
          </li>
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM10.001 16.413L6.99545 13.4139C6.6047 13.024 6.60391 12.3912 6.99369 12.0003C7.38371 11.6092 8.01701 11.6085 8.40793 11.9987L9.999 13.587L14.586 9C14.9765 8.60953 15.6095 8.60953 16 9C16.3905 9.39046 16.3905 10.0235 16 10.414L10.001 16.413Z" fill="#18DD8E"/>
            </svg>
            <span>
              Personal approach to the customers
            </span>
          </li>
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM10.001 16.413L6.99545 13.4139C6.6047 13.024 6.60391 12.3912 6.99369 12.0003C7.38371 11.6092 8.01701 11.6085 8.40793 11.9987L9.999 13.587L14.586 9C14.9765 8.60953 15.6095 8.60953 16 9C16.3905 9.39046 16.3905 10.0235 16 10.414L10.001 16.413Z" fill="#18DD8E"/>
            </svg>
            <span>
              Complete your financing easily and digitally
            </span>
          </li>
        </ul>
        <div class="been__btn">
          <span>
            Read more
          </span>
          <div class="been__btn-bg"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass">
.been
  padding: 0 10px 74px 10px
  @media (max-width: 911px)
    padding-bottom: 20px
  .container
    justify-content: space-between
    @media (max-width: 1024px)
      align-items: center
    @media (max-width: 911px)
      flex-direction: column
    .been__img
      width: 45.3%
      height: 100%
      @media (max-width: 911px)
        width: 100%
        height: 250px
      img
        width: 100%
        height: 100%
        object-fit: contain
    .been__text
      width: 42.6%
      display: flex
      flex-direction: column
      @media (max-width: 911px)
        width: 100%
        margin-top: 20px
      h1
        font-family: Rubik, sans-serif
        font-style: normal
        font-weight: bold
        font-size: 32px
        line-height: 44px
        color: #1D4772
        @media (max-width: 911px)
          text-align: center
        @media (max-width: 600px)
          font-size: 20px
          line-height: 137%
      p
        font-family: Open Sans, sans-serif
        font-style: normal
        font-weight: normal
        font-size: 17px
        line-height: 26px
        color: #102941
        margin: 16px 0
        @media (max-width: 600px)
          font-size: 14px
          line-height: 152%
          margin: 10px 0
      ul
        display: flex
        flex-direction: column
        margin-bottom: 24px
        @media (max-width: 600px)
          margin-bottom: 15px
        li
          display: flex
          align-items: center
          &:not(:last-child)
            margin-bottom: 12px
            @media (max-width: 600px)
              margin-bottom: 7px
          span
            font-family: Open Sans, sans-serif
            font-style: normal
            font-weight: normal
            font-size: 17px
            line-height: 26px
            color: #102941
            margin-left: 10px
            @media (max-width: 600px)
              font-size: 14px
              line-height: 152%
              margin-left: 7px
          svg
            @media (max-width: 600px)
              width: 20px
              height: 20px
      .been__btn
        display: flex
        position: relative
        margin-right: auto
        cursor: pointer
        span
          background: #29ABE2
          border-radius: 10px
          font-family: Open Sans, sans-serif
          font-style: normal
          font-weight: bold
          font-size: 18px
          line-height: 25px
          color: #FFFFFF
          padding: 17.5px 70px
          margin-right: auto
          position: relative
          z-index: 2
          @media (max-width: 600px)
            padding: 7.5px 20px
            font-size: 16px
            line-height: 138%
            border-radius: 7px
        .been__btn-bg
          width: 211px
          pointer-events: none
          height: 100%
          left: 50%
          transform: translateX(-50%)
          position: absolute
          bottom: -25px
          z-index: 1
          background: rgba(95, 122, 126, 0.22)
          filter: blur(54px)
          border-radius: 10px
</style>











