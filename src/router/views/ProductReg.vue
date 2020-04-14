<script>
import TvSection from '@views/tv/Tv.vue'
import AppBasicInfo from '@views/common/AppBasicInfo.vue'
import InternetSection from '@views/internet/Internet.vue'
import homeRentalSection from '@views/homeRental/homeRental.vue'

export default {
  components: {
    TvSection,
    InternetSection,
    homeRentalSection,
    AppBasicInfo,
  },
  data() {
    return {
      isTabAtive: true,
      selectedTab: '',
      tabs: ['현황', 'TV', '인터넷', '홈렌탈', '···'],
    }
  },
  mounted() {
    this.selectedTab = this.tabs[0]
  },
  methods: {
    openTab(tab) {
      this.selectedTab = tab
      if (tab === 'TV') {
        this.$router.push({ name: 'tv' })
      } else if (tab === '인터넷') {
        this.$router.push({ name: 'internet' })
      }
    },
  },
}
</script>

<template>
  <article class="box">
    <!-- Tab -->
    <ul id="status_tab" class="tab ty01 row06">
      <li v-for="tab in tabs" :key="tab">
        <a
          :class="{ active: tab === selectedTab }"
          href="#"
          @click="openTab(tab)"
          >{{ tab }}</a
        >
      </li>
    </ul>
    <!-- 컨텐츠 -->
    <div class="box_cnts">
      <ul class="tab_cnt_list">
        <li v-if="selectedTab === tabs[0]" class="active">
          <!-- 상품목록 -->
          <div class="content_sec mb30">
            <div class="clear mb10">
              <p class="sub_tit fl lh30 mb0">상품목록</p>
              <div class="fr">
                <select id="" name="" class="sel_ty vsmall" title="건수 선택">
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
                ><a href="#" class="btn_ty ty06">결합하기</a></div
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
          <AppBasicInfo class="line_div"></AppBasicInfo>
          <!-- //신청자 기본정보 -->

          <!-- 결합 예상 금액 -->
          <div class="content_sec ty02 mb0">
            <span class="sub_tit mb10">결합예상금액</span>
            <span class="ml20 c_point" style="vertical-align: 3px;">
              * 요금은 요금감면 및 기타 할인 적용되지 않은 예상 금액입니다.
            </span>
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
        <router-view></router-view>
        <li v-if="selectedTab === tabs[1]" class="active">
          <TvSection></TvSection>
        </li>
        <li v-if="selectedTab === tabs[2]" class="active">
          <InternetSection></InternetSection>
        </li>
        <li v-if="selectedTab === tabs[3]" class="active">
          <div class="content_sec mb30">
            <homeRentalSection></homeRentalSection>
          </div>
        </li>
        <!-- <li v-if="selectedTab === tabs[4]" class="active">
          <div class="content_sec mb30">
            ...
          </div>
        </li> -->
      </ul>
    </div>
  </article>
</template>

<style lang="scss" module>
@import '@design';
</style>
