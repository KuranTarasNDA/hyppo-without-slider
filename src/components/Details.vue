<template>
  <section class="details">
    <div class="container">
      <h1>
        Mortgage details
      </h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor nisi, posuere vitae tincidunt et, molestie sit amet purus.
      </h2>
      <h3>
        Dear customer, the photo of your ID has a very bad quality. Because of that, we are unable to review your information. Please provide us with a more high-quality photo of your ID.
      </h3>
      <div class="btn details__top-btn">
        <span>
          Edit documents
        </span>
        <div class="btn-bg"></div>
      </div>
      <div class="request__all">
        <div class="request__wrapper">
          <div class="request__step">
            <div class="request__step-title">
              <div class="request__step-title-num">
              <span>
                1
              </span>
              </div>
              <div class="request__step-title-text">
                General information
              </div>
            </div>
            <div class="request__steps">
              <div class="request__step-item">
                <div class="request__step-item-input">
                  <label for="date-of-signing">
                    Date of signing
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="date-of-signing" type="text" placeholder="07.07.2021">
                  </div>
                </div>
                <div class="request__step-item-input">
                  <label for="type">
                    Type
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="type" type="text" placeholder="Fixed interest rate">
                  </div>
                </div>
                <div class="request__step-item-input">
                  <label for="stage">
                    Stage
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="stage" type="text" placeholder="Concluded">
                  </div>
                </div>
              </div>
              <div class="request__step-item">
                <div class="request__step-item-input">
                  <label for="duration">
                    Duration
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="duration" type="text" placeholder="10 years">
                  </div>
                </div>
                <div class="request__step-item-input input_percent">
                  <label for="interest-rate">
                    Interest rate
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="interest-rate" type="text" placeholder="1'2475 %">
                  </div>
                </div>
                <div class="request__step-item-input input_chf">
                  <label for="principal-amount">
                    Principal amount
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="principal-amount" type="text" placeholder="200'000">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="request__step">
            <div class="request__step-title">
              <div class="request__step-title-num">
              <span>
                2
              </span>
              </div>
              <div class="request__step-title-text">
                Payment
              </div>
            </div>
            <div class="request__steps">
              <div class="details__diagram">
                <div class="details__diagram-left">
                  <div class="details__diagram-img">
                    <svg width="233" height="275" viewBox="0 0 233 275" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M232.001 36.9523C216.091 22.4793 196.995 11.9183 176.242 6.11635C155.49 0.314441 133.66 -0.566817 112.504 3.54328C91.3476 7.65338 71.4538 16.6404 54.4185 29.7834C37.3831 42.9264 23.6804 59.8596 14.4096 79.2244C5.13883 98.5892 0.558026 119.847 1.03471 141.291C1.5114 162.736 7.0323 183.771 17.1545 202.709C27.2767 221.647 41.7184 237.961 59.3211 250.341C76.9238 262.722 97.1976 270.825 118.516 274L138.934 138.256L232.001 36.9523Z" fill="#2FF194" stroke="white"/>
                    </svg>
                    <svg width="176" height="140" viewBox="0 0 176 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M174.869 122.527C172.453 102.818 165.814 83.8618 155.407 66.9514C145 50.041 131.069 35.5747 114.564 24.5397C98.06 13.5046 79.3709 6.16058 59.7722 3.00857C40.1735 -0.143467 20.1265 0.970761 0.999187 6.27523L37.8923 139.308L174.869 122.527Z" fill="#598AD3" stroke="white"/>
                    </svg>
                    <svg width="160" height="155" viewBox="0 0 160 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M159.083 16.4796C159.083 11.0334 158.762 5.59195 158.123 0.183594L21.0293 16.4796H159.083Z" fill="#55DAFD"/>
                      <path d="M0.591797 153.433C20.2299 156.382 40.271 155.046 59.3476 149.517C78.4241 143.988 96.0872 134.397 111.132 121.397C126.176 108.396 138.247 92.2939 146.522 74.1877C154.797 56.0814 159.081 36.3977 159.081 16.4795H21.0275L0.591797 153.433Z" fill="#55DAFD"/>
                    </svg>
                  </div>
                  <div class="details__diagram-left-text">
                    <div class="detail__diagram-left-item">
                        <span>
                          200'000
                        </span>
                      <span class="details__diagram-left-item-chf">
                          CHF
                        </span>
                      <svg width="32" height="17" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.3965 15.9217L0.238281 1.03223L31.3965 15.9217Z" fill="#102941"/>
                        <path d="M31.3965 15.9217L0.238281 1.03223" stroke="#102941"/>
                      </svg>
                    </div>
                    <div class="detail__diagram-left-item">
                        <span>
                          100'000
                        </span>
                      <span class="details__diagram-left-item-chf">
                          CHF
                        </span>
                      <svg width="32" height="17" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.858398 16.261L31.5654 0.456543L0.858398 16.261Z" fill="#102941"/>
                        <path d="M0.858398 16.261L31.5654 0.456543" stroke="#102941"/>
                      </svg>
                    </div>
                    <div class="detail__diagram-left-item">
                        <span>
                          200'000
                        </span>
                      <span class="details__diagram-left-item-chf">
                          CHF
                        </span>
                      <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.13281 0.397461L23.6588 26.6267L1.13281 0.397461Z" fill="#102941"/>
                        <path d="M1.13281 0.397461L23.6588 26.6267" stroke="#102941"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="details__diagram-right">
                  <div class="details__diagram-colors">
                    <div class="details__diagram-color">
                      <div></div>
                      <span>
                          Mortgage amount
                        </span>
                    </div>
                    <div class="details__diagram-color">
                      <div></div>
                      <span>
                          Paid
                        </span>
                    </div>
                    <div class="details__diagram-color">
                      <div></div>
                      <span>
                          Own Capital
                        </span>
                    </div>
                  </div>
                  <div class="details__diagram-text">
                    <div class="details__diagram-text-item">
                        <span>
                          Date of next payment
                        </span>
                      <span>
                          07.08.2021
                        </span>
                    </div>
                    <div class="details__diagram-text-item">
                        <span>
                          Amount of next payment
                        </span>
                      <span>
                            CHF 2'986
                        </span>
                    </div>
                    <div class="details__diagram-text-item">
                        <span>
                          Number of periods (payments)
                        </span>
                      <span>
                          32
                        </span>
                    </div>
                    <div class="details__diagram-text-item">
                        <span>
                          Prediction date of payment finalization
                        </span>
                      <span>
                          03.07.2024
                        </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="request__step">
            <div class="request__step-title">
              <div class="request__step-title-num">
              <span>
                3
              </span>
              </div>
              <div class="request__step-title-text">
                Asset information
              </div>
            </div>
            <div class="request__steps">
              <div class="request__step-item">
                <div class="request__step-item-input input_chf">
                  <label for="value-of-the-property">
                    Value of the property
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="value-of-the-property" type="text" value="500'000">
                  </div>
                </div>
                <div class="request__step-item-input input_chf">
                  <label for="down-payment">
                    Down payment
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="down-payment" type="text" value="100'000">
                  </div>
                </div>
              </div>
              <div class="request__step-item">
                <div class="request__step-item-input">
                  <label for="street">
                    Street
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="street" type="text" value="Dübendorfstrasse">
                  </div>
                </div>
                <div class="request__step-item-input">
                  <label for="street-number">
                    Street number
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="street-number" type="text" value="223">
                  </div>
                </div>
                <div class="request__step-item-input">
                  <label for="postal-code">
                    Postal code
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="postal-code" type="text" value="04210">
                  </div>
                </div>
              </div>
              <div class="request__step-item">
                <div class="request__step-item-input">
                  <label for="place">
                    Place
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="place" type="text" value="Lorem ipsum">
                  </div>
                </div>
                <div class="request__step-item-input">
                  <label for="floor">
                    Floor (if not a house)
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="floor" type="text" value="5">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="request__step">
            <div class="request__step-title">
              <div class="request__step-title-num">
              <span>
                4
              </span>
              </div>
              <div class="request__step-title-text">
                Personal information
              </div>
            </div>
            <div class="request__steps">
              <div class="request__step-item">
                <div class="request__step-item-input input_years">
                  <label for="age">
                    Age
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="age" type="text" value="24">
                  </div>
                </div>
                <div class="request__step-item-input">
                  <label for="employment-type">
                    Employment Type
                  </label>
                  <div class="request__step-item-select-wrapper">
                    <select name="" id="employment-type">
                      <option value="">Government official</option>
                      <option value="">Government official</option>
                      <option value="">Government official</option>
                    </select>
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L0.339745 0L17.6603 0L9 12Z" fill="#29ABE2"/>
                    </svg>
                  </div>
                </div>
                <div class="request__step-item-input">
                  <label for="legal-charges">
                    Legal Charges
                  </label>
                  <div class="request__step-item-select-wrapper">
                    <select name="" id="legal-charges">
                      <option value="">Ongoing</option>
                      <option value="">Ongoing</option>
                      <option value="">Ongoing</option>
                    </select>
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L0.339745 0L17.6603 0L9 12Z" fill="#29ABE2"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="request__step-item">
                <div class="request__step-item-input">
                <span>
                  Gender
                  <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="2" width="24" height="24" rx="12" fill="#29ABE2"/>
                  <path d="M10.826 8.91C10.6647 8.91 10.5327 8.85867 10.43 8.756C10.3273 8.65333 10.276 8.52133 10.276 8.36V6.38C10.276 6.21867 10.3273 6.08667 10.43 5.984C10.5327 5.88133 10.6647 5.83 10.826 5.83H13.466C13.6273 5.83 13.7593 5.88133 13.862 5.984C13.9647 6.08667 14.016 6.21867 14.016 6.38V8.36C14.016 8.52133 13.9647 8.65333 13.862 8.756C13.7593 8.85867 13.6273 8.91 13.466 8.91H10.826ZM10.848 22C10.6867 22 10.5547 21.9487 10.452 21.846C10.3493 21.7433 10.298 21.6113 10.298 21.45V11.11C10.298 10.9487 10.3493 10.8167 10.452 10.714C10.5547 10.6113 10.6867 10.56 10.848 10.56H13.444C13.6053 10.56 13.7373 10.6113 13.84 10.714C13.9427 10.8167 13.994 10.9487 13.994 11.11V21.45C13.994 21.5967 13.9427 21.7287 13.84 21.846C13.7373 21.9487 13.6053 22 13.444 22H10.848Z" fill="white"/>
                </svg>
                </span>
                  <div class="request__step-item-checkbox-wrapper">
                    <input id="male" type="radio" name="gender" checked>
                    <label for="male">Male</label>
                    <input id="female" type="radio" name="gender">
                    <label for="female">Female</label>
                  </div>
                </div>
                <div class="request__step-item-input">
                  <label for="telephone-number">
                    Telephone number
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="telephone-number" type="text" value="123-45-67">
                  </div>
                </div>
                <div class="request__step-item-input">
                  <label for="current-address">
                    Current address
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="current-address" type="text" value="Dübendorfstrasse 223">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="request__step">
            <div class="request__step-title">
              <div class="request__step-title-num">
              <span>
                5
              </span>
              </div>
              <div class="request__step-title-text">
                Mortgage information
              </div>
            </div>
            <div class="request__steps">
              <div class="request__step-item">
                <div class="request__step-item-input input_chf">
                  <label for="mortgage-amount">
                    Mortgage amount
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="mortgage-amount" type="text" value="500'000">
                  </div>
                </div>
                <div class="request__step-item-input">
                  <label for="type-of-mortgage">
                    Type of mortgage
                  </label>
                  <div class="request__step-item-select-wrapper">
                    <select name="" id="type-of-mortgage">
                      <option value="">Fixed interest rate</option>
                      <option value="">Fixed interest rate</option>
                      <option value="">Fixed interest rate</option>
                    </select>
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L0.339745 0L17.6603 0L9 12Z" fill="#29ABE2"/>
                    </svg>
                  </div>
                </div>
                <div class="request__step-item-input">
                  <label for="duration-of-the-mortgage">
                    Duration of the mortgage
                  </label>
                  <div class="request__step-item-select-wrapper">
                    <select name="" id="duration-of-the-mortgage">
                      <option value="">10 years</option>
                      <option value="">10 years</option>
                      <option value="">10 years</option>
                    </select>
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L0.339745 0L17.6603 0L9 12Z" fill="#29ABE2"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="request__step">
            <div class="request__step-title">
              <div class="request__step-title-num">
              <span>
                6
              </span>
              </div>
              <div class="request__step-title-text">
                Financial information
              </div>
            </div>
            <div class="request__steps">
              <div class="request__step-item">
                <div class="request__step-item-input input_chf">
                  <label for="annual-income">
                    Annual Income
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="annual-income" type="text" value="120'000">
                  </div>
                </div>
                <div class="request__step-item-input input_chf">
                  <label for="net-assets">
                    Net Assets
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="net-assets" type="text" value="70'000">
                  </div>
                </div>
                <div class="request__step-item-input input_chf">
                  <label for="current-non-secured-debt">
                    Current non-secured Debt
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="current-non-secured-debt" type="text" value="10'000">
                  </div>
                </div>
              </div>
              <div class="request__step-item">
                <div class="request__step-item-input input_chf">
                  <label for="other-mortgages-amount">
                    Other Mortgages Amount
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="other-mortgages-amount" type="text" value="0">
                  </div>
                </div>
                <div class="request__step-item-input input_chf">
                  <label for="other-mortgages-interest-expenses">
                    Other mortgages interest expenses
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="other-mortgages-interest-expenses" type="text" value="70'000">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="request__step">
            <div class="request__step-title">
              <div class="request__step-title-num">
              <span>
                7
              </span>
              </div>
              <div class="request__step-title-text">
                Living costs information
              </div>
            </div>
            <div class="request__steps">
              <div class="request__step-item">
                <div class="request__step-item-input">
                <span>
                  Is this mortgage financing your first property?
                </span>
                  <div class="request__step-item-checkbox-wrapper">
                    <input id="first-property-yes" type="radio" name="first-property" checked>
                    <label for="first-property-yes">Yes</label>
                    <input id="first-property-no" type="radio" name="first-property">
                    <label for="first-property-no">No</label>
                  </div>
                </div>
                <div class="request__step-item-input">
                  <label for="property-do-you-own">
                    How many other properties do you own?
                  </label>
                  <div class="request__step-item-select-wrapper">
                    <select name="" id="property-do-you-own">
                      <option value="">2</option>
                      <option value="">2</option>
                      <option value="">2</option>
                    </select>
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L0.339745 0L17.6603 0L9 12Z" fill="#29ABE2"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="request__step">
            <div class="request__step-sub">
              Property 1
            </div>
            <div class="request__steps">
              <div class="request__step-item">
                <div class="request__step-item-input input_chf">
                  <label for="property-value-when-bought">
                    Property value when bought
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="property-value-when-bought" type="text" value="500'000">
                  </div>
                </div>
                <div class="request__step-item-input">
                  <label for="year-when-bought">
                    Year when bought
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="year-when-bought" type="text" value="2017">
                  </div>
                </div>
              </div>
              <div class="request__step-item">
                <div class="request__step-item-input">
                <span>
                  Are you receiving rent for this property?
                </span>
                  <div class="request__step-item-checkbox-wrapper">
                    <input id="receiving-rent-for-this-property-no" type="radio" name="receiving-rent-for-this-property" checked>
                    <label for="receiving-rent-for-this-property-no">No</label>
                    <input id="receiving-rent-for-this-property-yes" type="radio" name="receiving-rent-for-this-property">
                    <label for="receiving-rent-for-this-property-yes">Yes</label>
                  </div>
                </div>
                <div class="request__step-item-input input_chf">
                  <label for="rental-income">
                    Rental income
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="rental-income" type="text" value="5'000">
                  </div>
                </div>
              </div>
              <div class="request__step-item">
                <div class="request__step-item-input">
                <span>
                  Are you paying mortgage for this property?
                </span>
                  <div class="request__step-item-checkbox-wrapper">
                    <input id="paying-mortgage-for-this-property-no" type="radio" name="paying-mortgage-for-this-property" checked>
                    <label for="paying-mortgage-for-this-property-no">No</label>
                    <input id="paying-mortgage-for-this-property-yes" type="radio" name="paying-mortgage-for-this-property">
                    <label for="paying-mortgage-for-this-property-yes">Yes</label>
                  </div>
                </div>
                <div class="request__step-item-input input_chf">
                  <label for="mortgage-amount-property-1">
                    Mortgage amount
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="mortgage-amount-property-1" type="text" value="400'000">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="request__step">
            <div class="request__step-sub">
              Property 2
            </div>
            <div class="request__steps">
              <div class="request__step-item">
                <div class="request__step-item-input input_chf">
                  <label for="property-value-when-bought-2">
                    Property value when bought
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="property-value-when-bought-2" type="text" value="500'000">
                  </div>
                </div>
                <div class="request__step-item-input">
                  <label for="year-when-bought-2">
                    Year when bought
                  </label>
                  <div class="request__step-item-input-wrapper">
                    <input id="year-when-bought-2" type="text" value="2015">
                  </div>
                </div>
              </div>
              <div class="request__step-item">
                <div class="request__step-item-input">
                <span>
                  Are you receiving rent for this property?
                </span>
                  <div class="request__step-item-checkbox-wrapper">
                    <input id="receiving-rent-for-this-property-no-2" type="radio" name="receiving-rent-for-this-property-2" checked>
                    <label for="receiving-rent-for-this-property-no-2">No</label>
                    <input id="receiving-rent-for-this-property-yes-2" type="radio" name="receiving-rent-for-this-property-2">
                    <label for="receiving-rent-for-this-property-yes-2">Yes</label>
                  </div>
                </div>
              </div>
              <div class="request__step-item">
                <div class="request__step-item-input">
                <span>
                  Are you paying mortgage for this property?
                </span>
                  <div class="request__step-item-checkbox-wrapper">
                    <input id="paying-mortgage-for-this-property-no-2" type="radio" name="paying-mortgage-for-this-property-2" checked>
                    <label for="paying-mortgage-for-this-property-no-2">No</label>
                    <input id="paying-mortgage-for-this-property-yes-2" type="radio" name="paying-mortgage-for-this-property-2">
                    <label for="paying-mortgage-for-this-property-yes-2">Yes</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="request__step">
            <div class="calculate__right">
              <div class="calculate__amount">
                <div class="calculate__amount-left">
                  <div class="calculate__amount-left-top">
                    <p>
                      Mortgage amount
                    </p>
                    <p>
                      CHF
                      <span>
                    450'000
                  </span>
                    </p>
                  </div>
                  <div class="calculate__amount-left-bot">
                    <p>
                      Own Capital
                    </p>
                    <p>
                      CHF
                      <span>
                    100'000
                  </span>
                    </p>
                  </div>
                </div>
                <div class="calculate__amount-right">
                  <div class="calculate__amount-right-wrapper">
                    <div class="calculate__amount-percent">
                      80%
                    </div>
                    <div class="calculate__amount-right-rectangle">

                    </div>
                  </div>
                  <div class="calculate__amount-right-bg"></div>
                </div>
              </div>
              <div class="calculate__numbers">
                <div class="calculate__number">
                  <span>Affordability</span>
                  <span>Affordable</span>
                  <div class="calculate-i">
                    <div class="calculate-i-text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 0H26L15.721 22.1393C14.6459 24.4549 11.3541 24.4549 10.279 22.1393L0 0H13Z" fill="white"/>
                      </svg>
                    </div>
                    <svg class="calculate-i-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.5">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="#102941"/>
                      </g>
                    </svg>
                  </div>
                </div>
                <div class="calculate__number">
                  <span>Total monthly payments</span>
                  <span>CHF 2'986</span>
                </div>
                <div class="calculate__number">
                  <span>Amortization costs</span>
                  <span>CHF 1'667</span>
                </div>
                <div class="calculate__number">
                  <span>Interest payments</span>
                  <span>CHF 1'667</span>
                </div>
                <div class="calculate__number">
                  <span>Monthly mortgage payments</span>
                  <span>CHF 417</span>
                </div>
                <div class="calculate__number">
                  <span>Monthly amortization costs</span>
                  <span>CHF 417</span>
                </div>
                <div class="calculate__number">
                  <span>Monthly interest payments</span>
                  <span>CHF 417</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="request__all-bg"></div>
      </div>
      <div class="identity__wrapper">
        <div class="identity__cont">
          <div class="identity__item">
            <div class="identity-title">
              Identity document (ID)
            </div>
            <div class="identity__images">
              <div class="identity__img">
                <img src="@/assets/36.png" alt="">
              </div>
              <div class="identity__img">
                <img src="@/assets/36.png" alt="">
              </div>
            </div>
          </div>
          <div class="identity__item">
            <div class="identity-title">
              Lorem ipsum
            </div>
            <div class="identity__images">
              <div class="identity__img">
                <img src="@/assets/37.png" alt="">
              </div>
              <div class="identity__img">
                <img src="@/assets/37.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="identity-bg"></div>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.details
  padding: 40px 10px 104px 10px
  @media (max-width: 600px)
    padding: 20px 10px 50px 10px
  .container
    flex-direction: column
    h1
      font-family: Rubik, sans-serif
      font-style: normal
      font-weight: bold
      font-size: 64px
      line-height: 86px
      color: #29ABE2
      @media (max-width: 600px)
        font-size: 40px
        line-height: 134%
    h2
      font-family: Open Sans, sans-serif
      font-style: normal
      font-weight: normal
      font-size: 17px
      line-height: 26px
      color: #102941
      max-width: 525px
      margin: 16px 0 32px 0
      @media (max-width: 600px)
        font-size: 14px
        line-height: 152%
        margin: 0 0 15px 0
    h3
      font-family: Open Sans, sans-serif
      font-style: normal
      font-weight: normal
      font-size: 17px
      line-height: 26px
      max-width: 525px
      color: #E43D3D
      display: none
      margin: 16px 0 16px
      @media (max-width: 600px)
        font-size: 14px
        line-height: 152%
        margin: 0 0 10px 0
    .details__top-btn
      display: none
      margin-bottom: 32px
      @media (max-width: 600px)
        margin-bottom: 15px
    .request__all
      position: relative
      .request__wrapper
        display: flex
        flex-direction: column
        background: #ffffff
        border-radius: 10px
        padding: 24px
        position: relative
        z-index: 2
        @media (max-width: 911px)
          border-radius: 12px
          padding: 15px
        .request__step
          display: flex
          flex-direction: column
          &:not(:last-child)
            margin-bottom: 76px
            @media (max-width: 911px)
              margin-bottom: 40px
          .request__step-title
            display: flex
            align-items: center
            margin-bottom: 32px
            @media (max-width: 911px)
              margin-bottom: 15px
            .request__step-title-num
              min-width: 48px
              height: 48px
              background: #29ABE2
              border-radius: 70px
              display: flex
              align-items: center
              justify-content: center
              @media (max-width: 911px)
                min-width: 30px
                height: 30px
              span
                font-family: Rubik, sans-serif
                font-style: normal
                font-weight: bold
                font-size: 32px
                line-height: 44px
                color: #FFFFFF
                @media (max-width: 911px)
                  font-size: 20px
                  line-height: 137%
            .request__step-title-text
              font-family: Rubik, sans-serif
              font-style: normal
              font-weight: bold
              font-size: 24px
              line-height: 25px
              color: #102941
              margin-left: 16px
              @media (max-width: 911px)
                font-size: 20px
                margin-left: 10px
                line-height: 105%
          .request__step-sub
            font-family: Rubik, sans-serif
            font-style: normal
            font-weight: bold
            font-size: 22px
            line-height: 28px
            color: #102941
            margin-bottom: 32px
            @media (max-width: 911px)
              font-size: 18px
              line-height: 127%
              margin-bottom: 10px
          .request__steps
            display: flex
            flex-direction: column
            .request__step-item
              display: grid
              grid-template-columns: 1fr 1fr 1fr
              grid-gap: 67px
              @media (max-width: 911px)
                grid-template-columns: 1fr 1fr
                grid-gap: 20px
              @media (max-width: 600px)
                grid-template-columns: 1fr
              &:not(:last-child)
                margin-bottom: 24px
                @media (max-width: 911px)
                  margin-bottom: 20px
              .request__step-item-input
                width: 100%
                display: flex
                flex-direction: column
                label, span
                  font-family: Open Sans, sans-serif
                  font-style: normal
                  font-weight: normal
                  font-size: 17px
                  line-height: 26px
                  color: #102941
                  margin-bottom: 8px
                  @media (max-width: 911px)
                    font-size: 14px
                    line-height: 152%
                    margin-bottom: 4px
                span
                  display: flex
                  align-items: center
                  margin-bottom: 25px
                  svg
                    margin-left: 8px
                .request__step-item-input-wrapper
                  width: 100%
                  input
                    width: 100%
                    border: 1px solid #102941
                    box-sizing: border-box
                    border-radius: 10px
                    padding: 17px
                    font-family: Open Sans, sans-serif
                    font-style: normal
                    font-weight: normal
                    font-size: 17px
                    line-height: 26px
                    color: #102941
                    @media (max-width: 911px)
                      padding: 10px
                      font-size: 14px
                      line-height: 152%
                      border-radius: 5px
                .request__step-item-select-wrapper
                  width: 100%
                  position: relative
                  &:after
                    content: ''
                    position: absolute
                    width: 20px
                    height: 20px
                    background: #ffffff
                    right: 2px
                    top: 50%
                    transform: translateY(-50%)
                    z-index: 1
                    pointer-events: none
                  select
                    width: 100%
                    border: 1px solid #102941
                    border-radius: 10px
                    font-family: Open Sans, sans-serif
                    font-style: normal
                    font-weight: normal
                    font-size: 17px
                    line-height: 26px
                    color: #102941
                    padding: 17px
                    @media (max-width: 911px)
                      padding: 10px
                      font-size: 14px
                      line-height: 152%
                      border-radius: 5px
                  svg
                    position: absolute
                    right: 16px
                    top: 50%
                    transform: translateY(-50%)
                    pointer-events: none
                    z-index: 2
                    @media (max-width: 911px)
                      width: 14px
                    path
                      fill: #102941
                .request__step-item-checkbox-wrapper
                  display: flex
                  align-items: center
                  label
                    font-family: Open Sans, sans-serif
                    font-style: normal
                    font-weight: normal
                    font-size: 17px
                    line-height: 26px
                    color: #102941
                    margin-bottom: 0
                    margin-right: 32px
                    @media (max-width: 911px)
                      font-size: 14px
                      line-height: 152%
                      margin-right: 20px
                  input
                    width: 24px
                    height: 24px
                    margin-right: 8px
                    @media (max-width: 911px)
                      width: 18px
                      height: 18px
                      margin-right: 5px
          .details__diagram
            display: flex
            width: 100%
            justify-content: space-between
            @media (max-width: 911px)
              flex-direction: column
              align-items: center
            .details__diagram-left
              position: relative
              min-width: 453px
              width: 453px
              margin-right: 20px
              height: 294px
              @media (max-width: 600px)
                min-width: 350px
                width: 350px
                margin-right: 0
              .details__diagram-img
                position: absolute
                top: 0
                left: 66px
                width: 280px
                height: 273px
                @media (max-width: 600px)
                  left: 50%
                  transform: translateX(-50%)
                svg
                  position: absolute
                  &:first-child
                    left: 0
                    top: 0
                  &:nth-child(2)
                    right: 2px
                    top: -1px
                    z-index: 2
                  &:nth-child(3)
                    right: 1px
                    bottom: -2px
                    path
                      &:first-child
                        transform: translateY(1px)
              .details__diagram-left-text
                display: flex
                flex-direction: column
                .detail__diagram-left-item
                  display: flex
                  flex-direction: column
                  position: absolute
                  &:first-child
                    top: 25px
                    left: 0
                    @media (max-width: 600px)
                      top: 0
                      left: 20px
                    svg
                      right: 10px
                      bottom: 10px
                      @media (max-width: 600px)
                        width: 20px
                  &:nth-child(2)
                    right: 0
                    top: 26px
                    @media (max-width: 600px)
                      top: 0
                      right: 5px
                    svg
                      left: 0
                      transform: translateX(-100%)
                      bottom: 10px
                      @media (max-width: 600px)
                        width: 20px
                  &:nth-child(3)
                    bottom: 0
                    right: 34px
                    @media (max-width: 600px)
                      right: 5px
                    svg
                      transform: translateX(-100%)
                      left: 0
                      bottom: 25px
                      @media (max-width: 600px)
                        width: 20px
                        bottom: 20px
                  span
                    font-family: Rubik, sans-serif
                    font-style: normal
                    font-weight: bold
                    font-size: 22px
                    line-height: 28px
                    color: #102941
                    @media (max-width: 600px)
                      font-size: 15px
                      line-height: 127%
                  .details__diagram-left-item-chf
                    font-family: Open Sans, sans-serif
                    font-style: normal
                    font-weight: normal
                    font-size: 17px
                    line-height: 26px
                    color: #102941
                    margin-top: 4px
                    @media (max-width: 600px)
                      font-size: 14px
                      line-height: 152%
                  svg
                    position: absolute
            .details__diagram-right
              width: 50.6%
              display: flex
              flex-direction: column
              @media (max-width: 911px)
                width: 100%
                max-width: 453px
              .details__diagram-colors
                display: flex
                flex-direction: column
                margin-bottom: 32px
                @media (max-width: 1024px)
                  margin-bottom: 15px
                .details__diagram-color
                  display: flex
                  align-items: center
                  &:not(:last-child)
                    margin-bottom: 16px
                    @media (max-width: 1024px)
                      margin-bottom: 10px
                  &:first-child
                    div
                      background: #2FF194
                  &:nth-child(2)
                    div
                      background: #598AD3
                  &:nth-child(3)
                    div
                      background: #55DAFD
                  div
                    width: 24px
                    height: 10px
                    border-radius: 5px
                    @media (max-width: 1024px)
                      height: 5px
                      width: 12px
                      border-radius: 2px
                  span
                    font-family: Open Sans, sans-serif
                    font-style: normal
                    font-weight: normal
                    font-size: 17px
                    line-height: 26px
                    display: flex
                    align-items: center
                    color: #102941
                    margin-left: 8px
                    @media (max-width: 1024px)
                      font-size: 14px
                      line-height: 152%
                      margin-left: 5px
              .details__diagram-text
                display: flex
                flex-direction: column
                .details__diagram-text-item
                  justify-content: space-between
                  display: flex
                  &:not(:last-child)
                    margin-bottom: 16px
                    @media (max-width: 1024px)
                      margin-bottom: 8px
                  span
                    font-family: Open Sans, sans-serif
                    font-style: normal
                    font-weight: normal
                    font-size: 17px
                    line-height: 26px
                    color: #102941
                    @media (max-width: 1024px)
                      font-size: 14px
                      line-height: 152%
                    &:first-child
                      @media (max-width: 600px)
                        margin-right: 20px
                    &:last-child
                      @media (max-width: 600px)
                        width: 100px
                        text-align: right

    .request__all-bg
        width: 100%
        height: calc(100% + 8px)
        position: absolute
        left: 0
        top: 0
        z-index: 1
        background: #0D1025
        opacity: 0.06
        filter: blur(114px)
        border-radius: 10px
    .calculate__right
      display: flex
      width: 100%
      flex-direction: row
      justify-content: space-between
      @media (max-width: 911px)
        flex-direction: column
      .calculate__amount
        display: flex
        justify-content: space-between
        margin-right: 20px
        @media (max-width: 911px)
          margin-right: 0
          margin-bottom: 30px
        .calculate__amount-left
          display: flex
          flex-direction: column
          justify-content: space-between
          margin-right: 13px
          @media (max-width: 911px)
            margin-right: 0
          @media (max-width: 600px)
            margin-right: 35px
          p
            font-family: Open Sans, sans-serif
            font-style: normal
            font-weight: normal
            font-size: 17px
            line-height: 26px
            color: #102941
            @media (max-width: 600px)
              font-size: 14px
              line-height: 152%
            &:first-child
              margin-bottom: 4px
            span
              font-family: Rubik, sans-serif
              font-style: normal
              font-weight: bold
              font-size: 22px
              line-height: 28px
              color: #102941
              @media (max-width: 600px)
                font-size: 16px
                line-height: 127%
        .calculate__amount-right
          width: 61.8%
          position: relative
          display: flex
          @media (max-width: 911px)
            width: 293px
          @media (max-width: 600px)
            width: 45%
          &:before
            content: ''
            position: absolute
            left: 19px
            transform: translateX(-100%)
            bottom: 24px
            width: 55px
            height: 6px
            background: #18DD8E
            border-radius: 3px
            z-index: 3
          .calculate__amount-right-wrapper
            height: 279px
            width: 293px
            background: #FFFFFF
            position: relative
            border-radius: 24px
            overflow: hidden
            z-index: 2
            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25)
            @media (max-width: 911px)
              margin-left: auto
            @media (max-width: 600px)
              border-radius: 12px
              height: 220px
            .calculate__amount-percent
              font-family: Rubik, sans-serif
              font-style: normal
              font-weight: bold
              font-size: 22px
              line-height: 28px
              color: #102941
              position: absolute
              left: 50%
              transform: translateX(-50%)
              top: 110px
              z-index: 2
              @media (max-width: 600px)
                font-size: 18px
                line-height: 127%
                top: 80px
            .calculate__amount-right-rectangle
              width: 100%
              height: 54px
              position: absolute
              background: #18DD8E
              bottom: 0
              left: 0
              z-index: 1
      .calculate__numbers
        display: flex
        flex-direction: column
        width: 100%
        max-width: 422px
        @media (max-width: 911px)
          max-width: 100%
        .calculate__number
          display: flex
          align-items: center
          &:not(:last-child)
            margin-bottom: 16px
            @media (max-width: 600px)
              margin-bottom: 8px
          &:first-child
            span
              font-family: Rubik, sans-serif
              font-style: normal
              font-weight: bold
              font-size: 22px
              line-height: 28px
              color: #102941
              @media (max-width: 600px)
                font-size: 16px
                line-height: 127%
          &:nth-child(2)
            span
              font-family: Rubik, sans-serif
              font-style: normal
              font-weight: bold
              font-size: 22px
              line-height: 28px
              color: #102941
              @media (max-width: 600px)
                font-size: 16px
                line-height: 127%
          span
            font-family: Open Sans, sans-serif
            font-style: normal
            font-weight: normal
            font-size: 17px
            line-height: 26px
            color: #102941
            @media (max-width: 600px)
              font-size: 14px
              line-height: 152%
            &:first-child
              margin-right: auto
          .calculate-i
            margin-left: 10px
            position: relative
            display: flex
            &:hover
              .calculate-i-text
                opacity: 1
                visibility: visible
            svg
              @media (max-width: 600px)
                width: 18px
                height: 18px
                margin: auto 0
            .calculate-i-text
              position: absolute
              width: 343px
              opacity: 0
              visibility: hidden
              transition-duration: 0.2s
              right: -24px
              top: 3px
              transform: translateY(-100%)
              display: flex
              flex-direction: column
              align-items: flex-end
              z-index: 5
              &:after
                content: ''
                position: absolute
                width: 100%
                height: 100%
                top: 0
                pointer-events: none
                left: 0
                background: #0D1025
                opacity: 0.06
                filter: blur(114px)
                border-radius: 10px
                z-index: -1
              p
                font-family: Open Sans, sans-serif
                font-style: normal
                font-weight: normal
                font-size: 17px
                line-height: 26px
                color: #000000
                padding: 10px
                background: #FFFFFF
                border-radius: 12px
              svg
                margin-right: 21px
    .identity__wrapper
      position: relative
      margin-top: 64px
      @media (max-width: 600px)
        margin-top: 20px
      .identity__cont
        background: #FFFFFF
        border-radius: 24px
        position: relative
        z-index: 2
        padding: 24px
        @media (max-width: 911px)
          border-radius: 12px
        @media (max-width: 600px)
          padding: 15px
        .identity__item
          display: flex
          flex-direction: column
          &:not(:first-child)
            .identity-title
              margin-top: 48px
              @media (max-width: 911px)
                margin-top: 20px
          .identity-title
            font-family: Rubik, sans-serif
            font-style: normal
            font-weight: bold
            font-size: 24px
            line-height: 25px
            color: #102941
            margin-bottom: 32px
            @media (max-width: 911px)
              font-size: 18px
              line-height: 105%
              margin-bottom: 10px
            @media (max-width: 600px)
              text-align: center
          .identity__inputs
            width: 100%
            display: grid
            grid-template-columns: 1fr 1fr 1fr
            margin-bottom: 32px
            grid-gap: 67px
            @media (max-width: 911px)
              grid-template-columns: 1fr 1fr
              grid-gap: 20px
              margin-bottom: 15px
            @media (max-width: 600px)
              grid-template-columns: 1fr
              grid-gap: 10px
            .identity__input
              display: flex
              flex-direction: column
              label
                font-family: Open Sans, sans-serif
                font-style: normal
                font-weight: normal
                font-size: 17px
                line-height: 26px
                color: #102941
                margin-bottom: 8px
                @media (max-width: 911px)
                  font-size: 14px
                  line-height: 152%
                  margin-bottom: 4px
              .identity__input-wrapper
                display: flex
                width: 100%
                max-width: 350px
                @media (max-width: 911px)
                  max-width: 100%
                input
                  width: 100%
                  border: 1px solid #102941
                  border-radius: 10px
                  font-family: Open Sans, sans-serif
                  font-style: normal
                  font-weight: normal
                  font-size: 17px
                  line-height: 26px
                  color: #102941
                  padding: 17px
                  @media (max-width: 600px)
                    padding: 10px
                    font-size: 14px
                    line-height: 152%
                    border-radius: 5px
          .identity__images
            display: flex
            @media (max-width: 600px)
              flex-direction: column
            .identity__img
              width: 100%
              max-width: 470px
              max-height: 300px
              @media (max-width: 600px)
                max-width: 300px
                margin: 0 auto
              &:not(:last-child)
                margin-right: 24px
                @media (max-width: 600px)
                  margin-right: auto
                  margin-bottom: 10px
              img
                width: 100%
                height: 100%
                object-fit: contain
.details_error
  .container
    h3
      display: block
    .details__top-btn
      display: flex
    h2
      display: none
</style>