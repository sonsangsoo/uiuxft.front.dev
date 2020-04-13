<script>
/* import RealNameCheck from '@components/common/RealNameCheck.vue' //실명확인(성명정보 조회) 공통 컴포넌트
import PostSearch from '@components/common/PostSearch.vue' //우편번호 조회(kt) 공통 컴포넌트 */
export default {
  props: {
    personType: {
      type: String,
      default: '',
    },
  },
}
</script>

<!-- 고객등록 개인/외국인 고객 정보 등록 폼 -->
<template>
  <div>
    <!-- 개인/외국개인 등록정보 -->
    <li
      class="indivi_ty active"
      v-if="personType === '1' || personType === '2' || personType === '7'"
    >
      <div class="content_sec">
        <div>
          <label for="" class="label_ty"
            >고객명<span class="c_point">*</span></label
          >
          <input type="text" class="input_ty" />
        </div>
      </div>
      <div class="content_sec ">
        <label for="" class="label_ty"
          >주민등록번호<span class="c_point">*</span></label
        >
        <div class="half_wrap ty02">
          <div><input type="text" class="input_ty"/></div>
          <div><a href="#" class="btn_ty ty01">성명정보조회</a></div>
        </div>
      </div>
      <div class="content_sec">
        <label for="" class="label_ty"
          >우편번호<span class="c_point">*</span></label
        >
        <div class="half_wrap ty02">
          <div><input type="text" class="input_ty"/></div>
          <div><a href="#" class="btn_ty ty01">조회</a></div>
        </div>
      </div>
      <div class="content_sec">
        <div>
          <label for="" class="label_ty"
            >주소<span class="c_point">*</span></label
          >
          <input type="text" class="input_ty" />
        </div>
      </div>
      <div class="content_sec">
        <label for="" class="label_ty">전화번호</label>
        <div class="half_wrap ty02">
          <div><input type="text" class="input_ty"/></div>
          <div class="checks">
            <input type="radio" id="" name="" checked />
            <label for="" class="pl20">수신</label>
            <input type="radio" id="" name="" />
            <label for="" class="pl20">거부</label>
          </div>
        </div>
      </div>
      <div class="content_sec">
        <label for="" class="label_ty"
          >핸드폰<span class="c_point">*</span></label
        >
        <div class="half_wrap ty02">
          <div><input type="text" class="input_ty"/></div>
          <div class="checks">
            <input type="radio" id="" name="" checked />
            <label for="" class="pl20">수신</label>
            <input type="radio" id="" name="" />
            <label for="" class="pl20">거부</label>
          </div>
        </div>
      </div>
      <div class="content_sec">
        <label for="" class="label_ty"
          >이메일<span class="c_point">*</span></label
        >
        <div class="email_input half_wrap ty04">
          <div><input type="text" class="input_ty"/></div>
          <div>
            <span class="email_at">@</span>
            <input type="text" class="input_ty w132p" />
          </div>
        </div>
        <div class="half_wrap mt5 ty04">
          <div>
            <select name="" id="" class="sel_ty w100" title="이메일 주소 선택">
              <option value="">직접입력</option>
              <option value="">naver.com</option>
              <option value="">gmail.com</option>
            </select>
          </div>
          <div>
            <div class="checks">
              <input type="radio" id="" name="" checked />
              <label for="" class="pl20">수신</label>
              <input type="radio" id="" name="" />
              <label for="" class="pl20">거부</label>
            </div>
          </div>
        </div>
      </div>
      <div class="content_sec mb0">
        <div>
          <label for="" class="label_ty"
            >감면구분<span class="c_point">*</span></label
          >
          <select
            name=""
            id=""
            class="sel_ty w100 medium"
            title="감면구분 선택"
          >
            <option value="">심신장애인</option>
            <option value="">국가유공상이자</option>
            <option value="">애국지사</option>
            <option value="">독립유공자</option>
            <option value="">독립유공자유족</option>
            <option value="">기초생활수급자</option>
            <option value="">5.18민주유공자</option>
            <option value="">북한이탈주민</option>
            <option value="">장애니 단체</option>
            <option value="">국가유공자 단체</option>
            <option value="">아동복지시설</option>
          </select>
        </div>
      </div>
    </li>
    <!-- //개인/외국개인 등록정보 -->
    <!-- 법인 등록정보 -->
    <li
      class="busi_ty"
      v-if="
        personType === '3' ||
          personType === '4' ||
          personType === '5' ||
          personType === '6'
      "
    >
      <div class="content_sec">
        <div>
          <label for="" class="label_ty"
            >고객명(상호)<span class="c_point">*</span></label
          >
          <input type="text" class="input_ty" />
        </div>
      </div>
      <div class="content_sec half_wrap">
        <div
          v-if="personType === '3' || personType === '4' || personType === '6'"
        >
          <label for="" class="label_ty"
            >사업자번호<span class="c_point">*</span></label
          >
          <input type="text" class="input_ty" />
        </div>
        <div>
          <label for="" class="label_ty"
            >법인/주민번호<span class="c_point">*</span></label
          >
          <input type="text" class="input_ty" />
        </div>
      </div>
      <div class="content_sec half_wrap">
        <div>
          <label for="" class="label_ty"
            >대표자명<span class="c_point">*</span></label
          >
          <input type="text" class="input_ty" />
        </div>
        <div>
          <label for="" class="label_ty">업종구분</label>
          <input type="text" class="input_ty" />
        </div>
      </div>
      <div class="content_sec half_wrap">
        <div>
          <label for="" class="label_ty"
            >업태<span class="c_point">*</span></label
          >
          <input type="text" class="input_ty" />
        </div>
        <div>
          <label for="" class="label_ty"
            >종목<span class="c_point">*</span></label
          >
          <select name="" id="" class="sel_ty w100 sel_cust_ty" title="">
            <option value="">선택</option>
            <option value="">국가기관</option>
            <option value="">군부대</option>
            <option value="">정부(재)투자기관</option>
            <option value="">지방자치단체</option>
            <option value="">특별법에의한특수기관</option>
            <option value="">장애복지시설</option>
            <option value="">국·공립학교</option>
            <option value="">사립학교</option>
          </select>
        </div>
      </div>
      <div class="content_sec">
        <label for="" class="label_ty"
          >우편번호<span class="c_point">*</span></label
        >
        <div class="half_wrap ty02">
          <div><input type="text" class="input_ty"/></div>
          <div><a href="#" class="btn_ty ty01">조회</a></div>
        </div>
      </div>
      <div class="content_sec">
        <div>
          <label for="" class="label_ty"
            >주소<span class="c_point">*</span></label
          >
          <input type="text" class="input_ty" />
        </div>
      </div>
      <div class="content_sec">
        <div>
          <label for="" class="label_ty">상세주소</label>
          <input type="text" class="input_ty" />
        </div>
      </div>
      <div class="content_sec">
        <label for="" class="label_ty">전화번호</label>
        <div class="half_wrap ty02">
          <div><input type="text" class="input_ty"/></div>
          <div class="checks">
            <input type="radio" id="" name="" checked />
            <label for="" class="pl20">수신</label>
            <input type="radio" id="" name="" />
            <label for="" class="pl20">거부</label>
          </div>
        </div>
      </div>
      <div class="content_sec">
        <label for="" class="label_ty"
          >핸드폰<span class="c_point">*</span></label
        >
        <div class="half_wrap ty02">
          <div><input type="text" class="input_ty"/></div>
          <div class="checks">
            <input type="radio" id="" name="" checked />
            <label for="" class="pl20">수신</label>
            <input type="radio" id="" name="" />
            <label for="" class="pl20">거부</label>
          </div>
        </div>
      </div>
      <div class="content_sec">
        <label for="" class="label_ty"
          >이메일<span class="c_point">*</span></label
        >
        <div class="email_input half_wrap ty04">
          <div><input type="text" class="input_ty"/></div>
          <div>
            <span class="email_at">@</span>
            <input type="text" class="input_ty w132p" />
          </div>
        </div>
        <div class="half_wrap mt5 ty04">
          <div>
            <select name="" id="" class="sel_ty w100" title="이메일 주소 선택">
              <option value="">직접입력</option>
              <option value="">naver.com</option>
              <option value="">gmail.com</option>
            </select>
          </div>
          <div>
            <div class="checks">
              <input type="radio" id="" name="" checked />
              <label for="" class="pl20">수신</label>
              <input type="radio" id="" name="" />
              <label for="" class="pl20">거부</label>
            </div>
          </div>
        </div>
      </div>
      <div class="content_sec">
        <div>
          <label for="" class="label_ty">팩스번호</label>
          <input type="text" class="input_ty" />
        </div>
      </div>
      <div class="content_sec mb0">
        <div>
          <label for="" class="label_ty"
            >감면구분<span class="c_point">*</span></label
          >
          <select
            name=""
            id=""
            class="sel_ty w100 medium"
            title="감면구분 선택"
          >
            <option value="">심신장애인</option>
            <option value="">국가유공상이자</option>
            <option value="">애국지사</option>
            <option value="">독립유공자</option>
            <option value="">독립유공자유족</option>
            <option value="">기초생활수급자</option>
            <option value="">5.18민주유공자</option>
            <option value="">북한이탈주민</option>
            <option value="">장애니 단체</option>
            <option value="">국가유공자 단체</option>
            <option value="">아동복지시설</option>
          </select>
        </div>
      </div>
    </li>
    <!-- //법인 등록정보 -->
  </div>
</template>

<style lang="scss" module>
@import '@design';
</style>
