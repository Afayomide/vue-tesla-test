<template>
    <div class="nav">
    <!-- Hamburger Icon -->
    <router-link class="main-sections-link" to="/report">
      <h2 class="tesla"> 
            <img alt="tesla" src="../../public/img/TESLA.svg"/>
        </h2>
        </router-link>
    <a>
        <i :class="iconClass" @click="toggleSidebar"></i>
    </a>
    </div>
    </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  
  export default defineComponent({
    name: "TopBar",
    props: {
    isSidebarVisible: Boolean, 
  },
    computed: {
    iconClass() :string {
      return this.isSidebarVisible ? 'fa fa-times' : 'fa fa-bars'; 
    },
  },

    methods: {
      toggleSidebar() {
        this.$emit('toggle-sidebar'); // Emit an event to the parent
      },
    },
  
  });
  </script>
  
  <style scoped lang="scss">
  .nav{
    display: none;
    justify-content: space-between;
    align-items: center;
    padding: 1rem ;
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
  @media (max-width: 800px) {
    .nav{
      display: flex;
    }
  }
  </style>