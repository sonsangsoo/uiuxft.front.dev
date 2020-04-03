<script>
import router from '@router'

export default {
  methods: {
    activeTab: function(tab, obj) {},
  },
}


 const  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: User,
    },
  ],
})
</script>

<template>
  <div id="wrap" data-color="green">
    <div class="dep2_bg"></div>
    <!-- 등록상품 탭 컨트롤(탭클릭시 각탭의 vue화면을 불러와 div class="box_cnts" 안에 보여준다.-->
    <article class="box">
      <!-- Tab -->
      <ul id="status_tab" class="tab ty01 row06">
        <li><a href="#" @click="activeTab('dashboard', this)">현황</a></li>
        <li><a href="#" @click="activeTab('tv', this)">TV</a></li>
        <li><a href="#" @click="activeTab('internet', this)">인터넷</a></li>
        <li><a href="#" @click="activeTab('homerental')">홈렌탈</a></li>
        <li class="tab_more"><a href="#">···</a></li>
      </ul>
      <div class="box_cnts"> </div>
    </article>
  </div>
</template>

<style lang="scss" module>
@import '@design';
</style>
