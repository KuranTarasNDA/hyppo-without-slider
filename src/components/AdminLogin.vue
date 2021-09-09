<template>
  <section class="admin-log">
    <div class="container">
      <div class="admin-log__wrapper">
        <h1>
          Log in
        </h1>
        <h2>
          to continue to HappyHypo
        </h2>
        <div class="admin-log__form">
          <div class="admin-log-inputs">
            <div class="admin-log__input">
              <input type="email" placeholder="Enter your Email" required>
            </div>
            <div class="admin-log__input input-password">
              <input type="password" placeholder="Enter your Password" required>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5ZM12 17.5C9.24 17.5 7 15.26 7 12.5C7 9.74 9.24 7.5 12 7.5C14.76 7.5 17 9.74 17 12.5C17 15.26 14.76 17.5 12 17.5ZM9 12.5C9 10.84 10.34 9.5 12 9.5C13.66 9.5 15 10.84 15 12.5C15 14.16 13.66 15.5 12 15.5C10.34 15.5 9 14.16 9 12.5Z" fill="#29ABE2"/>
              </svg>
            </div>
          </div>
          <div class="admin-log__bot">
            <div class="admin-log-forget">
              Forgot password?
            </div>
            <input type="submit" value="Login" class="admin-log-btn">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.admin-log
  .container
    max-width: 100%
    height: 100vh
    background: #f9f9f9
    .admin-log__wrapper
      display: flex
      margin: auto
      flex-direction: column
      padding: 32px
      width: 392px
      background: #FFFFFF
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2)
      h1, h2
        font-family: Calibri, sans-serif
        font-style: normal
        font-weight: normal
        font-size: 28px
        line-height: 34px
        text-align: center
        letter-spacing: 0.38px
        color: #19161A
      h2
        font-size: 20px
        line-height: 25px
        margin-bottom: 24px
      .admin-log-inputs
        display: flex
        flex-direction: column
        margin-bottom: 24px
        .admin-log__input
          &:not(:last-child)
            margin-bottom: 24px
          input
            width: 100%
            border-radius: 4px
            border: 1px solid #828282
            padding: 17px 16px
            font-family: Calibri, sans-serif
            font-style: normal
            font-weight: normal
            font-size: 17px
            line-height: 22px
            font-feature-settings: 'liga' off, 'calt' off, 'rclt' off
            color: #19161A
        .input-password
          position: relative
          svg
            position: absolute
            cursor: pointer
            right: 16px
            top: 50%
            transform: translateY(-50%)
      .admin-log__bot
        display: flex
        justify-content: space-between
        align-items: center
        .admin-log-forget
          font-family: Calibri, sans-serif
          font-style: normal
          font-weight: normal
          font-size: 16px
          line-height: 21px
          color: #29ABE2
          padding: 7.5px 8px
          cursor: pointer
        .admin-log-btn
          font-family: Calibri, sans-serif
          font-style: normal
          font-weight: bold
          font-size: 17px
          line-height: 22px
          letter-spacing: 0.3px
          color: #FFFFFF
          background: #29ABE2
          padding: 7px 16px
          cursor: pointer
          border-radius: 4px
</style>
















