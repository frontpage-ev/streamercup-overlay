<template>
  <div
      class="p-[25px] w-full"
  >
    <AppCard class="mb-5 text-primary font-bold text-center">
      {{ props.title }}
    </AppCard>
    <div class="grid bg-white p-4 rounded-md gap-5">
      <template
          v-for="(placement, key) in props.placements"
          :key="key"
      >
        <LeaderboardItem
            :index="key"
            :place="placement.place"
            :name="placement.name"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import LeaderboardItem from './LeaderboardItem.vue'
import { Placement } from '../../types'
import { PropType } from 'vue'
import AppCard from '../AppCard.vue'

const props = defineProps({
  placements: {
    type: Array as PropType<Placement[]>,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>