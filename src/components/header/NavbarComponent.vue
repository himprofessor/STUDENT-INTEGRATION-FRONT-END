<template>
  <div class="navbar sticky top-0 right-0 left-0 z-20">
    <nav class="p-4 bg-white lg:flex justify-between md:items-center border-gray-200 ">
      <div class="flex justify-between md:items-center md:flex justify-between">
        <span class="text-2xl font-[Poppins] cursor-pointer font-serif" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
          <img class="lg:ml-12 md:ml-10 h-12 inline " src="@/assets/logo-en.png"/>
        </span>
        <span @click="toggleMenu" class="lg:hidden md:block md:mr-10 text-4xl cursor-pointer flex-end font-serif"  style="font-family: 'Kantumruy Pro', sans-serif">
          <svg v-if="menuIcon === 'menu'" class="md:w-9 md:h-9 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path>
          </svg>
          <svg v-else-if="menuIcon === 'close'" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </span>
      </div>
      <!-- Navbar Left -->
      <div class="md:bg-gray-100 md:mx-10 md:rounded-md md:block md:w-auto" id="navbar-default">
        <ul :class="{'lg:flex md:items-center z-[-1] md:z-auto lg:static absolute bg-white w-full md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 transition-all ease-in duration-500 font-serif': !menuOpen, block: menuOpen, hidden: !menuOpen, 'mt-6': menuOpen,}" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
          <!-- home page  -->
          <li class="block px-4 py-2 text-gray-500 font-serif">
            <a :class="{'text-textA border-b-2 border-blue-400 font-bold': !$route.path || $route.path === '/' }" href="/" class="md:hover:text-textB md:ml-4 block text-gray-500" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
              Home
            </a>
          </li>

          <!-- Curriculum page-->
          <li class="block px-4 py-2 text-gray-500 font-serif">
            <a :class="{'text-textA border-b-2 border-blue-400 font-bold': $route.path === '/curriculum' }" href="/curriculum" class="md:hover:text-textB md:ml-4 block text-gray-500" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
              Curriculum
            </a>
          </li>

          <!-- department & staff page -->
          <li class="block px-4 py-2 text-gray-500 font-serif">
            <a :class="{'text-textA border-b-2 border-blue-400 font-bold': $route.path === '/department-staff' }" href="/department-staff" class="md:hover:text-textB md:ml-4 block text-gray-500" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
              Department & Staff
            </a>
          </li>

          <!-- group student life page -->
          <li id="menu-item-600" class="font-serif z-10" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
            <div class="relative group">
              <div :class="{'text-textA': $route.path === '/student_activity' || $route.path === '/rules' }" id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="hover:text-textB md:ml-4 px-3 py-4 flex items-center text-gray-500 font-serif" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
                <li class="block py-2 text-gray-500 font-serif">
                  <a :class="{'text-textA border-b-2 border-blue-400 font-bold': $route.path === '/student_activity' || $route.path === '/rules' }" class="md:hover:text-textB mx-4 block text-gray-500" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
                    Student's Life
                  </a>
                </li>
                <svg class="w-2.5 h-2.5 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
              </div>
              <div class="dropdown-content absolute hidden bg-gray-50 text-black group-hover:block w-48 font-serif z-10 bg-gray-300">
                <!--item 1 -->
                <li class="block py-2 text-gray-500 font-serif">
                  <a :class="{'text-textA font-bold': $route.path === '/student_activity' }" href="/student_activity" class="md:hover:text-textB mx-4 block text-gray-500" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
                    Student Activity
                  </a>
                </li>
                <!-- item 2 -->
                <li class="block py-2 text-gray-500 font-serif">
                  <a :class="{'text-textA font-bold': $route.path === '/rules' }" href="/rules" class="md:hover:text-textB mx-4 block text-gray-500" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
                    Our Rule
                  </a>
                </li>
              </div>
            </div>
          </li>

          <!-- career Opportunity page-->
          <li class="block px-4 py-2 text-gray-500 font-serif">
            <a :class="{'text-textA border-b-2 border-blue-400 font-bold': $route.path === '/career-opportunity' }" href="/career-opportunity" class="md:hover:text-textB md:ml-4 block text-gray-500" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
              Career Opportunity
            </a>
          </li>
          
          <!-- Curriculum page-->
          <li class="block px-4 py-2 text-gray-500 font-serif">
            <a :class="{'text-textA border-b-2 border-blue-400 font-bold': $route.path === '/news_update' }" href="/news_update" class="md:hover:text-textB md:ml-4 block text-gray-500" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
              News/Update
            </a>
          </li>
        </ul>
      </div>
    </nav>
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
    },
  },
};
</script>