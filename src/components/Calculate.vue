<template>
  <section class="calculate">
    <div class="container">
      <h1>
        Mortgage calculator
      </h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor nisi, posuere vitae tincidunt et, molestie sit amet purus.
        <br>
        <br>
        <router-link to="/register">Sign-Up</router-link> or <router-link to="/login">Log-in</router-link> to complete your information and receive a binding offer
      </h2>
      <div class="calculate__wrapper">
        <div class="calculate__left">
          <div class="calculate__left-items">
            <div class="calculate__left-item">
              <div class="calculate__left-item-wrapper">
                <div class="calculate__left-item-title">
                  <div class="calculate__left-item-num">
                    <span>1</span>
                  </div>
                  <p>Asset information</p>
                </div>
                <div class="calculate__left-rows">
                  <div class="calculate__left-row">
                    <span>Value of the property</span>
                    <span>CHF</span>
                    <div class="calculate__left-input">
                      <input type="text" value="500'000">
                    </div>
                  </div>
                  <div class="calculate__left-row">
                    <span>Down payment</span>
                    <span>CHF</span>
                    <div class="calculate__left-input">
                      <input type="text" value="100'000">
                    </div>
                  </div>
                  <div class="calculate__left-row">
                    <span>Annual Income</span>
                    <span>CHF</span>
                    <div class="calculate__left-input">
                      <input type="text" value="120'000">
                    </div>
                  </div>
                </div>
                <div class="calculate__left-link">
                  About property value and asset information.
                </div>
              </div>
              <div class="calculate__left-item-bg"></div>
            </div>
            <div class="calculate__left-item">
              <div class="calculate__left-item-wrapper">
                <div class="calculate__left-item-title">
                  <div class="calculate__left-item-num">
                    <span>2</span>
                  </div>
                  <p>Personal information</p>
                </div>
                <div class="calculate__left-rows">
                  <div class="calculate__left-row">
                    <span>Age</span>
                    <span>Уears</span>
                    <div class="calculate__left-input">
                      <input type="text" value="24">
                    </div>
                  </div>
                  <div class="calculate__left-row">
                    <span>Gender</span>
                    <div class="calculate__left-radios">
                      <div class="calculate__left-radio">
                        <input name="sex" id="male" type="radio" checked>
                        <label for="male">Male</label>
                      </div>
                      <div class="calculate__left-radio">
                        <input name="sex" id="female" type="radio">
                        <label for="female">Female</label>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="calculate__left-link">
                  About personal information fields.
                </div>
              </div>
              <div class="calculate__left-item-bg"></div>
          </div>
            <div class="calculate__left-item">
              <div class="calculate__left-item-wrapper">
                <div class="calculate__left-item-title">
                  <div class="calculate__left-item-num">
                    <span>3</span>
                  </div>
                  <p>Mortgage information</p>
                </div>
                <div class="calculate__left-rows">
                  <div class="calculate__left-row">
                    <span>Mortgage amount </span>
                    <span>CHF</span>
                    <div class="calculate__left-input">
                      <input type="text" value="500'000">
                    </div>
                  </div>
                  <div class="calculate__left-row">
                    <span>Type of mortgage</span>
                    <div class="calculate__left-select">
                      <select name="" id="type">
                        <option value="">Fixed interest rate</option>
                        <option value="">value 2</option>
                        <option value="">value 3</option>
                      </select>
                      <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12L0.339745 0L17.6603 0L9 12Z" fill="#29ABE2"/>
                      </svg>
                    </div>
                  </div>
                  <div class="calculate__left-row">
                    <span>Duration of the mortgage</span>
                    <div class="calculate__left-select">
                      <select name="" id="duration">
                        <option value="">10 years</option>
                        <option value="">value 2</option>
                        <option value="">value 3</option>
                      </select>
                      <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12L0.339745 0L17.6603 0L9 12Z" fill="#29ABE2"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="calculate__left-link">
                  Information about Mortgages.
                </div>
              </div>
              <div class="calculate__left-item-bg"></div>
            </div>
            <div class="calculate__left-item">
              <p>
                <router-link to="/register">Sign-Up</router-link> or <router-link to="/login">Log-in</router-link> to complete the full mortgage interest rate calculator and receive a binding offer.
              </p>
              <router-link to="/register" class="calculate__left-sign">
                <span>Sign up</span>
                <div class="calculate__left-sign-bg"></div>
              </router-link>
            </div>
        </div>
      </div>
        <div class="calculate__right">
          <div class="calculate__amount">
            <div class="calculate__amount-left">
              <div class="calculate__amount-left-top">
                <p>
                  Mortgage amount
                </p>
                <p>
                  CHF
                  <span>
                    450'000
                  </span>
                </p>
              </div>
              <div class="calculate__amount-left-bot">
                <p>
                  Own Capital
                </p>
                <p>
                  CHF
                  <span>
                    100'000
                  </span>
                </p>
              </div>
            </div>
            <div class="calculate__amount-right">
              <div class="calculate__amount-right-wrapper">
                <div class="calculate__amount-percent">
                  80%
                </div>
                <div class="calculate__amount-right-rectangle">

                </div>
              </div>
              <div class="calculate__amount-right-bg"></div>
            </div>
          </div>
          <div class="calculate__numbers">
            <div class="calculate__number">
              <span>Affordability</span>
              <span>Affordable</span>
              <div class="calculate-i">
                <div class="calculate-i-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0H26L15.721 22.1393C14.6459 24.4549 11.3541 24.4549 10.279 22.1393L0 0H13Z" fill="white"/>
                  </svg>
                </div>
                <svg class="calculate-i-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="#102941"/>
                  </g>
                </svg>
              </div>
            </div>
            <div class="calculate__number">
              <span>Total monthly payments</span>
              <span>CHF 2'986</span>
            </div>
            <div class="calculate__number">
              <span>Amortization costs</span>
              <span>CHF 1'667</span>
            </div>
            <div class="calculate__number">
              <span>Interest payments</span>
              <span>CHF 1'667</span>
            </div>
            <div class="calculate__number">
              <span>Monthly mortgage payments</span>
              <span>CHF 417</span>
            </div>
            <div class="calculate__number">
              <span>Monthly amortization costs</span>
              <span>CHF 417</span>
            </div>
            <div class="calculate__number">
              <span>Monthly interest payments</span>
              <span>CHF 417</span>
            </div>
          </div>
        </div>
    </div>
    </div>
  </section>
</template>
<style lang="sass">
.calculate
  padding: 40px 10px 120px 10px
  overflow: hidden
  @media (max-width: 600px)
    padding: 20px 10px 50px 10px
  .container
    flex-direction: column
    h1
      font-family: Rubik, sans-serif
      font-style: normal
      font-weight: bold
      font-size: 64px
      line-height: 86px
      color: #29ABE2
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
      @media (max-width: 600px)
        font-size: 14px
        line-height: 152%
        margin: 5px 0 15px 0
      a
        color: #29ABE2
        font-weight: 700
    .calculate__wrapper
      display: flex
      justify-content: space-between
      @media (max-width: 1024px)
        flex-direction: column
      .calculate__left
        width: 57.7%
        @media (max-width: 1200px)
          width: 50%
        @media (max-width: 1024px)
          width: 100%
          margin-bottom: 50px
        .calculate__left-item
          position: relative
          display: flex
          flex-direction: column
          &:not(:last-child)
            margin-bottom: 64px
            @media (max-width: 600px)
              margin-bottom: 20px
          &:last-child
            margin-top: -32px
            background: none
            border-radius: 0
            padding: 0
            @media (max-width: 600px)
              margin-top: 0
          .calculate__left-item-wrapper
            display: flex
            flex-direction: column
            padding: 24px 24px 21px 24px
            background: #ffffff
            border-radius: 24px
            position: relative
            z-index: 2
            @media (max-width: 600px)
              padding: 15px
              border-radius: 12px
          .calculate__left-item-bg
            position: absolute
            background: #0D1025
            opacity: 0.06
            filter: blur(114px)
            border-radius: 10px
            width: 100%
            height: calc(100% + 8px)
            top: 0
            left: 0
            z-index: 1
          .calculate__left-item-title
            display: flex
            align-items: center
            margin-bottom: 32px
            .calculate__left-item-num
              width: 48px
              height: 48px
              background: #29ABE2
              display: flex
              align-items: center
              justify-content: center
              border-radius: 50%
              @media (max-width: 600px)
                width: 30px
                height: 30px
              span
                font-family: Rubik, sans-serif
                font-style: normal
                font-weight: bold
                font-size: 32px
                line-height: 44px
                color: #FFFFFF
                @media (max-width: 600px)
                  font-size: 20px
                  line-height: 137%
            p
              font-family: Rubik, sans-serif
              font-style: normal
              font-weight: bold
              font-size: 24px
              line-height: 25px
              color: #102941
              margin-left: 16px
              margin-bottom: 0
              @media (max-width: 600px)
                font-size: 20px
                line-height: 105%
          .calculate__left-rows
            display: flex
            flex-direction: column
            margin-bottom: 48px
            @media (max-width: 600px)
              margin-bottom: 20px
            .calculate__left-row
              display: flex
              align-items: center
              @media (max-width: 600px)
                flex-direction: column
              &:not(:last-child)
                margin-bottom: 48px
                @media (max-width: 600px)
                  margin-bottom: 20px
              span
                font-family: Open Sans, sans-serif
                font-style: normal
                font-weight: normal
                font-size: 17px
                line-height: 26px
                color: #102941
                margin-right: 20px
                @media (max-width: 600px)
                  margin-right: 0
                  margin-bottom: 3px
                &:first-child
                  margin-right: auto
                  @media (max-width: 600px)
                    margin-right: 0
                    margin-bottom: 10px
              .calculate__left-input
                margin-right: 123px
                width: 100%
                max-width: 250px
                @media (max-width: 1200px)
                  margin-right: 0
                input
                  width: 100%
                  border: 1px solid #29ABE2
                  box-sizing: border-box
                  border-radius: 10px
                  padding: 17px 16px
                  font-family: Open Sans, sans-serif
                  font-style: normal
                  font-weight: normal
                  font-size: 17px
                  line-height: 26px
                  color: #102941
              .calculate__left-select
                width: 100%
                max-width: 250px
                margin-right: 123px
                position: relative
                @media (max-width: 1200px)
                  margin-right: 0
                &:after
                  content: ''
                  position: absolute
                  top: 50%
                  right: 1px
                  pointer-events: none
                  transform: translateY(-50%)
                  width: 20px
                  height: 20px
                  background: #ffffff
                select
                  width: 100%
                  font-family: Open Sans, sans-serif
                  font-style: normal
                  font-weight: normal
                  font-size: 17px
                  line-height: 26px
                  color: #102941
                  padding: 17px 16px
                  border: 1px solid #29ABE2
                  box-sizing: border-box
                  border-radius: 10px
                svg
                  position: absolute
                  right: 22px
                  pointer-events: none
                  top: 50%
                  transform: translateY(-50%)
              .calculate__left-radios
                margin-right: 283px
                @media (max-width: 1200px)
                  margin-right: 160px
                &:after
                  content: ''
                  position: absolute
                  width: 24px
                  height: 28px
                  background: url("../assets/33.png")
                  background-size: contain
                  right: 24px
                  bottom: 113px
                .calculate__left-radio
                  display: flex
                  align-items: center
                  &:not(:last-child)
                    margin-bottom: 14px
                  label
                    font-family: Open Sans, sans-serif
                    font-style: normal
                    font-weight: normal
                    font-size: 17px
                    line-height: 26px
                    color: #102941
                    margin-left: 8px
                  input
                    width: 24px
                    height: 24px

          .calculate__left-link
            font-family: Open Sans, sans-serif
            cursor: pointer
            font-style: normal
            font-weight: bold
            font-size: 18px
            line-height: 25px
            margin-right: auto
            color: #29ABE2
            @media (max-width: 600px)
              font-size: 16px
              line-height: 138%
          p
            font-family: Open Sans, sans-serif
            font-style: normal
            font-weight: 400
            font-size: 17px
            line-height: 24.51px
            color: #102941
            max-width: 525px
            margin-bottom: 32px
            @media (max-width: 600px)
              font-size: 14px
              line-height: 144%
              margin-bottom: 10px
            a
              color: #29ABE2
              font-weight: bold
              font-size: 18px
              line-height: 25px
              @media (max-width: 600px)
                font-size: 16px
                line-height: 144%
          .calculate__left-sign
            margin-right: auto
            position: relative
            display: flex
            span
              cursor: pointer
              background: #29ABE2
              border-radius: 10px
              font-family: Open Sans, sans-serif
              font-style: normal
              font-weight: bold
              font-size: 18px
              line-height: 25px
              color: #FFFFFF
              padding: 17.5px 92px
              position: relative
              z-index: 2
              @media (max-width: 600px)
                padding: 7.5px
                text-align: center
                width: 170px
                font-size: 16px
                line-height: 138%
            .calculate__left-sign-bg
              width: 211px
              height: 60px
              position: absolute
              left: 50%
              transform: translate(-50%, 50%)
              top: 0
              background: rgba(95, 122, 126, 0.22)
              filter: blur(54px)
              border-radius: 10px
              z-index: 1
              pointer-events: none
      .calculate__right
        display: flex
        width: 38.5%
        flex-direction: column
        @media (max-width: 1200px)
          width: 48%
        @media (max-width: 1024px)
          width: 100%
        .calculate__amount
          display: flex
          justify-content: space-between
          margin-bottom: 72px
          .calculate__amount-left
            display: flex
            flex-direction: column
            justify-content: space-between
            @media (max-width: 600px)
              min-width: 120px
            p
              font-family: Open Sans, sans-serif
              font-style: normal
              font-weight: normal
              font-size: 17px
              line-height: 26px
              color: #102941
              @media (max-width: 600px)
                font-size: 14px
                line-height: 152%
              &:first-child
                margin-bottom: 4px
              span
                font-family: Rubik, sans-serif
                font-style: normal
                font-weight: bold
                font-size: 22px
                line-height: 28px
                color: #102941
                @media (max-width: 600px)
                  font-size: 18px
                  line-height: 127%
          .calculate__amount-right
            width: 61.8%
            position: relative
            display: flex
            @media (max-width: 600px)
              margin-left: 30px
            &:before
              content: ''
              position: absolute
              left: 19px
              transform: translateX(-100%)
              bottom: 24px
              width: 55px
              height: 6px
              background: #18DD8E
              border-radius: 3px
              z-index: 3
            .calculate__amount-right-wrapper
              height: 279px
              width: 293px
              background: #FFFFFF
              position: relative
              border-radius: 24px
              overflow: hidden
              z-index: 2
              @media (max-width: 1200px)
                width: 100%
              @media (max-width: 600px)
                height: 200px
                border-radius: 12px
              .calculate__amount-percent
                font-family: Rubik, sans-serif
                font-style: normal
                font-weight: bold
                font-size: 22px
                line-height: 28px
                color: #102941
                position: absolute
                left: 50%
                transform: translateX(-50%)
                top: 110px
                z-index: 2
                @media (max-width: 600px)
                  font-size: 18px
                  line-height: 127%
                  top: 80px
              .calculate__amount-right-rectangle
                width: 100%
                height: 54px
                position: absolute
                background: #18DD8E
                bottom: 0
                left: 0
                z-index: 1
            .calculate__amount-right-bg
              background: #0D1025
              opacity: 0.06
              position: absolute
              top: 0
              left: 0
              width: 100%
              height: calc(100% + 8px)
              z-index: 1
              filter: blur(114px)
              border-radius: 10px
        .calculate__numbers
          display: flex
          flex-direction: column
          .calculate__number
            display: flex
            align-items: center
            &:not(:last-child)
              margin-bottom: 16px
              @media (max-width: 600px)
                margin-bottom: 7px
            &:first-child
              span
                font-family: Rubik, sans-serif
                font-style: normal
                font-weight: bold
                font-size: 22px
                line-height: 28px
                color: #102941
                @media (max-width: 600px)
                  font-size: 18px
                  line-height: 127%
            &:nth-child(2)
              span
                font-family: Rubik, sans-serif
                font-style: normal
                font-weight: bold
                font-size: 22px
                line-height: 28px
                color: #102941
                @media (max-width: 600px)
                  font-size: 18px
                  line-height: 127%
            span
              font-family: Open Sans, sans-serif
              font-style: normal
              font-weight: normal
              font-size: 17px
              line-height: 26px
              color: #102941
              @media (max-width: 600px)
                font-size: 14px
                line-height: 152%
              &:first-child
                margin-right: auto
            .calculate-i
              margin-left: 10px
              position: relative
              display: flex
              align-items: center
              @media (max-width: 600px)
                margin-left: 5px
              svg
                @media (max-width: 600px)
                  width: 18px
                  height: 18px
              &:hover
                .calculate-i-text
                  opacity: 1
                  visibility: visible
              .calculate-i-text
                position: absolute
                width: 343px
                opacity: 0
                visibility: hidden
                transition-duration: 0.2s
                right: -24px
                top: 3px
                transform: translateY(-100%)
                display: flex
                flex-direction: column
                align-items: flex-end
                z-index: 2
                &:after
                  content: ''
                  position: absolute
                  width: 100%
                  height: 100%
                  top: 0
                  pointer-events: none
                  left: 0
                  background: #0D1025
                  opacity: 0.06
                  filter: blur(114px)
                  border-radius: 10px
                  z-index: -1
                p
                  font-family: Open Sans, sans-serif
                  font-style: normal
                  font-weight: normal
                  font-size: 17px
                  line-height: 26px
                  color: #000000
                  padding: 10px
                  background: #FFFFFF
                  border-radius: 12px
                svg
                  margin-right: 21px





</style>


















