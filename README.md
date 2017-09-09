## vue-swiper

a vue swiper component

### Quickstart
```javascript
import {swiper, swiperItem } form 'VueSwiper';
Vue.component('c-swiper',swiper);
Vue.component('c-swiperItem',swiperItem);
```
```html
 <c-swiper class="swiper" :loop="true">
    <c-swiper-item v-for="n in list" :key="'swiper' + n">
        <div class="slide">{{n}}</div>
    </c-swiper-item>
</c-swiper>
```

### Params

`swiper`
    - `speed`: the scroll speed every swipe
    - `loop` : whether scroll loop, default is true 
    - `auto` : whether scroll autoplay,defalut is true

### Preview

![swiper image]('./doc/swiper.png')