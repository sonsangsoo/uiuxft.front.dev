<script>
import appConfig from '@src/app.config'
// import Layout from '@layouts/main.vue'
import Header from '@components/Header.vue'
import Aside from '@components/Aside.vue'
import Section from '@components/section.vue'
// import { getUser } from '../../services'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Header, Aside, Section },
  data() {
    return {
      custNm: '하늘이',
      juminBizNo: '1111112222222',
    }
  },
  created() {
    /* getUser({ custNm: this.custNm, juminBizNo: this.juminBizNo }).then(
      (res) => {
        console.log('nameVerifyCheck')
        console.log(res.data.rsltMsg)
        console.log(res.data.rsltCd)
      }
    ) */
  },
  methods: {},
}
</script>

<template>
  <div>
    <Header></Header>
    <div id="wrap" data-color="mint">
      <Aside></Aside>
      <Section></Section>
    </div>
  </div>
</template>
