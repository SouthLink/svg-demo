<template>
  <div>
    <Tabs value="name1">
      <TabPane label="路径描边" name="name1">
        <svg width="220px" height="220px" viewBox="0 0 220 220" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path fill="#1EB287">
            <animate 
               attributeName="d" 
               dur="1440ms" 
               repeatCount="indefinite"
               keyTimes="0;
                         .0625;
                         .208333333;
                         .3125;
                         .395833333;
                         .645833333;
                         .833333333;
                         1"
               calcMode="spline" 
               keySplines="0,0,1,1;
                           .42,0,.58,1;
                           .42,0,1,1;
                           0,0,.58,1;
                           .42,0,.58,1;
                           .42,0,.58,1;
                           .42,0,.58,1"
               values="M 0,0 
                       C 50,0 50,0 100,0
                       100,50 100,50 100,100
                       50,100 50,100 0,100
                       0,50 0,50 0,0
                       Z;

                       M 0,0 
                       C 50,0 50,0 100,0
                       100,50 100,50 100,100
                       50,100 50,100 0,100
                       0,50 0,50 0,0
                       Z;

                       M 50,0 
                       C 75,25 75,25 100,50 
                       75,75 75,75 50,100
                       25,75 25,75 0,50
                       25,25 25,25 50,0
                       Z;

                       M 25,50 
                       C 37.5,25 37.5,25 50,0 
                       75,50 75,50 100,100
                       50,100 50,100 0,100
                       12.5,75 12.5,75 25,50
                       Z;

                       M 25,50 
                       C 37.5,25 37.5,25 50,0 
                       75,50 75,50 100,100
                       50,100 50,100 0,100
                       12.5,75 12.5,75 25,50
                       Z;

                       M 50,0
                       C 77.6,0 100,22.4 100,50 
                       100,77.6 77.6,100 50,100
                       22.4,100, 0,77.6, 0,50
                       0,22.4, 22.4,0, 50,0
                       Z;
                       
                       M 50,0
                       C 77.6,0 100,22.4 100,50 
                       100,77.6 77.6,100 50,100
                       22.4,100, 0,77.6, 0,50
                       0,22.4, 22.4,0, 50,0
                       Z;
                       
                       M 100,0 
                       C 100,50 100,50 100,100
                       50,100 50,100 0,100
                       0,50 0,50 0,0
                       50,0 50,0 100,0
                       Z;"/>
          </path>
        </svg>
      </TabPane>

      <TabPane idth="500px" height="500px" label="变形" name="name2">
         <svg 
           xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink" 
             width="800"  height="600" 
             class="path1">
            <path id="animate1" />
            <path id="animate2" />
            <path id="animate3"/>
            <path id="animate4"/>
          </svg>
      </TabPane>
     

      <TabPane idth="500px" height="500px" label="SVG-Morpheus" name="name3">
        <a href="http://alexk111.github.io/SVG-Morpheus/"> SVG-Morpheus </a>

      </TabPane>
    </Tabs>
  </div>
</template>
<script>
export default {
  name: 'transform-animate',
  components: {

  },
  data() {
    return {

    }
  },
  props: {

  },
  computed: {
    animateId() {

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
@keyframes deform {
  0% {
    d: path('M400,84c119.3,0,216,96.7,216,216c0,0,0,0,0,0c0,118-98,216-216,216c-119.3,0-216-96.7-216-216C184,182,280.7,84,400,84');
  }

  15% {
    d: path('M400.2,52c0,0,0,0,218,378c0,0,0,0,0,0c0,0,0,0-437,0c0,0,0,0,0,0C182,430,400.2,52,400.2,52');
  }

  25% {
    d: path('M400.2,52c0,0,0,0,218,378c0,0,0,0,0,0c0,0,0,0-437,0c0,0,0,0,0,0C182,430,400.2,52,400.2,52');
  }

  40% {
    d: path('M353,532c0,0,0-459.6,0-461c0,0,0,0,0,0c0-1,95.8,0,98,0c1,0,1,460,0,461C451,533,353,532,353,532');
  }

  50% {
    d: path('M353,532c0,0,0-459.6,0-461c0,0,0,0,0,0c0-1,95.8,0,98,0c1,0,1,460,0,461C451,533,353,532,353,532');
  }

  65% {
    d: path('M264.3,485.2c0,0 0,0,-85.3-258.2c0,0 0,0,220.1-160c0,0 0,0,217,161c0,0 0,0,-79,258.2C536,487,264.3,485.2,264.3,485.2');
  }

  75% {
    d: path('M264.3,485.2c0,0 0,0,-85.3-258.2c0,0 0,0,220.1-160c0,0 0,0,217,161c0,0 0,0,-79,258.2C536,487,264.3,485.2,264.3,485.2');
  }

  90% {
    d: path('M400,84c119.3,0,216,96.7,216,216c0,118-98,216-216,216c0,0,0,0,0,0c-119.3,0-216-96.7-216-216C184,182,280.7,84,400,84')
  }

  100% {
    d: path('M400,84c119.3,0,216,96.7,216,216c0,118-98,216-216,216c0,0,0,0,0,0c-119.3,0-216-96.7-216-216C184,182,280.7,84,400,84');
  }
}

/*这里描边动画实现时使用的周长为最长的图形的路径长度*/
@keyframes animate1 {
  0% {
    stroke-dashoffset: 0
  }

  100% {
    stroke-dashoffset: 1356
  }
}

@keyframes animate2 {
  0% {
    stroke-dashoffset: 339
  }

  100% {
    stroke-dashoffset: 1695
  }
}

@keyframes animate3 {
  0% {
    stroke-dashoffset: 678
  }

  100% {
    stroke-dashoffset: 2034
  }
}

@keyframes animate4 {
  0% {
    stroke-dashoffset: 1017
  }

  100% {
    stroke-dashoffset: 2373
  }
}


#animate1 {
  animation: deform 4s ease infinite, animate1 2s linear infinite;
  stroke: #ffb850;
}

#animate2 {
  animation: deform 4s ease infinite, animate2 2s linear infinite;
  stroke: #ff7e5d;
}

#animate3 {
  animation: deform 4s ease infinite, animate3 2s linear infinite;
  stroke: #8cd2a4;
}

#animate4 {
  animation: deform 4s ease infinite, animate4 2s linear infinite;
  stroke: #62adea;
}

.path1 path {
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  stroke-width: 10;
  stroke-dasharray: 339 1017;
  fill: none
}

// .text {
//   fill: none;
//   stroke-width: 5;
//   stroke-dasharray: 0 300;
//   stroke-dashoffset: 0;
//   font: 15em/1 Open Sans, Impact;
//   text-transform: uppercase;
// }

// .text:nth-child(3n + 1) {
//   stroke: #c2e9fb;
//   stroke-dashoffset: 1000;
//   stroke-dasharray: 80 160;

// }

// .text:nth-child(3n + 2) {
//   stroke: #fda085;
//   stroke-dashoffset: 1080;
//   stroke-dasharray: 80 160;

// }

// .text:nth-child(3n + 3) {
//   stroke: #fa709a;
//   stroke-dashoffset: 1160;
//   stroke-dasharray: 80 160;

// }

// #svg_1 {
//   stroke: #F60A0A;
//   animation: stroke 6s ease-in-out forwards infinite;

// }


// @keyframes stroke {
//   100% {
//     stroke-dashoffset: 1000;
//     stroke-dasharray: 80 160;
//   }
// }

// @keyframes stroke1 {
//   100% {
//     stroke-dashoffset: 1080;
//     stroke-dasharray: 80 160;
//   }
// }


// @keyframes stroke2 {
//   100% {
//     stroke-dashoffset: 1160;
//     stroke-dasharray: 80 160;
//   }
// }
</style>