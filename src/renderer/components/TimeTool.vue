<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-4"> 当前时间：<span v-clipboard:copy="currentDateTime" v-clipboard:success="onCopy" v-clipboard:error="onError">{{ currentDateTime }}</span></div>
          <div class="col-1">-></div>
          <div class="col-6" v-clipboard:copy="currentTimeStamp" v-clipboard:success="onCopy">{{ currentTimeStamp }}</div>
        </div>
      </div>

    </div>

    <div class="card">
      <div class="card-body">
        <form>
          <div class="form-row">
            <div class="form-group col-md-5">
              <label>请输入日期时间</label>
              <input type="text" class="form-control" v-model="inputDateTime">
            </div>
            <div class="form-group col-md-5">
              <label>时间戳</label>
              <div class="form-control" v-clipboard:copy="outputTimeStamp" v-clipboard:success="onCopy"> {{ outputTimeStamp }} </div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-5">
              <label>请输入时间戳</label>
              <input type="text" class="form-control" v-model="inputTimeStamp">
            </div>
            <div class="form-group col-md-5">
              <label>日期时间</label>
              <div class="form-control" v-clipboard:copy="outputDateTime" v-clipboard:success="onCopy"> {{ outputDateTime }} </div>
            </div>
          </div>
        </form>
      </div>

    </div>

  </div>
</template>

<script>
import moment from 'moment'
import Vue from 'vue'
export default {
  name: 'time-tool',
  data () {
    return {
      inputDateTime: '',
      outputTimeStamp: 0,
      inputTimeStamp: null,
      outputDateTime: '',
      currentDateTime: '',
      currentTimeStamp: null
    }
  },
  watch: {
    inputDateTime: function (dateTime) {
      this.outputTimeStamp = this.getTimeStamp(dateTime)
    },
    inputTimeStamp: function (timeStamp) {
      this.outputDateTime = this.getDateTime(timeStamp)
    }
  },
  methods: {
    getTimeStamp (dateTime) {
      var date = Date.parse(dateTime)
      return date.toString()
    },
    getDateTime (timeStamp) {
      var date = new Date(parseInt(timeStamp))
      return moment(date).format('YYYY-MM-DD HH:mm:ss')
    },
    // 复制成功时的回调函数
    onCopy () {
      Vue.$toast.success('内容已复制到剪切板', {
        position: 'top-right',
        duration: 1000
  // optional options Object
})
    },
    onError () {
    }
  },
  created () {
    setInterval(() => {
      var now = new Date()
      this.currentTimeStamp = Date.parse(now).toString()
      this.currentDateTime = moment(now).format('YYYY-MM-DD HH:mm:ss')
    }, 1000)
  }
}
</script>

<style>

</style>
