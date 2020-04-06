<script>
export default {
  data() {
    return {}
  },
  methods: {
    searchMember() {
      // var searchName = this.searchName;
      // var searchNumber = this.searchNumber;
      // 회원정보  api 연동 ...
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
