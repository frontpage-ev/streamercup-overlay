<template>
  <AppCard>
    <div class="text-primary font-bold">
      {{ props.name }}
    </div>
    <div class="text-base">
      {{ props.description }}
    </div>
    <div class="text-left font-medium">
      <i class="fas fa-user text-primary"></i>
      {{ props.votes }}
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