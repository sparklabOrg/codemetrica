<script setup>
import DefaultTheme from 'vitepress/theme';
import { computed } from 'vue';
import { useRoute } from 'vitepress';

const route = useRoute();
const isApi = computed(() => route.path.startsWith('/api/'));
</script>

<template>
  <div :class="{ 'api-docs': isApi }">
    <DefaultTheme.Layout />
  </div>
</template>
