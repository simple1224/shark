<template>
  <div class="settingpage">
    <van-nav-bar title="类别设置" left-arrow @click-left="onClickRight" />
    <van-tabs @click="onClick">
      <van-tab title="支出" class="outlay">
        <van-cell-group v-for="(item,index) in iconList" :key="index">
          <van-cell :title="item.iconName" :class="item.className">
            <van-icon slot="right-icon" name="wap-nav" style="line-height: inherit;" />
            <template slot="title">
              <span class="custom-title">单元格</span>
              <van-icon name="clear" />
            </template>
          </van-cell>
        </van-cell-group>
        <div class="moreclassify">更多类别</div>
        <van-cell-group v-for="(item,index) in iconList" :key="index">
          <van-cell :title="item.iconName" :class="item.className">
            <van-icon slot="right-icon" name="wap-nav" style="line-height: inherit;" />
            <template slot="title">
              <span class="custom-title">单元格</span>
              <van-icon name="add" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-tab>
      <van-tab title="收入" class="income">内容 2</van-tab>
    </van-tabs>
    <van-tabbar v-model="active">
      <van-tabbar-item>添加分类</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tab, Tabs, Tabbar, TabbarItem } from "vant";
export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  name: "",
  data() {
    return {
      iconList: [
        { className: "iconfont iconjiaotong", iconName: "交通" },
        { className: "iconfont iconchongwufushi", iconName: "服饰" },
        { className: "iconfont iconshuiguo", iconName: "水果" },
        { className: "iconfont iconhua", iconName: "花" },
        { className: "iconfont iconhuazhuangpin", iconName: "化妆品" },
        { className: "iconfont iconhuazhuangpin", iconName: "蔬菜" },
        { className: "iconfont iconshezhi-", iconName: "设置" }
      ],
      active: "0"
    };
  },
  methods: {
    onClick(name, title) {
      this.$toast(title);
    },
    onClickRight() {
      this.$router.go(-1);
    },
    openCalculator(item) {
      console.log("打开计算器", item);
      if (item.iconName === "设置") {
        console.log("设置");
        this.$router.push({ path: "/setting" });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.wrap {
  padding: 10px 0 10px 0;
  display: flex;
  flex-wrap: wrap;
  .iconlist {
    margin: 9px 16px 32px 26px;
    background-color: #e5e5e8;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    position: relative;
    .iconfont {
      font-size: 36px;
      width: 36px;
      height: 36px;
      position: absolute;
      top: 5px;
      left: 7px;
    }
    .iconName {
      margin-top: 53px;
      font-size: 16px;
    }
  }
}
.settingpage {
  .van-nav-bar .van-icon {
    color: #333;
  }
  .van-cell {
    position: relative;
    padding-left: 40px;
    .van-cell__title,
    .van-cell__value {
      text-align: left;
      span {
        margin-left: 5px;
      }
    }
    .van-icon {
      &.van-icon-add:before {
        position: absolute;
        left: -100px;
        top: -15px;
        color: green;
      }
      &.van-icon-clear:before {
        position: absolute;
        left: -100px;
        top: -15px;
        color: red;
      }
    }
  }
  .moreclassify {
    font-size: 15px;
    text-align: left;
    margin-left: 10px;
    padding: 5px;
  }
}
</style>

<style lang="less">
.settingpage {
  .van-tabs__line {
    background-color: #333;
  }
}
</style>