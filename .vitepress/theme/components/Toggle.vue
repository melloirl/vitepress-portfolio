<script setup>
import { ref } from "vue";
import { useData } from 'vitepress'

const { page } = useData()

const toggle = ref(false);

</script>

<template>
  <button @click="toggle = !toggle">{{ toggle }}</button>
  <h1>{{ page.frontmatter.hero.actions }}</h1>
</template>
