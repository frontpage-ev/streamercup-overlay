<template>
  <span
      v-if="state"
      class="bg-primary rounded-md p-3 text-center"
  >
    <AppTimer v-if="state.current_game.timer_main_ms > 0" :ms="state.current_game.timer_main_ms" />
    <AppTimer v-if="state.vote?.counter_ms" :ms="state.vote?.counter_ms" />
  </span>
</template>

<script setup lang="ts">
import AppTimer from '../atoms/AppTimer.vue'
import { useAppStore } from '../../store/app'
import { storeToRefs } from 'pinia'

const appStore = useAppStore()
const {state} = storeToRefs(appStore)
</script>
