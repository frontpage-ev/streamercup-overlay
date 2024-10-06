<template>
  <div
      :class="[
          'w-full grid bg-primary h-[91px] rounded-md px-8',
          'grid-cols-9'
      ]"
  >
    <!-- Participants -->
    <template
        v-for="index in 8"
        :key="index"
    >
        <LeaderboardItem
            v-if="Object.keys(placements).length >= index"
            :placement="props.placements[Object.keys(props.placements)[index - 1]]"
            :places="places"
        />

        <div
            v-else
            :class="[
              {'-order-4': index === 1},
              {'-order-3': index === 2},
              {'-order-2': index === 3},
              {'-order-1': index === 4},
              {'order-1': index === 5},
              {'order-2': index === 6},
              {'order-3': index === 7},
              {'order-4': index === 8},
            ]"
      ></div>
    </template>
    <!--------- Logo --------->
    <div class="w-full flex flex-col items-center justify-center align-middle h-full order-none">
      <img src="/assets/Logo-White-Clean-Modern@2x.png" class="h-[80px]" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
import LeaderboardItem from './LeaderboardItem.vue'
import {Placement, Placements, Places} from '../../types'
import {PropType, ref, watch} from 'vue'

const places = ref<Places>({})

const props = defineProps({
  placements: {
    type: Object as PropType<Placements>,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})

watch(props.placements, (newPlacements) => {
  let currentPlace = 0
  let lastPoints = -1
  Object.values(newPlacements)
      .sort((a: Placement, b: Placement) => a.order - b.order)
      .forEach((placement) => {
        if (placement.points !== lastPoints) {
          currentPlace++
        }

        places.value[placement.name] = currentPlace
        lastPoints = placement.points
      })

  console.log(newPlacements, places.value)
})

</script>