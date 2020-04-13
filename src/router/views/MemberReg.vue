<script>
import MemSearch from '@views/common/MemSearch.vue'
import MemberInfoInput from '@views/dashboard/MemberInfoInput.vue'
import BillingAccount from '@views/dashboard/BillingAccount.vue'
export default {
  components: {
    MemberInfoInput,
    MemSearch,
    BillingAccount,
  },

  data() {
    return {
      isTabAtive: false,
      selectedTab: '',
      tabs: ['고객정보', '청구계정'],
      personTypes: [
        { value: '1', text: '개인' },
        { value: '2', text: '외국개인' },
        { value: '7', text: '홈렌탈 가입' },
        { value: '4', text: '법인' },
        { value: '6', text: '외국법인' },
        { value: '3', text: '개인사업자' },
        { value: '5', text: '공공기관' },
      ],
      personType: '1',
    }
  },
  mounted() {
    console.log(this.$refs)
    this.selectedTab = this.tabs[0]
  },
  methods: {
    openTabMenu(tab) {
      this.selectedTab = tab
    },
    chagePersonType(event) {
      this.personType = event.target.value
    },
  },
}
</script>

<template>
  <article class="box">
    <!--고객정보 조회 공통 컴포넌트-->
    <MemSearch></MemSearch>
    <!-- Tab -->
    <ul class="tab ty01" id="info_tab">
      <li v-for="tab in tabs" :key="tab">
        <a
          :class="{ active: tab === selectedTab }"
          href="#"
          @click="openTabMenu(tab)"
        >
          {{ tab }}
        </a>
      </li>
    </ul>
    <div class="box_cnts">
      <ul class="tab_cnt_list">
        <!-- 고객정보 -->
        <li v-if="selectedTab === tabs[0]" class="active">
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
              <!-- 0401 : 퍼블리싱 수정 -->
              <select class="sel_ty w100 sel_cust_ty" @change="chagePersonType">
                <option
                  v-for="(item, index) in personTypes"
                  v-bind:item="item"
                  v-bind:index="index"
                  v-bind:key="item.value"
                  v-bind:value="item.value"
                >
                  {{ item.text }}
                </option>
              </select>
            </div>
          </div>
          <ul class="cust_ty_list">
            <!--고객정보 등록 컴포넌트 -->
            <MemberInfoInput v-bind:personType="personType"></MemberInfoInput>
          </ul>
          <div class="btm_btns">
            <a href="#" class="btn_ty ty02 lg w90p">초기화</a>
            <a href="#" class="btn_ty ty03 lg w90p">저장</a>
            <a href="#" class="btn_ty ty01 lg w90p">가입계속</a>
          </div>
        </li>
        <!-- //고객정보 -->

        <!-- 청구계정 -->
        <li v-if="selectedTab === tabs[1]" class="active">
          <div class="content_sec ty02">
            <span class="sub_tit mb10">고객기본정보</span>
            <span class="ml15 c_point lh20" style="vertical-align: 1px;"
              >* 고객정보 입력 완료</span
            >
            <div class="content_sec half_wrap">
              <div>
                <label for="" class="label_ty">고객번호</label>
                <input type="text" class="input_ty ty02" />
              </div>
              <div>
                <label for="" class="label_ty"
                  >고객구분<span class="c_point">*</span></label
                >
                <input type="text" class="input_ty ty02" />
              </div>
            </div>
            <div class="content_sec mb0">
              <div>
                <label for="" class="label_ty"
                  >고객명<span class="c_point">*</span></label
                >
                <input type="text" class="input_ty" />
              </div>
            </div>
          </div>
          <!--청구계정 등록 폼 컴포넌트-->
          <BillingAccount v-bind:personType="personType"></BillingAccount>
          <div class="btm_btns">
            <a href="#" class="btn_ty ty02">초기화</a>
            <a href="#" class="btn_ty ty03">저장</a>
          </div>
        </li>
        <!-- //청구계정 -->
      </ul>
    </div>
  </article>
</template>

<style lang="scss" module>
@import '@design';
</style>
