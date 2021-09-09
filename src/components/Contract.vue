<template>
  <section class="contract">
    <div class="container">
      <h1>
        Contract settings
      </h1>
      <div class="contract__input">
        <label for="">
          Market interest rate
        </label>
        <div class="contract__input-wrapper">
          <input type="text" value="0,75">
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.contract
  padding: 32px 0 87px 0
  .container
    flex-direction: column
    background: #FFFFFF
    padding: 16px
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)
    h1
      margin-bottom: 16px
      font-family: Open Sans, sans-serif
      font-style: normal
      font-weight: 600
      font-size: 24px
      line-height: 33px
      color: #000000
    .contract__input
      display: flex
      flex-direction: column
      label
        font-family: Open Sans, sans-serif
        font-style: normal
        font-weight: bold
        font-size: 12px
        line-height: 12px
        color: #4F4F4F
        margin-bottom: 8px
      .contract__input-wrapper
        input
          font-family: Open Sans, sans-serif
          font-style: normal
          font-weight: normal
          font-size: 14px
          line-height: 24px
          color: #0E0E0E
          padding: 8px 16px
          width: 297px
          border: 2px solid #4F4F4F
          border-radius: 4px
</style>