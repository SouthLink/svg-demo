<template>
  <div>
    <ul class="svg-list">
      <h2>普通动画</h2>
      <li>
        <h4>普通1</h4>
        <svg width="220px" height="220px" viewBox="0 0 220 220" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="页面-1" stroke="none" stroke-width="1" :fill="fill" fill-rule="evenodd" transform="translate(80, 50)">
            <g id="分组-21">
              <path d="M0 0 L50 0 L25 50 L5 10" />
              <animateTransform attributeName="transform" begin="0s" dur="2s" type="rotate" from="0 30 60" to="360 30 80" repeatCount="indefinite" />
            </g>
          </g>
        </svg>
      </li>
      <li>
        <h4>点击动画</h4>
        <svg xmlns="http://www.w3.org/2000/svg">
          <rect id="ant" x="0" y="10" width="50" height="50" fill="blue">
          </rect>
          <animate xlink:href="#ant" attributeName="x" values="0;200" fill="freeze" dur="2s" begin="click + 0.2s" />
        </svg>
      </li>
      <li>
        <h4>重复动画</h4>
        <svg xmlns="http://www.w3.org/2000/svg">
          <rect id="one" x="0" y="10" width="50" height="50" fill="blue">
          </rect>
          <rect id="two" x="0" y="70" width="50" height="50" fill="blue">
          </rect>
          <animate xlink:href="#one" attributeName="x" values="0;200" dur="2s" repeatCount="4" fill="freeze" id="rect-anim" />
          <animate xlink:href="#two" attributeName="x" values="0;200" fill="freeze" dur="2s" begin="rect-anim.repeat(2)+0.5s" />
          </svg>
      </li>
    </ul>
    <ul class="svg-list">
      <li>
        <h4>贝塞尔曲线动画</h4>
        <svg xmlns="http://www.w3.org/2000/svg">
          <rect id="ant1" x="0" y="10" width="50" height="50" fill="blue">
            <animate attributeName="x" dur="5s" values="0; 80; 160" keyTimes="0; .8; 1" calcMode="spline"  keySplines=".5 0 .5 1; 0 0 1 1" />
          </rect>
        </svg>
      </li>
      <li>
        <h4>控制动画：pauseAnimations / unpauseAnimations</h4>
        <svg ref="svgControl" @click="pause" width="220px" height="220px" viewBox="0 0 220 220" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="页面-1" stroke="none" stroke-width="1" :fill="fill" fill-rule="evenodd" transform="translate(80, 50)">
            <g id="分组-21">
              <path d="M0 0 L50 0 L25 50 L5 10" />
              <animateTransform attributeName="transform" begin="0s" dur="2s" type="rotate" from="0 30 60" to="360 30 80" repeatCount="indefinite" />
            </g>
          </g>
        </svg>
      </li>
    </ul>
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
      fill: '#2C8AED',
      paused: false
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
    pause() {
      if (!this.paused) {
        this.$refs.svgControl.pauseAnimations()
        this.paused = true
      } else {
        this.$refs.svgControl.unpauseAnimations()
        this.paused = false
      }
    }
  }
}
</script>
<style lang="less" scoped>
svg {
  margin: 0 auto;
  margin-top: 80px;
}

.svg-list {
  display: flex;
  list-style: none;

  li {
    flex: 1;
  }
}
</style>