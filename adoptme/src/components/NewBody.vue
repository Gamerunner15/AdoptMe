<template>
  <div>
    <div id="banner">
      <div id="banner-text">
        <h4>This is your new family!</h4>
        <a id="adopt-now" class="box-button" href="#">ADOPT NOW</a>
      </div>
    </div>
    <div class="body-row">
      <div id="volunteers">
        <h4 class="subsection-title" id="volunteer-title">VOLUNTEERS</h4>
        <img id="girl" src="../assets/girl.png" />
        <p id="text-one">Amazing people, making the difference every single day. Join us now and be part of a community that is changing the world.</p>
        <div id="box-div">
          <a id="join-us" class="box-button" href="#">JOIN US</a>
        </div>
      </div>
      <div id="testimonial">
        <h4 class="subsection-title" id="testimonial-title">TESTIMONIAL OF THE MONTH</h4>
        <div id="video">
          <iframe class="responsive-iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
        </div>
      </div>
    </div>
    <div class="body-row">
      <tabbed-articles id="tabs" />
      <div id="friend">
        <img src="..\assets\dog.png" />
      </div>
    </div>
  </div>
</template>

<script>
import TabbedArticles from '@/components/TabbedArticles'
export default {
  name: 'new-body',
  components: {
    TabbedArticles
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
$color-red: #ef3e42;
$color-blue: #332982;
$color-gray: #777;
$font-family-primary: "Open Sans Condensed", sans-serif;
$font-family-secondary: "Open Sans", sans-serif;

#banner {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url("../assets/dogs.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 200px;
}
#banner-text {
  font-size: 20px;
  font-family: $font-family-primary;
  color: white;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-bottom: 20px;
}
.box-button {
  font-size: 10px;
  font-family: $font-family-secondary;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  text-decoration: none;
  color: white;
  border-style: solid;
  padding: 5px;
  width: 75px;
}

.body-row {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#volunteers {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-left: 10px;
  padding-bottom: 15px;
  box-shadow: 5px 15px 25px rgba(0, 0, 0, 0.25);
  h4 {
    background-color: $color-blue;
  }
  img {
    width: 100%;
  }
}
.subsection-title {
  color: white;
  text-align: center;
  font-size: 15px;
  font-family: $font-family-secondary;
  font-weight: bold;
  padding: 5px;
}
#text-one {
  font-size: 12px;
  text-align: left;
  padding-left: 5px;
  padding-top: 2px;
  padding-bottom: 5px;
}

#join-us {
  color: $color-blue;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-right: 10px;
  padding-left: 10px;
  margin-left: 20px;
}

#testimonial {
  flex: 2;
  margin-top: 20px;
  margin-right: 10px;
  box-shadow: 5px 15px 25px rgba(0, 0, 0, 0.25);
  h4 {
    background-color: $color-red;
  }
  #video {
    position: relative;
    background-color: grey;
    width: 100%;
    overflow: hidden;
    padding-top: 56.25%;
  }
}
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
#friend {
  display: none;
}
//Large Screens
@media screen and (min-width: 900px) {
  #banner {
    height: 500px;
  }
  #banner-text {
    font-size: 60px;
    padding-left: 40px;
    padding-bottom: 40px;
  }
  .box-button {
    font-size: 20px;
    margin-top: 10px;
    padding: 5px;
    width: 150px;
  }
  .body-row {
    width: 100%;
    height: 450px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  }
  .subsection-title {
    font-size: 30px;
    padding: 10px;
    height: 40px;
  }
  #volunteers {
    margin-right: 40px;
    margin-left: 100px;
    flex-grow: 1;
    width: 33%;
  }
  #text-one {
    display: inline-block;
    font-size: 20px;
    padding-left: 10px;
    padding-top: 10px;
  }
  #text-two {
    display: inline-block;
    font-size: 20px;
    padding-left: 10px;
    padding-bottom: 10px;
  }
  #join-us {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  #box-div {
    margin-top: 15px;
    margin-left: 15px;
  }
  #testimonial {
    margin-top: 0px;
    margin-right: 100px;
    flex-grow: 2;
    width: 66%;
    img {
      max-height: 500px;
      object-fit: cover;
      object-position: 0px, 30%;
    }
  }
  #friend {
    display: inline-block;
  }
}
</style>
