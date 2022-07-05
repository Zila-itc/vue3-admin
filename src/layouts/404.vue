<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main>
    <div>
      <div />
    </div>
    <RouterView />
    <div>
      <button @click="router.back()">
        {{ i18n.t('button.back') }}
      </button>
    </div>
  </main>
</template>
