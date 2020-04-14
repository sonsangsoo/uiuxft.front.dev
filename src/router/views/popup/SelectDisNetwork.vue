<script>
// import utils from './popupCommon'

export default {
  name: 'SelectDisNetwork',
  data() {
    return {
      popupSeen: true,
      selectedData: null,
      selectedNetwork: ''
    }
  },
  mounted() {
    console.log(this.$parent.searchNetwork)
    // 팝업 위치
    const left = this.$refs.popup.scrollWidth / 2
    const top = this.$refs.popup.scrollHeight / 2
    this.$refs.popup.style.marginLeft = -left + 'px'
    this.$refs.popup.style.marginTop = -top + 'px'
  },
  methods: {
    displayPopup() {
      this.popupSeen = false
    },
    close() {
      this.selectedData = {
        testName: 'junseop',
        testContent: 'park',
      }
      if (this.selectedData) {
        this.$close(this.selectedData)
      } else {
        alert('선택된 요청정보가 없습니다.')
      }
    },
  },
}
</script>

<template>
  <div v-show="popupSeen" id="claim" class="popup_wrap size02">
    <div ref="popup" class="popup">
      <div class="pop_head">
        <strong>유통망선택</strong>
      </div>
      <div class="pop_con">
        <form action="">
          <div class="search_inp">
            <div class="inp_wrap">
              <div class="col3">
                <label for="divide" class="must">유통망관리구분</label>
                <div class="con">
                  <select id="divide" name="">
                    <option value="">선택</option>
                    <option value="">선택</option>
                  </select>
                </div>
              </div>
              <div class="col3">
                <label for="type" class="must">유통망유형</label>
                <div class="con">
                  <select id="type" name="">
                    <option value="">L1 지역유통망</option>
                    <option value="">L1 지역유통망</option>
                  </select>
                </div>
              </div>
              <div class="col4">
                <label for="name" class="must">유통망명</label>
                <div class="con">
                  <input id="name" type="text" />
                </div>
              </div>
            </div>
            <!-- 0408: 클래스 수정 -->
            <input type="submit" value="검색" class="pop_search_btn" />
          </div>

          <div class="data_table_wrap vertical mt35">
            <div class="data_table">
              <table>
                <caption>유통망선택</caption>
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">유통망코드</th>
                    <th scope="col">유통망명</th>
                    <th scope="col">유통망관리구분</th>
                    <th scope="col">유통망유형</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>L13099</td>
                    <td>(**</td>
                    <td>SkyLife YesCenter</td>
                    <td>지역유통망</td>
                  </tr>
                  <tr>
                    <td>L13099</td>
                    <td>(**</td>
                    <td>SkyLife YesCenter</td>
                    <td>지역유통망</td>
                  </tr>
                  <tr>
                    <td>L13099</td>
                    <td>(**</td>
                    <td>SkyLife YesCenter</td>
                    <td>지역유통망</td>
                  </tr>
                  <tr>
                    <td>L13099</td>
                    <td>(**</td>
                    <td>SkyLife YesCenter</td>
                    <td>지역유통망</td>
                  </tr>
                  <tr>
                    <td>L13099</td>
                    <td>(**</td>
                    <td>SkyLife YesCenter</td>
                    <td>지역유통망</td>
                  </tr>
                  <tr>
                    <td>L13099</td>
                    <td>(**</td>
                    <td>SkyLife YesCenter</td>
                    <td>지역유통망</td>
                  </tr>
                  <tr>
                    <td>L13099</td>
                    <td>(**</td>
                    <td>SkyLife YesCenter</td>
                    <td>지역유통망</td>
                  </tr>
                  <tr>
                    <td>L13099</td>
                    <td>(**</td>
                    <td>SkyLife YesCenter</td>
                    <td>지역유통망</td>
                  </tr>
                </tbody>
              </table>
            </div> </div
          ><!-- //data_table_wrap -->

          <div class="pop_btn_wrap">
            <a href="#;" @click="displayPopup" class="btn_basic pop_close"
              >취소</a
            >
          </div>
        </form>
      </div>
      <a href="#;" class="pop_close" @click="displayPopup">팝업 닫기</a>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@design';
</style>
