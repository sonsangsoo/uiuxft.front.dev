<script>
import AppBasicInfo from '@views/common/AppBasicInfo.vue'
import SignUpContract from '@views/common/SignUpContract.vue'
import SingUpLocaInfo from '@views/common/SingUpLocaInfo.vue'
import SubsAttrInfo from '@views/common/SubsAttrInfo.vue'
import SubsContractDetail from '@views/common/SubsContractDetail.vue'
import SignUpProductInfo from '@views/tv/SignUpProductInfo.vue'
import ReceFacilityInfo from '@views/tv/ReceFacilityInfo.vue'
import FacilityInfo from '@views/tv/FacilityInfo.vue'
import SysScheduleInfo from '@views/tv/SysScheduleInfo.vue'

export default {
  components: {
    SubsAttrInfo,
    AppBasicInfo,
    SignUpContract,
    SingUpLocaInfo,
    SubsContractDetail,
    SignUpProductInfo,
    ReceFacilityInfo,
    FacilityInfo,
    SysScheduleInfo,
  },
  data() {
    return {
      Name: 'tv',
      custNm: '하늘이',
      juminBizNo: '1111112222222',
    }
  },
  mounted() {
  },
  methods: {

  },
}
</script>

<template>
  <div>
    <!-- 가입유치정보 -->
    <SubsAttrInfo></SubsAttrInfo>
    <!-- //가입유치정보 -->

    <!-- 신청자 기본정보 -->
    <AppBasicInfo></AppBasicInfo>
    <!-- 신청자 기본정보 -->

    <!-- 가입계약기본정보 -->
    <SignUpContract></SignUpContract>
    <!-- 가입계약기본정보 -->

    <!-- 가입설치장소정보 -->
    <SingUpLocaInfo></SingUpLocaInfo>
    <!-- //가입설치장소정보 -->

    <!-- 가입계약상세정보 -->
    <SubsContractDetail></SubsContractDetail>
    <!-- //가입계약상세정보 -->

    <!-- 가입상품정보 -->
    <SignUpProductInfo></SignUpProductInfo>
    <!-- //가입상품정보 -->

    <!-- 가입수신설비정보 -->
    <ReceFacilityInfo></ReceFacilityInfo>
    <!-- //가입수신설비정보 -->

    <!-- 수신설비정보 -->
    <FacilityInfo></FacilityInfo>
    <!-- //수신설비정보 -->

    <!-- 가입계통예정정보 -->
    <SysScheduleInfo></SysScheduleInfo>
    <!-- //가입계통예정정보 -->

    <div class="btm_btns">
      <a href="#" class="btn_ty ty02 lg">초기화</a>
      <a href="#" class="btn_ty ty03 lg">저장</a>
      <a href="#" class="btn_ty ty04 lg" style="width: 165px;"
        >증빙자료등록/수정</a
      >
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@design';
</style>
