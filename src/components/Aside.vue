<script>
import { authComputed } from '@state/helpers'

export default {
  components: {},
  data() {
    return {
      isActive: false,
      isDepThreeActive: false,
    }
  },
  computed: {
    ...authComputed,
  },
  mounted() {},
  methods: {
    openMenu() {
      if (this.isActive === false) {
        this.isActive = true
        this.$refs.dep2_bg.style.display = 'block'
        this.$refs.dep2_bg.style.height = this.$refs.aside.offsetHeight + 'px'
        this.$refs.dep2.style.display = 'block'
      } else {
        this.isActive = false
        this.$refs.dep2_bg.style.display = 'none'
        this.$refs.dep2.style.display = 'none'
        this.isDepThreeActive = false
        this.$refs.dep3.style.display = 'none'
      }
    },
    openDepThreeMenu() {
      if (this.isDepThreeActive === false) {
        this.isDepThreeActive = true
        this.$refs.dep3.style.display = 'block'
      } else {
        this.isDepThreeActive = false
        this.$refs.dep3.style.display = 'none'
      }
    },
  },
}
</script>

<template>
  <div>
    <div ref="dep2_bg" class="dep2_bg"></div>
    <aside ref="aside">
      <a href="#" class="menu_btn">메뉴</a>
      <ul>
        <li class="lnb_li01"><a href="#" title="My Menu">My Menu</a></li>
        <li class="lnb_li02">
          <a
            href="#"
            title="고객관리"
            :class="{ active: isActive }"
            @click="openMenu"
            >고객관리</a
          >
          <div ref="dep2" class="dep2">
            <ul>
              <li><a href="#">상품신청 조회</a></li>
              <li><a href="#">상품관리자</a></li>
              <li><a href="#">가입실적통계조회</a></li>
              <li><a href="#">HDTV 신청자 내역</a></li>
              <li>
                <a
                  href="#"
                  :class="{ active: isDepThreeActive }"
                  @click="openDepThreeMenu"
                >
                  가전결합상품
                </a>
                <ul ref="dep3" class="dep3">
                  <li><a href="#">조회/변경</a></li>
                  <li><a href="#">신청</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
        <li class="lnb_li03">
          <a href="#" title="마케팅관리">마케팅관리</a>
          <div class="dep2">
            <ul>
              <li><a href="#">상품신청 조회</a></li>
              <li><a href="#">상품관리자</a></li>
              <li><a href="#">가입실적통계조회</a></li>
              <li><a href="#">HDTV 신청자 내역</a></li>
              <li>
                <a href="#">가전결합상품</a>
                <ul class="dep3">
                  <li><a href="#">조회/변경</a></li>
                  <li><a href="#">신청</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
        <li class="lnb_li04"><a href="#" title="상품관리">상품관리</a></li>
        <li class="lnb_li05"><a href="#" title="정산관리">정산관리</a></li>
        <li class="lnb_li06"><a href="#" title="요금관리">요금관리</a></li>
        <li class="lnb_li07"><a href="#" title="OTS관리">OTS관리</a></li>
        <li class="lnb_li08"><a href="#" title="업무지원">업무지원</a></li>
        <li class="lnb_li09"
          ><a href="#" title="지사커뮤니티">지사커뮤니티</a></li
        >
        <li class="lnb_li10"><a href="#" title="ISMS">ISMS</a></li>
      </ul>
    </aside>
  </div>
</template>

<style lang="scss" module>
@import '@design';
</style>
