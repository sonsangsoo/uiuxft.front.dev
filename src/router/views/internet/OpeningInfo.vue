<script>
export default {
  name: 'OpeningInfo',
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {},
  methods: {},
}
</script>

<template>
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
  </li>
  <!-- //인터넷 -->
</template>

<style lang="scss" module>
@import '@design';
</style>
