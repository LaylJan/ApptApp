<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
  >
    <div class="bg-yellow-400 bg-opacity-95 rounded-lg shadow-xl w-96 p-6">
      <div class="flex justify-between items-center border-b pb-4 mb-4">
        <h2 class="text-xl font-semibold text-gray-800">Set an Appointment</h2>
        <button
          @click="$emit('close')"
          class="text-black hover:text-blue-700 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 40 40"
          >
            <path
              fill="currentColor"
              d="M21.499 19.994L32.755 8.727a1.064 1.064 0 0 0-.001-1.502c-.398-.396-1.099-.398-1.501.002L20 18.494L8.743 7.224c-.4-.395-1.101-.393-1.499.002a1.05 1.05 0 0 0-.309.751c0 .284.11.55.309.747L18.5 19.993L7.245 31.263a1.064 1.064 0 0 0 .003 1.503c.193.191.466.301.748.301h.006c.283-.001.556-.112.745-.305L20 21.495l11.257 11.27c.199.198.465.308.747.308a1.06 1.06 0 0 0 1.061-1.061c0-.283-.11-.55-.31-.747z"
            />
          </svg>
        </button>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="name" class="block text-s text-gray-900 font-medium"
            >Name</label
          >
          <input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Enter your name"
            autocomplete="off"
            class="w-full border text-black rounded-md px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
          />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-s text-gray-900 font-medium"
            >Email</label
          >
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="Enter your email"
            autocomplete="off"
            class="w-full border text-black rounded-md px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
          />
        </div>

        <div class="mb-4">
          <label for="number" class="block text-gray-900 text-s font-medium"
            >Contact Number</label
          >
          <input
            id="number"
            v-model="form.number"
            type="tel"
            placeholder="Enter your number"
            autocomplete="off"
            class="w-full border text-gray-900 text-black rounded-md px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
          />
        </div>

        <div class="mb-4">
          <label for="doctor" class="block text-gray-900 text-s font-medium"
            >Select Doctor</label
          >
          <select
            id="doctor"
            v-model="form.doctor"
            class="w-full border text-black rounded-md px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
            @change="updateSchedules"
          >
            <option disabled value="">Choose a doctor</option>
            <option
              v-for="doctor in doctors"
              :key="doctor._id"
              :value="doctor.name"
            >
              {{ doctor.name }}
            </option>
          </select>
        </div>

        <div class="mb-4">
          <label for="schedule" class="block text-gray-900 text-s font-medium"
            >Available Schedule</label
          >
          <select
            id="schedule"
            v-model="form.schedule"
            class="w-full border text-black rounded-md px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
          >
            <option disabled value="">Please Select a schedule</option>
            <option
              v-for="schedule in availableSchedules"
              :key="schedule"
              :value="schedule"
            >
              {{ schedule }}
            </option>
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
import axios from "axios";

export default {
  name: "ScheduleModal",
  data() {
    return {
      form: {
        name: "",
        email: "",
        number: "",
        doctor: "",
        schedule: "",
      },
      doctors: [], // Holds the list of doctors fetched from the backend
      availableSchedules: [], // Holds the schedules of the selected doctor
    };
  },
  methods: {
    async fetchDoctors() {
      try {
        const response = await axios.get("http://localhost:5000/api/doctors");
        this.doctors = response.data; // Populate the doctors list
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    },
    updateSchedules() {
      const selectedDoctor = this.doctors.find(
        (doctor) => doctor.name === this.form.doctor
      );
      this.availableSchedules = selectedDoctor ? selectedDoctor.schedule : [];
    },
    async handleSubmit() {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/appointments",
          {
            ...this.form,
            approved: false,
          }
        );
        console.log("Appointment Created:", response.data);
        this.$emit("close");
      } catch (error) {
        console.error("Error creating appointment:", error);
      }
    },
  },
  mounted() {
    this.fetchDoctors(); // Fetch doctors when the component mounts
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
