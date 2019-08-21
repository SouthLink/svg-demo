<template>
  <div>
    <Tabs value="name1">

      <TabPane label="普通动画" name="name1">
        <svg width="220px" height="220px" viewBox="0 0 220 220" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="页面-1" stroke="none" stroke-width="1" :fill="fill" fill-rule="evenodd" transform="translate(80, 50)">
            <g id="分组-21">
              <path d="M0 0 L50 0 L25 50 L5 10" />
              <animateTransform attributeName="transform" begin="0s" dur="2s" type="rotate" from="0 30 60" to="360 30 80" repeatCount="indefinite" />
            </g>
          </g>
        </svg>
      </TabPane>

      <TabPane label="点击动画" name="name2">
        <svg width="500" height="100">
          <circle id="orange-circle" r="30" cx="50" cy="50" fill="orange" />
          <animate xlink:href="#orange-circle" attributeName="cx" from="50" to="450" dur="1s" begin="click" fill="freeze" />
        </svg>
      </TabPane>

      <TabPane label="重复动画" name="name3">
        <svg xmlns="http://www.w3.org/2000/svg">
          <rect id="one" x="0" y="10" width="50" height="50" fill="blue">
          </rect>
          <rect id="two" x="0" y="70" width="50" height="50" fill="blue">
          </rect>
          <animate xlink:href="#one" attributeName="x" values="0;200" dur="2s" repeatCount="4" fill="freeze" id="rect-anim" begin="click" />
          <animate xlink:href="#two" attributeName="x" values="0;200" fill="freeze" dur="2s" begin="rect-anim.repeat(2)+0.5s" />
        </svg>
      </TabPane>

      <TabPane label="贝塞尔曲线动画" name="name4">
        <svg width="500" height="350">
          <circle id="circle" r="30" cx="50" cy="50" fill="orange" />
          <animate xlink:href="#circle" attributeName="cy" from="50" to="250" dur="3s" begin="click" 
          calcMode="spline" 
          values="50; 250; 120; 250; 170; 250; 210; 250" 
          keyTimes="0; 0.15; 0.3; 0.45; 0.6; 0.75; 0.9; 1" 
          keySplines="0.42 0 1 1;
                         0 0 0.59 1;
                         0.42 0 1 1;
                         0 0 0.59 1;
                         0.42 0 1 1;
                         0 0 0.59 1;
                         0.42 0 1 1" 
          fill="freeze" id="circ-anim" />
        </svg>
      </TabPane>

      <TabPane label="控制动画：pauseAnimations / unpauseAnimations" name="name5">
        <svg ref="svgControl" @click="pause" width="220px" height="220px" viewBox="0 0 220 220" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="页面-1" stroke="none" stroke-width="1" :fill="fill" fill-rule="evenodd" transform="translate(80, 50)">
            <g id="分组-21">
              <path d="M0 0 L50 0 L25 50 L5 10" />
              <animateTransform attributeName="transform" begin="0s" dur="2s" type="rotate" from="0 30 60" to="360 30 80" repeatCount="indefinite" />
            </g>
          </g>
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