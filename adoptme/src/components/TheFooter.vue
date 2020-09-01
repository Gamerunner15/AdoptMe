<template>
  <div>
      <footer>
          <div id="left">
              <img id="logo" src="..\assets\logo.png" alt="Puppy Logo">
              <h1 id="title">Adoptme.Org</h1>
          </div>
          <div id="right">
              <a class="menu-button" id="what-we-do" href="#">What We Do</a>
              <a class="menu-button" id="who-we-are" href="#">Who We Are</a>
              <a class="menu-button" id="adoption-events" href="#">Adoption Events</a>
          </div>
      </footer>
      <div class="column">
          <p id="address">1234 Main St. #4321<br>Amazing City, 45677</p>
          <p id="phone">Customer Support (Monday-Friday | 8AM - 4PM Eastern) <br>1-800-444-5566</p>
          <p>Some images were taken from unsplash</p>
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
$font-family-primary: 'Open Sans', sans-serif;
$font-family-secondary: 'Open Sans Condensed', sans-serif;

footer {
    background-color: $color-blue;
    display: flex;
    flex-direction: row;
    height: 150px;
    align-content: center;
    justify-content: space-between;
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
    height: 80px;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
}

#title {
font-family: $font-family-secondary;
color: white;
padding-left: 10px;
}

#right {
    display: flex;
    flex: 2;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10%;
}

.menu-button {
    color: white;
    font-size: 20px;
    font-family: $font-family-primary;
    text-decoration: none;
    max-width: 150px;
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

.column {
    color: white;
    display: flex;
    flex-direction: column;
    height: 150px;
    background-color: $color-blue;
    text-align: left;
    padding-left: 180px;
    p {
        padding-bottom: 20px;
    }
}
</style>
