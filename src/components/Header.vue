<script>
import { authComputed } from '@state/helpers'
import { popSelectDisNetwork } from '../router/views/popup/index.js'

export default {
  components: {  },
  data() {
    return {}
  },
  computed: {
    ...authComputed,
  },
  methods: {
    testPopUp() {
      return popSelectDisNetwork().then((res) => {
        console.log(res.testName)
        console.log(res.testContent)
        return res
      })
    },
  },
}
</script>

<template>
  <header data-color="mint">
    <div class="hd_sub">
      <h1 class="hd_logo"
        ><a href="#" title="kt skylife 바로가기" @click="testPopUp"
          >kt skylife</a
        ></h1
      >
      <div class="hd_search">
        <input type="text" placeholder="화면 ID" />
        <button type="submit" class="search_btn" title="검색하기"></button>
      </div>
      <div class="hd_utill">
        <ul class="hd_btn">
          <li class="noti_sec">
            <a href="#" title="공지사항" class="info_btn">공지사항</a>
            <div class="dropdown-menu">
              <div class="drop_noti_wrap">
                <p class="drop_tit">Notifications</p>
                <ul>
                  <!-- 중요 공지사항일 경우 클래스 import -->
                  <li class="import"
                    ><a href="#"
                      >중요 공지사항 내용 중요 공지사항 내용 중요 공지사항 내용
                      중요 공지사항 내용</a
                    ></li
                  >
                  <li
                    ><a href="#"
                      >공지사항 내용 중요 공지사항 내용 중요 공지사항 내용 중요
                      공지사항 내용</a
                    ></li
                  >
                  <li
                    ><a href="#"
                      >공지사항 내용 중요 공지사항 내용 중요 공지사항 내용 중요
                      공지사항 내용</a
                    ></li
                  >
                </ul>
              </div>
            </div>
          </li>
          <li
            ><a href="#" title="즐겨찾기" class="favorite_btn">즐겨찾기</a></li
          >
          <li class="theme_sec">
            <a href="#" title="설정" class="general_btn">설정</a>
            <div class="dropdown-menu">
              <div class="drop_theme_wrap">
                <ul>
                  <!-- 현재 테마에 'now' 클래스 추가 -->
                  <li class="mint now"><a href="#">Skylife MINT</a></li>
                  <li class="red"><a href="#">Skylife RED</a></li>
                  <li class="blue"><a href="#">Skylife BLUE</a></li>
                  <li class="gray"><a href="#">Skylife GRAY</a></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <!-- 로그인 사용자 정보 -->
        <div class="login_sec">
          <ul>
            <li class="login_photo"
              ><img
                src="@assets/images/template/default_img.png"
                alt="login photo"
            /></li>
            <li class="login_name">홍*동</li>
            <li class="logout_btn"><a href="#" title="로그아웃">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" module>
@import '@design';
</style>
