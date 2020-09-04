<template>
  <div>
    <adopt-now />
    <new-footer />
  </div>
</template>

<script>
import AdoptNow from '@/components/AdoptNow'
import NewFooter from '@/components/NewFooter'

export default {
  name: 'Adopt',
  components: {
    AdoptNow,
    NewFooter
  }
}
</script>
