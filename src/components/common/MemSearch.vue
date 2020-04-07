<script>
import axios from 'axios'

export default {
  data() {
    return {}
  },
  methods: {
    searchMember: function() {
      // var searchName = this.searchName;
      // var searchNumber = this.searchNumber;
      // 회원정보  api 연동 ...
      axios
        .post(
          ' http://test-scis.skylife.co.kr/scis/api/smartcntrt/cust/bizInfoVerifyCheck',
          {
            searchName: this.searchName,
            searchNumber: this.searchNumber,
          }
        )
        .then((response) => {
          console.warn(response)
          this.result = response.data
          console.log(this.result)
        })
        .catch((ex) => {
          console.warn('ERROR!!!!! : ', ex)
        })
    },
  },
}
</script>

<template>
  <div class="top_cnts">
    <div class="info_sec">
      <input
        v-model="searchName"
        placeholder="고객명/회사명"
        title="고객명/회사명"
        class="input_ty cust_name"
      />
      <input
        v-model="searchNumber"
        placeholder="생년월일/사업자등록번호"
        title="생년월일/사업자등록번호"
        class="input_ty cust_date"
      />
    </div>
    <a
      href="#"
      class="btn_ty circle01 lookup_btn"
      title="조회하기"
      @click="searchMember"
      >조회</a
    >
  </div>
</template>

<style lang="scss" module>
@import '@design';
</style>
