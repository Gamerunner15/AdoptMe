<template>
<link href="https://fonts.googleapis.com/css2?family=Lora&family=Open+Sans+Condensed:wght@300&family=Open+Sans:wght@700&display=swap" rel="stylesheet">
  <div id="app">
    <new-header />
    <router-view/>
  </div>
</template>

<script>
import NewHeader from '@/components/NewHeader'
export default {
  name: 'App',
  components: {
    NewHeader
  }
}
</script>

<style lang="scss">
$color-red: #EF3E42;
$color-blue: #332982;
$color-gray: #777;

$font-family-primary: 'Open Sans Condensed', sans-serif;
$font-family-secondary: 'Open Sans', sans-serif;

$font-size-h1: 60px;
$font-family-h1: $font-family-primary;
$font-weight-h1: 300;

$font-size-h2: 20px;
$font-family-h2: $font-family-secondary;
$font-weight-h2: bold;

* {
  margin: 0;
}

#app {
  h1 {
    color: white;
    font-size: 40px;
    font-family: $font-family-h1;
    font-weight: $font-weight-h1;
  }
  h2 {
    font-size: $font-size-h2;
    font-family: $font-family-h2;
    font-weight: $font-weight-h2;
  }
  h3 {
    font-size: 15px;
    font-family: $font-family-h2;
    font-weight: $font-weight-h2;
  }
  p {
    font-family: 'Lora';
  }
}

@media screen and (min-width: 900px) {
#app {
  h1 {
    color: white;
    font-size: $font-size-h1;
    font-family: $font-family-h1;
    font-weight: $font-weight-h1;
  }
  h2 {
    font-size: $font-size-h2;
    font-family: $font-family-h2;
    font-weight: $font-weight-h2;
  }
  h3 {
    font-size: 15px;
    font-family: $font-family-h2;
    font-weight: $font-weight-h2;
  }
}
}
</style>
