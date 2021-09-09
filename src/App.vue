<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap')
*
  margin: 0
  padding: 0
  box-sizing: border-box
  border: none
  outline: none
  color: #000
  text-decoration: none
  list-style: none
.container
  width: 100%
  max-width: 1230px
  display: flex
  margin: 0 auto
.btn
  cursor: pointer
  display: flex
  position: relative
  margin: 0 auto 0 0
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
      padding: 7.5px 0
      width: 170px
      font-size: 16px
      line-height: 138%
  .btn-bg
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
.input_chf
  div
    position: relative
    &:after
      content: 'CHF'
      position: absolute
      right: 17px
      top: 50%
      transform: translateY(-50%)
      font-family: Open Sans, sans-serif
      font-style: normal
      font-weight: normal
      font-size: 17px
      line-height: 26px
      color: #102941
      pointer-events: none
.input_years
  div
    position: relative
    &:after
      content: 'Years'
      position: absolute
      right: 17px
      top: 50%
      transform: translateY(-50%)
      font-family: Open Sans, sans-serif
      font-style: normal
      font-weight: normal
      font-size: 17px
      line-height: 26px
      color: #102941
      pointer-events: none
.input_percent
  div
    position: relative
    &:after
      content: '%'
      position: absolute
      right: 17px
      top: 50%
      transform: translateY(-50%)
      font-family: Open Sans, sans-serif
      font-style: normal
      font-weight: normal
      font-size: 17px
      line-height: 26px
      color: #102941
      pointer-events: none
.titles
  padding: 16px 24px
  border-bottom: 1px solid #0000001F
  .title
    display: flex
    align-items: center
    span
      font-family: Calibri, sans-serif
      font-style: normal
      font-weight: bold
      font-size: 17px
      line-height: 22px
      letter-spacing: 0.3px
      color: #19161A
    svg
      margin-left: 8px
      cursor: pointer
.wrapper
  display: flex
  flex-direction: column
  .row
    padding: 14px 24px 12px 24px
    &:nth-child(2n -1)
      background: #F9F9F9
    &:not(:last-child)
      border-bottom: 1px solid #D1D1D3
    span
      font-family: Calibri, sans-serif
      font-style: normal
      font-weight: normal
      font-size: 17px
      line-height: 22px
      font-feature-settings: 'liga' off, 'calt' off, 'rclt' off
      color: #19161A
.main_ap
  background: #f9f9f9
  min-height: calc(100vh - 90px)
.all
  width: 100%
  display: flex
  flex-direction: column
  background: #FFFFFF
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)
  border-radius: 4px
  overflow: hidden
.scroll
  overflow: hidden
select, button, input[type="select"], input[type="text"], input[type="button"], input[type="submit"]
  appearance: none
  -webkit-appearance: none
  box-shadow: none
  background: #ffffff
  border-radius: 0
  line-height: 1
</style>
<script>

</script>
