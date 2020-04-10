<script>
export default {
  name: 'Applicant',
  data() {
    return {
      Name: '',
    }
  },
  mounted() {
    this.Name = this.$parent.Name
  },
  methods: {},
}
</script>

<template>
  <!-- 신청자 -->
  <!-- TV 인터넷 -->
  <div v-if="Name !== 'homeRental'" class="mt15">
    <p class="fs_13 c_gray lh1 mb7">신청자<span class="c_point">*</span></p>
    <div class="half_wrap mt15">
      <div class="box_gray">
        <div class="checks d_block tl">
          <input type="checkbox" name="" />
          <label for="" class="fs_15 lh20"
            ><span class="c_point">*</span> 고유식별정보 수집/이용 동의</label
          >
        </div>
        <div class="checks d_block tl">
          <input type="checkbox" name="" />
          <label for="" class="fs_15 lh20">
            <span class="c_point">*</span> 개인정보 수집/이용 동의
          </label>
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
  <!-- // TV 인터넷 -->
  <!-- HOME RENTAL -->
  <div v-else-if="Name === 'homeRental'" class="half_wrap mt15">
    <div>
      <p class="fs_13 c_gray lh1 mb7">신청자<span class="c_point">*</span></p>
      <div class="box_gray">
        <div class="checks d_block tl">
          <input type="checkbox" name="" />
          <label for="" class="fs_15 lh20"
            ><span class="c_point">*</span> 개인정보 수집이용</label
          >
        </div>
        <div class="checks d_block tl">
          <input type="checkbox" name="" />
          <label for="" class="fs_15 lh20"
            ><span class="c_point">*</span> 개인정보 제 3자 제공동의</label
          >
        </div>
      </div>
    </div>
    <div>
      <p class="fs_13 c_gray lh1 mb7">메모</p>
      <textarea name="" class="tt_ty"></textarea>
    </div>
  </div>
  <!-- //HOME RENTAL -->
  <!-- // 신청자 -->
</template>

<style lang="scss" module>
@import '@design';
</style>
