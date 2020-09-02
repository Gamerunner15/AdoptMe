<template>
  <div>
    <new-body />
    <new-footer />
  </div>
</template>

<script>
import NewBody from '@/components/NewBody'
import NewFooter from '@/components/NewFooter'

export default {
  name: 'Home',
  components: {
    NewBody,
    NewFooter
  }
}
</script>
