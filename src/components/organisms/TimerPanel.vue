<template>
  <div
      v-if="state"
      class="bg-primary rounded-md p-5 text-center"
  >
    <AppTimer :ms="state.current_game.timer_main_ms" />
  </div>
</template>

<script setup lang="ts">
import AppTimer from '../atoms/AppTimer.vue'
import { useAppStore } from '../../store/app'
import { storeToRefs } from 'pinia'

const appStore = useAppStore()
const {state} = storeToRefs(appStore)
</script>
