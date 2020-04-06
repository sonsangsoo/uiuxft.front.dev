<!-- 고객정보 조회 공통 컴포넌트 -->
<template name="component-name">
  <div class="top_cnts">
    <div class="info_sec">
      <input
        type="text"
        placeholder="고객명/회사명"
        title="고객명/회사명"
        class="input_ty cust_name"
      />
      <input
        type="text"
        placeholder="생년월일/사업자등록번호"
        title="생년월일/사업자등록번호"
        class="input_ty cust_date"
      />
    </div>
    <a href="#" class="btn_ty circle01 lookup_btn" title="조회하기">조회</a>
  </div>
</template>

<script>
// JS
export default class {
  install() {
    this.data = {
      title: 'omi',
    }
  }
}
</script>

<style lang="scss">
/* CSS */
p {
  color: #58bc58;
}
</style>
