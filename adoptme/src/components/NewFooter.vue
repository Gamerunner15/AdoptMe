<template>
  <div class="footer">
    <div id="top">
      <img id="bottom-logo" src="..\assets\logo.png" alt="Puppy Logo" />
      <h1 id="bottom-title">Adoptme.Org</h1>
    </div>
    <div id="bottom-menu">
      <a class="bottom-button" href="#">What We Do</a>
      <a class="bottom-button" href="#">Who We Are</a>
      <a class="bottom-button" href="#">Adoption Events</a>
    </div>
    <div id="info">
      <p id="address">
        1234 Main St. #4321
        <br />Amazing City, 45677
      </p>
      <p id="phone">
        Customer Support (Monday-Friday | 8AM - 4PM Eastern)
        <br />1-800-444-5566
      </p>
      <p>Some images were taken from unsplash</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
$color-red: #ef3e42;
$color-blue: #332982;
$color-gray: #777;
$font-family-primary: "Open Sans Condensed", sans-serif;
$font-family-secondary: "Open Sans", sans-serif;

.footer {
  background-color: $color-blue;
  display: flex;
  flex-direction: column;
  height: 300px;
  align-content: center;
  justify-content: space-evenly;
}
#top {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
#bottom-logo {
  height: 40px;
  width: 40px;
  padding-left: 5px;
  padding-right: 5px;
}

#bottom-title {
  font-family: $font-family-secondary;
  color: white;
  padding-left: 10px;
}

#bottom-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.bottom-button {
    text-decoration: none;
    color: white;
    font-size: 15px;
    padding-bottom: 10px;
    font-family: $font-family-secondary;
    font-weight: bold;
}
#info {
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  p {
    color: white;
    padding-bottom: 10px;
  }
}
@media screen and (min-width: 900px) {
  .footer {
  flex-direction: row;
  height: 300px;
  align-content: center;
  justify-content: space-evenly;
}
}
</style>
