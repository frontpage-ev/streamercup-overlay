<template>
  <div class="text-5xl text-white font-bold">
    <i class="fas fa-solid fa-hourglass-clock"></i>
    {{ formatTime(props.ms) }}
  </div>
</template>

<script setup lang="ts">
import { useFormat } from '../../composables/format'

const {formatTime} = useFormat()

const props = defineProps({
  ms: Number,
})
</script>