<template>
  <section class="fixed">
    <div class="container">
      <div class="fixed__wrapper">
        <div class="fixed__cont">
          <div class="fixed-title">
            Fixed Interest Rate
          </div>
          <div class="fixed__duration">
            <span>
              Duration of the mortgage
            </span>
            <div class="fixed__duration-select">
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
          <div class="fixed__percents">
            <span>Interest rate</span>
            <span>1'2475</span>
            <span>%</span>
          </div>
          <div class="fixed__all">
            <div class="fixed__item">
              <div class="fixed__num">
                <span>
                  1
                </span>
              </div>
              <div class="fixed__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor nisi, posuere vitae tincidunt et, molestie sit amet purus. Doloremque et molestiae perspiciatis quis voluptas ut sed. Omnis praesentium doloremque ipsa eveniet.
              </div>
            </div>
            <div class="fixed__item">
              <div class="fixed__num">
                <span>
                  2
                </span>
              </div>
              <div class="fixed__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor nisi, posuere vitae tincidunt et, molestie sit amet purus. Doloremque et molestiae perspiciatis quis voluptas ut sed. Omnis praesentium doloremque ipsa eveniet.
              </div>
            </div>
            <div class="fixed__item">
              <div class="fixed__num">
                <span>
                  3
                </span>
              </div>
              <div class="fixed__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor nisi, posuere vitae tincidunt et, molestie sit amet purus. Doloremque et molestiae perspiciatis quis voluptas ut sed. Omnis praesentium doloremque ipsa eveniet.
              </div>
            </div>
          </div>
        </div>
        <div class="fixed-bg"></div>
      </div>
      <div class="fixed__btn">
        <span>
          Change interest rate
        </span>
        <div class="fixed__btn-bg"></div>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.fixed
  padding: 0 10px
  .container
    flex-direction: column
    .fixed__wrapper
      position: relative
      .fixed__cont
        position: relative
        z-index: 2
        background: #FFFFFF
        border-radius: 24px
        padding: 35px 24px 48px 24px
        @media (max-width: 600px)
          padding: 15px
        .fixed-title
          font-family: Rubik, sans-serif
          font-style: normal
          font-weight: bold
          font-size: 24px
          line-height: 25px
          margin-bottom: 44px
          color: #102941
          @media (max-width: 600px)
            font-size: 20px
            line-height: 105%
            margin-bottom: 15px
        .fixed__duration
          display: flex
          align-items: center
          margin-bottom: 48px
          @media (max-width: 600px)
            margin-bottom: 15px
            flex-direction: column
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
              margin-bottom: 4px
          .fixed__duration-select
            display: flex
            position: relative
            width: 100%
            max-width: 250px
            margin-left: 102px
            @media (max-width: 600px)
              margin: 0
            &:after
              content: ''
              position: absolute
              right: 2px
              top: 50%
              transform: translateY(-50%)
              width: 20px
              height: 20px
              background: #fff
            select
              border: 1px solid #102941
              box-sizing: border-box
              border-radius: 10px
              font-family: Open Sans, sans-serif
              font-style: normal
              font-weight: normal
              font-size: 17px
              line-height: 26px
              color: #102941
              padding: 17px 16px
              width: 100%
              @media (max-width: 600px)
                padding: 10px
                font-size: 14px
                line-height: 152%
                border-radius: 5px
            svg
              position: absolute
              right: 16px
              z-index: 2
              top: 50%
              transform: translateY(-50%)
              @media (max-width: 600px)
                width: 12px
              path
                fill: #102941
        .fixed__percents
          span
            margin-right: 10px
            &:first-child
              font-family: Open Sans, sans-serif
              font-style: normal
              font-weight: normal
              font-size: 17px
              line-height: 26px
              color: #102941
              @media (max-width: 600px)
                font-size: 14px
                line-height: 152%
            &:nth-child(2)
              font-family: Rubik, sans-serif
              font-style: normal
              font-weight: 700
              font-size: 42px
              line-height: 55px
              color: #1d4772
              @media (max-width: 600px)
                font-size: 30px
                line-height: 130%
            &:last-child
              font-family: Rubik, sans-serif
              font-style: normal
              font-weight: 700
              font-size: 22px
              line-height: 28px
              color: #1d4772
              @media (max-width: 600px)
                font-size: 16px
                line-height: 127%
        .fixed__all
          display: flex
          margin-top: 24px
          flex-direction: column
          @media (max-width: 600px)
            margin-top: 15px
          .fixed__item
            display: flex
            align-items: flex-start
            &:not(:last-child)
              margin-bottom: 16px
              @media (max-width: 600px)
                margin-bottom: 8px
            .fixed__num
              background: #FFFFFF
              min-width: 48px
              height: 48px
              display: flex
              align-items: center
              justify-content: center
              border-radius: 70px
              @media (max-width: 600px)
                min-width: 30px
                height: 30px
              span
                font-family: Rubik, sans-serif
                font-style: normal
                font-weight: bold
                font-size: 32px
                line-height: 44px
                color: #29ABE2
                @media (max-width: 600px)
                  font-size: 24px
                  line-height: 137%
            .fixed__item-text
              font-family: Open Sans, sans-serif
              font-style: normal
              font-weight: normal
              font-size: 17px
              line-height: 26px
              color: #102941
              margin-left: 8px
              @media (max-width: 600px)
                font-size: 14px
                line-height: 152%

    .fixed__btn
      cursor: pointer
      display: flex
      position: relative
      margin: 32px auto 58px 0
      @media (max-width: 600px)
        margin: 15px auto 25px 0
      span
        background: #29ABE2
        border-radius: 10px
        font-family: Open Sans, sans-serif
        font-style: normal
        font-weight: bold
        font-size: 18px
        cursor: pointer
        line-height: 25px
        color: #FFFFFF
        padding: 17.5px 0
        width: 250px
        text-align: center
        position: relative
        z-index: 2
        @media (max-width: 600px)
          width: 190px
          padding: 7.5px 0
          text-align: center
          font-size: 16px
          line-height: 138%
      .fixed__btn-bg
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
    .fixed-bg
        z-index: 1
        width: 100%
        height: calc(100% + 8px)
        position: absolute
        left: 0
        top: 0
        background: #0D1025
        opacity: 0.06
        filter: blur(114px)
        border-radius: 10px
</style>