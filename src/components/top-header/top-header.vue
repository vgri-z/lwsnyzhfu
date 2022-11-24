<template>
  <div class="top-header">
    <div class="title">灵武市智慧农业服务平台</div>
    <div class="tabs">
      <div class="arrow left">
        <img src="../../assets/img/arrow-right.png" alt="" />
      </div>
      <div
        v-for="(item, index) in tabs"
        :key="item"
        class="tab-item"
        :class="currentTabIndex === index ? 'active' : ''"
      >
        {{ item }}
      </div>
      <div class="arrow right">
        <img src="../../assets/img/arrow-right.png" alt="" />
      </div>
    </div>
    <div class="info">
      <div class="time">2022/06/17</div>
      <div class="day">星期五</div>
      <div class="weather">晴</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopHeader",
  props: {
    tabs: {
      type: Array,
      default: () => ["可视化演示", "数据总览", "实时监测"],
    },
  },
  data() {
    return {
      // tabs: ["可视化演示", "数据总览", "实时监测"],
      currentTabIndex: 1,
    };
  },
};
</script>

<style lang="less" scoped>
.top-header {
  width: 100%;
  height: 75px;
  background: url("../../assets/img/header_bg.png") no-repeat;
  background-size: 100% 100%;
  position: relative;

  .title {
    font-size: 18px;
    letter-spacing: 1px;
    color: #ffffff;
    position: absolute;
    left: 48px;
    top: 20px;
  }

  .tabs {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    .tab-item {
      font-size: 20px;
      color: #ffffff;
      box-shadow: -1px 4px 17px 1px rgba(10, 20, 77, 0.84);
      opacity: 0.22;
      cursor: pointer;

      &.active {
        font-size: 34px;
        color: #ffffff;
        box-shadow: -1px 4px 17px 1px rgba(10, 20, 77, 0.84);
        opacity: 1;
        margin: 0 60px;
        position: relative;
        &::after {
          content: "";
          display: inline-block;
          width: 100px;
          height: 4px;
          background-color: #24cbe9;
          border-radius: 2px;
          position: absolute;
          bottom: -14px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    .arrow {
      width: 13px;
      height: 17px;
      cursor: pointer;
      &.left {
        transform: rotate(90deg);
        margin-right: 60px;
      }
      &.right {
        transform: rotate(-90deg);
        margin-left: 60px;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .info {
    font-size: 16px;
    color: #ffffff;
    position: absolute;
    right: 58px;
    top: 22px;

    display: flex;

    .time,
    .day {
      margin-right: 10px;
    }
  }
}
</style>
