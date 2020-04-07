<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<template>
      <!-- 가입계약상세정보 -->
    <div class="content_sec ty02">
      <p class="sub_tit">가입계약상세정보</p>
      <div class="half_wrap ty06">
        <div>
          <label for="" class="label_ty"
            >가입유형<span class="c_point">*</span></label
          >
          <select name="" class="sel_ty w100 wide" title="">
            <option value="">선택</option>
          </select>
        </div>
        <div>
          <label for="" class="label_ty"
            >가입경로<span class="c_point">*</span></label
          >
          <select name="" class="sel_ty w100 wide" title="">
            <option value="">선택</option>
          </select>
        </div>
        <div>
          <label for="" class="label_ty">VOD PPV 차단 여부</label>
          <div class="checks d_block br_b1 h40">
            <input type="checkbox" name="" />
            <label for="" class="c_point"></label>
          </div>
        </div>
      </div>
      <div class="mt15 half_wrap ty06">
        <div>
          <label for="" class="label_ty">약정기간</label>
          <select name="" class="sel_ty w100 wide" title="">
            <option value="">선택</option>
          </select>
        </div>
        <div>
          <label for="" class="label_ty">이벤트</label>
          <input type="text" class="input_ty pr40" />
          <button type="submit" class="search_btn" title="검색하기"></button>
        </div>
        <div>
          <label for="" class="label_ty">PVR 이벤트</label>
          <input type="text" class="input_ty pr40" />
          <button type="submit" class="search_btn" title="검색하기"></button>
        </div>
      </div>
      <div class="mt15 half_wrap ty06">
        <div>
          <label for="" class="label_ty">번들상품</label>
          <select name="" class="sel_ty w100 wide" title="">
            <option value="">선택</option>
          </select>
        </div>
        <div>
          <label for="" class="label_ty">인증번호</label>
          <input type="text" class="input_ty" placeholder="회선번호" />
        </div>
        <div>
          <label for="" class="label_ty">생년월일</label>
          <div class="half_wrap ty05">
            <div><input type="text" class="input_ty" /></div>
            <div><a href="#" class="btn_ty ty01">검증</a></div>
          </div>
        </div>
      </div>
    </div>
    <!-- //가입계약상세정보 -->
</template>

<style lang="scss" module>
@import '@design';
</style>
