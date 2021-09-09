<template>
  <section class="ap-panel">
    <div class="container">
      <div class="all">
        <div class="titles">
          <div class="title">
            <span>
              Name
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10L12 5L17 10H7Z" fill="black"/>
              <path d="M17 14L12 19L7 14H17Z" fill="black"/>
            </svg>
          </div>
          <div class="title">
            <span>
              Email
            </span>
          </div>
          <div class="title">
            <span>
              Role
            </span>
          </div>
          <div class="title">
            <span>
               Action
            </span>
          </div>
        </div>
        <div class="wrapper">
          <div class="row">
            <span>
              Dianne Russell
            </span>
            <span>
              dianne.russell@gmail.com
            </span>
            <span>
              modelling admin
            </span>
            <div class="row__buttons">
              <div v-on:click="openEdit" class="row__btn">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 7H6.5C5.96957 7 5.46086 7.21071 5.08579 7.58579C4.71071 7.96086 4.5 8.46957 4.5 9V18C4.5 18.5304 4.71071 19.0391 5.08579 19.4142C5.46086 19.7893 5.96957 20 6.5 20H15.5C16.0304 20 16.5391 19.7893 16.9142 19.4142C17.2893 19.0391 17.5 18.5304 17.5 18V15" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.5 15H12.5L21 6.5C21.3978 6.10217 21.6213 5.56261 21.6213 5C21.6213 4.43739 21.3978 3.89782 21 3.5C20.6022 3.10217 20.0626 2.87868 19.5 2.87868C18.9374 2.87868 18.3978 3.10217 18 3.5L9.5 12V15Z" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.5 5L19.5 8" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="row__btn">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 7H20.5" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10.5 11V17" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.5 11V17" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.5 7L6.5 19C6.5 19.5304 6.71071 20.0391 7.08579 20.4142C7.46086 20.7893 7.96957 21 8.5 21H16.5C17.0304 21 17.5391 20.7893 17.9142 20.4142C18.2893 20.0391 18.5 19.5304 18.5 19L19.5 7" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.5 7V4C9.5 3.73478 9.60536 3.48043 9.79289 3.29289C9.98043 3.10536 10.2348 3 10.5 3H14.5C14.7652 3 15.0196 3.10536 15.2071 3.29289C15.3946 3.48043 15.5 3.73478 15.5 4V7" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="row">
            <span>
              Dianne Russell
            </span>
            <span>
              dianne.russell@gmail.com
            </span>
            <span>
              modelling admin
            </span>
            <div class="row__buttons">
              <div v-on:click="openEdit" class="row__btn">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 7H6.5C5.96957 7 5.46086 7.21071 5.08579 7.58579C4.71071 7.96086 4.5 8.46957 4.5 9V18C4.5 18.5304 4.71071 19.0391 5.08579 19.4142C5.46086 19.7893 5.96957 20 6.5 20H15.5C16.0304 20 16.5391 19.7893 16.9142 19.4142C17.2893 19.0391 17.5 18.5304 17.5 18V15" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.5 15H12.5L21 6.5C21.3978 6.10217 21.6213 5.56261 21.6213 5C21.6213 4.43739 21.3978 3.89782 21 3.5C20.6022 3.10217 20.0626 2.87868 19.5 2.87868C18.9374 2.87868 18.3978 3.10217 18 3.5L9.5 12V15Z" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.5 5L19.5 8" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="row__btn">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 7H20.5" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10.5 11V17" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.5 11V17" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.5 7L6.5 19C6.5 19.5304 6.71071 20.0391 7.08579 20.4142C7.46086 20.7893 7.96957 21 8.5 21H16.5C17.0304 21 17.5391 20.7893 17.9142 20.4142C18.2893 20.0391 18.5 19.5304 18.5 19L19.5 7" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.5 7V4C9.5 3.73478 9.60536 3.48043 9.79289 3.29289C9.98043 3.10536 10.2348 3 10.5 3H14.5C14.7652 3 15.0196 3.10536 15.2071 3.29289C15.3946 3.48043 15.5 3.73478 15.5 4V7" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="row">
            <span>
              Dianne Russell
            </span>
            <span>
              dianne.russell@gmail.com
            </span>
            <span>
              modelling admin
            </span>
            <div class="row__buttons">
              <div v-on:click="openEdit" class="row__btn">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 7H6.5C5.96957 7 5.46086 7.21071 5.08579 7.58579C4.71071 7.96086 4.5 8.46957 4.5 9V18C4.5 18.5304 4.71071 19.0391 5.08579 19.4142C5.46086 19.7893 5.96957 20 6.5 20H15.5C16.0304 20 16.5391 19.7893 16.9142 19.4142C17.2893 19.0391 17.5 18.5304 17.5 18V15" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.5 15H12.5L21 6.5C21.3978 6.10217 21.6213 5.56261 21.6213 5C21.6213 4.43739 21.3978 3.89782 21 3.5C20.6022 3.10217 20.0626 2.87868 19.5 2.87868C18.9374 2.87868 18.3978 3.10217 18 3.5L9.5 12V15Z" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.5 5L19.5 8" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="row__btn">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 7H20.5" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10.5 11V17" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.5 11V17" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.5 7L6.5 19C6.5 19.5304 6.71071 20.0391 7.08579 20.4142C7.46086 20.7893 7.96957 21 8.5 21H16.5C17.0304 21 17.5391 20.7893 17.9142 20.4142C18.2893 20.0391 18.5 19.5304 18.5 19L19.5 7" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.5 7V4C9.5 3.73478 9.60536 3.48043 9.79289 3.29289C9.98043 3.10536 10.2348 3 10.5 3H14.5C14.7652 3 15.0196 3.10536 15.2071 3.29289C15.3946 3.48043 15.5 3.73478 15.5 4V7" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="row">
            <span>
              Dianne Russell
            </span>
            <span>
              dianne.russell@gmail.com
            </span>
            <span>
              modelling admin
            </span>
            <div class="row__buttons">
              <div v-on:click="openEdit" class="row__btn">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 7H6.5C5.96957 7 5.46086 7.21071 5.08579 7.58579C4.71071 7.96086 4.5 8.46957 4.5 9V18C4.5 18.5304 4.71071 19.0391 5.08579 19.4142C5.46086 19.7893 5.96957 20 6.5 20H15.5C16.0304 20 16.5391 19.7893 16.9142 19.4142C17.2893 19.0391 17.5 18.5304 17.5 18V15" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.5 15H12.5L21 6.5C21.3978 6.10217 21.6213 5.56261 21.6213 5C21.6213 4.43739 21.3978 3.89782 21 3.5C20.6022 3.10217 20.0626 2.87868 19.5 2.87868C18.9374 2.87868 18.3978 3.10217 18 3.5L9.5 12V15Z" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.5 5L19.5 8" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="row__btn">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 7H20.5" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10.5 11V17" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.5 11V17" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.5 7L6.5 19C6.5 19.5304 6.71071 20.0391 7.08579 20.4142C7.46086 20.7893 7.96957 21 8.5 21H16.5C17.0304 21 17.5391 20.7893 17.9142 20.4142C18.2893 20.0391 18.5 19.5304 18.5 19L19.5 7" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.5 7V4C9.5 3.73478 9.60536 3.48043 9.79289 3.29289C9.98043 3.10536 10.2348 3 10.5 3H14.5C14.7652 3 15.0196 3.10536 15.2071 3.29289C15.3946 3.48043 15.5 3.73478 15.5 4V7" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="row">
            <span>
              Dianne Russell
            </span>
            <span>
              dianne.russell@gmail.com
            </span>
            <span>
              modelling admin
            </span>
            <div class="row__buttons">
              <div v-on:click="openEdit" class="row__btn">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 7H6.5C5.96957 7 5.46086 7.21071 5.08579 7.58579C4.71071 7.96086 4.5 8.46957 4.5 9V18C4.5 18.5304 4.71071 19.0391 5.08579 19.4142C5.46086 19.7893 5.96957 20 6.5 20H15.5C16.0304 20 16.5391 19.7893 16.9142 19.4142C17.2893 19.0391 17.5 18.5304 17.5 18V15" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.5 15H12.5L21 6.5C21.3978 6.10217 21.6213 5.56261 21.6213 5C21.6213 4.43739 21.3978 3.89782 21 3.5C20.6022 3.10217 20.0626 2.87868 19.5 2.87868C18.9374 2.87868 18.3978 3.10217 18 3.5L9.5 12V15Z" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.5 5L19.5 8" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="row__btn">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 7H20.5" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10.5 11V17" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.5 11V17" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.5 7L6.5 19C6.5 19.5304 6.71071 20.0391 7.08579 20.4142C7.46086 20.7893 7.96957 21 8.5 21H16.5C17.0304 21 17.5391 20.7893 17.9142 20.4142C18.2893 20.0391 18.5 19.5304 18.5 19L19.5 7" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.5 7V4C9.5 3.73478 9.60536 3.48043 9.79289 3.29289C9.98043 3.10536 10.2348 3 10.5 3H14.5C14.7652 3 15.0196 3.10536 15.2071 3.29289C15.3946 3.48043 15.5 3.73478 15.5 4V7" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.ap-panel
  padding: 16px 0
  .container
    .all
      .titles
        display: grid
        grid-template-columns: 1fr 1fr 1fr 1fr
        .title
          &:last-child
            margin-left: auto
            margin-right: 22px
      .wrapper
        .row
          display: grid
          grid-template-columns: 1fr 1fr 1fr 1fr
          .row__buttons
            display: flex
            margin-left: auto
            align-items: center
            margin-right: 17px
            .row__btn
              cursor: pointer
              &:not(:last-child)
                margin-right: 12px
</style>
<script>
export default {
  name: 'app',
  methods: {
    openEdit: function (event) {
      document.querySelector('.edit').style.display = 'block'
    }
  }
}
</script>