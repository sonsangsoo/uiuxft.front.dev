<script>
import MemSearch from '@components/common/MemSearch.vue'
export default {
  components: { MemSearch },
  data() {
    return {}
  },
}
</script>

<template>
  <article class="box">
    <!-- Tab -->
    <MemSearch></MemSearch>
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
</template>

<style lang="scss" module>
@import '@design';
</style>
