<template>
<div class="w-full relative h-96">
    <!-- Red Section -->
    <div class="absolute inset-0 bg-yellow-400  flex bg-opacity-30 items-center justify-center z-10">
      <img src="../assets/Welcome.png" alt="" class="h-96">
    </div>

    <!-- Carousel -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="flex transition-transform duration-700 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <!-- Image 1 -->
        <img :src="images[1]" alt="Slide 1" class="w-full h-96 object-cover" />
        <!-- Image 2 -->
        <img :src="images[0]" alt="Slide 2" class="w-full h-96 object-cover" />
        <!-- Image 3 -->
        <img :src="images[2]" alt="Slide 3" class="w-full h-96 object-cover" />
        <!-- Image 4 -->
        <img :src="images[3]" alt="Slide 4" class="w-full h-96 object-cover" />
        <!-- Image 5 -->
        <img :src="images[4]" alt="Slide 5" class="w-full h-96 object-cover" />
      </div>
    </div>
  </div>
<docInfo src="img2.webp" />
</template>
<script>
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import docInfo from "./docInfo.vue";

export default { 
  components: {
    docInfo,
  },
  data() {
    return {
      currentIndex: 0,
      images: [img1, img2, img3, img4, img5], // Array of image paths
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    clearInterval(this.interval); // Clear the interval when the component unmounts
  },
  methods: {
    startAutoSlide() {
      this.interval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % 2; // Loop back to the first slide
      }, 7000); // Change slide every 7 seconds
    },
  },

  name: 'LandingPage'

  
}
</script>