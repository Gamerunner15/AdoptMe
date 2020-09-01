<template>
  <div>
      <div>
        <div class="tabs">
          <button v-on:click="openTab(1)" v-bind:class="{'tablink':true, 'active':(activeTab == 1)}">PROGRAMS</button>
          <button v-on:click="openTab(2)" v-bind:class="{'tablink':true, 'active':(activeTab == 2)}">ASSOCIATED COMPANIES</button>
        </div>
        <div id="programs" v-if="activeTab == 1" class="tabcontent">
          <div class="article">
            <img src="https://api-lunacy.icons8.com/api/assets/cc5ee286-2748-4f1f-85e1-11bd9d5a33ff/Group 4.png">
              <div class="articletext">
                <h3>Behavior Program</h3>
                <p>Evaluation of each dog using specialists who determine the best training that will help you friend be a better family member.</p>
                <a class="read-more" href="#">READ MORE</a>
              </div>
          </div>
          <div class="article">
            <img src="https://api-lunacy.icons8.com/api/assets/a762f8cb-b87e-4ca6-b7e8-e8a051608fc7/family.png">
              <div class="articletext">
                <h3>My Next Family</h3>
                <p>Are you looking for a new family member? Then, this program is for you. Don’t buy, adopt here, and let’s give a home to this amazing friends.</p>
                <a class="read-more" href="#">READ MORE</a>
              </div>
          </div>
        </div>
        <div id="associated-companies" v-if="activeTab == 2" class="tabcontent">
           <div class="article">
            <img src="..\assets\base22.jpg">
              <div class="articletext">
                <h3>Base22</h3>
                <p>Evaluation of each dog using specialists who determine the best training that will help you friend be a better family member.</p>
                <a class="read-more" href="https://www.techelevator.com/">LEARN MORE</a>
              </div>
          </div>
          <div class="article">
            <img src="..\assets\techelevator.jpg">
              <div class="articletext">
                <h3>Tech Elevator</h3>
                <p>This webpage brought to you by Tech Elevator Columbus, a coding BootCamp for the future.</p>
                <a class="read-more" href="#" target="_blank">LEARN MORE</a>
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
$font-family-primary: 'Open Sans', sans-serif;
$font-family-secondary: 'Open Sans Condensed', sans-serif;

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
    text-align: center;
        text-decoration: none;
        color: $color-red;
        border-style: solid;
        padding: 10px;
        width: 150px;
        float: left;
        margin-top: 20px;
    }
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  .articletext {
    padding-left: 20px;
    h3 {
      padding-bottom: 10px;
    }
  }
}

.tabs {
  font-family: $font-family-primary;
  color: grey;
  overflow: hidden;
  position: relative;
  &:after {
    content: ' ';
    display: table;
    clear: both;
  }
  margin: 0;
  padding: 0;
  list-style: none;
  &__tab {
    float: left;
    width: 50%;
    text-align: center;
    &:first-child.active ~ .Tabs__presentation-slider {
      transform: translateX(0) scaleX(0.333);
    }
    &:nth-child(2).active ~ .Tabs__presentation-slider {
      transform: translateX(33.333%) scaleX(0.333);
    }
    &:nth-child(3).active ~ .Tabs__presentation-slider {
      transform: translateX(calc(33.333% * 2)) scaleX(0.333);
    }
  }
  &__presentation-slider {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #4A66F4;
    transform-origin: 0 0;
    transition: transform .25s;
  }
}
// .tabs {
//   font-family: $font-family-primary;
//   color: grey;
//   overflow: hidden;
//   .active {
//     color: $color-blue;
//     text-decoration: underline solid $color-blue;
//   }
//   button {
//     font-size: 20px;
//     background-color: inherit;
//     float: left;
//     border: none;
//     outline: none;
//     cursor: pointer;
//     padding: 14px 16px;
//     transition: 0.3s;
//   }
//   button:hover {
//     background-color: #ddd;
//   }
//   button.active {
//     color: $color-blue;
//   }
// }

.tabcontent {
  padding: 6px 12px;
  border-top: none;
}

.tabcontent {
  animation: fadeEffect 1s;
}

@keyframes fadeEffect {
  from {opacity: 0;}
  to {opacity: 1;}
}

</style>
