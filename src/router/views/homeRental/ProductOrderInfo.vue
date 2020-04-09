<script>
import Applicant from '@views/common/Applicant.vue'

export default {
  name: 'ProductOrderInfo',
  components: {
    Applicant
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
    <!-- 상품주문정보 -->
    <div class="content_sec ty02">
      <p class="sub_tit">상품주문정보</p>
      <div class="half_wrap">
        <div>
          <label for="" class="label_ty"
            >관련계약번호<span class="c_point">*</span></label
          >
          <input type="text" class="input_ty pr40" />
          <button type="submit" class="search_btn" title="검색하기"></button>
        </div>
        <div>
          <label for="" class="label_ty"
            >상품명<span class="c_point">*</span></label
          >
          <input type="text" class="input_ty pr40" />
          <button type="submit" class="search_btn" title="검색하기"></button>
        </div>
      </div>
      <div class="mt15">
        <div class="scroll">
          <table class="table_ty">
            <caption>상품주문정보 테이블</caption>
            <thead>
              <tr>
                <th>선택</th>
                <th>판매방식</th>
                <th>상품그룹</th>
                <th>상품코드</th>
                <th>신청수량</th>
                <th>상품금액</th>
              </tr>
            </thead>
            <tbody> </tbody>
          </table>
        </div>
        <!-- 수신 타입 설정 후 hide -->
        <div class="br_b1 p10_15">
          <ul>
            <li class="checks d_block tl">
              <input type="checkbox" name="" />
              <label for="" class="lh20 fs_14"
                >롯데렌탈 : (벌크)삼성 43형 LED TV(2019.10.15~)_일시불 결제 :
                601:120191879 : 10 : 324000 : UN43N5020AFXKR</label
              >
            </li>
            <li class="checks d_block tl">
              <input type="checkbox" name="" />
              <label for="" class="lh20 fs_14"
                >기타제조사 : (벌크)삼성 43형 LED TV(2019.10.15~)_일시불 결제 :
                601:120191879 : 10 : 324000 : UN43N5020AFXKR</label
              >
            </li>
            <li class="checks d_block tl">
              <input type="checkbox" name="" />
              <label for="" class="lh20 fs_14"
                >롯데렌탈 : (벌크)삼성 43형 LED TV(2019.10.15~)_일시불 결제 :
                601:120191879 : 10 : 324000 : UN43N5020AFXKR</label
              >
            </li>
            <li class="checks d_block tl">
              <input type="checkbox" name="" />
              <label for="" class="lh20 fs_14"
                >기타제조사 : (벌크)삼성 43형 LED TV(2019.10.15~)_일시불 결제 :
                601:120191879 : 10 : 324000 : UN43N5020AFXKR</label
              >
            </li>
            <li class="checks d_block tl">
              <input type="checkbox" name="" />
              <label for="" class="lh20 fs_14"
                >기타제조사 : (벌크)삼성 43형 LED TV(2019.10.15~)_일시불 결제 :
                601:120191879 : 10 : 324000 : UN43N5020AFXKR</label
              >
            </li>
          </ul>
        </div>
        <div class="btm_btns mt20">
          <a href="#" class="btn_ty ty02">삭제</a>
          <a href="#" class="btn_ty ty05">결제</a>
        </div>
      </div>
      <div class="mt20 half_wrap">
        <div class="half_wrap">
          <div>
            <label for="" class="label_ty">단말설치유형</label>
            <select name="" class="sel_ty w100 medium" title="">
              <option value="">선택</option>
              <option value="">Y</option>
            </select>
          </div>
          <div>
            <label for="" class="label_ty"
              >접수유형<span class="c_point">*</span></label
            >
            <select name="" class="sel_ty w100 medium" title="">
              <option value="">선택</option>
              <option value="">Y</option>
            </select>
          </div>
        </div>
        <div class="half_wrap">
          <div>
            <label for="" class="label_ty"
              >주문일자<span class="c_point">*</span></label
            >
            <input type="text" class="input_ty" />
          </div>
          <div>
            <label for="" class="label_ty">설치요청일</label>
            <input type="text" class="input_ty" />
          </div>
        </div>
      </div>
      <div class="mt15 half_wrap">
        <div class="half_wrap">
          <div>
            <label for="" class="label_ty"
              >계약자명<span class="c_point">*</span></label
            >
            <input type="text" class="input_ty" />
          </div>
          <div>
            <label for="" class="label_ty"
              >전화번호<span class="c_point">*</span></label
            >
            <input type="text" class="input_ty" />
          </div>
        </div>
        <div class="half_wrap">
          <div>
            <label for="" class="label_ty"
              >이동전화<span class="c_point">*</span></label
            >
            <input type="text" class="input_ty" />
          </div>
          <div>
            <label for="" class="label_ty">세부사항</label>
            <input type="text" class="input_ty" />
          </div>
        </div>
      </div>
      <div class="checks mt10 mb5">
        <input type="checkbox" name="" />
        <label for="" class="c_point">인터넷 정보와 동일</label>
        <input type="checkbox" name="" />
        <label for="" class="c_point">TV 정보와 동일</label>
      </div>
      <Post></Post>
      <Applicant></Applicant>
    </div>
    <!-- //상품주문정보 -->
</template>

<style lang="scss" module>
@import '@design';
</style>
