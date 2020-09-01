<template>
  <div class="home">
    <the-header />
    <the-body />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheBody from '@/components/TheBody'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheBody,
    TheFooter
  }
}
</script>
