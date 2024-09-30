<template>
  <AppCard>
    <div class="flex flex-col gap-4">
      <div class="text-white font-bold">
        {{ props.name }}
      </div>
      <div class="text-white text-base mt-2">
        {{ props.description }}
      </div>
      <div class="text-white text-left font-medium">
        <i class="fas fa-user text-white"></i>
        {{ props.votes }}
      </div>
    </div>
  </AppCard>
</template>

<script setup lang="ts">
import AppCard from './AppCard.vue'

const props = defineProps({
  name: String,
  description: String,
  votes: Number,
})
</script>