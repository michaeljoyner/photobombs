<template>
  <div class="home px-4">
    <h1 class="text-5xl text-center my-16 font-black">Photobombs</h1>
    <div class="my-16 flex justify-center items-center overflow-auto">
      <router-link
        to="/contestants/dad"
        class="mx-4 hover:text-indigo-700 font-bold"
        >&#128016;</router-link
      >
      <router-link
        to="/contestants/mom"
        class="mx-4 hover:text-indigo-700 font-bold"
        >&#128027;</router-link
      >
      <router-link
        to="/contestants/lol"
        class="mx-4 hover:text-indigo-700 font-bold"
        >Lol</router-link
      >
      <router-link
        to="/contestants/mooz"
        class="mx-4 hover:text-indigo-700 font-bold"
        >Mooz</router-link
      >
      <router-link
        to="/contestants/sam"
        class="mx-4 hover:text-indigo-700 font-bold"
        >Sam</router-link
      >
      <router-link
        to="/contestants/steph"
        class="mx-4 hover:text-indigo-700 font-bold"
        >Steph</router-link
      >
    </div>
    <div class="flex flex-wrap justify-around max-w-4xl mx-auto">
      <div
        v-for="(photo, index) in photos"
        :key="index"
        class="my-8 p-4 rounded shadow bg-white"
      >
        <div class="mb-2">
          <span class="uppercase font-bold"
            >{{ photo.contestant }} #{{ photo.number }}</span
          >
        </div>
        <div class="w-full md:w-64 h-auto md:h-64">
          <img
            :src="`${photo.src}`"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},

  data() {
    return {
      baseUrl: process.env.publicPath
    };
  },

  computed: {
    photos() {
      return this.$store.state.photos;
    }
  }
};
</script>
