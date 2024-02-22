<template>
  <div>
    <div class="inline-flex items-center justify-center w-full">
      <hr class="w-full lg:mx-20 md:mx-10 mx-5 h-px lg:mt-8 md:mt-8 lg:mb-0 md:mb-0 mb-4 border-0 bg-white" />
    </div>
    <footer :class="{ 'md:bg-transparent': menuOpen }" class="w-full mr-20 shadow-white md:flex md:items-center md:justify-between mr-20 text-gray-500">
      <!-- Logo -->
      <div class="flex justify-between items-center">
        <div class="text-2xl mx-5 font-[Poppins] cursor-pointer font-serif">
          <a href="/">
            <img class="h-11 inline md:ml-12 md:ml-10" src="@/assets/logo-en.png"/>
          </a>
        </div>
        <!-- Hamburger Icon -->
        <span @click="toggleMenu" class="text-4xl cursor-pointer mx-2 md:hidden block font-serif" style="font-family: 'Kantumruy Pro', sans-serif">
          <svg v-if="menuIcon === 'menu'" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path>
          </svg>
          <svg v-else-if="menuIcon === 'close'" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </span>
      </div>
      <!-- Menu Items -->
      <ul class="dropdown-up" :class="{'md:flex md:flex-row md:items-center z-[-1] md:z-auto md:static absolute w-full md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 transition-all ease-in duration-500 font-serif':!menuOpen, block: menuOpen,hidden: !menuOpen,'mb-10 md:mt-0 md:-mb-10': menuOpen,}" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
        <!-- home page  -->
        <li class="block text-textB px-4 py-2 font-serif">
          <a :class="{'text-textB font-bold': !$route.path || $route.path === '/' }" href="/" class="md:ml-4 block" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
            Home
          </a>
        </li>

        <!-- Curriculum page-->
        <li class="block px-4 py-2 text-textB  font-serif">
          <a :class="{'text-textB font-bold': $route.path === '/curriculum' }" href="/curriculum" class="md:ml-4 block" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
            Curriculum
          </a>
        </li>

        <!-- department & staff page -->
        <li class="block px-4 py-2 text-textB  font-serif">
          <a :class="{'text-textB font-bold': $route.path === '/department-staff' }" href="/department-staff" class="md:ml-4 block" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
            Department & Staff
          </a>
        </li>

        <!-- group student life page -->
        <li id="menu-item-600" class="font-serif z-10" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
          <div class="relative group">
            <div :class="{'text-textB font-bold': $route.path === '/student_activity' || $route.path === '/rules' }" id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="md:ml-4 px-3 py-4 flex items-center font-serif" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
              <li class="block py-2 text-textB font-serif">
                <a :class="{'text-textB font-bold': $route.path === '/student_activity' || $route.path === '/rules' }" class="mx-4 block" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
                  Student's Life
                </a>
              </li>
              <svg class="w-2.5 h-2.5 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
            </div>
            <div class="dropdown-content absolute hidden bg-gray-50 text-black group-hover:block w-48 font-serif z-10 bg-gray-300">
              <!--item 1 -->
              <li class="block py-2 text-textB  font-serif">
                <a :class="{'text-textB font-bold': $route.path === '/student_activity' }" href="/student_activity" class="mx-4 block" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
                  Student Activities Club
                </a>
              </li>
              <!-- item 2 -->
              <li class="block py-2 text-textB font-serif">
                <a :class="{'text-textB font-bold': $route.path === '/rules' }" href="/rules" class="mx-4 block" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
                  Our Rule
                </a>
              </li>
            </div>
          </div>
        </li>

        <!-- career Opportunity page-->
        <li class="block text-textB px-4 py-2 font-serif">
          <a :class="{'text-textB font-bold': $route.path === '/career-opportunity' }" href="/career-opportunity" class="md:ml-4 block" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
            Career Opportunity
          </a>
        </li>
        
        <!-- New/update page-->
        <li class="block text-textB px-4 py-2 font-serif">
          <a :class="{'text-textB font-bold': $route.path === '/news_update' }" href="/news_update" class="md:ml-4 block" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
            News/Update
          </a>
        </li>
      </ul>
    </footer>
    <div class="card bg-002 h-7 p-1">
      <p class="flex justify-center text-xs text-white text-center">
        @Copy right by Passerellesnumeriques Cambodia.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      menuIcon: "menu",
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      this.menuIcon = this.menuOpen ? "close" : "menu";
      if (this.menuIcon === "menu") {
        this.hideMenuIcon();
      }
    },
    hideMenuIcon() {
      // Add the logic to hide the menu icon here
    },
  },
};
</script>

<style scoped>
.dropdown-up {
  bottom: 100%;
}
/* Additional styles for drop-up menu */
.dropdown-up .dropdown-content {
  top: auto;
  bottom: 100%;
}
</style>