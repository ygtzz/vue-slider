const { slider, sliderItem } = VueSlider;

new Vue({
  name:'c-app',
  el: '#container',
  created() {
      setTimeout(() => {
          this.list = [1,2,3,4];
      },3000);
  },
  data() {
    return {
      list:[]
    }
  },
  components: {
    'c-slider': slider,
    'c-slider-item': sliderItem
  }
});