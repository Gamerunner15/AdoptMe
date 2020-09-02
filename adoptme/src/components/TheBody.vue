<template>
  <div class="container">
    <div class="body-row">
      <div id="volunteers">
        <h2 class="subsection-title" id="volunteer-title">VOLUNTEERS</h2>
        <img id="girl" src="../assets/girl.png" />
        <p>Amazing people, making the difference every single day. Join us now and be part of a community that is changing the world.</p>
        <a id="join-us" href="#"><h2>JOIN US</h2></a>
      </div>
      <div id="testimonial">
        <h2 class="subsection-title" id="testimonial-title">TESTIMONIAL OF THE MONTH</h2>
        <img id="video-image" src="../assets/testimonial.jpg" />
      </div>
    </div>
    <div class="body-row">
      <tabbed-articles id="tabs" />
      <div id="friend">
        <img src="..\assets\dog.png">
      </div>
    </div>
  </div>
</template>

<script>
import TabbedArticles from '@/components/TabbedArticles'
export default {
  components: {
    TabbedArticles
  }

}
</script>

<style lang="scss">
$color-red: #EF3E42;
$color-blue: #332982;
$color-gray: #777;
$font-family-primary: 'Open Sans', sans-serif;
$font-family-secondary: 'Open Sans Condensed', sans-serif;

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 80%;
  margin-left: 10%;
  margin-bottom: 10%;
}

.body-row {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  height: 500px;
}

#volunteers {
  flex-grow: 1;
  width: 33%;
  height: 100%;
  border-width: 10px;
  margin-right: 40px;
  box-shadow: 5px 15px 25px rgba(0,0,0,.25);
  p {
    text-align: left;
    padding-top: 5px;
    padding-left: 15px;
    padding-bottom: 5px;
    padding-right: 25px;
  }
  img {
    width: 100%;
  }
}

#testimonial {
  flex-grow: 2;
  width: 66%;
  height: 100%;
  border-width: 10px;
  box-shadow: 5px 15px 25px rgba(0,0,0,.25);
  img {
    width: 100%;
    height: 92%;
    object-fit: cover;
    object-position: 0px, 30%;
  }
  h2 {
    border-color: $color-red;
    background-color: $color-red;
  }
}

.subsection-title {
  margin: 0px;
  color: white;
  font-family: $font-family-primary;
  font-size: 20px;
  border-style: solid;
  border-width: 10px;
  border-color: $color-blue;
  background-color: $color-blue;
  text-align: left;
}

#tabs {
  flex: 1;
  flex-grow: 3;
}

#friend {
  flex-grow: 1;
  flex: 2;
}

//Small Screens
@media screen and (max-width: 900px) {

    #join-us {
        text-align: center;
        text-decoration: none;
        color: $color-blue;
        border-style: solid;
        padding: 10px;
        width: 75px;
        float: left;
        margin-top: 30px;
        margin-left: 20px;
        margin-bottom: 20px;
    }
    #friend {
      display: none;
    }
}
//Large Screens
@media screen and (min-width: 900px) {

    #join-us {
        text-align: center;
        text-decoration: none;
        color: $color-blue;
        border-style: solid;
        padding: 10px;
        width: 150px;
        float: left;
        margin-top: 30px;
        margin-left: 20px;
        margin-bottom: 20px;
    }
}

//Tiny Screens
@media screen and (max-width: 400px) {

}

</style>
