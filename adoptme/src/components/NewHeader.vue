/* eslint-disable indent */
<template>
<div class="container">
    <div class="header">
        <div id="left">
                <img id="logo" src="..\assets\logo.png" alt="Puppy Logo">
                <h1 id="title">Adoptme.Org</h1>
        </div>
        <div id="right">
                <img src="..\assets\Hamburger.png" id='hamburger' v-on:click="toggleMenu()">
                <a class="menu-button" id="what-we-do" href="#"><h2>What We Do</h2></a>
                <a class="menu-button" id="who-we-are" href="#"><h2>Who We Are</h2></a>
                <a class="menu-button" id="adoption-events" href="#"><h2>Adoption Events</h2></a>
        </div>
    </div>
    <div class="mobile-menu" v-if="showMenu">
        <div class="button-row">
            <a class="mobile-button" href="#">What We Do</a>
            <a class="mobile-button" href="#">Who We Are</a>
            <a class="mobile-button" href="#">Adoption Events</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'new-header',
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu () {
      this.showMenu === false ? this.showMenu = true : this.showMenu = false
    }
  }

}
</script>

<style lang="scss">
$color-red: #EF3E42;
$color-blue: #332982;
$color-gray: #777;
$font-family-primary: 'Open Sans Condensed', sans-serif;
$font-family-secondary: 'Open Sans', sans-serif;

.container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.header {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    background-color: $color-red;
    height: 100px;
    text-align: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
}
#left {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 20px;
}
#logo {
    width: 60px;
    height: 60px;
}
.menu-button {
    display: none;
}
#title {
    font-size: 40px;
    padding-left: 10px;
}
#hamburger {
    width: 30px;
    filter: invert(100%);
    margin-right: 20px;
    cursor: pointer;
}
.mobile-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 2;
    float: right;
}
.empty-space {
    flex: 1;
    flex-grow: 3;
}
.button-row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex: 2;
    flex-grow: 2;
    background-color: $color-red;
    text-align: center;
}
.mobile-button {
    text-decoration: none;
    color: white;
    font-size: 15px;
    padding-bottom: 10px;
    font-family: $font-family-primary;
}
//Large Screens
@media screen and (min-width: 900px) {
    .menu-button {
        display: inline-block;
        padding-right: 20px;
        text-decoration: none;
        color: white;
    }
    #hamburger {
        display: none;
    }
    #right {
        display: flex;
        flex: 2;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        margin-right: 20px;
    }
    #logo {
    width: 80px;
    height: 80px;
}
}
</style>
