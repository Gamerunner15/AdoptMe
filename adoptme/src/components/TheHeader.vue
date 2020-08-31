<template>
  <div>
      <header>
          <div id="left">
              <img id="logo" src="..\assets\logo.png" alt="Puppy Logo">
              <h1 id="title">AdoptMe.org</h1>
          </div>
          <div id="right">
              <a href="#">What We Do</a>
              <a href="#">Who We Are</a>
              <a href="#">Adoption Events</a>
          </div>
      </header>
      <div>
          <img id="dogs" src="..\assets\dogs.jpg" alt="Puppy Logo">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
$color-red: #EF3E42;
$color-blue: #332982;
$color-gray: #777;
header {
    background-color: $color-red;
    display: flex;
    flex-direction: row;
    height: 100px;
    align-content: center;
    justify-content: space-between;
}

#left {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
}

#right {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
}

#dogs {
    height: 20px;
}
</style>
