<template>
  <div class="w-[500px] h-[90px] bg-white rounded-md p-[10px] flex flex-col justify-between">
    <div class="flex justify-between items-center">
      <div>
        <img src="assets/MAW_Germany_RGB.png" alt="" class="h-[45px]">
      </div>
      <div class="text-[26px] text-[#0057B8] font-bold">
        {{ format(currentAmount) }} / {{ format(targetAmount) }} €
      </div>
    </div>

    <!-- progressbar -->
    <div class="relative h-[12px] bg-[#0057B8]/30 rounded-md">
      <div class="absolute top-0 left-0 h-[12px] bg-[#0057B8] rounded-md" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { CharityCampaign } from '../../types'

let interval: ReturnType<typeof setInterval>
const campaigns = ref()

const currentAmount = computed(() => {
  if (!campaigns.value) {
    return 0
  }

  const {current_amount} = campaigns.value[0] as CharityCampaign
  return realValue(current_amount.value, current_amount.decimal_places)
})

const targetAmount = computed(() => {
  if (!campaigns.value) {
    return 0
  }

  const {target_amount} = campaigns.value[0] as CharityCampaign
  return target_amount.value > 0
      ? target_amount.value
      : 7500
})

const progress = computed(() => {
  if (!campaigns.value) {
    return 0
  }

  return Math.round((currentAmount.value / targetAmount.value) * 100)
})

const realValue = (value: number, decimalPlaces: number) => {
  if (value === 0) {
    return 0
  }
  return value / Math.pow(10, decimalPlaces)
}

const format = (value: number) => {
  return value.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})
}

onMounted(() => {
  interval = setInterval(() => {
    update()
  }, 10000)
  update()
})

onBeforeUnmount(() => {
  clearInterval(interval)
})

const update = () => {
  fetch('https://api.sandbox.own3d.pro/v1/twitch/charity/campaigns?broadcaster_id=418230171')
      .then(res => res.json())
      .then(data => {
        campaigns.value = data as CharityCampaign[]
      })
}
</script>