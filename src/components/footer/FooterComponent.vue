<template>
  <div>
    <div class="inline-flex items-center justify-center w-full">
      <hr class="w-full mx-20 h-px my-8 border-0 dark:bg-gray-700" />
    </div>
    <footer
      :class="{ 'md:bg-transparent': menuOpen }"
      class="p-4 w-full mr-20 shadow-white md:flex md:items-center md:justify-between mr-20 text-gray-500"
    >
      <!-- Logo -->
      <div class="flex justify-between items-center">
        <router-link
          to="/"
          class="text-2xl mx-5 font-[Poppins] cursor-pointer font-serif"
        >
          <img
            class="h-11 inline md:ml-12 md:ml-10"
            src="@/assets/logo-en.png"
          />
        </router-link>
        <!-- Hamburger Icon -->
        <span
          @click="toggleMenu"
          class="text-4xl cursor-pointer mx-2 md:hidden block font-serif"
          style="font-family: 'Kantumruy Pro', sans-serif"
        >
          <svg
            v-if="menuIcon === 'menu'"
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            ></path>
          </svg>
          <svg
            v-else-if="menuIcon === 'close'"
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </span>
      </div>
      <!-- Menu Items -->
      <ul
        class="dropdown-up"
        :class="{
          'md:flex md:flex-row md:items-center z-[-1] md:z-auto md:static absolute w-full md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 transition-all ease-in duration-500 font-serif':
            !menuOpen,
          block: menuOpen,
          hidden: !menuOpen,
          'mb-10 md:mt-0 md:-mb-10': menuOpen,
        }"
        style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif"
      >
        <!-- Menu Items -->
        <li class="block px-4 py-2 text-gray-500 font-serif">
          <router-link
            :to="{ path: '/', exact: true }"
            class="block hover:text-gray-600 text-white"
            style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif"
          >
            Home
          </router-link>
        </li>
        <li class="block px-4 py-2 text-gray-500 font-serif">
          <router-link
            to="/curriculum"
            class="block hover:text-gray-600 text-white"
            style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif"
          >
            Curriculum
          </router-link>
        </li>
        <li class="block px-4 py-2 text-gray-500 font-serif">
          <router-link
            to="/department-staff"
            class="block hover:text-gray-600 text-white"
            style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif"
          >
            Department & Staff
          </router-link>
        </li>
        <li
          id="menu-item-600"
          class="font-serif z-10"
          style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif"
        >
          <div class="relative group">
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="px-3 py-4 rounded-sm flex items-center text-white font-serif"
              style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif"
            >
              Student's Life
              <svg
                class="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              class="dropdown-content absolute hidden bg-gray-50 text-black group-hover:block w-48 font-serif dropdown-up"
            >
              <router-link
                to="/clubs-organizations"
                class="hover:text-textA block px-3 py-2 text-gray-500"
                style="
                  font-size: 14px;
                  font-family: 'Kantumruy Pro', sans-serif;
                "
              >
                Clubs & Organizations
              </router-link>
              <router-link
                to="/events-activities"
                class="hover:text-textA block px-3 py-2 text-gray-500"
                style="
                  font-size: 14px;
                  font-family: 'Kantumruy Pro', sans-serif;
                "
              >
                Events & Activities
              </router-link>
              <router-link
                to="/resources"
                class="hover:text-textA block px-3 py-2 text-gray-500"
                style="
                  font-size: 14px;
                  font-family: 'Kantumruy Pro', sans-serif;
                "
              >
                Resources
              </router-link>
            </div>
          </div>
        </li>
        <li class="block px-4 py-2 text-gray-500 font-serif">
          <a
            href="#"
            class="block hover:text-gray-600 text-white"
            style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif"
            >Contact Us</a
          >
        </li>
        <router-link
          to="/career-opportunity"
          class="block text-gray-500"
          style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif"
        >
          <li
            :class="{ 'text-textA': $route.path === '/career-opportunity' }"
            class="hover:text-gray-500 block px-4 py-2 text-white"
          >
            Career Opportunity
          </li>
        </router-link>
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
.text-textA {
  color: gray; /* Replace with the desired color value */
}
</style>
