<template>
  <div>
    <Tabs value="name1">
      <TabPane label="路径描边" name="name1">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="340px" height="333px" viewBox="0 0 340 333" enable-background="new 0 0 340 333" xml:space="preserve">
          <path class="path" fill="#FFFFFF" stroke="#000000" stroke-width="4" d="M66.039,133.545c0,0-21-57,18-67s49-4,65,8
        s30,41,53,27s66,4,58,32s-5,44,18,57s22,46,0,45s-54-40-68-16s-40,88-83,48s11-61-11-80s-79-7-70-41
        C46.039,146.545,53.039,128.545,66.039,133.545z" />
        </svg>
        
        <<!-- svg  width="340px" height="333px">
          <line id="svg_1" y2="190" x2="457" y1="190" x1="107" stroke-width="5" stroke="#000000" fill="none"/>
        </svg> -->
      </TabPane>
      <TabPane idth="500px" height="500px" label="文字描边" name="name2">
        <svg viewBox="0 0 1320 300">
          <!-- Symbol -->
          <!-- Symbol -->
          <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="50%" dy=".35em">
              XUN CE
              迅策
            </text>
          </symbol>
          <!-- Duplicate symbols -->
          <use xlink:href="#s-text" class="text"></use>
          <use xlink:href="#s-text" class="text"></use>
          <use xlink:href="#s-text" class="text"></use>
        </svg>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
export default {
  name: 'normal-svg',
  components: {

  },
  data() {
    return {
      id: 'foo',
      fill: '#2C8AED'
    }
  },
  props: {

  },
  computed: {
    animateId() {
      return `#${this.id}`
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 5s linear alternate infinite;
}

@keyframes dash {
  from {
    stroke-dashoffset: 1000;
  }

  to {
    stroke-dashoffset: 0;
  }
}

// @import url(https://fonts.googleapis.com/css?family=Open+Sans:800);

.text {
  fill: none;
  stroke-width: 5;
  stroke-dasharray: 0 300;
  stroke-dashoffset: 0;
  font: 15em/1 Open Sans, Impact;
  text-transform: uppercase;
}

.text:nth-child(3n + 1) {
  stroke: #c2e9fb;
  animation: stroke 6s ease-in-out forwards infinite;

}

.text:nth-child(3n + 2) {
  stroke: #fda085;
  animation: stroke1 6s ease-in-out forwards infinite;

}

.text:nth-child(3n + 3) {
  stroke: #fa709a;
  animation: stroke2 6s ease-in-out forwards infinite;

}

#svg_1 {
  stroke: #F60A0A;
  animation: stroke 6s ease-in-out forwards infinite;

}


@keyframes stroke {
  100% {
    stroke-dasharray: 80 160;
    stroke-dashoffset: 1000;
  }
}

@keyframes stroke1 {
  100% {
    stroke-dasharray: 80 160;
    stroke-dashoffset: 1080;
  }
}


@keyframes stroke2 {
  100% {
    stroke-dasharray: 80 160;
    stroke-dashoffset: 1160;
  }
}
</style>