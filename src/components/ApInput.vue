<template>
  <section class="ap-input">
    <div class="container">
      <div class="ap-input__item">
        <span>
          Registration date
        </span>
        <div class="ap-input-text">
          17 Oct, 2020
        </div>
      </div>
      <div class="ap-input__item">
        <span>
          User
        </span>
        <div class="ap-input-text">
          dianne.russell
        </div>
      </div>
      <div class="ap-input__item">
        <span>
          Email
        </span>
        <div class="ap-input-text">
          dianne.russell@gmail.com
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.ap-input
  padding: 16px 0
  .container
    padding: 16px
    background: #FFFFFF
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)
    border-radius: 4px
    .ap-input__item
      display: flex
      flex-direction: column
      width: 298px
      &:not(:last-child)
        margin-right: 32px
      span
        font-family: Open Sans, sans-serif
        font-style: normal
        font-weight: bold
        font-size: 12px
        line-height: 12px
        color: #4F4F4F
        margin-bottom: 8px
      .ap-input-text
        width: 100%
        font-family: Open Sans, sans-serif
        font-style: normal
        font-weight: normal
        font-size: 14px
        line-height: 24px
        color: #0E0E0E
        padding: 8px 16px
        border: 2px solid #F2F2F2
        border-radius: 4px
</style>