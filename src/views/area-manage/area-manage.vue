<template>
  <div class="area-manage">
    <TopHeader :tabs="tabs" />

    <div class="content">
      <div class="left">
        <div class="main">
          <card :info="leftInfo" :is-show-title-right="false">
            <template v-slot:content>
              <div class="table">
                <div class="header">
                  <div class="item" v-for="(item, index) in headers" :key="index">{{ item }}</div>
                </div>
                <div class="tbody">
                  <div class="tr" v-for="(item, index) in datas" :key="index">
                    <div class="td">{{ index + 1 }}</div>
                    <div class="td">{{ item.name }}</div>
                    <div class="td preview">预览</div>
                  </div>
                </div>
              </div>
            </template>
          </card>
        </div>
        <div class="more">查看更多</div>
      </div>
      <div class="middle">
        <card :info="middleInfo" :is-show-title-right="false">
          <template v-slot:content>
            <div ref="chartRef1" style="width: 100%; height: 100%"></div>
          </template>
        </card>
      </div>
      <div class="right">
        <div class="right-top">
          <card :info="rightTopInfo" :is-show-title-right="false">
            <template v-slot:content>
              <div ref="chartRef2" style="width: 100%; height: 100%"></div>
            </template>
          </card>
        </div>
        <div class="right-bottom">
          <card :info="rightBottomInfo" :is-show-title-right="false">
            <template v-slot:content>
              <div ref="chartRef3" style="width: 100%; height: 100%"></div>
            </template>
          </card>
        </div>
        <div class="more">查看更多</div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from "../../components/top-header/top-header.vue";
import Card from "../../components/card/card.vue";
import { nxMapOption } from "./config/map.config";
import { options2, options3 } from "./config/chart.config";
import * as echarts from "echarts";

export default {
  components: { TopHeader, Card },
  data() {
    return {
      tabs: [
        { name: "数据总览", url: "/data-summary" },
        { name: "地块管理", url: "/area-manage" },
        { name: "实时监测", url: "/always-monitor" },
      ],
      leftInfo: { name: "地块历史种植流程预览" },
      middleInfo: { name: "农事跟踪管理" },
      rightTopInfo: { name: "地块流程信息" },
      rightBottomInfo: { name: "生长周期分类展示" },
      headers: ["序号", "地块名称", "全流程信息"],
      datas: [
        { name: "东塔镇" },
        { name: "郝家桥镇" },
        { name: "崇兴镇" },
        { name: "宁东镇" },
        { name: "马家滩镇" },
        { name: "临河镇" },
        { name: "梧桐树乡" },
        { name: "白土岗乡" },
        { name: "灵武农场" },
        { name: "其他" },
      ],
      options1: nxMapOption,
      options2,
      options3,
      myChart1: null,
      myChart2: null,
      myChart3: null,
    };
  },
  mounted() {
    this.setOptions1();
    this.setOptions2();
    this.setOptions3();
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

        .table {
          width: 100%;
          height: 100%;
          color: #fff;
          padding: 24px 22px;
          box-sizing: border-box;
          .header {
            height: 81px;
            // padding: 30px 50px;
            font-size: 18px;
            box-sizing: border-box;
            background-color: #1b1e2c;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .item {
              flex: 1;
              text-align: center;
            }
          }
          .tbody {
            width: 100%;
            font-size: 16px;
            .tr {
              width: 100%;
              height: 72px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              > .td {
                flex: 1;
                text-align: center;

                &.preview {
                  color: #25d3ff;
                  text-decoration: underline;
                }
              }
            }
            .tr:nth-child(2n) {
              background-color: #1b1e2c;
            }
          }
        }
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
