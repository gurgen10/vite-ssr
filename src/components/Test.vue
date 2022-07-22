<template>
  <div>
    <button class="mt-5 text-green-900 hover:text-blue-300" @click="count++">
      {{ t('count', { count }) }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const count = ref(0)

const { t } = useI18n()
</script>
