<style>
/*
 * Slide left transition
 */
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter-from {
  transform: translate(-100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>

<template>
  <Transition name="slide">
    <div
        v-if="visible"
        class="h-full bg-primary p-[25px]"
    >
      <div class="flex flex-col justify-between h-full text-center">
        <AppCard class="text-primary font-bold">
          Voting
        </AppCard>

        <template v-if="state && state.vote && state.vote.counter_ms > 0">
          <AppTimer :ms="state.vote.counter_ms" />

          <div class="grid gap-5">
            <template
                v-for="option in state.vote.options"
                :key="option.game.id"
            >
              <VoteOption
                  :name="option.game.display_name"
                  :description="option.game.description"
                  :votes="option.votes"
              />
            </template>
          </div>
        </template>

        <div
            v-else
            class="h-full flex items-center"
        >
          <div class="text-white text-4xl w-full font-bold">
            Voting beendet!
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import VoteOption from '../VoteOption.vue'
import AppCard from '../AppCard.vue'
import AppTimer from '../atoms/AppTimer.vue'
import { useAppStore } from '../../store/app'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const appStore = useAppStore()
const {state} = storeToRefs(appStore)

const visible = computed(() => {
  return state.value?.vote
})
</script>