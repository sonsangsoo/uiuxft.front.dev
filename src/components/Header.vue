<script>
import { authComputed } from '@state/helpers'
import { popNameInfoCheck } from '../router/views/popup/index.js'

export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    ...authComputed,
  },
  methods: {
    testPopUp() {
      return popNameInfoCheck().then((res) => {
        console.log('popNameInfoCheck!!')
        console.log(res)
        // console.log(res.name)
        // console.log(res.content)
        return res
      })
    },
  },
}
</script>

<template>
  <header data-color="green">
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
          <li
            ><a href="#" title="내정보보기" class="info_btn">내정보 보기</a></li
          >
          <li
            ><a href="#" title="즐겨찾기" class="favorite_btn">즐겨찾기</a></li
          >
          <li><a href="#" title="설정" class="general_btn">설정</a></li>
        </ul>
        <!-- 로그인 사용자 정보 -->
        <div class="login_sec">
          <ul>
            <li class="login_photo"
              ><img
                src="/assets/images/template/default_img.png"
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
