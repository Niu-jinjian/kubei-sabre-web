<script setup>
import { ref } from 'vue'
import imgLogo from '@/assets/images/logo.png'

const logo = ref(imgLogo)

const showLogo = ref(true)
</script>

<template>
  <div class="log-box">
    <img v-if="showLogo" :src="logo" class="log-img" />
  </div>
</template>

<style lang="scss" scoped>
.log-img {
  height: 105px;
  width: 120px;
}
</style>
