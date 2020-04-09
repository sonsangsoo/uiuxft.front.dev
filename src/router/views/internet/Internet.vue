<script>
import AppBasicInfo from '@views/common/AppBasicInfo.vue'
import SignUpContract from '@views/common/SignUpContract.vue'
import SingUpLocaInfo from '@views/common/SingUpLocaInfo.vue'
import SubsContractDetail from '@views/common/SubsContractDetail.vue'
import SubsAttrInfo from '@views/common/SubsAttrInfo.vue'

export default {
  name: 'Internet',
  components: {
    SubsAttrInfo,
    AppBasicInfo,
    SignUpContract,
    SingUpLocaInfo,
    SubsContractDetail,
  },
  data() {
    return {
      Name : 'internet'
    }
  },
  mounted() {},
  methods: {},
}
</script>

<template>
  <!-- 인터넷 -->
  <li>
    <!-- 가입유치정보 -->
    <SubsAttrInfo></SubsAttrInfo>
    <!-- //가입유치정보 -->

    <!-- 신청자 기본정보 -->
    <AppBasicInfo></AppBasicInfo>
    <!-- //신청자 기본정보 -->

    <!-- 가입계약기본정보 -->
    <SignUpContract></SignUpContract>
    <!-- //가입계약기본정보 -->

    <!-- 가입설치장소정보 -->
    <SingUpLocaInfo></SingUpLocaInfo>
    <!-- //가입설치장소정보 -->

    <!-- 가입계약상세정보 -->
    <SubsContractDetail></SubsContractDetail>
    <!-- //가입계약상세정보 -->

    <!-- 개통정보 -->
    <div class="content_sec ty02 mb0">
      <p class="sub_tit">개통정보</p>
      <div class="half_wrap ty06">
        <div>
          <label for="" class="label_ty"
            >설치유통망<span class="c_point">*</span></label
          >
          <input type="text" class="input_ty pr40" />
          <button type="submit" class="search_btn" title="검색하기"></button>
        </div>
        <div>
          <label for="" class="label_ty"
            >희망개통일시<span class="c_point">*</span></label
          >
          <input type="text" class="input_ty pr40" />
          <button type="submit" class="search_btn" title="검색하기"></button>
        </div>
        <div>
          <label for="" class="label_ty">메모/사은품</label>
          <input type="text" class="input_ty" />
        </div>
      </div>
    </div>
    <!-- //개통정보 -->

    <div class="btm_btns">
      <a href="#" class="btn_ty ty02 lg">초기화</a>
      <a href="#" class="btn_ty ty03 lg">저장</a>
      <a href="#" class="btn_ty ty04 lg" style="width: 165px;"
        >증빙자료등록/수정</a
      >
    </div>
  </li>
  <!-- //인터넷 -->
</template>

<style lang="scss" module>
@import '@design';
</style>
