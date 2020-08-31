<template>
  <div class="home">
    <the-header />
    <the-body />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheBody from '@/components/TheBody'

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheBody
  }
}
</script>
