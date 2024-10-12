<template>
  <div class="side-bar">
    <div>
      <router-link class="main-sections-link" to="/">
        <h1 class="tesla">
          <img alt="tesla" src="/img/TESLA.svg" />
        </h1>
      </router-link>
    </div>
    <div class="side-bar-info">
        <div>
      <div class="main-sections">
        <router-link class="main-sections-link" to="/report">
          <i class="fa fa-level-up svg" aria-hidden="true"></i>

          <p>Reports</p>
        </router-link>

        <router-link class="main-sections-link" to="/Library">
          <svg
            width="12"
            height="19"
            viewBox="0 0 12 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.04748 18.2647V12.2085H1.42968C0.926449 12.2085 0.58643 11.6234 0.831244 11.1406L5.83633 0.651893C6.14915 -0.0356512 7.1148 0.213035 7.1148 0.988352V7.11774H10.5694C11.0726 7.11774 11.399 7.68826 11.1814 8.171L6.33956 18.5866C6.01314 19.2887 5.04748 19.0401 5.04748 18.2647Z"
              fill="currentColor"
              fill-opacity="0.7"
            />
          </svg>
          <p>Library</p>
        </router-link>

        <router-link class="main-sections-link" to="/people">
          <svg
            width="25"
            height="14"
            viewBox="0 0 25 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.337 3C11.337 4.66 9.89131 6 8.08697 6C6.28262 6 4.8261 4.66 4.8261 3C4.8261 1.34 6.28262 0 8.08697 0C9.89131 0 11.337 1.34 11.337 3ZM20.0326 3C20.0326 4.66 18.587 6 16.7826 6C14.9783 6 13.5217 4.66 13.5217 3C13.5217 1.34 14.9783 0 16.7826 0C18.587 0 20.0326 1.34 20.0326 3ZM8.08697 8C5.55436 8 0.478271 9.17 0.478271 11.5V13C0.478271 13.55 0.967402 14 1.56523 14H14.6087C15.2065 14 15.6957 13.55 15.6957 13V11.5C15.6957 9.17 10.6196 8 8.08697 8ZM15.7283 8.05C16.1087 8.02 16.4674 8 16.7826 8C19.3152 8 24.3913 9.17 24.3913 11.5V13C24.3913 13.55 23.9022 14 23.3044 14H17.6739C17.7935 13.69 17.8696 13.35 17.8696 13V11.5C17.8696 10.03 17.0109 8.92 15.7717 8.09C15.7685 8.08697 15.7652 8.08303 15.7616 8.07872C15.7533 8.06881 15.7434 8.05697 15.7283 8.05Z"
              fill="currentColor"
            />
          </svg>

          <p>People</p>
        </router-link>

        <router-link class="main-sections-link" to="/activities">
          <svg
            width="23"
            height="18"
            viewBox="0 0 23 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.1305 0H2.73916C1.54351 0 0.565247 0.9 0.565247 2V16C0.565247 17.1 1.54351 18 2.73916 18H20.1305C21.3261 18 22.3044 17.1 22.3044 16V2C22.3044 0.9 21.3261 0 20.1305 0ZM8.17394 14H4.91307C4.31525 14 3.82612 13.55 3.82612 13C3.82612 12.45 4.31525 12 4.91307 12H8.17394C8.77177 12 9.2609 12.45 9.2609 13C9.2609 13.55 8.77177 14 8.17394 14ZM8.17394 10H4.91307C4.31525 10 3.82612 9.55 3.82612 9C3.82612 8.45 4.31525 8 4.91307 8H8.17394C8.77177 8 9.2609 8.45 9.2609 9C9.2609 9.55 8.77177 10 8.17394 10ZM8.17394 6H4.91307C4.31525 6 3.82612 5.55 3.82612 5C3.82612 4.45 4.31525 4 4.91307 4H8.17394C8.77177 4 9.2609 4.45 9.2609 5C9.2609 5.55 8.77177 6 8.17394 6ZM18.7174 8.12L15.2718 11.29C14.8479 11.68 14.1522 11.68 13.7283 11.29L12.1957 9.87C11.7718 9.48 11.7718 8.85 12.1957 8.46C12.6196 8.07 13.3044 8.07 13.7283 8.46L14.5 9.17L17.1848 6.7C17.6087 6.31 18.2935 6.31 18.7174 6.7L18.7283 6.71C19.1413 7.1 19.1413 7.74 18.7174 8.12Z"
              fill="currentColor"
              fill-opacity="0.7"
            />
          </svg>

          <p>Activities</p>
        </router-link>
      </div>

      <div class="support">
        <h3 class="faded">Support</h3>
        <router-link class="main-sections-link" to="/activities">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3C11.54 3 11.07 3.04 10.6 3.14C7.84001 3.67 5.64001 5.9 5.12001 8.66C4.64001 11.27 5.60001 13.67 7.34001 15.22C7.77001 15.6 8.00001 16.13 8.00001 16.69V19C8.00001 20.1 8.90001 21 10 21H10.28C10.63 21.6 11.26 22 12 22C12.74 22 13.38 21.6 13.72 21H14C15.1 21 16 20.1 16 19V16.69C16 16.14 16.22 15.6 16.64 15.23C18.09 13.95 19 12.08 19 10C19 6.13 15.87 3 12 3ZM12.5 14H11.5V11.41L9.67001 9.59L10.38 8.88L12 10.5L13.62 8.88L14.33 9.59L12.5 11.42V14ZM13.5 19C13.49 19 13.48 18.99 13.47 18.99V19H10.53V18.99C10.52 18.99 10.51 19 10.5 19C10.22 19 10 18.78 10 18.5C10 18.22 10.22 18 10.5 18C10.51 18 10.52 18.01 10.53 18.01V18H13.47V18.01C13.48 18.01 13.49 18 13.5 18C13.78 18 14 18.22 14 18.5C14 18.78 13.78 19 13.5 19ZM13.5 17H10.5C10.22 17 10 16.78 10 16.5C10 16.22 10.22 16 10.5 16H13.5C13.78 16 14 16.22 14 16.5C14 16.78 13.78 17 13.5 17Z"
              fill="black"
              fill-opacity="0.7"
            />
          </svg>
          <p>Get Started</p>
        </router-link>

        <router-link class="main-sections-link" to="/activities">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_830_555)">
              <path
                d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H10C9.75002 2 9.54002 2.18 9.51002 2.42L9.13002 5.07C8.52002 5.32 7.96002 5.66 7.44002 6.05L4.95002 5.05C4.72002 4.96 4.46002 5.05 4.34002 5.27L2.34002 8.73C2.21002 8.95 2.27002 9.22 2.46002 9.37L4.57002 11.02C4.53002 11.34 4.50002 11.67 4.50002 12C4.50002 12.33 4.53002 12.66 4.57002 12.98L2.46002 14.63C2.27002 14.78 2.22002 15.05 2.34002 15.27L4.34002 18.73C4.46002 18.95 4.73002 19.03 4.95002 18.95L7.44002 17.95C7.96002 18.35 8.52002 18.68 9.13002 18.93L9.51002 21.58C9.54002 21.82 9.75002 22 10 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.50002 13.93 8.50002 12C8.50002 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
                fill="black"
                fill-opacity="0.7"
              />
            </g>
            <defs>
              <clipPath id="clip0_830_555">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <p>Settings</p>
        </router-link>
      </div>
      </div>

      <div class="profile">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <rect width="34" height="34" rx="17" fill="url(#pattern0_830_565)" />
          <defs>
            <pattern
              id="pattern0_830_565"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlink:href="#image0_830_565" transform="scale(0.005)" />
            </pattern>
            <image
              id="image0_830_565"
              width="200"
              height="200"
              xlink:href="data:image/jpeg;base64,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"
            />
          </defs>
        </svg>
        <h4>Sam Wheeler</h4>
        <p>samwheeler@gmail.com</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideBar',
});
</script>

<style scoped lang="scss">
.side-bar {
  height: 100vh;
  border-radius: 0 2rem 2rem 0;
  border: 1px solid #eff0f6;
  background: #ffffff;
  box-shadow: 0px 5px 20px 0px #0000000d;
  padding: 1rem;
}
.side-bar-info {
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.tesla-logo {
  width: 138px;
  height: 17px;
  top: 43px;
  left: 38px;
}
.tesla {
  width: Fixed (230px) px;
  height: Hug (70px) px;
  gap: 40px;
}
.active {
  width: 193px;
  height: 46px;
  top: 103px;
  left: 27px;
  border-radius: 10px;
  background: #1b59f81a;
  color: #1b59f8;
}
.main-sections {
  width: 80%;
  top: 36px;
  gap: 8px;
  list-style-type: none;
}
.main-sections-link {
  display: flex;
  align-items: center;
  width: 98%;
  height: 2.8rem;
  text-decoration: none;
  color: #4d4d4d;
  margin: auto;
}
.main-sections-link svg,
.svg {
  box-sizing: content-box;
  width: 24px;
  height: 24px;
  top: 171px;
  left: 38px;
  padding: 2.25px 1rem 3px 1rem;
}
.main-sections-link p {
  //styleName: Body 1 Medium;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  letter-spacing: -0.15399999916553497px;
  text-align: left;
  margin: 0;
}
.router-link-exact-active {
  top: 103px;
  left: 27px;
  border-radius: 10px;
  background-color: #1b59f81a;
  color: #1b59f8;
}
.support {
  .faded {
    margin-top: 1rem;
    color: rgba(0, 0, 0, 0.5);
    font-size: 1rem;
    font-weight: 600;
    padding-left: 2rem;
  }
}
.profile {
  h4 {
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    text-align: left;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 14.52px;
    text-align: left;
    color: rgba(0, 0, 0, 0.5);
  }
}
</style>
