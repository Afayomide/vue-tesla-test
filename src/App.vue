<template>
            <TopBar     
            :isSidebarVisible="isSidebarVisible" 
            @toggle-sidebar="toggleSidebar"/>
  <div class="contents">
   
  <SideBar class="big-screen-side-bar" />
 <SideBar v-if="isSidebarVisible" class="side-bar" />
    <router-view 
    class="content" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from '@/components/SideBar.vue';
import TopBar from './components/TopBar.vue';

import 'font-awesome/css/font-awesome.css';

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    TopBar,
    
  },

  data() {
    return {
      isSidebarVisible: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible; // Toggle the sidebar visibility
    },
  }
});
</script>

<style lang="scss">
*, ::after, ::before {
    box-sizing: content-box
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body,
html {
  margin: 0;
}
.contents {
  display: flex;
  gap: 2vw;
  background: rgba(249, 249, 249, 1);
  box-sizing: content-box;
}
.big-screen-side-bar, .side-bar{
  flex: 0 0 20%;
  position: sticky;
  top: 0; /* Keeps it fixed at the top while scrolling */
  height: 100%; /* Full height so it doesn't scroll */
  overflow: hidden; /* Ensure it doesn't scroll internally */
}

.content {
  flex: 0 0 75%;
}

@media (max-width: 800px) {
  .big-screen-side-bar {
   display: none;
  }
  .side-bar{
    position: fixed;
    z-index: 100;
    width: 60vw;
  }
  .contents{
    display: block;
  }
  .content{
    width: 90vw;
    margin: auto;
  }
}
</style>
