<!-- 数据总览 -->
<template>
  <div class="data-summary">
    <TopHeader :tabs="tabs" />
    <div class="search">
      <span class="text">时间：</span>
      <div class="time">
        <div class="year">
          <span class="year-text">2022 年</span>
          <img src="../../assets/img/arrow_down.png" alt="" />
        </div>
        <div class="split">-</div>
        <div class="month">
          <span class="month-text">6 月</span>
          <img src="../../assets/img/arrow_down.png" alt="" />
        </div>
      </div>
      <div class="search-btn">查询</div>
    </div>
    <div class="content">
      <div class="top">
        <div v-for="(item, index) in infos" :key="index" class="top-item">
          <card :info="item"></card>
        </div>
      </div>
      <div class="middle">
        <div class="middle-left">
          <card :info="middleInfo1">
            <template v-slot:content>
              <div id="map"></div>
            </template>
          </card>
        </div>
        <div class="middle-right">
          <div class="middle-right-top">
            <card :info="middleInfo2">
              <template v-slot:title-right>
                <div class="village-select">
                  <span class="village-title">村级：</span>
                  <div>
                    <span class="name">XX 村</span>
                    <img src="../../assets/img/arrow_down.png" alt="" />
                  </div>
                </div>
              </template>
              <template v-slot:content>
                <div class="table">
                  <div class="headers">
                    <div class="head-item" v-for="item in headers1" :key="item">{{ item }}</div>
                  </div>
                  <div class="tbody">
                    <div class="tr" v-for="(item, index) in data1" :key="index">
                      <div class="td">{{ item.name }}</div>
                      <div class="td">{{ item.machineCount }}</div>
                      <div class="td">{{ item.muCount }}</div>
                      <div class="td">{{ item.machineType }}</div>
                      <div class="td">{{ item.passRate }}</div>
                    </div>
                  </div>
                </div>
              </template>
            </card>
          </div>
          <div class="middle-right-bottom">
            <card :info="middleInfo3">
              <template v-slot:title-right>
                <div class="village-select">
                  <span class="village-title">村级：</span>
                  <div>
                    <span class="name">XX 村</span>
                    <img src="../../assets/img/arrow_down.png" alt="" />
                  </div>
                </div>
              </template>
              <template v-slot:content>
                <div class="table">
                  <div class="headers">
                    <div class="head-item" v-for="item in headers2" :key="item">{{ item }}</div>
                  </div>
                  <div class="tbody service">
                    <div class="tr" v-for="(item, index) in data1" :key="index">
                      <div class="td">{{ item.name }}</div>
                      <div class="td">{{ item.machineCount }}</div>
                      <div class="td">{{ item.muCount }}</div>
                      <div class="td">{{ item.machineType }}</div>
                      <div class="td">{{ item.passRate }}</div>
                    </div>
                  </div>
                </div>
              </template>
            </card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from "../../components/top-header/top-header.vue";
import Card from "../../components/card/card.vue";
import AMapLoader from "@amap/amap-jsapi-loader";

export default {
  components: { TopHeader, Card },
  data() {
    return {
      tabs: ["可视化演示", "实时监测", "数据总览"],
      infos: [
        { name: "总作业亩数", icon: require("../../assets/img/card.png"), value: "20", unit: "万亩" },
        { name: "总农机数量", icon: require("../../assets/img/card.png"), value: "50", unit: "台" },
        { name: "总无人机数量", icon: require("../../assets/img/card.png"), value: "41", unit: "台" },
        { name: "农资销量", icon: require("../../assets/img/card.png"), value: "1.16", unit: "万吨" },
        { name: "废弃物回收", icon: require("../../assets/img/card.png"), value: "50", unit: "万吨" },
      ],
      middleInfo1: { name: "农业服务轨迹" },
      middleInfo2: { name: "农机信息展示" },
      middleInfo3: { name: "农技服务信息展示" },
      headers1: ["村级名称", "农机数量", "总作业亩数", "农机类型", "农机达标率"],
      headers2: ["村级名称", "专家数量", "专家服务半径", "服务状况", "农民反馈"],
      data1: [
        { name: "某某村", machineCount: "50", muCount: "1000", machineType: "开垦 播种", passRate: "100%" },
        { name: "某某村", machineCount: "50", muCount: "1000", machineType: "开垦 播种", passRate: "100%" },
        { name: "某某村", machineCount: "50", muCount: "1000", machineType: "开垦 播种", passRate: "100%" },
        { name: "某某村", machineCount: "50", muCount: "1000", machineType: "开垦 播种", passRate: "100%" },
        { name: "某某村", machineCount: "50", muCount: "1000", machineType: "开垦 播种", passRate: "100%" },
        { name: "某某村", machineCount: "50", muCount: "1000", machineType: "开垦 播种", passRate: "100%" },
        { name: "某某村", machineCount: "50", muCount: "1000", machineType: "开垦 播种", passRate: "100%" },
      ],
      data2: [],
    };
  },
  created() {
    this.initMap();
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: "59e50354d1ff0466892b69be3add3518",
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          // 初始化地图
          this.map = new AMap.Map("map", {
            viewMode: "2D", //  是否为3D地图模式
            zoom: 13, // 初始化地图级别
            center: [106.340054, 38.102655], //中心点坐标  郑州
            resizeEnable: true,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.data-summary {
  width: 1920px;
  height: 1080px;
  background-color: #181a28;
  position: relative;

  .search-btn {
    width: 50px;
    height: 25px;
    color: #000;
    text-align: center;
    line-height: 25px;
    border-radius: 4px;
    background-color: #24cbe9;
    cursor: pointer;
  }

  .search {
    font-size: 14px;
    color: #fff;
    display: flex;
    align-items: center;
    position: absolute;
    left: 70px;
    top: 70px;

    .text {
      margin-right: 10px;
    }

    .time {
      display: flex;
      padding: 5px 20px;
      border: solid 1px #1a3345;
      margin-right: 30px;
      background: linear-gradient(to bottom, #24cbe9, #24cbe9) left top / 1px 7px no-repeat,
        linear-gradient(to right, #24cbe9, #24cbe9) left top / 7px 1px no-repeat,
        linear-gradient(to left, #24cbe9, #24cbe9) right top / 7px 1px no-repeat,
        linear-gradient(to bottom, #24cbe9, #24cbe9) right top / 1px 7px no-repeat,
        linear-gradient(to top, #24cbe9, #24cbe9) bottom left / 1px 7px no-repeat,
        linear-gradient(to right, #24cbe9, #24cbe9) bottom left / 7px 1px no-repeat,
        linear-gradient(to left, #24cbe9, #24cbe9) bottom right / 7px 1px no-repeat,
        linear-gradient(to top, #24cbe9, #24cbe9) bottom right / 1px 7px no-repeat;

      .year {
        margin-right: 20px;
        cursor: pointer;
        .year-text {
          margin-right: 5px;
        }
      }

      .month {
        margin-left: 20px;
        cursor: pointer;
        .month-text {
          margin-right: 5px;
        }
      }

      img {
        width: 12px;
        height: 9px;
      }
    }
  }

  .content {
    width: 100%;
    padding: 0 58px;
    margin-top: 30px;
    box-sizing: border-box;

    .top {
      width: 100%;
      height: 138px;
      display: flex;

      .top-item {
        flex: 1;
        height: 138px;
        margin-right: 19px;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    .middle {
      width: 100%;
      height: 369px;
      margin-top: 13px;
      display: flex;

      .middle-left {
        width: 1055px;
        height: 809px;
        margin-right: 16px;
      }

      .middle-right {
        .village-select {
          font-size: 16px;
          color: #ffffff66;
          display: flex;
          .name {
            margin-right: 5px;
            cursor: pointer;
          }
          img {
            width: 12px;
            height: 8px;
          }
        }

        .table {
          width: 100%;
          height: 100%;
          padding: 0 16px;
          box-sizing: border-box;

          .headers {
            width: 100%;
            height: 46px;
            color: #fff;
            font-size: 18px;
            display: flex;
            align-items: center;
            .head-item {
              flex: 1;
              text-align: center;
            }
          }
          .tbody {
            width: 100%;
            height: 298px;
            color: #fff;
            background-color: #202233;
            display: flex;
            flex-direction: column;
            &.service {
              height: 278px;
              font-size: 14px;
            }
            .tr {
              flex: 1;
              display: flex;
              align-items: center;
              .td {
                flex: 1;
                text-align: center;
              }
            }
          }
        }
        .middle-right-top {
          width: 733px;
          height: 406px;
          margin-bottom: 15px;
        }
        .middle-right-bottom {
          width: 733px;
          height: 386px;
        }
      }
    }
  }
}

#map {
  width: 450px;
  height: 716px;
  overflow: hidden;
  background-color: #24cbe9;
  margin-left: 130px;
  margin-top: 16px;
}
</style>
