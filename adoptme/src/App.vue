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
$font-family-secondary: 'Lora', serif;
$font-family-tertiary: 'Open Sans', sans-serif;
$font-weight-h1: 300;
$font-weight-h2: bold;
$font-weight-h3: bold;

* {
  margin: 0;
}

#app {
  a {
    text-decoration: none;
  }
  h1 {
    color: white;
    font-size: 30px;
    font-family: $font-family-primary;
    font-weight: $font-weight-h1;
  }
  h2 {
    font-size: 20px;
    font-family: $font-family-primary;
    font-weight: $font-weight-h2;
  }
  h3 {
    font-size: 12px;
    font-family: $font-family-tertiary;
    font-weight: $font-weight-h3;
  }
  p {
    font-family: $font-family-secondary;
  }
}

@media screen and (min-width: 900px) {
#app {
   h1 {
    color: white;
    font-size: 40px;
    font-family: $font-family-primary;
    font-weight: $font-weight-h1;
  }
  h2 {
    font-size: 30px;
    font-family: $font-family-primary;
    font-weight: $font-weight-h2;
  }
  h3 {
    font-size: 15px;
    font-family: $font-family-tertiary;
    font-weight: $font-weight-h3;
  }
  p {
    font-family: $font-family-secondary;
  }
}
}
</style>
