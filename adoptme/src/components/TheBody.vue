<template>
  <div class="container">
    <div class="body-row">
      <div id="volunteers">
        <h1 class="subsection-title" id="volunteer-title">VOLUNTEERS</h1>
        <img id="girl" src="../assets/girl.png" />
        <p>Amazing people, making the difference every single day. Join us now and be part of a community that is changing the world.</p>
        <a id="join-us" href="#">JOIN US</a>
      </div>
      <div id="testimonial">
        <h1 class="subsection-title" id="testimonial-title">TESTIMONIAL OF THE MONTH</h1>
        <img id="video-image" src="../assets/testimonial.jpg" />
      </div>
    </div>
    <div class="body-row">
      <tabbed-articles />
      <div id="friend">
        <img src="https://api-lunacy.icons8.com/api/assets/0dd926a4-11ea-4c3e-9a61-60407f7ce56d/dog.png">
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
}

.body-row {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: bottom;
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
  a {
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
  h1 {
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

#friend {
  flex: 2;
  margin-left: 200px;
}

</style>
