<template>
  <div class="area-manage">
    <TopHeader :tabs="tabs" />
    <div class="content">
      <div class="left">
        <div class="main">
          <card :info="leftInfo" :is-show-title-right="false"> </card>
        </div>
        <div class="more">查看更多</div>
      </div>
      <div class="middle">
        <card :info="middleInfo" :is-show-title-right="false"> </card>
      </div>
      <div class="right">
        <div class="right-top">
          <card :info="rightTopInfo" :is-show-title-right="false"> </card>
        </div>
        <div class="right-bottom">
          <card :info="rightBottomInfo" :is-show-title-right="false"> </card>
        </div>
        <div class="more">查看更多</div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from "../../components/top-header/top-header.vue";
import Card from "../../components/card/card.vue";

export default {
  components: { TopHeader, Card },
  data() {
    return {
      tabs: ["数据总览", "地块管理", "实时监测"],
      leftInfo: { name: "地块历史种植流程预览" },
      middleInfo: { name: "农事跟踪管理" },
      rightTopInfo: { name: "地块流程信息" },
      rightBottomInfo: { name: "生长周期分类展示" },
    };
  },
};
</script>

<style lang="less" scoped>
.area-manage {
  width: 1920px;
  height: 1080px;
  background-color: #181a28;
  position: relative;

  .more {
    width: 100%;
    height: 52px;
    color: #fff;
    text-align: center;
    line-height: 52px;
    border-radius: 10px;
    background-color: #1e202f;
    cursor: pointer;
  }

  .content {
    width: 100%;
    padding: 0 58px;
    margin-top: 30px;
    box-sizing: border-box;
    display: flex;

    .left {
      width: 524px;
      height: 949px;
      margin-right: 14px;

      .main {
        width: 100%;
        height: 882px;
        margin-bottom: 15px;
      }
    }
    .middle {
      width: 718px;
      height: 949px;
      margin-right: 15px;
    }
    .right {
      width: 532px;
      height: 949px;
      .right-top {
        width: 100%;
        height: 430px;
        margin-bottom: 15px;
      }
      .right-bottom {
        width: 100%;
        height: 436px;
        margin-bottom: 16px;
      }
    }
  }
}
</style>
