<script setup lang="ts">
const user = useTestStore()
</script>

<template>
  <div>
    <button @click="() => user.increaseCount(1)">
      {{ user.counter }}
    </button>
  </div>
</template>

