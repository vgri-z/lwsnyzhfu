<!-- 数据总览 -->
<template>
  <div class="data-summary">
    <TopHeader />
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
              <div style="color: #ffffff; opacity: 0.4">单位：亩</div>
            </template>
            <template v-slot:content>
              <div ref="chartRef1" style="width: 100%; height: 100%"></div>
            </template>
          </card>
        </div>
        <div class="middle-right">
          <card :info="middleInfo2">
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
      </div>
      <div class="bottom">
        <div class="bottom-left">
          <card :info="bottomInfo1">
            <template v-slot:title-right>
              <div style="color: #fff">单位：百分比</div>
            </template>
            <template v-slot:content>
              <div ref="chartRef3" style="width: 100%; height: 100%"></div>
            </template>
          </card>
        </div>
        <div class="bottom-middle">
          <card :info="bottomInfo2">
            <template v-slot:title-right>
              <div style="color: #fff">单位：亩</div>
            </template>
            <template v-slot:content>
              <div ref="chartRef4" style="width: 100%; height: 100%"></div>
            </template>
          </card>
        </div>
        <div class="bottom-right">
          <card :is-show-title="false">
            <template v-slot:content>
              <div ref="chartRef5" style="width: 100%; height: 100%"></div>
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
import * as echarts from "echarts";
import { options1, options2, options3, options4 } from "./config/chart.config";
import { nxMapOption } from "./config/map.config";
export default {
  components: { TopHeader, Card },
  data() {
    return {
      infos: [
        { name: "总作业亩数", icon: require("../../assets/img/card.png"), value: "20", unit: "万亩" },
        { name: "总农机数量", icon: require("../../assets/img/card.png"), value: "50", unit: "台" },
        { name: "总无人机数量", icon: require("../../assets/img/card.png"), value: "41", unit: "台" },
        { name: "农资销量", icon: require("../../assets/img/card.png"), value: "1.16", unit: "万吨" },
        { name: "废弃物回收", icon: require("../../assets/img/card.png"), value: "50", unit: "万吨" },
      ],
      middleInfo1: { name: "在田种植规模分析" },
      middleInfo2: { name: "农废产生统计" },
      bottomInfo1: { name: "可回收物统计" },
      bottomInfo2: { name: "农废产生统计" },
      options1,
      options2,
      options3,
      options4,
      options5: nxMapOption,
      myChart1: null,
      myChart2: null,
      myChart3: null,
      myChart4: null,
      myChart5: null,
    };
  },
  mounted() {
    this.setOptions1();
    this.setOptions2();
    this.setOptions3();
    this.setOptions4();
    this.setOptions5();
  },
  methods: {
    setOptions1() {
      this.myChart1 = echarts.init(this.$refs.chartRef1);
      this.myChart1.setOption(this.options1);
    },
    setOptions2() {
      this.myChart2 = echarts.init(this.$refs.chartRef2);
      this.myChart2.setOption(this.options2);
    },
    setOptions3() {
      this.myChart3 = echarts.init(this.$refs.chartRef3);
      this.myChart3.setOption(this.options3);
    },
    setOptions4() {
      this.myChart4 = echarts.init(this.$refs.chartRef4);
      this.myChart4.setOption(this.options4);
    },
    setOptions5() {
      this.myChart5 = echarts.init(this.$refs.chartRef5);
      this.myChart5.setOption(this.options5);
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
      height: 390px;
      margin-top: 13px;
      display: flex;
      .middle-left {
        width: 1054px;
        height: 100%;
        margin-right: 16px;
      }

      .middle-right {
        width: 733px;
        height: 100%;

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
    }
    .bottom {
      width: 100%;
      height: 390px;
      margin-top: 13px;
      display: flex;
      .bottom-left {
        width: 654px;
        height: 100%;
        margin-right: 16px;
      }

      .bottom-middle {
        width: 718px;
        height: 100%;
        margin-right: 16px;
      }

      .bottom-right {
        width: 403px;
        height: 100%;
      }
    }
  }
}
</style>
