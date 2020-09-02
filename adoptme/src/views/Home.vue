<template>
  <div>
    <new-header />
    <new-body />
    <new-footer />
  </div>
</template>

<script>
import NewHeader from '@/components/NewHeader'
import NewBody from '@/components/NewBody'
import NewFooter from '@/components/NewFooter'

export default {
  name: 'Home',
  components: {
    NewHeader,
    NewBody,
    NewFooter
  }
}
</script>
