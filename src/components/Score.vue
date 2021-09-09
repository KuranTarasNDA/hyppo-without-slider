<template>
  <section class="score">
    <div class="container">
      <h1>
        Score and rating
      </h1>
      <div class="score__table">
        <div class="score__row">
          <span class="score__row-title">
            Score
          </span>
          <div class="score__row-wrapper">
            <span>0,160</span>
            <span>
              0,160
            </span>
            <span>
              0,160
            </span>
            <span>
              0,160
            </span>
            <span>
              0,160
            </span>
            <span>
              0,160
            </span>
            <span>
              0,160
            </span>
            <span>
              0,160
            </span>
            <span>
              0,160
            </span>
            <span>
              0,160
            </span>
          </div>
        </div>
        <div class="score__row">
          <div class="score__row-title">
            Rating
          </div>
          <div class="score__row-wrapper">
            <span>
              10
            </span>
            <span>
              10
            </span>
            <span>
              10
            </span>
            <span>
              10
            </span>
            <span>
              10
            </span>
            <span>
              10
            </span>
            <span>
              10
            </span>
            <span>
              10
            </span>
            <span>
              10
            </span>
            <span>
              10
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.score
  padding-top: 32px
  .container
    flex-direction: column
    padding: 16px 0 16px 0
    background: #FFFFFF
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)
    h1
      margin-bottom: 16px
      font-family: Open Sans, sans-serif
      font-style: normal
      font-weight: 600
      font-size: 24px
      line-height: 33px
      color: #000000
      padding-left: 16px
    .score__table
      display: flex
      flex-direction: column
      border: 1px solid rgba(0, 0, 0, 0.8)
      border-right: none
      border-left: none
      .score__row
        display: flex
        &:first-child
          border-bottom: 1px solid rgba(0, 0, 0, 0.8)
        .score__row-title
          font-family: Calibri, sans-serif
          font-style: normal
          font-weight: bold
          font-size: 17px
          line-height: 22px
          color: #19161A
          padding: 10px 0
          min-width: 142px
          text-align: center
          border-right: 1px solid rgba(0, 0, 0, 0.8)
        .score__row-wrapper
          display: grid
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr
          width: 100%
          span
            display: block
            font-family: Calibri, sans-serif
            font-style: normal
            font-weight: normal
            font-size: 18px
            line-height: 22px
            letter-spacing: 0.3px
            color: #19161A
            text-align: center
            padding: 10px 0
            &:not(:last-child)
              border-right: 1px solid rgba(0, 0, 0, 0.3)
</style>
















