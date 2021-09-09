<template>
  <section class="decline-popup">
    <div class="container">
      <h1>
        Decline documents
      </h1>
      <h2>
        Decline reason
      </h2>
      <p>
        Dear customer, the photo of your ID has a very bad quality. Because of that, we are unable to review your information. Please provide us with a more high-quality photo of your ID.
      </p>
      <div class="decline-popup__buttons">
        <div @click="closeDecline" class="decline-popup-cancel">
          Cancel
        </div>
        <div class="decline-popup-decline">
          Decline
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.decline-popup
  background: rgba(0, 0, 0, 0.12)
  z-index: 10
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  display: none
  .container
    padding: 16px
    background: #FFFFFF
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)
    border-radius: 4px
    margin: auto
    flex-direction: column
    width: 429px
    h1
      font-family: Calibri, sans-serif
      font-style: normal
      font-weight: normal
      font-size: 28px
      line-height: 34px
      letter-spacing: 0.38px
      color: #19161A
    h2
      font-family: Open Sans, sans-serif
      font-style: normal
      font-weight: bold
      font-size: 12px
      line-height: 12px
      color: #4F4F4F
      margin: 16px 0 8px 0
    p
      font-family: Open Sans, sans-serif
      font-style: normal
      font-weight: normal
      font-size: 14px
      line-height: 24px
      color: #0E0E0E
      padding: 8px 12px 8px 16px
      border: 2px solid #4F4F4F
      border-radius: 4px
    .decline-popup__buttons
      display: flex
      justify-content: space-between
      align-items: center
      margin-top: 32px
      .decline-popup-cancel
        font-family: Calibri, sans-serif
        font-style: normal
        font-weight: normal
        font-size: 16px
        line-height: 21px
        color: #0967BD
        cursor: pointer
      .decline-popup-decline
        background: #29ABE2
        border-radius: 4px
        font-family: Calibri, sans-serif
        font-style: normal
        font-weight: normal
        font-size: 16px
        line-height: 21px
        color: #FFFFFF
        padding: 7.5px 16px
        cursor: pointer
</style>
<script>
export default {
  name: 'app',
  methods: {
    closeDecline: function (event) {
      document.querySelector('.decline-popup').style.display = 'none'
      document.querySelector('body').style.overflow = 'visible'
    }
  }
}
</script>












