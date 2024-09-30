<template>
  <AppLeaderboard
      title="Gesamtwertung"
      :placements="placements"
  />
</template>

<script setup lang="ts">
import { useAppStore } from '../../store/app'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { Placement, Player } from '../../types'
import AppLeaderboard from '../atoms/AppLeaderboard.vue'

const appStore = useAppStore()
const {state} = storeToRefs(appStore)

const placements = computed(() => {
  let players = state.value?.total.players?.sort((a: Player, b: Player) => b.score - a.score)
  if (!players) {
    return []
  }

  let placements: Placement[] = []
  let place: number = 0, score: number = 0
  players.forEach(player => {
    if (player.score != score || place == 0) {
      place++
    }
    score = player.score

    placements.push({
      name: player.player.name,
      place,
    })
  })

  return placements
})
</script>
