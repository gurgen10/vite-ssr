<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
      <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          {{ t("home") }}
        </router-link>
        <router-link to="/about" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          {{ t("about") }}
        </router-link>
        <router-link to="/service" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          {{ t("service") }}
        </router-link>
        <router-link to="/posts" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          {{ t("posts") }}
        </router-link>
      </div>
      <div>
        <form>
          <label>{{ t('language') }}</label>
          <select v-model="locale" class="ml-4 px-4 py-3 rounded-full" @change="toggleLocales">
            <option v-for="loc in locales" :key="loc" :value="loc">
              {{ loc }}
            </option>
          </select>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { DEFAULT_LOCALE, SUPPORTED_LOCALES as locales } from '~/i18n'

const { t, locale } = useI18n()

const route = useRoute()

const toggleLocales = () => {
  const nextLocale = locales[(locales.indexOf(locale.value)) % locales.length]
  const base = nextLocale === DEFAULT_LOCALE ? '' : `/${nextLocale}`
  window.location.pathname = base + route.fullPath
}
</script>
