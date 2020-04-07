<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<template>
  <!-- 가입계통예정정보 -->
  <div class="content_sec ty02 mb0">
      <span class="sub_tit">가입계통예정정보</span>
      <div class="d_inBlock checks ml20">
          <input type="checkbox"   name="">
          <label for="" class="c_point">실제 고객희망일과 다름</label>
      </div>
      <div class="half_wrap ty06">
          <div>
              <label for="" class="label_ty">SkyLife YesCenter<span class="c_point">*</span></label>
              <input type="text" class="input_ty pr40">
              <button type="submit" class="search_btn" title="검색하기"></button>
          </div>
          <div>
              <label for="" class="label_ty">희망개통일시<span class="c_point">*</span></label>
              <input type="text" class="input_ty pr40">
              <button type="submit" class="search_btn" title="검색하기"></button>
          </div>
          <div>
              <label for="" class="label_ty">메모</label>
              <input type="text" class="input_ty">
          </div>
      </div>
    </div>
    <!-- //가입계통예정정보 -->
</template>

<style lang="scss" module>
@import '@design';
</style>
