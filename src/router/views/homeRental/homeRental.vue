<script>
/* eslint-disable */
import SignUpAttrInfo from '@views/homeRental/SignUpAttrInfo.vue'
import ProductOrderInfo from '@views/homeRental/ProductOrderInfo.vue'
import Post from '@views/common/Post.vue'

export default {
  name: 'homeRental',
  components: {
    SignUpAttrInfo,
    Post,
    ProductOrderInfo,
  },
  data() {
    return {
      Name: 'homeRental',
    }
  },
  mounted() {},
  methods: {},
}
</script>

<template>
  <!-- 홈렌탈 -->
  <li>
    <!-- 가입유치정보 -->
    <SignUpAttrInfo></SignUpAttrInfo>
    <!-- //가입유치정보 -->

    <!-- 상품주문정보 -->
    <ProductOrderInfo></ProductOrderInfo>
    <!-- //상품주문정보 -->

    <!-- 첨부파일 -->
    <div class="content_sec ty02 mb0">
      <span class="sub_tit mb15">첨부파일</span>
      <span class="ml20 c_point" style="vertical-align: 3px;"
        >* 파일명에 공백없이 첨부가능하며 파일첨부는 15MB까지 가능합니다.</span
      >
      <p class="fs_13 c_gray lh1 mb7">청약검증서류</p>
      <div class="half_wrap ty12">
        <div><input type="text" name="" class="input_ty" /></div>
        <div class="half_wrap">
          <div><a href="#" class="btn_ty ty01">파일선택</a></div>
          <!-- 파일 선택시에 클래스에 active 추가 -->
          <div><a href="#" class="btn_ty ty04 w100 attr_btn">첨부</a></div>
        </div>
      </div>
    </div>
    <!-- //첨부파일 -->

    <div class="btm_btns">
      <a href="#" class="btn_ty ty02 lg">초기화</a>
      <a href="#" class="btn_ty ty03 lg">저장</a>
      <a href="#" class="btn_ty ty04 lg">승인요청</a>
    </div>
  </li>
  <!-- //홈렌탈 -->
</template>

<style lang="scss" module>
@import '@design';
</style>
