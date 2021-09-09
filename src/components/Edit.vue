<template>
  <section class="edit ">
    <div class="container">
      <h1>Edit user information</h1>
      <form action="" class="edit__form">
        <div class="edit__inputs">
          <div class="edit__input">
            <label for="user-name">
              User name
            </label>
            <div class="edit__input-wrapper">
              <input type="text" id="user-name" placeholder="Jerome Bell">
            </div>
          </div>
          <div class="edit__input">
            <label for="user-email">
              User Email
            </label>
            <div class="edit__input-wrapper">
              <input type="text" id="user-email" placeholder="example@gmail.com">
            </div>
          </div>
          <div class="edit__input">
            <label for="user-permissions">
              User permissions
            </label>
            <div class="edit__select-wrapper">
              <select name="" id="user-permissions">
                <option value="">Modelling admin</option>
                <option value="">Modelling admin</option>
                <option value="">Modelling admin</option>
              </select>
            </div>
          </div>
        </div>
        <div class="edit__form-buttons">
          <div @click="closeEdit" class="edit-form-cancel">
            Cancel
          </div>
          <input class="edit-form-save" value="Save">
        </div>
      </form>
    </div>
  </section>
</template>
<style lang="sass">
.edit
  background: rgba(0, 0, 0, 0.12)
  width: 100vw
  height: 100vh
  position: absolute
  left: 0
  top: 0
  z-index: 2
  display: none
  .container
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    background: #FFFFFF
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)
    border-radius: 4px
    max-width: 429px
    flex-direction: column
    padding: 16px
    h1
      font-family: Calibri, sans-serif
      font-style: normal
      font-weight: normal
      font-size: 28px
      line-height: 34px
      letter-spacing: 0.38px
      color: #19161A
      margin-bottom: 16px
    .edit__inputs
      display: flex
      flex-direction: column
      .edit__input
        display: flex
        flex-direction: column
        &:not(:last-child)
          margin-bottom: 16px
        label
          font-family: Open Sans, sans-serif
          font-style: normal
          font-weight: bold
          font-size: 12px
          line-height: 12px
          color: #4F4F4F
          margin-bottom: 8px
        .edit__input-wrapper
          width: 100%
          input
            width: 100%
            font-family: Open Sans, sans-serif
            font-style: normal
            font-weight: normal
            font-size: 14px
            line-height: 24px
            color: #0E0E0E
            border: 2px solid #4F4F4F
            padding: 8px 16px
            border-radius: 4px
        .edit__select-wrapper
          select
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
    .edit__form-buttons
      margin-top: 32px
      display: flex
      justify-content: space-between
      .edit-form-cancel
        font-family: Calibri, sans-serif
        font-style: normal
        font-weight: normal
        font-size: 16px
        line-height: 21px
        color: #0967BD
        padding: 7.5px 8px
        cursor: pointer
      .edit-form-save
        background: #29ABE2
        border-radius: 4px
        font-family: Calibri, sans-serif
        font-style: normal
        font-weight: normal
        font-size: 16px
        line-height: 21px
        color: #FFFFFF
        padding: 7.5px 16px
        width: 62px
        cursor: pointer
        text-align: center
.edit_active
  display: block
</style>
<script>
export default {
  name: 'app',
  methods: {
    closeEdit: function (event) {
      document.querySelector('.edit').style.display = 'none'
    }
  }
}
</script>























