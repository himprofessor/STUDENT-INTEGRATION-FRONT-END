<template>
  <nav class="bg-white dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 sm:px-9 py-3 mx-auto">
      <div class="flex items-center justify-between">
        <!-- Logo and Menu Button -->
        <div class="logo_container">
          <span class="logo_helper"></span>
          <a
            href="https://www.passerellesnumeriques.org/en/"
            class="flex items-center space-x-3 rtl:space-x-reverse ml-4"
          >
            <img
              src="@/assets/logo-en.png"
              alt="Passerelles numériques"
              id="logo"
              style="width: 160px; padding-top: 0px; height: auto"
              data-height-percentage="95"
              data-actual-width="1263"
              data-actual-height="534"
            />
          </a>
        </div>

        <!-- Responsive Menu Button for Mobile -->
        <button
          class="sm:hidden text-gray-900 dark:text-white hover:text-blue-700 flex items-center"
          @click="toggleMobileMenu"
        >
          <svg
            class="w-6 h-6 text-gray-900 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <!-- Navigation Links (Hidden on Small Screens) -->
        <ul
          class="hidden sm:flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse mr-7"
        >
          <li>
            <a
              href="#"
              class="hover:underline px-3 py-4 rounded-sm flex items-center text-gray-500"
              >Home</a
            >
          </li>

          <li>
            <a
              href="#"
              class="hover:underline px-3 py-4 rounded-sm flex items-center text-gray-500"
              >Curriculum</a
            >
          </li>
          <li>
            <a
              href="#"
              class="hover:underline px-3 py-4 rounded-sm flex items-center text-gray-500"
              >Department & Staff</a
            >
          </li>
          <li>
            <div class="relative group">
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                class="hover:underline px-3 py-4 rounded-sm flex items-center text-gray-500"
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
                class="dropdown-content absolute hidden bg-white text-black group-hover:block"
              >
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 text-gray-500"
                  >Clubs & Organizations</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 text-gray-500"
                  >Events & Activities</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 text-gray-500"
                  >Resources</a
                >
              </div>
            </div>
          </li>

          <li>
            <a
              href="#"
              class="hover:underline px-3 py-4 rounded-sm flex items-center text-gray-500"
              >Career Opportunity</a
            >
          </li>
        </ul>
      </div>

      <!-- Responsive Menu for Small Screens -->
      <div v-show="isMobileMenuVisible" class="sm:hidden">
        <ul class="flex flex-col space-y-4 mt-4">
          <li>
            <a
              href="#"
              class="hover:underline px-3 py-3 rounded-sm flex items-center hover:bg-gray-100"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="hover:underline px-3 py-3 rounded-sm flex items-center hover:bg-gray-100"
              >Curriculum</a
            >
          </li>
          <li>
            <a
              href="#"
              class="hover:underline px-3 py-3 rounded-sm flex items-center hover:bg-gray-100"
            >
              Department & Staff
            </a>
          </li>
          <li>
            <div class="relative group">
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
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
                class="dropdown-content absolute hidden bg-white text-black group-hover:block"
              >
                <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                  >Clubs & Organizations</a
                >
                <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                  >Events & Activities</a
                >
                <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                  Resources</a
                >
              </div>
            </div>
          </li>
          <li>
            <a
              href="#"
              class="hover:underline px-3 py-3 rounded-sm flex items-center hover:bg-gray-100"
              >Career Opportunity</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuVisible: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuVisible = !this.isMobileMenuVisible;
    },
  },
};
</script>
