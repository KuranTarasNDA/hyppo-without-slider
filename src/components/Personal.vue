<template>
  <section class="personal">
    <div class="container">
      <div class="personal__top">
        <h1>
          Personal information
        </h1>
        <div class="personal-top-btn">
          Edit user information
        </div>
      </div>
      <div class="personal__wrapper">
        <div class="personal__item">
          <label for="name">
            Name
          </label>
          <div class="personal__item-input">
            <input id="name" type="text" value="Dianne Russell">
          </div>
        </div>
        <div class="personal__item">
          <label for="age">
            Age
          </label>
          <div class="personal__item-input">
            <input id="age" type="text" value="24 years">
          </div>
        </div>
        <div class="personal__item">
          <label for="gender">
            Gender
          </label>
          <div class="personal__item-input">
            <input id="gender" type="text" value="Female">
          </div>
        </div>
        <div class="personal__item">
          <label for="employment-type">
            Employment type
          </label>
          <div class="personal__item-input">
            <input id="employment-type" type="text" value="Goverment official">
          </div>
        </div>
        <div class="personal__item">
          <label for="legal-charges">
            Legal charges
          </label>
          <div class="personal__item-input">
            <input id="legal-charges" type="text" value="Ongoing">
          </div>
        </div>
        <div class="personal__item">
          <label for="tel">
            Telephone number
          </label>
          <div class="personal__item-input">
            <input id="tel" type="text" value="123-45-67">
          </div>
        </div>
        <div class="personal__item">
          <label for="current-address">
            Current address
          </label>
          <div class="personal__item-input">
            <input id="current-address" type="text" value="Dübendorfstrasse 223">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.personal
  padding: 16px 0
  .container
    flex-direction: column
    padding: 16px
    background: #FFFFFF
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)
    border-radius: 4px
    .personal__top
      display: flex
      justify-content: space-between
      align-items: center
      margin-bottom: 16px
      h1
        font-family: Open Sans, sans-serif
        font-style: normal
        font-weight: 600
        font-size: 24px
        line-height: 33px
        color: #000000
      .personal-top-btn
        font-family: Open Sans, sans-serif
        font-style: normal
        font-weight: bold
        font-size: 18px
        line-height: 25px
        color: #0967BD
        padding: 4px 0
        cursor: pointer
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
</style>
























