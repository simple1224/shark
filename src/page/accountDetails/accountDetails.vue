<template>
  <div>
    <van-nav-bar title="鲨鱼记账" />
    <div class="nav flex">
      <div class="flex" @click="selectDate">
        <div>{{currentDate}}</div>
        <hr style="color: #000000a8;height: 27px;margin-left:10px;border: 1px solid;" />
      </div>
      <div class="flex statistics">
        <div>
          <div class="outlay">收入</div>
          <div>0.00</div>
        </div>
        <div>
          <div class="outlay">支出</div>
          <div>0.00</div>
        </div>
      </div>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <!-- <div>
        <van-cell title="11月15日 星期五" value="支出：9.7"></van-cell>
        <van-card>
          <div slot="desc" class="flex">
            <div class="costclassify flex">
              <div class="iconfont iconxianjinmingxi"></div>
              <span>地铁</span>
            </div>
            <span>-10</span>
          </div>
        </van-card>
      </div>-->
      <div v-for="item in list" :key="item" class="showcard">
        <van-cell :title="item.date" :value="'支出：'+item.totalCost"></van-cell>
        <van-card>
          <div slot="desc" class="flex">
            <div class="costclassify flex">
              <div :class="item.class"></div>
              <span>{{item.type}}</span>
            </div>
            <span>{{item.cost}}</span>
          </div>
        </van-card>
      </div>
    </van-list>
    <van-popup v-model="showDate" position="bottom">
      <van-datetime-picker
        v-if="showDate"
        v-model="date"
        type="year-month"
        :formatter="formatter"
        @confirm="comfirmDate"
        @cancel="cancelDate"
      />
    </van-popup>
  </div>
</template>

<script>
import { DatetimePicker, Popup, List, Card } from 'vant'
export default {
  name: 'accountDetails',
  components: {
    [DatetimePicker.name]: DatetimePicker,
    [Popup.name]: Popup,
    [List.name]: List,
    [Card.name]: Card
  },
  data () {
    return {
      showDate: false,
      currentDate: new Date(),
      date: new Date(),
      list: [
        { date: '11月15日 星期五', totalCost: '9.7', class: 'iconfont iconxianjinmingxi', type: '地铁', cost: '-9' },
        { date: '11月18日 星期六', totalCost: '9.7', class: 'iconfont iconxianjinmingxi', type: '早餐', cost: '-1' }
      ]
    }
  },
  created () {
    this.currentDate = this.YymmddFormat(this.currentDate)
  },
  methods: {
    // 日期格式化
    YymmddFormat (newDate) {
      debugger
      let month = newDate.getMonth() + 1
      month = month >= 10 ? month : '0' + month
      return newDate.getFullYear() + '年' + month + '月'
    },
    // 打开日期选择
    selectDate () {
      this.showDate = true
    },
    // DatetimePicker格式化
    formatter (type, value) {
      if (type === 'year') {
        return `${value}年`
      } else if (type === 'month') {
        return `${value}月`
      }
      return value
    },
    // DatetimePicker确认按钮
    comfirmDate (val) {
      this.currentDate = this.YymmddFormat(val)
      this.showDate = false
    },
    // DatetimePicker取消按钮
    cancelDate () {
      this.showDate = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.van-hairline--bottom::after {
  border: none;
}
.van-nav-bar__title {
  font-size: 22px;
}
.nav {
  background-color: #feec2a;
  height: 60px;
  .flex.statistics {
    justify-content: space-between;
    align-items: center;
    width: 62%;
    .outlay {
      font-size: 14px;
      margin-bottom: 5px;
    }
  }
}
.showcard {
  &:not(:nth-last-child(2)) {
    border-bottom: 1px solid #3333333d;
  }
  .van-cell {
    .van-cell__title {
      text-align: left;
      color: #969799;
    }
  }
  .van-card {
    background-color: #fff;
    .van-card__content {
      font-size: 20px;
      min-height: 30px;
      .flex {
        justify-content: space-between;
        .costclassify {
          .iconfont {
            font-size: 20px;
            color: #feec2a;
          }
          span {
            margin-left: 6px;
          }
        }
      }
    }
  }
  .van-card:not(:first-child) {
    margin-top: 0;
  }
}
</style>
