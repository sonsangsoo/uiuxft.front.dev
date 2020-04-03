<script>
import { authComputed } from '@state/helpers'

export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    ...authComputed,
  },
}
</script>

<template>
  <section>
    <h2 class="hidden">메인 본문 컨텐츠 영역</h2>
    <p class="breadcrumb"
      ><span class="dif_depth">고객관리</span> &gt;
      <span class="dif_depth">통합신청</span> &gt;
      <span class="now_depth">고객정보 등록</span></p
    >
    <h3 class="main_tit">통합신청</h3>
    <div class="box_wrap">
      <article class="box">
        <div class="top_cnts">
          <div class="info_sec">
            <input
              type="text"
              placeholder="고객명/회사명"
              title="고객명/회사명"
              class="input_ty cust_name"
            />
            <input
              type="text"
              placeholder="생년월일/사업자등록번호"
              title="생년월일/사업자등록번호"
              class="input_ty cust_date"
            />
          </div>
          <a href="#" class="btn_ty circle01 lookup_btn" title="조회하기"
            >조회</a
          >
        </div>

        <!-- Tab -->
        <ul id="info_tab" class="tab ty01">
          <li><a href="#" class="active">고객정보</a></li>
          <li><a href="#">청구계정</a></li>
        </ul>
        <div class="box_cnts">
          <ul class="tab_cnt_list">
            <!-- 고객정보 -->
            <li class="active">
              <div class="clear mb20"
                ><a href="#" class="btn_ty circle02 fr">정보열람</a></div
              >
              <div class="content_sec half_wrap">
                <div>
                  <label for="" class="label_ty">고객번호</label>
                  <input type="text" class="input_ty" />
                </div>
                <div>
                  <label for="" class="label_ty"
                    >고객구분<span class="c_point">*</span></label
                  >
                  <!--                                            <input type="text" class="input_ty">-->
                  <select id="" name="" class="sel_ty w100" title="">
                    <option value="">개인</option>
                    <option value="">외국개인</option>
                  </select>
                </div>
              </div>
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
                    <input id="" type="radio" name="" checked />
                    <label for="" class="pl20">수신</label>
                    <input id="" type="radio" name="" />
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
                    <input id="" type="radio" name="" checked />
                    <label for="" class="pl20">수신</label>
                    <input id="" type="radio" name="" />
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
                    <select
                      id=""
                      name=""
                      class="sel_ty w100"
                      title="이메일 주소 선택"
                    >
                      <option value="">직접입력</option>
                      <option value="">naver.com</option>
                      <option value="">gmail.com</option>
                    </select>
                  </div>
                  <div>
                    <div class="checks">
                      <input id="" type="radio" name="" checked />
                      <label for="" class="pl20">수신</label>
                      <input id="" type="radio" name="" />
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
                    id=""
                    name=""
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
              <div class="btm_btns">
                <a href="#" class="btn_ty ty02">초기화</a>
                <a href="#" class="btn_ty ty03">저장</a>
              </div>
            </li>
            <!-- //고객정보 -->
            <li> </li>
          </ul>
        </div>
      </article>
      <article class="box">
        <!-- Tab -->
        <ul id="status_tab" class="tab ty01 row06">
          <li><a href="#" class="active">현황</a></li>
          <li><a href="#">TV</a></li>
          <li><a href="#">인터넷</a></li>
          <li><a href="#">홈렌탈</a></li>
          <li class="tab_more"><a href="#">···</a></li>
        </ul>

        <div class="box_cnts">
          <ul class="tab_cnt_list">
            <!-- 현황 -->
            <li class="active">
              <!-- 상품목록 -->
              <div class="content_sec mb30">
                <div class="clear mb10">
                  <p class="sub_tit fl lh30 mb0">상품목록</p>
                  <div class="fr">
                    <select
                      id=""
                      name=""
                      class="sel_ty vsmall"
                      title="건수 선택"
                    >
                      <option value="">10건씩 보기</option>
                    </select>
                    <a href="#" class="btn_ty circle02 fr ml10">정보열람</a>
                  </div>
                </div>
                <div class="scroll">
                  <table class="table_ty">
                    <caption>상품목록 테이블</caption>
                    <colgroup>
                      <col width="45px" />
                      <col width="70px" />
                      <col width="80px" />
                      <col width="80px" />
                      <col width="70px" />
                      <col width="80px" />
                      <col width="80px" />
                      <col width="auto" />
                      <col width="auto" />
                      <col width="70px" />
                      <col width="90px" />
                      <col width="90px" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>선택</th>
                        <th>신청현황</th>
                        <th>작업현황</th>
                        <th>날짜</th>
                        <th>상품명</th>
                        <th>계약번호</th>
                        <th>청구계정</th>
                        <th>가입계약명</th>
                        <th>이벤트명</th>
                        <th>설치주소</th>
                        <th>청구금액</th>
                        <th>결합가능여부</th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- 최대값 -->
                      <tr>
                        <td>
                          <input id="te" type="checkbox" />
                          <label for="te">상품선택</label>
                        </td>
                        <td>신규</td>
                        <td>설치예정</td>
                        <td>20.03.12</td>
                        <td>인터넷</td>
                        <td>1122311223</td>
                        <td>1122311223</td>
                        <td>동해물과백두산이마르고닳도록하느님이보우</td>
                        <td>동해물과백두산이마르고닳도록하느님이보우</td>
                        <td>서울시 구로구</td>
                        <td>100,000원</td>
                        <td>가능(Y)</td>
                      </tr>
                      <tr>
                        <td>
                          <input id="te" type="checkbox" />
                          <label for="te">상품선택</label>
                        </td>
                        <td>신규</td>
                        <td>설치예정</td>
                        <td>20.03.12</td>
                        <td>인터넷</td>
                        <td>1122311223</td>
                        <td>1122311223</td>
                        <td>동해물과백두산이마르고닳도록하느님이보우</td>
                        <td>동해물과백두산이마르고닳도록하느님이보우</td>
                        <td>서울시 구로구</td>
                        <td>100,000원</td>
                        <td>가능(Y)</td>
                      </tr>
                      <tr>
                        <td>
                          <input id="te" type="checkbox" />
                          <label for="te">상품선택</label>
                        </td>
                        <td>신규</td>
                        <td>설치예정</td>
                        <td>20.03.12</td>
                        <td>인터넷</td>
                        <td>1122311223</td>
                        <td>1122311223</td>
                        <td>동해물과백두산이마르고닳도록하느님이보우</td>
                        <td>동해물과백두산이마르고닳도록하느님이보우</td>
                        <td>서울시 구로구</td>
                        <td>100,000원</td>
                        <td>가능(Y)</td>
                      </tr>
                      <tr>
                        <td>
                          <input id="te" type="checkbox" />
                          <label for="te">상품선택</label>
                        </td>
                        <td>신규</td>
                        <td>설치예정</td>
                        <td>20.03.12</td>
                        <td>인터넷</td>
                        <td>1122311223</td>
                        <td>1122311223</td>
                        <td>동해물과백두산이마르고닳도록하느님이보우</td>
                        <td>동해물과백두산이마르고닳도록하느님이보우</td>
                        <td>서울시 구로구</td>
                        <td>100,000원</td>
                        <td>가능(Y)</td>
                      </tr>
                      <tr>
                        <td>
                          <input id="te" type="checkbox" />
                          <label for="te">상품선택</label>
                        </td>
                        <td>신규</td>
                        <td>설치예정</td>
                        <td>20.03.12</td>
                        <td>인터넷</td>
                        <td>1122311223</td>
                        <td>1122311223</td>
                        <td>동해물과백두산이마르고닳도록하느님이보우</td>
                        <td>동해물과백두산이마르고닳도록하느님이보우</td>
                        <td>서울시 구로구</td>
                        <td>100,000원</td>
                        <td>가능(Y)</td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="btm_btns mt20"
                    ><a href="#" class="btn_ty ty04">결합하기</a></div
                  >
                </div>
              </div>
              <!-- //상품목록 -->

              <!-- 결합상품 -->
              <div class="content_sec ty02">
                <p class="sub_tit">결합상품</p>
                <div class="half_wrap">
                  <div>
                    <label for="" class="label_ty"
                      >결합약정선택<span class="c_point">*</span></label
                    >
                    <select id="" name="" class="sel_ty w100 wide" title="">
                      <option value="">선택</option>
                      <option value="">1년약정</option>
                      <option value="">2년약정</option>
                      <option value="">3년약정</option>
                    </select>
                  </div>
                  <div>
                    <label for="" class="label_ty">사은품</label>
                    <input type="text" class="input_ty pr40" />
                    <button
                      type="submit"
                      class="search_btn"
                      title="검색하기"
                    ></button>
                  </div>
                </div>
              </div>
              <!-- //결합상품 -->

              <!-- 가입유치정보 -->
              <div class="content_sec ty02">
                <p class="sub_tit">가입유치정보</p>
                <div class="half_wrap">
                  <div class="half_wrap">
                    <div>
                      <label for="" class="label_ty"
                        >유치유통망<span class="c_point">*</span></label
                      >
                      <input type="text" class="input_ty pr40" />
                      <button
                        type="submit"
                        class="search_btn"
                        title="검색하기"
                      ></button>
                    </div>
                    <div>
                      <label for="" class="label_ty">추천영업자 아이디</label>
                      <input type="text" class="input_ty pr40" />
                      <button
                        type="submit"
                        class="search_btn"
                        title="검색하기"
                      ></button>
                    </div>
                  </div>
                  <div class="half_wrap">
                    <div>
                      <label for="" class="label_ty">추천인</label>
                      <input type="text" class="input_ty" />
                    </div>
                    <div>
                      <label for="" class="label_ty">내부판매부서</label>
                      <input type="text" class="input_ty" />
                    </div>
                  </div>
                </div>
              </div>
              <!-- //가입유치정보 -->

              <!-- 신청자 기본정보 -->
              <div class="content_sec ty02 line_div">
                <span class="sub_tit">신청자 기본정보</span>
                <div class="d_inBlock checks ml20">
                  <input id="" type="checkbox" name="" />
                  <label for="" class="c_point">TV 정보와 동일</label>
                  <input id="" type="checkbox" name="" />
                  <label for="" class="c_point">인터넷 정보와 동일</label>
                </div>
                <div class="half_wrap">
                  <div class="half_wrap">
                    <div>
                      <label for="" class="label_ty"
                        >신청자 구분<span class="c_point">*</span></label
                      >
                      <input type="text" class="input_ty" />
                    </div>
                    <div>
                      <label for="" class="label_ty"
                        >신청자명<span class="c_point">*</span></label
                      >
                      <input type="text" class="input_ty" />
                    </div>
                  </div>
                  <div class="half_wrap">
                    <div>
                      <label for="" class="label_ty"
                        >신청자 전화번호<span class="c_point">*</span></label
                      >
                      <input type="text" class="input_ty" />
                    </div>
                    <div>
                      <label for="" class="label_ty"
                        >주민등록 번호<span class="c_point">*</span></label
                      >
                      <div class="half_wrap ty03">
                        <div><input type="text" class="input_ty"/></div>
                        <div
                          ><a href="#" class="btn_ty ty01">성명정보조회</a></div
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt15">
                  <p class="fs_13 c_gray lh1 mb7"
                    >가입대상<span class="c_point">*</span></p
                  >
                  <div class="half_wrap">
                    <div class="box_gray">
                      <div class="checks d_block tl">
                        <input id="" type="checkbox" name="" />
                        <label for="" class="fs_15 lh20"
                          ><span class="c_point">*</span> 고유식별정보 수집/이용
                          동의</label
                        >
                      </div>
                      <div class="checks d_block tl">
                        <input id="" type="checkbox" name="" />
                        <label for="" class="fs_15 lh20"
                          ><span class="c_point">*</span> 개인정보 수집/이용
                          동의</label
                        >
                      </div>
                    </div>
                    <div class="box_gray">
                      <div class="checks d_block tl">
                        <input id="" type="checkbox" name="" />
                        <label for="" class="fs_15 lh20"
                          >고객 혜택 제공을 위한 수신 동의</label
                        >
                      </div>
                      <div class="checks d_block tl">
                        <input id="" type="checkbox" name="" />
                        <label for="" class="fs_15 lh20"
                          >개인정보 제 3자 제공 동의</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt15">
                  <p class="fs_13 c_gray lh1 mb7"
                    >신청자<span class="c_point">*</span></p
                  >
                  <div class="half_wrap">
                    <div class="box_gray">
                      <div class="checks d_block tl">
                        <input id="" type="checkbox" name="" />
                        <label for="" class="fs_15 lh20"
                          ><span class="c_point">*</span> 고유식별정보 수집/이용
                          동의</label
                        >
                      </div>
                      <div class="checks d_block tl">
                        <input id="" type="checkbox" name="" />
                        <label for="" class="fs_15 lh20"
                          ><span class="c_point">*</span> 개인정보 수집/이용
                          동의</label
                        >
                      </div>
                    </div>
                    <div class="box_gray">
                      <div class="checks d_block tl">
                        <input id="" type="checkbox" name="" />
                        <label for="" class="fs_15 lh20"
                          >고객 혜택 제공을 위한 수신 동의</label
                        >
                      </div>
                      <div class="checks d_block tl">
                        <input id="" type="checkbox" name="" />
                        <label for="" class="fs_15 lh20"
                          >개인정보 제 3자 제공 동의</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- //신청자 기본정보 -->

              <!-- 결합 예상 금액 -->
              <div class="content_sec ty02 mb0">
                <span class="sub_tit d_inBlock">결합예상금액</span>
                <span class="ml20 c_point" style="vertical-align: 3px"
                  >* 요금은 요금감면 및 기타 할인 적용되지 않은 예상
                  금액입니다.</span
                >
                <div class="half_wrap ty03">
                  <div class="half_wrap">
                    <div>
                      <p class="fs_13 c_gray lh1 mb7"
                        >예상 결합 금액(부가세 포함)</p
                      >
                      <div class="fee_box">
                        <span class="c_point fs_17 fw_500">38,700</span>원
                      </div>
                    </div>
                    <div>
                      <p class="fs_13 c_gray lh1 mb7">할인 금액(부가세 포함)</p>
                      <div class="fee_box">
                        <span class="c_point fs_17 fw_500">8,500</span>원
                      </div>
                    </div>
                  </div>
                  <div>
                    <p class="fs_13 c_gray lh1 mb7"
                      >예상 납부 최종 금액(부가세 포함)</p
                    >
                    <div class="fee_box">
                      <span class="c_point fs_17 fw_500">30,200</span>원
                    </div>
                  </div>
                </div>
              </div>
              <!-- //결합 예상 금액 -->

              <div class="btm_btns">
                <a href="#" class="btn_ty ty02">초기화</a>
                <a href="#" class="btn_ty ty03">저장</a>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
  <!-- //e #contents -->
</template>

<style lang="scss" module>
@import '@design';
</style>
