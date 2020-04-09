<script>
import appConfig from '@src/app.config'
// import Layout from '@layouts/main.vue'
import Header from '@components/Header.vue'
import Aside from '@components/Aside.vue'
import Section from '@components/section.vue'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Header, Aside, Section },
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
