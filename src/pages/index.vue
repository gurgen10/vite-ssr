<script setup lang="ts">
import { defineProps } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  message: String,
})
</script>

<template>
  <div>
    <h1 class="mt-6 text-2xl font-bold underline text-yellow-500">
      {{ t('hello') }}
    </h1>
    <Test />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
