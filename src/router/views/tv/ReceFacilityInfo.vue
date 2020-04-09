<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<template>
    <!-- 가입수신설비정보 -->
    <div class="content_sec ty02">
        <p class="sub_tit">가입수신설비정보</p>
        <div class="half_wrap ty06">
            <div class="half_wrap">
                <div>
                    <label for="" class="label_ty">부케 ID</label>
                    <input type="text" class="input_ty">
                </div>
                <div>
                    <label for="" class="label_ty">수신기 구매여부</label>
                    <div class="checks d_block br_b1 h40">
                        <input type="checkbox"   name="">
                        <label for="" class="c_point"></label>
                    </div>
                </div>
            </div>
            <div>
                <label for="" class="label_ty">수신기</label>
                <select name=""   class="sel_ty w100 wide" title="">
                    <option value="">선택</option>
                </select>
            </div>
            <div>
                <label for="" class="label_ty">판매방식</label>
                <input type="text" class="input_ty">
            </div>
        </div>
        <div class="mt15 half_wrap">
            <div class="half_wrap ty09">
                <div>
                    <label for="" class="label_ty">장비금액</label>
                    <input type="text" class="input_ty tr" placeholder="원">
                </div>
                <div>
                    <label for="" class="label_ty">일시/할부금 임대료</label>
                    <input type="text" class="input_ty tr" placeholder="원/원">
                </div>
            </div>
            <div class="half_wrap ty06">
                <div>
                    <label for="" class="label_ty">보조금</label>
                    <input type="text" class="input_ty tr" placeholder="원">
                </div>
                <div>
                    <label for="" class="label_ty">할부/임대 개월 수</label>
                    <input type="text" class="input_ty tr" placeholder="개월">
                </div>
                <div>
                    <label for="" class="label_ty">의무사용</label>
                    <input type="text" class="input_ty pr40">
                    <button type="submit" class="search_btn" title="검색하기"></button>
                </div>
            </div>
        </div>
        <div class="mt15 half_wrap">
            <div class="half_wrap ty09">
                <div>
                    <label for="" class="label_ty">안테나 구매여부<span class="c_point">*</span></label>
                    <div class="checks d_block br_b1 h40">
                        <input type="checkbox"   name="">
                        <label for="" class="c_point"></label>
                    </div>
                </div>
                <div>
                    <label for="" class="label_ty">안테나<span class="c_point">*</span></label>
                    <input type="text" class="input_ty pr40">
                    <button type="submit" class="search_btn" title="검색하기"></button>
                </div>
            </div>
            <div class="half_wrap ty09">
                <div>
                    <label for="" class="label_ty">기타부품 구매여부</label>
                    <div class="checks d_block br_b1 h40">
                        <input type="checkbox"   name="">
                        <label for="" class="c_point"></label>
                    </div>
                </div>
                <div>
                    <label for="" class="label_ty">기타부품</label>
                    <input type="text" class="input_ty pr40">
                    <button type="submit" class="search_btn" title="검색하기"></button>
                </div>
            </div>
        </div>
        <div class="btm_btns mt20">
            <a href="#" class="btn_ty ty05">추가</a>
        </div>
    </div>
    <!-- //가입수신설비정보 -->
</template>

<style lang="scss" module>
@import '@design';
</style>
