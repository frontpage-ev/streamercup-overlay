<template>
  <div
      v-if="component === 'combined'"
      class="relative w-[400px] h-[856px] bg-black/20"
  >
    <AppCenterElement
        class="absolute z-[3]"
    >
      <VotingPanel />
    </AppCenterElement>
    <AppCenterElement
        v-if="showTimer || showLeaderboard"
        class="absolute z-[2] gap-4 flex-col bg-primary"
    >
      <TimerPanel v-if="showTimer" />
      <LeaderboardPanel v-if="showLeaderboard" />
    </AppCenterElement>
    <AppCenterElement
        class="absolute z-[1] bg-primary"
    >
      <GlobalLeaderboardPanel />
    </AppCenterElement>
  </div>

  <template v-if="component === 'donation-panel'">
    <DonationPanel />
  </template>
</template>

<script setup lang="ts">
import { computed, Ref, ref } from 'vue'
import VotingPanel from './components/organisms/VotingPanel.vue'
import TimerPanel from './components/organisms/TimerPanel.vue'
import LeaderboardPanel from './components/organisms/LeaderboardPanel.vue'
import DonationPanel from './components/organisms/DonationPanel.vue'
import GlobalLeaderboardPanel from './components/organisms/GlobalLeaderboardPanel.vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from './store/app'
import AppCenterElement from './components/atoms/AppCenterElement.vue'

const params = new URLSearchParams(window.location.search)
const component: Ref<string | null> = ref(params.get('component'))

const appStore = useAppStore()
const {state} = storeToRefs(appStore)

//const showGlobalLeaderboard = computed(() => state.value?.current_game?.timer_main_ms == 0)
const showLeaderboard = computed(() => state.value?.current_game?.timer_main_ms != 0 && state.value?.current_game?.id)
const showTimer = computed(() => state.value?.current_game ? state.value?.current_game?.timer_main_ms > 0 : false)
</script>