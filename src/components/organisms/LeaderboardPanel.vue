<template>
  <div
      class="bg-primary rounded-md py-5 px-3 text-center"
  >
    <div class="grid gap-4">
      <template
          v-if="state && state.current_game.timer_main_ms != 0"
          v-for="(player, key) in players"
          :key="key"
      >
        <LeaderboardItem
            :place="key + 1" :name="player.player.name" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '../../store/app'
import { storeToRefs } from 'pinia'
import LeaderboardItem from '../atoms/LeaderboardItem.vue'
import { computed } from 'vue'
import { Player } from '../../types'

const appStore = useAppStore()
const {state} = storeToRefs(appStore)

const players = computed(() => state.value?.current_game.scores?.players.sort((a: Player, b: Player) => b.score - a.score))
</script>
