<script>
import { authComputed } from '@state/helpers'
import MemberReg from '@components/MemberReg.vue'
import ProductReg from '@views/ProductReg.vue'

export default {
  components: { MemberReg, ProductReg },
  data() {
    return {}
  },
  computed: {
    ...authComputed,
  },
}
</script>

<template>
  <div>
    <h2 class="hidden">메인 본문 컨텐츠 영역</h2>
    <p class="breadcrumb">
      <span class="dif_depth">고객관리</span> &gt;
      <span class="dif_depth">통합신청</span> &gt;
      <span class="now_depth">고객정보 등록 </span></p
    >
    <h3 class="main_tit">통합신청</h3>
    <div class="box_wrap">
      <MemberReg></MemberReg>
      <ProductReg></ProductReg>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@design';
</style>
