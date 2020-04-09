<script>
import Applicant from '@views/common/Applicant.vue'

export default {
  name: "AppBasicInfo",
  components:{
    Applicant
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<template>
  <!-- 신청자 기본정보 -->
  <div class="content_sec ty02">
    <span class="sub_tit">신청자 기본정보</span>
    <div class="d_inBlock checks ml20">
      <input type="checkbox" name="" />
      <label for="" class="c_point">인터넷 정보와 동일</label>
    </div>
    <div class="half_wrap">
      <div class="half_wrap">
        <div>
          <label for="" class="label_ty"
            >신청자 구분<span class="c_point">*</span></label
          >
          <select name="" class="sel_ty w100 medium" title="">
            <option value="">선택</option>
            <option value="">본인</option>
            <option value="">가족</option>
            <option value="">대표자</option>
            <option value="">직원</option>
            <option value="">법정대리인</option>
            <option value="">기타</option>
          </select>
        </div>
        <div>
          <label for="" class="label_ty"
            >신청자명<span class="c_point">*</span></label
          >
          <input type="text" class="input_ty" />
        </div>
      </div>
      <div class="half_wrap">
        <div>
          <label for="" class="label_ty"
            >신청자 전화번호<span class="c_point">*</span></label
          >
          <input type="text" class="input_ty" />
        </div>
        <div>
          <label for="" class="label_ty"
            >주민등록 번호<span class="c_point">*</span></label
          >
          <div class="half_wrap ty03">
            <div><input type="text" class="input_ty" /></div>
            <div><a href="#" class="btn_ty ty01">성명정보조회</a></div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt15">
      <p class="fs_13 c_gray lh1 mb7">가입대상<span class="c_point">*</span></p>
      <div class="half_wrap">
        <div class="box_gray">
          <div class="checks d_block tl">
            <input type="checkbox" name="" />
            <label for="" class="fs_15 lh20"
              ><span class="c_point">*</span> 고유식별정보 수집/이용 동의</label
            >
          </div>
          <div class="checks d_block tl">
            <input type="checkbox" name="" />
            <label for="" class="fs_15 lh20"
              ><span class="c_point">*</span> 개인정보 수집/이용 동의</label
            >
          </div>
        </div>
        <div class="box_gray">
          <div class="checks d_block tl">
            <input type="checkbox" name="" />
            <label for="" class="fs_15 lh20"
              >고객 혜택 제공을 위한 수신 동의</label
            >
          </div>
          <div class="checks d_block tl">
            <input type="checkbox" name="" />
            <label for="" class="fs_15 lh20">개인정보 제 3자 제공 동의</label>
          </div>
        </div>
      </div>
    </div>
    <Applicant></Applicant>
  </div>
  <!-- //신청자 기본정보 -->
</template>

<style lang="scss" module>
@import '@design';
</style>
