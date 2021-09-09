<template>
  <section class="mortgages">
    <div class="container">
      <h1>
        My mortgages
      </h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor nisi, posuere vitae tincidunt et, molestie sit amet purus.
      </h2>
      <div class="mortgages__all">
        <div class="mortgages__all-wrapper">
          <div class="mortgages__cont">
            <div class="mortgages__all-titles">
              <div class="mortgages__all-title">
            <span>
              Date
            </span>
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L0.339745 0L17.6603 0L9 12Z" fill="#29ABE2"/>
                </svg>
              </div>
              <div class="mortgages__all-title">
            <span>
              Type
            </span>
              </div>
              <div class="mortgages__all-title">
            <span>
              Duration
            </span>
              </div>
              <div class="mortgages__all-title">
            <span>
              Stage
            </span>
              </div>
              <div class="mortgages__all-title">
            <span>
              Mortgage amount
            </span>
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L0.339745 0L17.6603 0L9 12Z" fill="#29ABE2"/>
                </svg>
              </div>
            </div>
            <div class="mortgages__wrapper">
              <div class="mortgages__mortgage mortgages__mortgage_concluded">
                <div class="mortgages__mortgage-item">
                  07.07.2021
                </div>
                <div class="mortgages__mortgage-item">
                  Fixed interest rate
                </div>
                <div class="mortgages__mortgage-item">
                  10 years
                </div>
                <div class="mortgages__mortgage-item">
                  Concluded
                </div>
                <div class="mortgages__mortgage-item">
                  450'000
                </div>
              </div>
              <div class="mortgages__mortgage mortgages__mortgage_signed">
                <div class="mortgages__mortgage-item">
                  07.07.2021
                </div>
                <div class="mortgages__mortgage-item">
                  Fixed interest rate
                </div>
                <div class="mortgages__mortgage-item">
                  10 years
                </div>
                <div class="mortgages__mortgage-item">
                  Signed
                </div>
                <div class="mortgages__mortgage-item">
                  450'000
                </div>
              </div>
              <div class="mortgages__mortgage mortgages__mortgage_error">
                <div class="mortgages__mortgage-item">
                  07.07.2021
                </div>
                <div class="mortgages__mortgage-item">
                  Fixed interest rate
                </div>
                <div class="mortgages__mortgage-item">
                  10 years
                </div>
                <div class="mortgages__mortgage-item">
                  Verification error
                </div>
                <div class="mortgages__mortgage-item">
                  450'000
                </div>
              </div>
              <div class="mortgages__mortgage mortgages__mortgage_validated">
                <div class="mortgages__mortgage-item">
                  07.07.2021
                </div>
                <div class="mortgages__mortgage-item">
                  Fixed interest rate
                </div>
                <div class="mortgages__mortgage-item">
                  10 years
                </div>
                <div class="mortgages__mortgage-item">
                  Validated
                </div>
                <div class="mortgages__mortgage-item">
                  450'000
                </div>
              </div>
              <div class="mortgages__mortgage mortgages__mortgage_identification">
                <div class="mortgages__mortgage-item">
                  07.07.2021
                </div>
                <div class="mortgages__mortgage-item">
                  Fixed interest rate
                </div>
                <div class="mortgages__mortgage-item">
                  10 years
                </div>
                <div class="mortgages__mortgage-item">
                  Video-identification
                </div>
                <div class="mortgages__mortgage-item">
                  450'000
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mortgages__all-bg"></div>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.mortgages
  padding: 40px 10px 96px 10px
  @media (max-width: 600px)
    padding: 20px 10px 50px 10px
  .container
    flex-direction: column
    height: 100%
    h1
      font-family: Rubik, sans-serif
      font-style: normal
      font-weight: bold
      font-size: 64px
      line-height: 86px
      color: #29ABE2
      position: relative
      z-index: 2
      @media (max-width: 600px)
        font-size: 40px
        line-height: 134%
    h2
      font-family: Open Sans, sans-serif
      font-style: normal
      font-weight: normal
      font-size: 17px
      line-height: 26px
      color: #102941
      max-width: 525px
      margin: 16px 0 32px 0
      position: relative
      z-index: 2
      @media (max-width: 600px)
        font-size: 14px
        line-height: 152%
        margin: 0 0 15px 0
    .mortgages__all
      position: relative
      width: 100%
      .mortgages__all-wrapper
        overflow: auto
        .mortgages__cont
          background: #FFFFFF
          z-index: 2
          position: relative
          border-radius: 10px
          display: flex
          min-width: 880px
          flex-direction: column
          .mortgages__all-titles
            display: grid
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr
            padding: 0 24px
            border-bottom: 1px solid #D8F0FA
            @media (max-width: 1024px)
              padding: 0 12px
            .mortgages__all-title
              padding: 14px 0
              display: flex
              align-items: center
              @media (max-width: 1024px)
                padding: 10px 0
              span
                font-family: Rubik, sans-serif
                font-style: normal
                font-weight: bold
                font-size: 22px
                line-height: 28px
                color: #102941
                @media (max-width: 1024px)
                  font-size: 17px
                  line-height: 127%
              svg
                margin-left: 6px
                @media (max-width: 1024px)
                  width: 14px
          .mortgages__wrapper
            display: flex
            flex-direction: column

            .mortgages__mortgage
              display: grid
              grid-template-columns: 1fr 1fr 1fr 1fr 1fr
              padding: 0 24px
              @media (max-width: 1024px)
                padding: 0 12px
              &:not(:last-child)
                border-bottom: 1px solid #D8F0FA
              .mortgages__mortgage-item
                font-family: Open Sans, sans-serif
                font-style: normal
                font-weight: normal
                font-size: 17px
                line-height: 26px
                color: #102941
                padding: 11px 0
                @media (max-width: 1024px)
                  font-size: 14px
                  line-height: 152%
                  padding: 7px 0
            .mortgages__mortgage_signed, .mortgages__mortgage_validated, .mortgages__mortgage_identification
              .mortgages__mortgage-item
                &:nth-child(4)
                  color: #29ABE2
                  font-weight: 600
            .mortgages__mortgage_error
              .mortgages__mortgage-item
                &:nth-child(4)
                  color: #E43D3D
                  font-weight: 600
            .mortgages__mortgage_concluded
              .mortgages__mortgage-item
                &:nth-child(4)
                  color: #017A1B
                  font-weight: 600
    .mortgages__all-bg
        width: 100%
        position: absolute
        left: 0
        top: 0
        background: #0D1025
        z-index: 1
        opacity: 0.06
        filter: blur(114px)
        border-radius: 10px
        height: calc(100% + 8px)
</style>




























