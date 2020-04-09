<script>
export default {
  name: 'Post',
  data() {
    return {}
  },
  methods: {},
}
</script>

<template>
  <!-- 우편번호 -->
  <div class="half_wrap ty08">
    <div>
      <label for="" class="label_ty"
        >우편번호<span class="c_point">*</span></label
      >
      <input type="text" class="input_ty pr40" />
      <button type="submit" class="search_btn" title="검색하기"></button>
    </div>
    <div>
      <label for="" class="label_ty">주소</label>
      <input type="text" class="input_ty" />
    </div>
    <div>
      <label for="" class="label_ty">상세주소</label>
      <input type="text" class="input_ty" />
    </div>
  </div>
  <!-- // 우편번호 -->
</template>

<style lang="scss" module>
@import '@design';
</style>
