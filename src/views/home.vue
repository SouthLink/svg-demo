<template>
  <div class="home">
      <svg viewBox="0 0 1320 300">
        <!-- Symbol -->
        <!-- Symbol -->
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="50%" dy=".35em">
            SVG 动画分享
          </text>
        </symbol>
        <!-- Duplicate symbols -->
        <use xlink:href="#s-text" class="text"></use>
        <use xlink:href="#s-text" class="text"></use>
        <use xlink:href="#s-text" class="text"></use>
      </svg>
    </TabPane>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {
  	
  }
};
</script>

<style>
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
    stroke-dashoffset: 1000;
    stroke-dasharray: 80 160;
  }
}

@keyframes stroke1 {
  100% {
    stroke-dashoffset: 1080;
    stroke-dasharray: 80 160;
  }
}


@keyframes stroke2 {
  100% {
    stroke-dashoffset: 1160;
    stroke-dasharray: 80 160;
  }
}
</style>