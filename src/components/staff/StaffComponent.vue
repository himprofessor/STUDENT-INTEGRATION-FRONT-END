<template>
  <div class="card-staff">
    <div class="card-grid mx-20 gap-2 place-content-stretch">
      <div
        class="p-5 mr-5 mt-5 rounded-md shadow shadow-gray-500 card2"
        v-for="staffMember in staff"
        :key="staffMember.email"
      >
        <div
          class="bg-red-100 rounded-md department font-bold flex justify-center"
        >
          <p class="font-normal text-stone-600">{{ staffMember.department }}</p>
        </div>
        <div class="flex flex-col items-center justify-center mt-4">
          <div class="w-20 h-20 rounded-full overflow-hidden mb-2">
            <img
              :src="staffMember.profileImage"
              alt="Profile Image"
              class="w-full h-full object-cover"
            />
          </div>
          <p
            class="dark:text-dark text-xl font-bold uppercase tracking-wide text-center"
          >
            {{ staffMember.firstName }} {{ staffMember.lastName }}
          </p>
          <div class="flex items-center px-1 sm:px-5">

          </div>
          <p class="font-normal text-stone-700 mb-2">
            {{ staffMember.position }}
          </p>
        </div>
        <div class="flex flex-col mt-4">
          <div class="flex items-center px-1 sm:px-5 mb-2">
            <svg
              class="w-5 h-5 text-stone-500 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"
              />
            </svg>
            <p class="font-normal text-stone-500">
              {{ staffMember.email }}
            </p>
          </div>
          <div class="flex items-center px-1 sm:px-5 mb-2">
            <svg
              class="w-5 h-5 text-stone-500 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.4-.5-3.6 0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1 0 9.4 7.6 17 17 17 .5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4V19m-4-7h2a5 5 0 0 0-5-5v2a3 3 0 0 1 3 3m4 0h2c0-5-4.03-9-9-9v2c3.86 0 7 3.13 7 7Z"
              ></path>
            </svg>
            <p class="font-normal text-stone-500">
              {{ staffMember.phoneNumber }}
            </p>
          </div>
          <div class="flex items-center px-1 sm:px-5">
            <svg
              class="w-5 h-5 text-stone-500 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p class="font-normal text-stone-500">
              {{ staffMember.startDate }} - {{ staffMember.endDate }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "firstName",
    "lastName",
    "email",
    "phone",
    "position",
    "department",
    "startDate",
    "endDate",
  ],
  data() {
    return {
      staff: [
        {
          profileImage: require("@/assets/person.png"),
          firstName: "Dariya",
          lastName: "Thorn",
          email: "dariya@gmail.com",
          phoneNumber: "1234567890",
          position: "Web Intern",
          startDate: "2023-12-18",
          endDate: "2023-12-22",
          department: "Training",
        },
        {
          profileImage: require("@/assets/person.png"),
          firstName: "Dariya",
          lastName: "Thorn",
          email: "dariya@gmail.com",
          phoneNumber: "1234567890",
          position: "Web Intern",
          startDate: "2023-12-18",
          endDate: "2023-12-22",
          department: "Training",
        },
        {
          profileImage: require("@/assets/person.png"),
          firstName: "Dariya",
          lastName: "Thorn",
          email: "dariya@gmail.com",
          phoneNumber: "1234567890",
          position: "Web Intern",
          startDate: "2023-12-18",
          endDate: "2023-12-22",
          department: "Training",
        },
        {
          profileImage: require("@/assets/person.png"),
          firstName: "Dariya",
          lastName: "Thorn",
          email: "dariya@gmail.com",
          phoneNumber: "1234567890",
          position: "Web Intern",
          startDate: "2023-12-18",
          endDate: "2023-12-22",
          department: "asdfghjka",
        },
      ],
    };
  },
};
</script>
<style scoped>
.department {
  width: 100px;
  text-align: center;
}
.card-staff {
  display: flex;
  justify-content: space-between;
}
/* styles for mobile */
.card-grid {
  gap: 10px;
  display: grid;
  grid-template-columns: 1fr;
}
/* Tablet styles */
@media screen and (min-width: 600px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .card2 {
    width: 100%;
  }
}
/* Desktop styles */
@media screen and (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
.card-content {
  flex: 1;
}
</style>
