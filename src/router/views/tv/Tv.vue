<script>
import AppBasicInfo from '@views/common/AppBasicInfo.vue'
import SignUpContract from '@views/tv/SignUpContract.vue'
import SubsLocation from '@views/tv/SubsLocation.vue'
import SubsContractDetail from '@views/tv/SubsContractDetail.vue'
import SignUpProductInfo from '@views/tv/SignUpProductInfo.vue'

export default {
  components: { AppBasicInfo, SignUpContract, SubscribedLocation, SubsContractDetail, SignUpProductInfo},
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>

<template>
  <div>
    <!-- 가입유치정보 -->
    <div class="content_sec ty02">
      <p class="sub_tit">가입유치정보</p>
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
            <label for="" class="label_ty">내부판매 부서명</label>
            <input type="text" class="input_ty" />
          </div>
        </div>
      </div>
      <div class="mt15">
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

    <!-- 신청자 기본정보 -->
    <AppBasicInfo></AppBasicInfo>
    <!-- 신청자 기본정보 -->

    <!-- 가입계약기본정보 -->
    <SignUpContract></SignUpContract>
    <!-- 가입계약기본정보 -->

    <!-- 가입설치장소정보 -->
    <SubsLocation></SubsLocation>
    <!-- //가입설치장소정보 -->

    <!-- 가입계약상세정보 -->
    <SubsContractDetail></SubsContractDetail>
    <!-- //가입계약상세정보 -->

    <!-- 가입상품정보 -->
    <SignUpProductInfo></SignUpProductInfo>
    <!-- //가입상품정보 -->

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

    <!-- 수신설비정보 -->
    <div class="content_sec ty02">
        <p class="sub_tit">수신설비정보</p>

        <div class="scroll">
            <table class="table_ty">
                <caption>수신설비정보 테이블</caption>
                <thead>
                    <tr>
                        <th>구분</th>
                        <th>판매방식</th>
                        <th>장비금액</th>
                        <th>일시/할부금,임대료</th>
                        <th>보조금</th>
                        <th>할부/임대 개월 수</th>
                        <th>의무사용</th>
                        <th>부케ID</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>

        <!-- 수신 타입 설정 후 hide -->
        <div class="br_b1 p10_15">
            <ul>
                <li class="checks d_block tl">
                    <input type="checkbox"   name="">
                    <label for="" class="lh20 fs_14">수신기</label>
                </li>
                <li class="checks d_block tl">
                    <input type="checkbox"   name="">
                    <label for="" class="lh20 fs_14">안테나</label>
                </li>
                <li class="checks d_block tl">
                    <input type="checkbox"   name="">
                    <label for="" class="lh20 fs_14">기타부품</label>
                </li>
            </ul>
        </div>


        <div class="btm_btns mt20">
            <a href="#" class="btn_ty ty02">삭제</a>
            <a href="#" class="btn_ty ty05">수정</a>
        </div>
    </div> <!-- //수신설비정보 -->

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
    </div> <!-- //가입계통예정정보 -->

    <div class="btm_btns">
        <a href="#" class="btn_ty ty02 lg">초기화</a>
        <a href="#" class="btn_ty ty03 lg">저장</a>
        <a href="#" class="btn_ty ty04 lg" style="width: 165px">증빙자료등록/수정</a>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@design';
</style>
