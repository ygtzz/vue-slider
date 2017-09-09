const vueSlider = VueSlider.slider;
const vueSliderItem = VueSlider.sliderItem;

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
    'c-slider': vueSlider,
    'c-slider-item': vueSliderItem
  }
});