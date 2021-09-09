<template>
  <section class="model">
    <div class="container">
      <h1>
        Simplified Model
      </h1>
      <div class="model__all">
        <div class="model__item">
          <label for="">
            Affordability
          </label>
          <div class="model__input">
            <input type="text" value="40%">
          </div>
        </div>
        <div class="model__item">
          <label for="">
            Maintenance and additional costs
          </label>
          <div class="model__input">
            <input type="text" value="1%">
          </div>
        </div>
        <div class="model__item">
          <label for="">
            First mortgage amount
          </label>
          <div class="model__input">
            <input type="text" value="65%">
          </div>
        </div>
        <div class="model__item">
          <label for="">
            Second mortgage amount
          </label>
          <div class="model__input">
            <input type="text" value="15%">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.model
  padding-bottom: 32px
  .container
    background: #FFFFFF
    flex-direction: column
    padding: 16px
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)
    h1
      font-family: Open Sans, sans-serif
      font-style: normal
      font-weight: 600
      font-size: 24px
      line-height: 33px
      color: #000000
      margin-bottom: 16px
    .model__all
      display: grid
      grid-template-columns: 1fr 1fr
      grid-gap: 16px
      max-width: 610px
      .model__item
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
        .model__input
          input
            border: 2px solid #4F4F4F
            border-radius: 4px
            font-family: Open Sans, sans-serif
            font-style: normal
            font-weight: normal
            font-size: 14px
            line-height: 24px
            color: #0E0E0E
            padding: 8px 16px
            width: 100%

</style>

























