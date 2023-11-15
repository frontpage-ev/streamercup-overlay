<template>
  <div class="flex text-2xl text-white items-center rounded-md">
    <div class="w-[50px]">
      <i v-if="props.place === 1" class="fas fa-trophy-star text-[#ffd700]" />
      <i v-else-if="props.place === 2" class="fas fa-trophy text-[#c0c0c0]" />
      <i v-else-if="props.place === 3" class="fas fa-trophy text-[#cd7f32]" />
      <div v-else>
        {{ props.place }}
      </div>
    </div>
    <div :class="{
      'font-bold' : props.place <= 3,
    }">
      {{ props.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  place: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})
</script>