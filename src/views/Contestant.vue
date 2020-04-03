<template>
  <div class="px-4">
    <div>
      <router-link to="/"
        ><span class="text-xl font-black text-gray-600"
          >&larr; Back</span
        ></router-link
      >
    </div>
    <div class="my-20">
      <p class="capitalize font-black text-5xl text-center">{{ name }}</p>
    </div>

    <div class="my-12 px-6 text-center">
      <p>
        <strong>Entries: </strong>
        <span>{{ photos.length }}</span>
      </p>
      <p>
        <strong>Quality: </strong>
        <span class="capitalize">{{ quality }}</span>
      </p>
    </div>

    <div class="flex flex-wrap justify-around max-w-4xl mx-auto">
      <div
        v-for="(photo, index) in photos"
        :key="index"
        class="my-8 p-4 rounded shadow"
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
  computed: {
    name() {
      return this.$route.params.name;
    },

    photos() {
      return this.$store.getters.forContestant(this.name);
    },

    quality() {
      const table = {
        dad: "poor",
        mom: "erratic",
        lol: "middling",
        mooz: "exceptional",
        sam: "uninspiring",
        steph: "laughable"
      };

      return table[this.name];
    }
  }
};
</script>
