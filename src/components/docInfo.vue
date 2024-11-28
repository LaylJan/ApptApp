<template>
  <section class="flex justify-center items-center mt-7 bg-gray-100">
    <img
      :src="require(`@/assets/${src}`)"
      alt="Animated Image"
      class="w-72 h-72 object-cover rounded-2xl shadow-2xl animate-fade-float"
    />
  </section>
</template>
  
  <script>
  export default {
    name: "docInfo",
    props: {
      src: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Keyframes for floating up and fading in */
  @keyframes fade-float {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-float {
    animation: fade-float 2s ease-in-out;
  }
  </style>
  