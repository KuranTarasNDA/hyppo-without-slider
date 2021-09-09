<template>
  <section class="full">
    <div class="container">
      <h1>
        Full mortgage calculator
      </h1>
      <div class="full__table">
        <div class="full__col">
          <span>
            Hidden score
          </span>
          <span>
            S1 - Age & Gender
          </span>
          <span>
            S2 - Employment Type
          </span>
          <span>
            S3 - Legal Charges
          </span>
          <span>
            S4 - Net Assets
          </span>
          <span>
            S5 - Debt Ratio
          </span>
          <span>
            S6 - Affordability
          </span>
        </div>
        <div class="full__col">
          <span>
            Weight
          </span>
          <span>
            5 %
          </span>
          <span>
            5 %
          </span>
          <span>
            25 %
          </span>
          <span>
            10 %
          </span>
          <span>
            15 %
          </span>
          <span>
            40 %
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.full
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
    .full__table
      display: flex
      border: 1px solid rgba(0, 0, 0, 0.8)
      margin-right: auto
      .full__col
        display: flex
        flex-direction: column
        &:first-child
          width: 240px
          border-right: 1px solid rgba(0, 0, 0, 0.8)
        &:last-child
          width: 110px
          span
            text-align: center
            padding-left: 0
        span
          &:first-child
            padding: 10px 0
            font-family: Calibri, sans-serif
            font-style: normal
            font-weight: bold
            font-size: 17px
            line-height: 22px
            text-align: center
            letter-spacing: 0.3px
            color: #19161A
          &:not(:last-child)
            border-bottom: 1px solid rgba(0, 0, 0, 0.12)
          font-family: Calibri, sans-serif
          font-style: normal
          font-weight: bold
          font-size: 17px
          line-height: 21px
          letter-spacing: 0.3px
          color: #19161A
          padding: 9.5px 0 9.5px 32px

</style>





















