<template>
  <section class="decline">
    <div class="container">
      <div class="decline__top">
        <h1>
          Documents
        </h1>
        <div class="decline__top-buttons">
          <div @click="openDecline" class="decline__top-decline">
            Decline documents
          </div>
          <div class="decline__top-verify">
            Verify documents
          </div>
        </div>
      </div>
      <h2>
        Identity document (ID)
      </h2>
      <div class="decline__inputs">

        <div class="decline__inputs-wrapper">
          <div class="decline__inputs-input">
            <label for="document-number">
              Document number
            </label>
            <div class="decline__inputs-input-wrapper">
              <input id="document-number" type="text" placeholder="123-456-789">
            </div>
          </div>
          <div class="decline__inputs-input">
            <label for="nationality">
              Nationality
            </label>
            <div class="decline__inputs-input-wrapper">
              <input id="nationality" type="text" placeholder="Swiss">
            </div>
          </div>
        </div>
      </div>
      <div class="decline__images">
        <div class="decline__img">
          <img src="@/assets/39.png" alt="">
        </div>
        <div class="decline__img">
          <img src="@/assets/39.png" alt="">
        </div>
      </div>
      <h2>
        Statement of income
      </h2>
      <div class="decline__images">
        <div class="decline__img">
          <img src="@/assets/39.png" alt="">
        </div>
        <div class="decline__img">
          <img src="@/assets/39.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.decline
  padding-bottom: 47px
  .container
    flex-direction: column
    padding: 16px
    background: #FFFFFF
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)
    border-radius: 4px
    .decline__top
      display: flex
      justify-content: space-between
      align-items: center
      h1
        font-family: Open Sans, sans-serif
        font-style: normal
        font-weight: 600
        font-size: 24px
        line-height: 33px
        color: #000000
      .decline__top-buttons
        display: flex
        align-items: center
        .decline__top-decline
          font-family: Open Sans, sans-serif
          font-style: normal
          font-weight: bold
          font-size: 18px
          line-height: 25px
          color: #0967BD
          cursor: pointer
          margin-right: 32px
        .decline__top-verify
          padding: 10px 14px
          background: #29ABE2
          border-radius: 4px
          font-family: Open Sans, sans-serif
          font-style: normal
          font-weight: bold
          font-size: 18px
          line-height: 25px
          color: #FFFFFF
          cursor: pointer
    h2
      font-family: Open Sans, sans-serif
      font-style: normal
      font-weight: 600
      font-size: 18px
      line-height: 25px
      color: #000000
      margin: 32px 0 0 0
    .decline__inputs
      margin-top: 8px
      .decline__inputs-wrapper
        display: flex
        .decline__inputs-input
          width: 289px
          display: flex
          flex-direction: column
          &:not(:last-child)
            margin-right: 16px
          label
            font-family: Open Sans, sans-serif
            font-style: normal
            font-weight: bold
            font-size: 12px
            line-height: 12px
            color: #4F4F4F
            margin-bottom: 8px
          .decline__inputs-input-wrapper
            input
              width: 100%
              font-family: Open Sans, sans-serif
              font-style: normal
              font-weight: normal
              font-size: 14px
              line-height: 24px
              color: #0E0E0E
              padding: 8px 16px
              border: 2px solid #4F4F4F
              border-radius: 4px
    .decline__images
      display: flex
      margin-top: 8px
      .decline__img
        width: 470px
        height: 298px
        &:not(:last-child)
          margin-right: 16px
        img
          width: 100%
          height: 100%
          object-fit: contain

</style>
<script>
export default {
  name: 'app',
  methods: {
    openDecline: function (event) {
      document.querySelector('.decline-popup').style.display = 'flex'
      document.querySelector('body').style.overflow = 'hidden'
    }
  }
}
</script>




























