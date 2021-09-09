<template>
  <section class="user-documents">
    <div class="container">
      <h1>
        Documents
      </h1>
      <div class="personal__wrapper">
        <div class="personal__item">
          <label for="document-number">
            Document number
          </label>
          <div class="personal__item-input">
            <input id="document-number" type="text" value="123-456-789">
          </div>
        </div>
        <div class="personal__item">
          <label for="nationality">
            Nationality
          </label>
          <div class="personal__item-input">
            <input id="nationality" type="text" value="Swiss">
          </div>
        </div>
      </div>
      <div class="user-documents__all">
        <div class="user-documents__item">
          <img src="@/assets/39.png" alt="">
        </div>
        <div class="user-documents__item">
          <img src="@/assets/39.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.user-documents
  .container
    padding: 16px
    background: #FFFFFF
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)
    border-radius: 4px
    flex-direction: column
    h1
      font-family: Open Sans, sans-serif
      font-style: normal
      font-weight: 600
      font-size: 24px
      line-height: 33px
      color: #000000
      margin-bottom: 16px
    .personal__wrapper
      display: grid
      grid-template-columns: 1fr 1fr 1fr 1fr
      grid-gap: 16px
      .personal__item
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
        .personal__item-input
          display: flex
          width: 100%
          input
            width: 100%
            font-family: Open Sans, sans-serif
            font-style: normal
            font-weight: normal
            font-size: 14px
            line-height: 24px
            color: #0E0E0E
            padding: 8px 16px
            border: 2px solid #F2F2F2
            border-radius: 4px
    .user-documents__all
      display: flex
      margin-top: 16px
      .user-documents__item
        width: 470px
        height: 298px
        display: flex
        &:not(:last-child)
          margin-right: 16px
        img
          width: 100%
          height: 100%
          object-fit: contain
</style>




















