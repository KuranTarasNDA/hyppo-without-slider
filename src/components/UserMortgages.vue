<template>
  <section class="user-mortgages">
    <div class="container">
      <h1>
        Mortgages
      </h1>
      <div class="wrapper">
        <div class="titles">
          <div class="title">
            <span>
              Registration date
            </span>
          </div>
          <div class="title">
            <span>
              Type
            </span>
          </div>
          <div class="title">
            <span>
              Duration
            </span>
          </div>
          <div class="title">
            <span>
              Stage
            </span>
          </div>
          <div class="title">
            <span>
              Amount
            </span>
          </div>
        </div>
        <div class="all">
          <div class="row">
            <span>
              17 Oct, 2020
            </span>
            <span>
              Fixed interest rate
            </span>
            <span>
              10 years
            </span>
            <span>
              Concluded
            </span>
            <span>
              500'000 CHF
            </span>
          </div>
          <div class="row">
            <span>
              17 Oct, 2020
            </span>
            <span>
              Fixed interest rate
            </span>
            <span>
              10 years
            </span>
            <span>
              Concluded
            </span>
            <span>
              500'000 CHF
            </span>
          </div>
          <div class="row">
            <span>
              17 Oct, 2020
            </span>
            <span>
              Fixed interest rate
            </span>
            <span>
              10 years
            </span>
            <span>
              Concluded
            </span>
            <span>
              500'000 CHF
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.user-mortgages
  padding: 16px 0 47px 0
  .container
    flex-direction: column
    background: #FFFFFF
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)
    border-radius: 4px
    h1
      font-family: Open Sans, sans-serif
      font-style: normal
      font-weight: 600
      font-size: 24px
      line-height: 33px
      color: #000000
      padding: 16px
    .wrapper
      border-top: 1px solid #D1D1D3
      .titles
        display: grid
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr
      .all
        box-shadow: none
        .row
          display: grid
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr
</style>