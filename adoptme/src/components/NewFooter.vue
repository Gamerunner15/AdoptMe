<template>
  <div class="footer">
    <div id="red-line">
    </div>
    <div class="footer-content">
      <div id="top">
        <img src="..\assets\logo.png" alt="Puppy Logo" />
        <h1>Adoptme.Org</h1>
      </div>
      <div id="bottom-menu">
        <a class="bottom-button" href="#"><h2>What We Do</h2></a>
        <a class="bottom-button" href="#"><h2>Who We Are</h2></a>
        <a class="bottom-button" href="#"><h2>Adoption Events</h2></a>
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
      <div id="info-big">
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
.footer {
   background-color: $color-blue;
   height: 300px;
}
#red-line {
  background-color: $color-red;
  height: 10px;
  width: 100%;
}
.footer-content {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
}
#top {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 10px;
  img {
  height: 40px;
  width: 40px;
  padding-left: 5px;
  padding-right: 5px;
  }
}

#bottom-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 10px;
  a {
    color: white;
  }
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
#info-big {
  display: none;
}
@media screen and (min-width: 900px) {
  .footer {
    background-color: $color-blue;
    height: 300px;
  }
  .footer-content {
    flex-direction: row;
    align-content: flex-start;
    justify-content: space-evenly;
  }
  #bottom-menu {
    margin-top: 20px;
    align-items: flex-start;
  }
  .bottom-button {
    padding-left: 60px;
  }
  #bottom-logo {
    padding-top: 20px;
  }
  #info {
    display: none;
  }
  #info-big {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 50px;
    color: white;
  }
}
//Small Screens
@media screen and (max-width: 400px) {
  .bottom-button {
    font-size: 12px;
  }
  #info {
    font-size: 12px;
  }
  .footer {
    height: 250px;
  }
}
</style>
