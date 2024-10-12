<template>
  <div class="heading">
  <!-- Hamburger Icon -->
    <h2> 
       {{ routeName }}
      </h2>
  <a>
    <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.2075 6.25H9.74998V1.66667C9.74998 1.1625 9.33748 0.75 8.83331 0.75H5.16665C4.66248 0.75 4.24998 1.1625 4.24998 1.66667V6.25H2.79248C1.97665 6.25 1.56415 7.24 2.14165 7.8175L6.34915 12.025C6.70665 12.3825 7.28415 12.3825 7.64165 12.025L11.8491 7.8175C12.4266 7.24 12.0233 6.25 11.2075 6.25ZM0.583313 15.4167C0.583313 15.9208 0.995813 16.3333 1.49998 16.3333H12.5C13.0041 16.3333 13.4166 15.9208 13.4166 15.4167C13.4166 14.9125 13.0041 14.5 12.5 14.5H1.49998C0.995813 14.5 0.583313 14.9125 0.583313 15.4167Z" fill="currentColor"/>
  </svg>
  
    Download</a>
  </div>
  </template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from 'vue-router';


export default defineComponent({
  name: "HeadingBar",

  setup() {
    const route = useRoute();

    const capitalizeFirstLetter = (string: string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const routeName = route.name ? capitalizeFirstLetter(route.name.toString()) : 'Unnamed Route';

    return {
      routeName
    };
  }

});
</script>

<style scoped lang="scss">
.heading{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: .05px;
  border-bottom-color: rgba(77, 77, 77,0.3);
  border-bottom-style: solid;
}

.heading a{
  display: flex;
  align-items: center;
font-size: 14px;
font-weight: 600;
line-height: 18px;
text-align: right;
color: #4D4D4D;
}
</style>