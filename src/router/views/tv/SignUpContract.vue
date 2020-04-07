<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<template>
  <!-- 가입계약기본정보 -->
  <div class="content_sec ty02">
    <span class="sub_tit">가입계약기본정보</span>
    <div class="d_inBlock checks ml20">
      <input type="checkbox" name="" />
      <label for="" class="c_point">고객정보와 동일</label>
    </div>
    <div class="half_wrap">
      <div class="half_wrap ty06">
        <div>
          <label for="" class="label_ty"
            >접수번호<span class="c_point">*</span></label
          >
          <input type="text" class="input_ty" />
        </div>
        <div>
          <label for="" class="label_ty"
            >가입계약 식별명<span class="c_point">*</span></label
          >
          <input type="text" class="input_ty tc" value="홍길*" />
        </div>
        <div>
          <label for="" class="label_ty"
            >이동전화<span class="c_point">*</span></label
          >
          <input type="text" class="input_ty" />
        </div>
      </div>
      <div class="half_wrap ty06">
        <div>
          <label for="" class="label_ty">SMS 전송여부</label>
          <div class="checks d_block br_b1 h40">
            <input type="radio" name="" />
            <label for="">수신</label>
            <input type="radio" name="" />
            <label for="">거부</label>
          </div>
        </div>
        <div>
          <label for="" class="label_ty">복수가입계약 생성</label>
          <div class="checks d_block br_b1 h40">
            <input type="radio" name="" />
            <label for="">미사용</label>
            <input type="radio" name="" />
            <label for="">사용</label>
          </div>
        </div>
        <div>
          <label for="" class="label_ty">가입계약생성개수</label>
          <input type="text" class="input_ty tc" placeholder="최대 100개" />
        </div>
      </div>
    </div>
  </div>
  <!-- //가입계약기본정보 -->
</template>

<style lang="scss" module>
@import '@design';
</style>
