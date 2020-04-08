<script>
// import utils from './popupCommon'

export default {
  name: 'NameInfoCheck',
  data() {
    return {
      popupSeen: true,
      selectedData: null,
    }
  },
  mounted() {
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
  <div
    v-show="popupSeen"
    id="name_search"
    ref="popup_wrap"
    class="popup_wrap size01"
  >
    <div ref="popup" class="popup">
      <div class="pop_head">
        <strong>성명정보조회</strong>
      </div>
      <div class="pop_con">
        <form action="">
          <ul class="inp_list">
            <li>
              <label for="name">응답성명</label>
              <div class="con">
                <input
                  id="name"
                  type="text"
                  value="김지택"
                  readonly="readonly"
                />
              </div>
            </li>
            <li>
              <label for="result">판정결과</label>
              <div class="con">
                <input
                  id="result"
                  type="text"
                  value="<< 성명일치 >>"
                  readonly="readonly"
                />
              </div>
            </li>
            <li>
              <label for="massage">응답메세지</label>
              <div class="con">
                <input
                  id="massage"
                  type="text"
                  value="정상조회완료"
                  readonly="readonly"
                />
              </div>
            </li>
          </ul>
          <p class="point_red mt20"
            >실명확인 되었습니다. 반드시 성명확인 후 진행하십시오.</p
          >

          <div class="pop_btn_wrap">
            <a href="#;" class="btn_active" @click="close">확인</a>
          </div>
        </form>
      </div>
      <a href="#;" class="pop_close" @click="displayPopup">팝업 닫기</a
      ><!-- 닫기 기능은 클래스 pop_close 추가하시면 됩니다. -->
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@design';
</style>
