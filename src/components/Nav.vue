<template>
  <section class="nav">
    <div class="container">
      <div class="nav__select">
        <select name="" id="">
          <option value="">10 per page</option>
          <option value="">10 per page</option>
          <option value="">10 per page</option>
        </select>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2071 9.79289C15.8166 9.40237 15.1834 9.40237 14.7929 9.79289L12 12.5858L9.20711 9.79289C8.81658 9.40237 8.18342 9.40237 7.79289 9.79289C7.40237 10.1834 7.40237 10.8166 7.79289 11.2071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L16.2071 11.2071C16.5976 10.8166 16.5976 10.1834 16.2071 9.79289Z" fill="#4F4F4F"/>
        </svg>
      </div>
      <div class="nav__buttons">
        <div class="nav__double-prev-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.41 16.59L13.82 12L18.41 7.41L17 6L11 12L17 18L18.41 16.59ZM6 6H8V18H6V6Z" fill="#BDBDBD"/>
          </svg>
        </div>
        <div class="nav__prev-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="#BDBDBD"/>
          </svg>
        </div>
        <div class="nav__buttons-text">
          <span>
            1-10
          </span>
          <span>
            from
          </span>
          <span>
            100
          </span>
        </div>
        <div class="nav__next-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z" fill="#19161A"/>
          </svg>
        </div>
        <div class="nav__double-next-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.58984 7.41L10.1798 12L5.58984 16.59L6.99984 18L12.9998 12L6.99984 6L5.58984 7.41ZM15.9998 6H17.9998V18H15.9998V6Z" fill="#19161A"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.nav
  .container
    align-items: center
    .nav__select
      position: relative
      display: flex
      width: 131px
      margin-right: 16px
      &:after
        content: ''
        position: absolute
        right: 1px
        top: 50%
        transform: translateY(-50%)
        width: 15px
        height: 15px
        background: #fff
        pointer-events: none
        z-index: 1
      select
        width: 100%
        border: 1px solid #4F4F4F
        border-radius: 4px
        padding: 4px 8px
        font-family: Open Sans, sans-serif
        font-style: normal
        font-weight: normal
        font-size: 14px
        line-height: 24px
        color: #0E0E0E
      svg
        position: absolute
        z-index: 2
        pointer-events: none
        right: 4px
        top: 50%
        transform: translateY(-50%)
    .nav__buttons
      display: flex
      align-items: center
      .nav__prev-btn, .nav__next-btn, .nav__double-prev-btn, .nav__double-next-btn
        cursor: pointer
      .nav__prev-btn
        margin: 0 16px
      .nav__next-btn
        margin: 0 16px
      .nav__buttons-text
        span
          font-family: Open Sans, sans-serif
          font-style: normal
          font-weight: normal
          font-size: 14px
          line-height: 20px
          color: #000000
</style>
















