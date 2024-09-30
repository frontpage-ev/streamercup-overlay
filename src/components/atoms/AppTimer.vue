<template>
  <span class="text-3xl text-white font-bold">
    {{ formatTime(props.ms) }}
  </span>
</template>

<script setup lang="ts">
import { useFormat } from '../../composables/format'

const {formatTime} = useFormat()

const props = defineProps({
  ms: Number,
})
</script>