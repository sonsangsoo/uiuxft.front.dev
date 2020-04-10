<script>

export default {
  name: 'SignUpAttrInfo',
  components: {},
  data() {
    return {
    }
  },
  mounted() {},
  methods: {},
}
</script>

<template>
    <!-- 가입유치정보 -->
    <div class="content_sec ty02">
      <div class="clear mb10">
        <p class="sub_tit fl lh30 mb0">가입유치정보</p>
        <div class="fr">
          <a href="#" class="btn_ty circle02">고객인증</a>
          <a href="#" class="btn_ty circle02 ml10">정보열람</a>
        </div>
      </div>
      <div class="half_wrap">
        <div class="half_wrap">
          <div>
            <label for="" class="label_ty"
              >접수자 ID<span class="c_point">*</span></label
            >
            <input type="text" class="input_ty pr40" />
            <button type="submit" class="search_btn" title="검색하기"></button>
          </div>
          <div>
            <label for="" class="label_ty"
              >접수자 유통망<span class="c_point">*</span></label
            >
            <input type="text" class="input_ty" />
          </div>
        </div>
        <div class="half_wrap">
          <div>
            <label for="" class="label_ty">유치자 ID</label>
            <input type="text" class="input_ty pr40" />
            <button type="submit" class="search_btn" title="검색하기"></button>
          </div>
          <div>
            <label for="" class="label_ty"
              >유치자 유통망<span class="c_point">*</span></label
            >
            <input type="text" class="input_ty" />
          </div>
        </div>
      </div>
    </div>
    <!-- //가입유치정보 -->
</template>

<style lang="scss" module>
@import '@design';
</style>
