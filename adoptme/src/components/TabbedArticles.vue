<template>
  <div>
      <div id="container">
        <div class="tabs">
            <button v-on:click="openTab(1)" v-bind:class="{'tablink':true, 'active':(activeTab == 1)}">PROGRAMS</button>
            <button v-on:click="openTab(2)" v-bind:class="{'tablink':true, 'active':(activeTab == 2)}">ASSOCIATED COMPANIES</button>
        </div>
        <div id="programs" v-if="activeTab == 1" class="tabcontent">
          <div class="article">
            <img src="..\assets\friend-in-trouble.png">
              <div class="articletext">
                <h2>Behavior Program</h2>
                <p>Evaluation of each dog using specialists who determine the best training that will help you friend be a better family member.</p>
                <a class="read-more" href="#"><h3>READ MORE</h3></a>
              </div>
          </div>
          <div class="article">
            <img src="..\assets\family.png">
              <div class="articletext">
                <h2>My Next Family</h2>
                <p>Are you looking for a new family member? Then, this program is for you. Don’t buy, adopt here, and let’s give a home to this amazing friends.</p>
                <a class="read-more" href="#"><h3>READ MORE</h3></a>
              </div>
          </div>
        </div>
        <div id="associated-companies" v-if="activeTab == 2" class="tabcontent">
           <div class="article">
            <img src="..\assets\base22.jpg">
              <div class="articletext">
                <h2>Base22</h2>
                <p>Evaluation of each dog using specialists who determine the best training that will help you friend be a better family member.</p>
                <a class="read-more" href="https://www.techelevator.com/"><h3>LEARN MORE</h3></a>
              </div>
          </div>
          <div class="article">
            <img src="..\assets\techelevator.jpg">
              <div class="articletext">
                <h2>Tech Elevator</h2>
                <p>This webpage brought to you by Tech Elevator Columbus, a coding BootCamp for the future.</p>
                <a class="read-more" href="#" target="_blank"><h3>LEARN MORE</h3></a>
              </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'tabbed-articles',
  data () {
    return {
      activeTab: 1
    }
  },
  methods: {
    openTab (number) {
      this.activeTab = number
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

a {
    text-decoration: none;
}

#programs {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.article {
  text-align: left;
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
  .read-more {
    font-size: 20px;
    text-align: center;
    text-decoration: none;
    color: $color-red;
    border-style: solid;
    padding: 5px;
    width: 150px;
    float: left;
    margin-top: 10px;
    }
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  .articletext {
    padding-left: 10px;
    width: 100%;
     max-width: 500px;
    h2 {
      padding-bottom: 10px;
    }
  }
}

.tabs {
  font-family: $font-family-primary;
  overflow: hidden;
  margin-left: 35px;
  margin-bottom: 10px;
  .active {
    color: $color-blue;
    border-bottom: solid 10px $color-blue;
  }
  button {
    font-size: 15px;
    font-family: $font-family-secondary;
    font-weight: bold;
    background-color: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
  }
}

.tabcontent {
  padding: 6px 12px;
  border-top: none;
  animation: fadeEffect 1s;
}

@keyframes fadeEffect {
  from {opacity: 0;}
  to {opacity: 1;}
}

</style>
