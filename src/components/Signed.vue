<template>
  <section class="signed">
    <div class="container">
      <div class="request__nav">
        <div class="request__nav-items">
          <div class="request__nav-item request__nav-item-done">
            <div class="request__nav-number">
              <span>1</span>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.6665 16.0002L13.3332 22.6668L26.6665 9.3335" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="request__nav-text">
              Personal<br>
              information
            </div>
          </div>
          <div class="request__nav-item request__nav-item-blue">
            <div class="request__nav-arrow"></div>
          </div>
          <div class="request__nav-item request__nav-item-done">
            <div class="request__nav-number">
              <span>2</span>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.6665 16.0002L13.3332 22.6668L26.6665 9.3335" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="request__nav-text">
              Interest rate
            </div>
          </div>
          <div class="request__nav-item request__nav-item-blue">
            <div class="request__nav-arrow"></div>
          </div>
          <div class="request__nav-item request__nav-item-done">
            <div class="request__nav-number">
              <span>3</span>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.6665 16.0002L13.3332 22.6668L26.6665 9.3335" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="request__nav-text">
              Documents<br>
              upload
            </div>
          </div>
          <div class="request__nav-item request__nav-item-blue">
            <div class="request__nav-arrow"></div>
          </div>
          <div class="request__nav-item request__nav-item-done">
            <div class="request__nav-number">
              <span>4</span>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.6665 16.0002L13.3332 22.6668L26.6665 9.3335" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="request__nav-text">
              Document<br>
              verification
            </div>
          </div>
          <div class="request__nav-item request__nav-item-blue">
            <div class="request__nav-arrow"></div>
          </div>
          <div class="request__nav-item request__nav-item-done">
            <div class="request__nav-number">
              <span>5</span>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.6665 16.0002L13.3332 22.6668L26.6665 9.3335" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="request__nav-text">
              Video-identification
            </div>
          </div>
          <div class="request__nav-item request__nav-item-blue">
            <div class="request__nav-arrow"></div>
          </div>
          <div class="request__nav-item request__nav-item-done">
            <div class="request__nav-number">
              <span>6</span>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.6665 16.0002L13.3332 22.6668L26.6665 9.3335" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="request__nav-text">
              Offer
            </div>
          </div>
        </div>
      </div>
      <div class="signed__text">
        <h1>
          Offer is signed
        </h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor nisi, posuere vitae tincidunt et, molestie sit amet purus.
        </h2>
        <div class="signed__buttons">
          <div class="btn">
            <span>
              Download offer
            </span>
            <div class="btn-bg"></div>
          </div>
          <div class="btn">
            <span>
              My profile
            </span>
            <div class="btn-bg"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.signed
  padding: 33px 10px 122px 10px
  overflow: hidden
  @media (max-width: 600px)
    padding: 20px 10px 50px 10px
  .container
    flex-direction: column
    .request__nav
      width: 100%
      padding: 0 25px
      position: relative
      z-index: 2
      .request__nav-items
        display: flex
        justify-content: space-between
        @media (max-width: 600px)
          flex-direction: column
          align-items: center
        .request__nav-item
          display: flex
          align-items: center
          position: relative
          @media (max-width: 600px)
            flex-direction: column
          &:nth-child(2n)
            width: 100%
            margin: 0 16px
            @media (max-width: 911px)
              margin: 0 8px
            @media (max-width: 600px)
              margin: 5px 0 8px 0
          &:first-child
            .request__nav-number
              span
                margin-right: 2px
          .request__nav-number
            display: flex
            align-items: center
            justify-content: center
            background: #1D4772
            border-radius: 70px
            min-width: 48px
            height: 48px
            @media (max-width: 911px)
              min-width: 35px
              height: 35px
            span
              font-family: Rubik, sans-serif
              font-style: normal
              font-weight: bold
              font-size: 32px
              line-height: 44px
              color: #FFFFFF
              @media (max-width: 911px)
                font-size: 20px
                line-height: 137%
            svg
              display: none
          .request__nav-text
            position: absolute
            left: 50%
            transform: translate(-50%, 100%)
            font-family: Open Sans, sans-serif
            font-style: normal
            font-weight: bold
            font-size: 18px
            line-height: 25px
            text-align: center
            color: #102941
            bottom: -7px
            @media (max-width: 911px)
              font-size: 14px
              line-height: 138%
            @media (max-width: 600px)
              position: static
              transform: translate(0)
          .request__nav-arrow
            height: 2px
            background: #102941
            width: 100%
            @media (max-width: 600px)
              height: 30px
              width: 2px
        .request__nav-item-active
          .request__nav-number
            background: #29ABE2
        .request__nav-item-done
          .request__nav-number
            background: #18DD8E
            span
              display: none
            svg
              display: block
              @media (max-width: 911px)
                width: 24px
        .request__nav-item-blue
          .request__nav-arrow
            background: #29ABE2
    .signed__text
      display: flex
      flex-direction: column
      margin-top: 116px
      @media (max-width: 600px)
        margin: 20px 0 15px 0
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
        margin: 16px 0 32px 0
        max-width: 525px
        @media (max-width: 600px)
          margin: 0 0 10px 0
          font-size: 14px
          line-height: 152%
      .signed__buttons
        display: flex
        .btn
          margin: 0
          &:not(:last-child)
            margin-right: 32px
            @media (max-width: 600px)
              margin-right: auto
          span
            @media (max-width: 600px)
              width: 140px

</style>











