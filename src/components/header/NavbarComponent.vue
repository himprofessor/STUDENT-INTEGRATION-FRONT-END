<template>
  <div class="body">
    <nav class="p-4 shadow md:flex md:items-center md:justify-between">
      <div class="flex justify-between items-center">
        <span
          class="text-2xl font-[Poppins] cursor-pointer font-serif"
          style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif"
        >
          <img
            class="h-11 inline md:ml-12 md:ml-10"
            src="@/assets/logo-en.png"
          />
        </span>
        <span
          class="text-4xl cursor-pointer mx-2 md:hidden block font-serif"
          @click="toggleMenu"
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
      <!-- navbar left -->
      <ul
        :class="{
          'md:flex mr-6 md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 transition-all ease-in duration-500 font-serif':
            !menuOpen,
          block: menuOpen,
          hidden: !menuOpen,
          'mt-6': menuOpen,
        }"
        style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif"
      >
        <!-- ... your navigation links ... -->
        <li class="block px-4 py-2 text-gray-500 font-serif">
          <a
            href="/"
            class="hover:underline block text-gray-500"
            style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif"
          >
            Home
          </a>
        </li>
        <li class="block px-4 py-2 text-gray-500 font-serif">
          <a
            href="#"
            class="hover:underline block text-gray-500"
            style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif"
          >
            Curriculum
          </a>
        </li>
        <!-- <li class="block px-4 py-2 text-gray-500 font-serif">
          <a href="/department-staff" class="hover:underline block text-gray-500" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
            Department & Staff
          </a>
        </li> -->

        <router-link
          to="/department-staff"
          class="hover:underline block text-gray-500" style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif">
           <li class="block px-4 py-2 text-gray-500 font-serif">
         
            Department & Staff
          </li>
        </router-link>

        <li
          id="menu-item-600"
          class="font-serif z-10"
          style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif"
        >
          <div class="relative group">
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="hover:underline px-3 py-4 rounded-sm flex items-center text-gray-500 font-serif"
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
              class="dropdown-content absolute hidden bg-gray-50 text-black group-hover:block w-48 font-serif z-10"
            >
              <a
                href="#"
                class="block px-4 py-2 text-gray-500"
                style="
                  font-size: 14px;
                  font-family: 'Kantumruy Pro', sans-serif;
                "
                >Clubs & Organizations</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-gray-500"
                style="
                  font-size: 14px;
                  font-family: 'Kantumruy Pro', sans-serif;
                "
                >Events & Activities</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-gray-500"
                style="
                  font-size: 14px;
                  font-family: 'Kantumruy Pro', sans-serif;
                "
                >Resources</a
              >
            </div>
          </div>
        </li>

        <li class="block px-4 py-2 text-gray-500 font-serif">
          <a
            href="#"
            class="hover:underline block text-gray-500"
            style="font-size: 14px; font-family: 'Kantumruy Pro', sans-serif"
            >Career Opportunity</a
          >
        </li>
      </ul>
    </nav>
  </div>
  <!-- <router-view /> -->
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
