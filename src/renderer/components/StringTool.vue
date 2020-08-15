<template>
  <div>

    <h5 class="card-title">字符串比较工具</h5>
    <form>
      <div class="form-group">
        <label for="validationTextarea">字符串 1</label>
        <textarea class="form-control" id="validationTextarea" placeholder="请输入文本" v-model="string1"></textarea>
        <small id="stringLength1" class="form-text text-muted">长度: {{ string1.length }}</small>
      </div>
      <div class="form-group">
        <label for="validationTextarea2">字符串 2</label>
        <textarea class="form-control" id="validationTextarea2" placeholder="请输入文本" v-model="string2"></textarea>
        <small id="stringLength1" class="form-text text-muted">长度: {{ string2.length }}</small>
      </div>
    </form>

    <div class="col-3">
      <p class="form-control is-valid" v-if="result && string1 != ''">相同</p>
      <p class="form-control is-invalid" v-if="!result && string2 != ''">不相同</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'string-tool',
  data () {
    return {
      string1: '',
      string2: '',
      result: 1,
      index: '/'
    }
  },
  watch: {
    string1: function (val) {
      this.string1 = val
      this.ifEquals()
    },
    string2: function (val) {
      this.string2 = val
      this.ifEquals()
    }
  },
  methods: {
    ifEquals () {
      if (this.string1 === this.string2) {
        this.result = 1
      } else {
        this.result = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
