<template>
  <div class="basis">
  	<h2 class="preserve">preserveAspectRatio</h2>
    <svg width="400" height="200" viewBox="0 0 200 200" :preserveAspectRatio="preserveAspectRatio" style="border:1px solid #000;">
      <rect x="10" y="10" width="150" height="150" fill="#cd0000" />
    </svg>
    <div>
      <ul class="slice">
        <li class="slice-item">
          align ：
          <Select v-model="align" placeholder='' :style="{width: '150px',margin:'0 10px'}">
            <Option :value="d" v-for="d in alignList">{{ d }}</Option>
          </Select>
        </li>
        <li class="slice-item">
          meetOrSlice ：
          <Select v-model="meetOrSlice" placeholder='' :style="{width: '150px',margin:'0 10px'}">
            <Option value="meet">meet</Option>
            <Option value="slice">slice</Option>
            <Option value="none">none</Option>
          </Select>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  name: "basis.vue",
  data() {
    return {
      alignList: ['xMinYMin', 'xMinYMid', 'xMinYMax', 'xMidYMin', 'xMidYMid', 'xMinYMax', 'xMaxYMin', 'xMaxYMid', 'xMaxYMax'],
      align: 'xMinYMin',
      meetOrSlice: 'meet',
    }
  },
  components: {

  },
  computed: {
    preserveAspectRatio() {
      return `${this.align} ${this.meetOrSlice}`
    }
  },
  methods: {

  }
};
</script>
<style lang="less" scoped>
.slice {
  margin-top: 20px;
  list-style: none;

  .slice-item {
    text-align: left;
    margin-left: 20px;
    margin-bottom: 20px;
  }
}
.preserve{
	margin-bottom: 20px;
}
</style>