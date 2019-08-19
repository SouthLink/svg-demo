<template>
  <div>
    <svg width="51px" height="10px" viewBox="0 0 51 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 53 (72520) - https://sketchapp.com -->
        <title>直线 2</title>
        <desc>Created with Sketch.</desc>
        <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Apple-Watch-38mm-Copy-4" transform="translate(-326.000000, -356.000000)" :fill="fill" fill-rule="nonzero">
                <g id="分组-21" transform="translate(242.000000, 211.000000)">
                    <g id="分组-7">
                        <path id="直线-2" d="M93.5,149.5 L98,149.5 L98.5,149.5 L98.5,150.5 L98,150.5 L93.5,150.5 L93.5,154.5 L84.5,150 L93.5,145.5 L93.5,149.5 Z M103,150.5 L102.5,150.5 L102.5,149.5 L103,149.5 L108,149.5 L108.5,149.5 L108.5,150.5 L108,150.5 L103,150.5 Z M113,150.5 L112.5,150.5 L112.5,149.5 L113,149.5 L118,149.5 L118.5,149.5 L118.5,150.5 L118,150.5 L113,150.5 Z M123,150.5 L122.5,150.5 L122.5,149.5 L123,149.5 L128,149.5 L128.5,149.5 L128.5,150.5 L128,150.5 L123,150.5 Z M133,150.5 L132.5,150.5 L132.5,149.5 L133,149.5 L134,149.5 L134.5,149.5 L134.5,150.5 L134,150.5 L133,150.5 Z"></path>
                        <path :id="id" d="M93.5,149.5 L98,149.5 L98.5,149.5 L98.5,150.5 L98,150.5 L93.5,150.5 L93.5,154.5 L84.5,150 L93.5,145.5 L93.5,149.5 Z"></path>
                        <animateTransform
                          v-bind:xlink:href="animateId"
                          attributeName="transform"
                          begin="0s"
                          dur="1s"
                          type="translate"
                          from="50" to="1"
                          calcMode="linear"
                          repeatCount="indefinite" />
                    </g>
                </g>
            </g>
        </g>
    </svg>
  </div>
</template>

<script>

export default {
  name: 'normal-svg',
  components: {

  },
  data() {
    return {
      id : 'foo',
      fill: '#2C8AED'
    }
  },
  props:{

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


</style>