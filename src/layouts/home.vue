<template>
  <main class="px-4 text-center text-gray-700 dark:text-gray-200">
    <Header />
    <router-view v-bind="$attrs" />
  </main>
</template>
