<!--청구계정 사업자 등록 컴포넌트 -->
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
/* eslint-disable */
</script>

<template>
  <!-- 청구계정 -->
  <div class="content_sec ty02 mb0">
    <div class="clear mb15">
      <span class="sub_tit">청구계정등록</span>
      <a href="#" class="btn_ty circle02 fr">정보열람</a>
    </div>
    <dl class="arco_list">
      <!-- 0406 : 퍼블리싱 수정 -->
      <dt><a href="#" class="d_block">납부자 사항</a></dt>
      <dd>
        <p class="p10_15 c_point02 fs_13 lh20"
          >*은행/카드자동납부 필수, e청구서 필수</p
        >
        <div class="content_sec mb0">
          <div>
            <label for="" class="label_ty">청구계정번호</label>
            <input type="text" class="input_ty ty02" />
          </div>
        </div>

        <!-- 기업일 경우 -->
        <div
          class="busi_sec"
          v-if="
            personType === '3' ||
              personType === '4' ||
              personType === '5' ||
              personType === '6'
          "
        >
          <div class="content_sec half_wrap mt15">
            <div>
              <label for="" class="label_ty">대표자명</label>
              <input type="text" class="input_ty" />
            </div>
            <div>
              <label for="" class="label_ty"
                >총사업장 번호<span class="c_point">*</span></label
              >
              <input type="text" class="input_ty" />
            </div>
          </div>
          <div class="content_sec half_wrap">
            <div>
              <label for="" class="label_ty">업종 구분</label>
              <select name="" id="" class="sel_ty w100" title="">
                <option value="">선택</option>
              </select>
            </div>
            <div>
              <label for="" class="label_ty">업태</label>
              <input type="text" class="input_ty" />
            </div>
          </div>
          <div class="content_sec mb0">
            <div>
              <label for="" class="label_ty">종목</label>
              <input type="text" class="input_ty" />
            </div>
          </div>
        </div>
        <!-- //기업일 경우 -->
      </dd>
      <dt>
        <!-- 0406 : 퍼블리싱 수정 -->
        <a href="#">청구처 사항</a>
        <div class="d_inBlock checks ml15">
          <input type="checkbox" id="" name="" />
          <label for="" class="c_point">고객정보와 동일</label>
        </div>
      </dt>
      <dd>
        <div class="content_sec half_wrap mt15">
          <div>
            <label for="" class="label_ty">청구처 전화번호</label>
            <input type="text" class="input_ty" />
          </div>
          <div>
            <label for="" class="label_ty"
              >청구처 이동전화<span class="c_point">*</span></label
            >
            <input type="text" class="input_ty" />
          </div>
        </div>
        <!-- 기업일 경우 -->
        <div
          class="content_sec busi_sec"
          v-if="
            personType === '3' ||
              personType === '4' ||
              personType === '5' ||
              personType === '6'
          "
        >
          <label for="" class="label_ty">청구처 FAX번호</label>
          <input type="text" class="input_ty pr40" />
        </div>
        <!-- //기업일 경우 -->
        <div
          class="content_sec"
          v-if="
            personType === '3' ||
              personType === '4' ||
              personType === '5' ||
              personType === '6'
          "
        >
          <label for="" class="label_ty"
            >우편번호<span class="c_point">*</span></label
          >
          <div class="po_rel">
            <input type="text" class="input_ty pr40" placeholder="우편번호" />
            <button type="submit" class="search_btn" title="검색하기"></button>
          </div>
        </div>
        <div class="content_sec">
          <label for="" class="label_ty"
            >주소<span class="c_point">*</span></label
          >
          <input type="text" class="input_ty" />
        </div>
        <div class="content_sec mb0">
          <label for="" class="label_ty">상세주소</label>
          <input type="text" class="input_ty" />
        </div>
        <!-- 기업일 경우 -->
        <div class="busi_sec">
          <div class="content_sec mt15">
            <label for="" class="label_ty">회사명</label>
            <input type="text" class="input_ty" />
          </div>
          <div class="content_sec half_wrap mb0">
            <div>
              <label for="" class="label_ty">부서명</label>
              <input type="text" class="input_ty" />
            </div>
            <div>
              <label for="" class="label_ty">담당자명</label>
              <input type="text" class="input_ty" />
            </div>
          </div>
        </div>
        <!-- //기업일 경우 -->
      </dd>
      <!-- 0406 : 퍼블리싱 수정 -->
      <dt><a href="#" class="d_block">청구처 세부사항</a></dt>
      <dd>
        <div class="p10_15 c_point02 fs_13 lh20 br_b1">
          <ul class="ul_ty ty01">
            <li
              >자동납부, e청구모집수수료 : 신규고객 e-청구서 접수시 (1,000원),
              기존고객 e-청구서와 자동납부 동시전환 시 (2,000원)</li
            >
            <li
              >현금영수증 발행기준 : 수신장비(수신기, TV할부 등) 요금 현금납부
              시 익월 초 현금 영수증용 핸드폰 번호로 발생</li
            >
          </ul>
        </div>
        <div class="content_sec half_wrap mt15">
          <div>
            <label for="" class="label_ty"
              >매출구분<span class="c_point">*</span></label
            >
            <select name="" id="" class="sel_ty w100" title="">
              <option value="">외부매출</option>
              <option value="">내부매출</option>
            </select>
          </div>
          <div>
            <label for="" class="label_ty"
              >세금계산서 발행여부<span class="c_point">*</span></label
            >
            <div class="checks d_block br_b1 h40">
              <input type="checkbox" id="test" name="" />
              <label for="test" class="c_point"></label>
            </div>
          </div>
        </div>
        <div class="content_sec half_wrap">
          <div>
            <label for="" class="label_ty"
              >과세구분<span class="c_point">*</span></label
            >
            <select name="" id="" class="sel_ty w100" title="">
              <option value="">과세</option>
              <option value="">영세</option>
            </select>
          </div>
          <div>
            <label for="" class="label_ty"
              >납부방법<span class="c_point">*</span></label
            >
            <select name="" id="" class="sel_ty w100 sel_transfer" title="">
              <option value="card">카드이체</option>
              <option value="auto">자동이체</option>
            </select>
          </div>
        </div>
        <div class="content_sec half_wrap">
          <div>
            <label for="" class="label_ty">지로납기일</label>
            <select name="" id="" class="sel_ty w100" title="">
              <option value="">선택</option>
            </select>
          </div>
          <div>
            <label for="" class="label_ty">서명방식</label>
            <select name="" id="" class="sel_ty w100" title="">
              <option value="">선택</option>
            </select>
          </div>
        </div>
        <div class="content_sec">
          <div>
            <label for="" class="label_ty">청구매체</label>
            <select
              name=""
              id=""
              class="sel_ty w100 medium"
              title="청구매체 선택"
            >
              <option value="">모바일 SMS</option>
            </select>
          </div>
        </div>
        <div class="content_sec">
          <label for="" class="label_ty">청구체 E-mail</label>
          <div class="email_input half_wrap ty04">
            <div><input type="text" class="input_ty"/></div>
            <div>
              <span class="email_at">@</span>
              <input type="text" class="input_ty w132p" />
            </div>
          </div>
          <div class="half_wrap mt5 ty04">
            <div>
              <select
                name=""
                id=""
                class="sel_ty w100"
                title="이메일 주소 선택"
              >
                <option value="">직접입력</option>
                <option value="">naver.com</option>
                <option value="">gmail.com</option>
              </select>
            </div>
            <div>
              <div class="checks pl20">
                <input type="checkbox" id="" name="" checked="" />
                <label for="" class="lh15 h40 pt3"
                  >복수청구매체<br />(E-mail) 허용</label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="content_sec half_wrap mb0">
          <div>
            <label for="" class="label_ty">현금영수증 발행여부</label>
            <select name="" id="" class="sel_ty w100" title="">
              <option value="">선택</option>
            </select>
          </div>
          <div>
            <label for="" class="label_ty">현금영수증 이동전화번호</label>
            <input type="text" class="input_ty" />
          </div>
        </div>
      </dd>
      <!-- 0406 : 퍼블리싱 수정 -->
      <dt><a href="#" class="d_block">납부 사항</a></dt>
      <dd class="pb0">
        <div class="p10_15 c_point02 fs_13 lh20 br_b1">
          <ul class="ul_ty ty01">
            <li
              >자동납부 모집수수료 지급조건 : 기존고객(지로 or KT합산 고객)
              자동납부 전환 시(1,000원)</li
            >
            <li
              >해외/한미비자카드 등록시 납부자 필수사항/납부사항/연락번호 기재
              후 E-MAIL 연락(helpdesk@skylife.co.kr)</li
            >
          </ul>
        </div>
        <div class="content_sec half_wrap mt15">
          <div>
            <label for="" class="label_ty">자동납부 동의여부</label>
            <div class="checks d_block br_b1 h40">
              <input type="checkbox" id="" name="" />
              <label for="" class="c_point"></label>
            </div>
          </div>
          <div>
            <label for="" class="label_ty">납부자 전화번호</label>
            <input type="text" class="input_ty" />
          </div>
        </div>
        <div class="content_sec half_wrap">
          <div>
            <label for="" class="label_ty">납부자명</label>
            <input type="text" class="input_ty" />
          </div>
          <div>
            <label for="" class="label_ty">납부자 생년월일/사업자번호</label>
            <input type="text" class="input_ty" />
          </div>
        </div>
        <ul class="transfer_ty_list">
          <!-- 카드이체 -->
          <li class="card_ty active">
            <div class="content_sec">
              <div>
                <label for="" class="label_ty">신용카드정보</label>
                <input type="text" class="input_ty" />
              </div>
            </div>
            <div class="content_sec half_wrap">
              <div>
                <label for="" class="label_ty">신용카드사</label>
                <select name="" id="" class="sel_ty w100" title="">
                  <option value="">선택</option>
                </select>
              </div>
              <div>
                <label for="" class="label_ty">할부개월수</label>
                <select name="" id="" class="sel_ty w100" title="">
                  <option value="">선택</option>
                </select>
              </div>
            </div>
            <div class="content_sec">
              <div>
                <label for="" class="label_ty">신용카드번호</label>
                <input type="text" class="input_ty" />
              </div>
            </div>
            <div class="content_sec mb0">
              <label for="" class="label_ty">신용카드 유효기간</label>
              <div class="half_wrap ty02">
                <div
                  ><input type="text" class="input_ty" placeholder="yyyy-mm"
                /></div>
                <div><a href="#" class="btn_ty ty01">유효성 체크</a></div>
              </div>
            </div>
          </li>
          <!-- //카드이체 -->
          <!-- 자동이체 -->
          <li class="auto_ty">
            <div class="content_sec">
              <div>
                <label for="" class="label_ty">은행정보</label>
                <input type="text" class="input_ty" />
              </div>
            </div>
            <div class="content_sec">
              <div>
                <label for="" class="label_ty">금융기관</label>
                <select name="" id="" class="sel_ty w100" title="">
                  <option value="">선택</option>
                </select>
              </div>
            </div>
            <div class="content_sec mb0">
              <label for="" class="label_ty">계좌번호</label>
              <div class="half_wrap ty02">
                <div
                  ><input type="text" class="input_ty" placeholder="yyyy-mm"
                /></div>
                <div><a href="#" class="btn_ty ty01">유효성 체크</a></div>
              </div>
            </div>
          </li>
          <!-- //자동이체 -->
        </ul>
      </dd>
    </dl>
  </div>
</template>

<style lang="scss" module>
@import '@design';
</style>
