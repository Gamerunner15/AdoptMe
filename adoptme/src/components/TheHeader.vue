<template>
  <div>
      <header>
          <div id="left">
              <img id="logo" src="..\assets\logo.png" alt="Puppy Logo">
              <h1 id="title">Adoptme.Org</h1>
          </div>
          <div id='hamburger' v-on:click="toggleMenu()">
              <img src="..\assets\Hamburger.png">
          </div>
          <div id="alt-right" v-if="!altRightHide">
              <a class="mobile-menu-button" href="#"><h2>What We Do</h2></a>
              <a class="mobile-menu-button" href="#"><h2>Who We Are</h2></a>
              <a class="mobile-menu-button" href="#"><h2>Adoption Events</h2></a>
          </div>
          <div id="right">
              <a class="menu-button" id="what-we-do" href="#"><h2>What We Do</h2></a>
              <a class="menu-button" id="who-we-are" href="#"><h2>Who We Are</h2></a>
              <a class="menu-button" id="adoption-events" href="#"><h2>Adoption Events</h2></a>
          </div>
      </header>
      <div id="banner">
          <img id="dogs" src="..\assets\dogs.jpg" alt="Puppy Logo">
          <div id="banner-text">
            <h1>This is your new family!</h1>
            <a id="adopt-now" href="#"><h2>ADOPT NOW</h2></a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'the-header',
  data () {
    return {
      altRightHide: true
    }
  },
  methods: {
    toggleMenu () {
      this.altRightHide === true ? this.altRightHide = false : this.altRightHide = true
    }
  }

}
</script>

<style lang="scss">
$color-red: #EF3E42;
$color-blue: #332982;
$color-gray: #777;
$font-family-primary: 'Open Sans', sans-serif;
$font-family-secondary: 'Open Sans Condensed', sans-serif;

header {
    background-color: $color-red;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    width: 100%;
}

#left {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10%;
}

#logo {
    height: 50px;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
}

#title {
    font-size: 20px;
    color: white;
    padding-left: 10px;
}

#what-we-do {
    flex: 1;
}

#who-we-are {
    flex: 2;
}

#adoption-events {
    flex: 3;
}

#banner-text {
    color: white;
    display: flex;
    flex-direction: column;
    margin-top: -200px;
    align-items: flex-start;
    padding-left: 50px;
    a {
        text-align: center;
        margin-top: 20px;
        text-decoration: none;
        color: white;
        border-style: solid;
        padding: 10px;
        width: 150px;
    }
}

#dogs {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

//Small Screens
@media screen and (max-width: 900px) {
    #hamburger {
        display: flex;
        flex: 2;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        padding-right: 10%;
            img {
                height: 50px;
                filter: invert(10%) sepia(45%) saturate(6884%) hue-rotate(247deg) brightness(86%) contrast(87%);
            }
        }
    #right {
        display: none;
    }
    #banner {
    height: 300px;
    }
    .menu-button {
        display: none;
    }
}
//Large Screens
@media screen and (min-width: 900px) {
    header {
    height: 100px;
    }
    #hamburger {
        display: none;
        }
    #alt-right {
        display: none;
    }
    #right {
        display: flex;
        flex: 2;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
    #banner {
        height: 600px;
    }
    .menu-button {
        color: white;
        font-size: 20px;
        font-family: $font-family-primary;
        text-decoration: none;
        padding-left: 10px;
    }
}

//Tiny Screens
@media screen and (max-width: 400px) {

}
</style>
