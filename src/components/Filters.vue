<template>
  <section class="filters">
    <div class="container">
      <div class="search__item">
        <label for="mortgages-type">
          Mortgage type
        </label>
        <div class="search__select">
          <select name="" id="mortgages-type">
            <option value="">All</option>
            <option value="">All</option>
            <option value="">All</option>
          </select>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2071 9.79289C15.8166 9.40237 15.1834 9.40237 14.7929 9.79289L12 12.5858L9.20711 9.79289C8.81658 9.40237 8.18342 9.40237 7.79289 9.79289C7.40237 10.1834 7.40237 10.8166 7.79289 11.2071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L16.2071 11.2071C16.5976 10.8166 16.5976 10.1834 16.2071 9.79289Z" fill="#4F4F4F"/>
          </svg>
        </div>
      </div>
      <div class="search__item">
        <label for="duration">
          Duration
        </label>
        <div class="search__select">
          <select name="" id="duration">
            <option value="">All</option>
            <option value="">All</option>
            <option value="">All</option>
          </select>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2071 9.79289C15.8166 9.40237 15.1834 9.40237 14.7929 9.79289L12 12.5858L9.20711 9.79289C8.81658 9.40237 8.18342 9.40237 7.79289 9.79289C7.40237 10.1834 7.40237 10.8166 7.79289 11.2071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L16.2071 11.2071C16.5976 10.8166 16.5976 10.1834 16.2071 9.79289Z" fill="#4F4F4F"/>
          </svg>
        </div>
      </div>
      <div class="search__item">
        <label for="stage">
          Stage
        </label>
        <div class="search__select">
          <select name="" id="stage">
            <option value="">All</option>
            <option value="">All</option>
            <option value="">All</option>
          </select>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2071 9.79289C15.8166 9.40237 15.1834 9.40237 14.7929 9.79289L12 12.5858L9.20711 9.79289C8.81658 9.40237 8.18342 9.40237 7.79289 9.79289C7.40237 10.1834 7.40237 10.8166 7.79289 11.2071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L16.2071 11.2071C16.5976 10.8166 16.5976 10.1834 16.2071 9.79289Z" fill="#4F4F4F"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.filters
  padding-top: 16px
  .container
    background: #FFFFFF
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)
    border-radius: 4px
    padding: 16px 16px 20px 16px
    .search__item
      display: flex
      flex-direction: column
      width: 100%
      max-width: 298px
      &:not(:last-child)
        margin-right: 32px
      label
        font-family: Open Sans, sans-serif
        font-style: normal
        font-weight: bold
        font-size: 12px
        line-height: 12px
        color: #4F4F4F
        margin-bottom: 8px
      .search__select
        width: 100%
        max-width: 298px
        position: relative
        &:after
          content: ''
          position: absolute
          right: 2px
          z-index: 1
          top: 50%
          transform: translateY(-50%)
          width: 20px
          height: 20px
          background: #fff
          pointer-events: none
        select
          width: 100%
          border: 2px solid #4F4F4F
          border-radius: 4px
          font-family: Open Sans, sans-serif
          font-style: normal
          font-weight: normal
          font-size: 14px
          line-height: 24px
          color: #0E0E0E
          padding: 8px 16px
        svg
          position: absolute
          right: 8px
          z-index: 2
          pointer-events: none
          top: 50%
          transform: translateY(-50%)
</style>