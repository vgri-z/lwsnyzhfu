<!-- 数据总览 -->
<template>
  <div class="data-summary">
    <TopHeader :tabs="tabs" />
    <div class="search">
      <span class="text">时间：</span>
      <div class="time">
        <el-popover ref="yearPopupRef" placement="bottom" width="150" trigger="click">
          <select-content @selectClick="yearChange"></select-content>
          <div class="year" slot="reference">
            <span class="year-text">{{ year }}</span>
            <img src="../../assets/img/arrow_down.png" alt="" />
          </div>
        </el-popover>
        <!-- <div class="year">
          <span class="year-text">2022 年</span>
          <img src="../../assets/img/arrow_down.png" alt="" />
        </div> -->
        <div class="split">-</div>
        <el-popover ref="monthPopupRef" placement="bottom" width="150" trigger="click">
          <select-content @selectClick="monthChange" :select-items="months"></select-content>
          <div class="month" slot="reference">
            <span class="month-text">{{ month }}</span>
            <img src="../../assets/img/arrow_down.png" alt="" />
          </div>
        </el-popover>
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
            <template v-slot:title-right>
              <div style="color: #ffffff; opacity: 0.4">单位：百分比</div>
            </template>
            <template v-slot:content>
              <div ref="chartRef1" style="width: 100%; height: 100%"></div>
            </template>
          </card>
        </div>
        <div class="middle-right">
          <card :info="middleInfo2">
            <template v-slot:title-right>
              <img src="../../assets/img/warn1.png" width="30" height="30" alt="" />
            </template>
            <template v-slot:content>
              <div class="right-content">
                <div class="table">
                  <div class="tr" v-for="(item, index) in data1" :key="index">
                    <div class="td td-title">{{ item.name }}</div>
                    <div class="td">{{ item.value }}</div>
                    <div class="td">{{ item.value }}</div>
                    <div class="td">{{ item.value }}</div>
                    <div class="td">{{ item.value }}</div>
                    <div class="td">{{ item.value }}</div>
                    <div class="td">{{ item.value }}</div>
                  </div>
                </div>
                <div class="next">
                  <img src="../../assets/img/arrow-right.png" alt="" />
                </div>
              </div>
            </template>
          </card>
        </div>
      </div>
      <div class="search2">
        <div class="time-search search-item">
          <span class="text">时间：</span>
          <el-popover ref="yearPopupRef" placement="bottom" width="150" trigger="click">
            <select-content @selectClick="yearChange" :select-items="years"></select-content>
            <div class="time select" slot="reference">
              <div class="year">
                <span class="year-text">{{ year }}</span>
                <img src="../../assets/img/arrow_down.png" alt="" />
              </div>
            </div>
          </el-popover>
        </div>
        <div class="crops search-item">
          <span class="text">作物：</span>
          <el-popover ref="typePopupRef" placement="bottom" width="150" trigger="click">
            <select-content @selectClick="typeChange" :select-items="types"></select-content>
            <div class="types select" slot="reference">
              <div class="crops-type">
                <span class="year-text">{{ type }}</span>
                <img src="../../assets/img/arrow_down.png" alt="" />
              </div>
            </div>
          </el-popover>
        </div>
        <div class="search-btn">查询</div>
      </div>
      <div class="bottom">
        <div class="bottom-left">
          <card :info="bottomInfo1">
            <template v-slot:title-right>
              <div class="legend" style="color: #fff">
                <div class="dot">
                  <span class="dot-item dot-item1"></span>
                  <span>2022</span>
                </div>
                <div class="dot">
                  <span class="dot-item dot-item2"></span>
                  <span>2021</span>
                </div>
              </div>
            </template>
            <template v-slot:content>
              <div ref="chartRef2" style="width: 100%; height: 100%"></div>
            </template>
          </card>
        </div>
        <div class="bottom-right">
          <card :info="bottomInfo2">
            <template v-slot:title-right>
              <img src="../../assets/img/warn2.png" width="30" height="23" alt="" />
            </template>
            <template v-slot:content>
              <div class="right-content">
                <div class="table">
                  <div class="tr" v-for="(item, index) in data2" :key="index">
                    <div class="td td-title">{{ item.name }}</div>
                    <div class="td">{{ item.value }}</div>
                    <div class="td">{{ item.value }}</div>
                    <div class="td">{{ item.value }}</div>
                    <div class="td">{{ item.value }}</div>
                    <div class="td">{{ item.value }}</div>
                    <div class="td">{{ item.value }}</div>
                  </div>
                </div>
                <div class="next">
                  <img src="../../assets/img/arrow-right.png" alt="" />
                </div>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from "../../components/top-header/top-header.vue";
import Card from "../../components/card/card.vue";
import SelectContent from "@/components/select-content/select-content.vue";
import * as echarts from "echarts";
import { options1, options2 } from "./config/chart.config";

export default {
  components: { TopHeader, Card, SelectContent },
  data() {
    return {
      tabs: [
        { name: "可视化演示", url: "/machine-monitor" },
        { name: "实时监测", url: "/always-monitor" },
        { name: "数据总览", url: "/data-summary" },
      ],
      infos: [
        { name: "总作业亩数", icon: require("../../assets/img/card.png"), value: "20", unit: "万亩" },
        { name: "总农机数量", icon: require("../../assets/img/card.png"), value: "50", unit: "台" },
        { name: "总无人机数量", icon: require("../../assets/img/card.png"), value: "41", unit: "台" },
        { name: "农资销量", icon: require("../../assets/img/card.png"), value: "1.16", unit: "万吨" },
        { name: "废弃物回收", icon: require("../../assets/img/card.png"), value: "50", unit: "万吨" },
      ],
      middleInfo1: { name: "农田生态系统管理" },
      middleInfo2: { name: "生态监测" },
      bottomInfo1: { name: "作物长势检测" },
      bottomInfo2: { name: "害虫监测" },
      data1: [
        { name: "种植类型", value: "种植类型" },
        { name: "种植面积", value: "种植面积" },
        { name: "土壤墒情", value: "土壤墒情" },
        { name: "作物长势", value: "作物长势" },
      ],
      data2: [
        { name: "生长季周期", value: "3个月" },
        { name: "病虫害作物面积", value: "2亩" },
        { name: "分布空间", value: "空间" },
        { name: "其他", value: "其他" },
      ],
      years: ["2022年", "2021年", "2020年", "2019年"],
      year: "2022年",
      months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      month: "6月",
      types: ["玉米", "水稻", "高粱"],
      type: "玉米",
      options1,
      options2,
      myChart1: null,
      myChart2: null,
    };
  },
  mounted() {
    this.setOptions1();
    this.setOptions2();
  },
  methods: {
    yearChange(data) {
      this.year = data.item;
      this.$refs.yearPopupRef.doClose();
    },
    monthChange(data) {
      this.month = data.item;
      this.$refs.monthPopupRef.doClose();
    },
    typeChange(data) {
      this.type = data.item;
      this.$refs.typePopupRef.doClose();
    },
    setOptions1() {
      this.myChart1 = echarts.init(this.$refs.chartRef1);
      this.myChart1.setOption(this.options1);
    },
    setOptions2() {
      this.myChart2 = echarts.init(this.$refs.chartRef2);
      this.myChart2.setOption(this.options2);
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

    .search2 {
      font-size: 14px;
      color: #fff;
      align-items: center;
      display: flex;
      margin-top: 16px;

      .text {
        margin-right: 10px;
      }

      .search-item {
        display: flex;
        margin-right: 20px;
        align-items: center;
      }

      .select {
        padding: 5px 20px;
        border: solid 1px #1a3345;
        margin-right: 30px;
        cursor: pointer;
        background: linear-gradient(to bottom, #24cbe9, #24cbe9) left top / 1px 7px no-repeat,
          linear-gradient(to right, #24cbe9, #24cbe9) left top / 7px 1px no-repeat,
          linear-gradient(to left, #24cbe9, #24cbe9) right top / 7px 1px no-repeat,
          linear-gradient(to bottom, #24cbe9, #24cbe9) right top / 1px 7px no-repeat,
          linear-gradient(to top, #24cbe9, #24cbe9) bottom left / 1px 7px no-repeat,
          linear-gradient(to right, #24cbe9, #24cbe9) bottom left / 7px 1px no-repeat,
          linear-gradient(to left, #24cbe9, #24cbe9) bottom right / 7px 1px no-repeat,
          linear-gradient(to top, #24cbe9, #24cbe9) bottom right / 1px 7px no-repeat;
      }

      img {
        width: 12px;
        height: 9px;
      }
    }

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
        width: 733px;
        height: 100%;
        margin-right: 16px;
      }

      .middle-right {
        width: 1054px;
        height: 100%;
        .right-content {
          width: 100%;
          height: 100%;
          display: flex;
          .table {
            width: calc(100% - 47px);
            height: 100%;
            color: #fff;
            padding: 24px;
            box-sizing: border-box;

            .tr {
              width: 100%;
              height: 63px;
              display: flex;
              align-items: center;
              background-color: #1f2232;
              margin-bottom: 5px;
              .td {
                flex: 1;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;

                &.td-title {
                  background-color: #1b1e2c;
                }
              }
            }
          }
          .next {
            width: 47px;
            height: calc(100% + 10px);
            background-color: #212436;
            cursor: pointer;
            position: relative;
            top: -5px;
            img {
              width: 34px;
              height: 18px;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%) rotate(-90deg);
            }
          }
        }
      }
    }
    .bottom {
      width: 100%;
      height: 373px;
      margin-top: 13px;
      display: flex;
      .bottom-left {
        width: 733px;
        height: 100%;
        margin-right: 16px;

        .legend {
          display: flex;
          .dot {
            display: flex;
            align-items: center;
            margin-right: 40px;
            &:last-child {
              margin: 0;
            }
            .dot-item {
              width: 8px;
              height: 8px;
              background-image: linear-gradient(0deg, #6375ff 0%, #6ae8ff 100%), linear-gradient(#87c264, #87c264);
              background-blend-mode: normal, normal;
              border-radius: 4px;
              margin-right: 10px;
            }
            .dot-item2 {
              background-image: linear-gradient(0deg, #ff4b12 0%, #ff1e00 100%), linear-gradient(#87c264, #87c264);
            }
          }
        }
      }

      .bottom-right {
        width: 1054px;
        height: 100%;

        .right-content {
          width: 100%;
          height: 100%;
          display: flex;
          .table {
            width: calc(100% - 47px);
            height: 100%;
            color: #fff;
            padding: 24px;
            box-sizing: border-box;

            .tr {
              width: 100%;
              height: 63px;
              display: flex;
              align-items: center;
              background-color: #1f2232;
              margin-bottom: 5px;
              .td {
                flex: 1;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;

                &.td-title {
                  background-color: #1b1e2c;
                }
              }
            }
          }
          .next {
            width: 47px;
            height: calc(100% + 10px);
            background-color: #212436;
            cursor: pointer;
            position: relative;
            top: -5px;
            img {
              width: 34px;
              height: 18px;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%) rotate(-90deg);
            }
          }
        }
      }
    }
  }
}
</style>
