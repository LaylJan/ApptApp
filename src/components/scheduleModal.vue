<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
  >
    <div class="bg-yellow-500 bg-opacity-100 rounded-lg shadow-xl w-96 p-6">
      <div class="flex justify-between items-center border-b pb-4 mb-4">
        <h2 class="text-xl font-semibold">Set an Appointment</h2>
        <button
          @click="$emit('close')"
          class="text-red-500 hover:text-red-700 transition"
        >
          ✖
        </button>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="name" class="block text-s font-medium">Name</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Enter your name"
            class="w-full border text-black rounded-md px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
          />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-s font-medium">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="Enter your email"
            class="w-full border text-black rounded-md px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
          />
        </div>

        <div class="mb-4">
          <label for="number" class="block text-s font-medium"
            >Contact Number</label
          >
          <input
            id="number"
            v-model="form.number"
            type="tel"
            placeholder="Enter your number"
            class="w-full border text-black rounded-md px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
          />
        </div>

        <div class="mb-4">
          <label for="doctor" class="block text-s font-medium"
            >Select Doctor</label
          >
          <select
            id="doctor"
            v-model="form.doctor"
            class="w-full border text-black rounded-md px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
          >
            <option disabled value="">Choose a doctor</option>
            <option
              v-for="doctor in doctors"
              :key="doctor.id"
              :value="doctor.name"
            >
              {{ doctor.name }}
            </option>
          </select>
        </div>

        <div class="mb-4">
          <label for="schedule" class="block text-s font-medium"
            >Available Schedule</label
          >
          <select
            id="schedule"
            v-model="form.schedule"
            class="w-full border text-black rounded-md px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
          >
            <option disabled value="">Please Select a schedule</option>
          </select>
        </div>

        <button
          type="submit"
          class="w-full bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-blue-600 hover:bg-opacity-90 hover:text-white transition"
        >
          Confirm Appointment
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScheduleModal",
  props: {
    doctors: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        number: "",
        doctor: "",
        schedule: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log("Form Submitted:", this.form);
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
/* Modal Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
