<template>
  <div class="bg-yellow-500 text-white shadow-lg">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <img src="../assets/logo.png" alt="Logo" class="w-28 h-auto" />
      </div>

      <!-- Navigation Links -->
      <div class="flex space-x-8">
        <a href="#" class="hover:text-blue-600 transition">Home</a>
        <a href="#" class="hover:text-blue-600 transition">About Us</a>
        <a href="#" class="hover:text-blue-600 transition">Services</a>
        <a href="#" class="hover:text-blue-600 transition">Contact</a>
      </div>

      <!-- Schedule Appointment Button -->
      <div>
        <button
          @click="showScheduleModal = true"
          class="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-blue-600 hover:bg-opacity-90 hover:text-white transition"
        >
          Set an Appointment
        </button>
        <schedule-modal
          v-if="showScheduleModal"
          @close="showScheduleModal = false"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import ScheduleModal from "./scheduleModal.vue";

export default {
  name: "NavbarComponent",
  components: {
    ScheduleModal,
  },
  data() {
    return {
      showScheduleModal: false,
      doctors: [

      ],
    };
  },
};
</script>
