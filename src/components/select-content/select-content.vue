<template>
  <div class="select-content">
    <div class="select-item" v-for="(item, index) in selectItems" :key="index" @click="itemClick(item, index)">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectItems: {
      type: Array,
      default: () => ["2022年", "2021年", "2020年", "2019年"],
    },
  },
  methods: {
    itemClick(item, index) {
      this.$emit("selectClick", { item, index });
    },
  },
};
</script>

<style lang="less" scoped>
.select-content {
  display: flex;
  flex-direction: column;
  text-align: center;
  .select-item {
    padding: 10px 0;
    cursor: pointer;

    &:hover {
      background-color: #f5f7fa;
    }
  }
}
</style>
