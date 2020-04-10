<script>
export default {
  props: {},
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
  <!-- 가입유치정보 -->
  <div class="content_sec ty02">
    <p v-if="Name === 'tv'" class="sub_tit lh30 mb10">가입유치정보</p>
    <div v-else-if="Name === 'internet'" class="clear mb10">
      <p class="sub_tit fl lh30 mb0">가입유치정보</p>
      <div class="fr">
        <a href="#" class="btn_ty circle02 fr">정보열람</a>
      </div>
    </div>
    <div class="half_wrap">
      <div class="half_wrap ty05">
        <div>
          <label for="" class="label_ty"
            >유치유통망<span class="c_point">*</span></label
          >
          <input type="text" class="input_ty pr40" />
          <button type="submit" class="search_btn" title="검색하기"></button>
        </div>
        <div>
          <label for="" class="label_ty"
            >추천영업자 아이디<span class="c_point">*</span></label
          >
          <input type="text" class="input_ty pr40" />
          <button type="submit" class="search_btn" title="검색하기"></button>
        </div>
      </div>
      <div class="half_wrap ty06">
        <div>
          <label for="" class="label_ty">추천인</label>
          <input type="text" class="input_ty" />
        </div>
        <div>
          <label for="" class="label_ty"
            >매출구분<span class="c_point">*</span></label
          >
          <select name="" class="sel_ty w100" title="">
            <option value="">선택</option>
            <option value="">외부매출</option>
            <option value="">내부매출</option>
            <option value="">체험사업용</option>
          </select>
        </div>
        <div>
          <label for="" class="label_ty">매 부서명</label>
          <input type="text" class="input_ty" />
        </div>
      </div>
    </div>

    <div v-if="Name === 'tv'" class="mt15">
      <p class="fs_15 c_gray lh1 mb7">대납 청구계정</p>
      <div class="half_wrap ty07">
        <div class="scroll_box">
          <ul>
            <li><a href="#">(주)경진텔레*:신규수신기 대납</a></li>
            <li><a href="#">(주)경진텔레*:신규수신기 대납</a></li>
            <li><a href="#">(주)경진텔레*:신규수신기 대납</a></li>
            <li><a href="#">(주)경진텔레*:신규수신기 대납</a></li>
            <li><a href="#">(주)경진텔레*:신규수신기 대납</a></li>
          </ul>
        </div>
        <div
          ><a href="#" class="lg_search_btn" title="대납 청구계정 검색"
            >검색</a
          ></div
        >
      </div>
    </div>
  </div>
  <!-- //가입유치정보 -->
</template>

<style lang="scss" module>
@import '@design';
</style>
