<template>
  <section class="search">
    <div class="container">
      <div class="search__item">
        <label for="search">
          Search customers
        </label>
        <div class="search__input">
          <input id="search" type="text" placeholder="By name or  email">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#4F4F4F"/>
          </svg>
        </div>
      </div>
      <div class="search__item">
        <label for="customers-type">
          Customers type
        </label>
        <div class="search__select">
          <select name="" id="customers-type">
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
.search
  background: #f9f9f9
  padding: 16px 0
  .container
    background: #FFFFFF
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)
    border-radius: 4px
    padding: 16px 16px 12px 16px
    .search__item
      display: flex
      flex-direction: column
      &:first-child
        width: 100%
        max-width: 386px
        margin-right: 16px
      &:nth-child(2)
        width: 100%
        max-width: 298px
      label
        font-family: Open Sans, sans-serif
        font-style: normal
        font-weight: bold
        font-size: 12px
        line-height: 12px
        color: #4F4F4F
        margin-bottom: 8px
      .search__input
        position: relative
        display: flex
        width: 100%
        max-width: 386px
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
        svg
          position: absolute
          right: 8px
          top: 50%
          cursor: pointer
          transform: translateY(-50%)
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






















