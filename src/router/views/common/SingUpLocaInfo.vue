<script>
import Post from '@views/common/Post.vue'

export default {
  components:{
    Post
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<template>
    <!-- 가입설치장소정보 -->
    <div class="content_sec ty02">
      <span class="sub_tit">가입설치장소정보</span>
      <div class="d_inBlock checks ml20">
        <input type="checkbox" name="" />
        <label for="" class="c_point">인터넷 정보와 동일</label>
      </div>
      <Post></Post>
      <div class="mt15 half_wrap">
        <div>
          <label for="" class="label_ty"
            >수신방식<span class="c_point">*</span></label
          >
          <select name="" class="sel_ty w100 wide" title="">
            <option value="">선택</option>
            <option value="">101 DTH</option>
            <option value="">102 IF</option>
            <option value="">103 DTM</option>
            <option value="">104 DTH-R</option>
            <option value="">105 디지털-SCN</option>
            <option value="">106 DCS</option>
            <option value="">201 IF(Biz)</option>
            <option value="">204 H/E(Biz)</option>
            <option value="">301 IMAP</option>
            <option value="">302 Portable</option>
            <option value="">303 Portable(가정겸용)</option>
            <option value="">401 공동시청</option>
          </select>
        </div>
        <div class="half_wrap">
          <div>
            <label for="" class="label_ty"
              >설치유형<span class="c_point">*</span></label
            >
            <select name="" class="sel_ty w100 medium" title="">
              <option value="">선택</option>
            </select>
          </div>
          <div>
            <label for="" class="label_ty"
              >건물유형<span class="c_point">*</span></label
            >
            <select name="" class="sel_ty w100 medium" title="">
              <option value="">선택</option>
            </select>
          </div>
        </div>
      </div>
      <div class="mt15 half_wrap">
        <div class="half_wrap ty05">
          <div>
            <label for="" class="label_ty">이동체 구분</label>
            <select name="" class="sel_ty w100 wide" title="">
              <option value="">선택</option>
            </select>
          </div>
          <div>
            <label for="" class="label_ty">이동체 관리번호</label>
            <input type="text" class="input_ty" />
          </div>
        </div>
        <div class="half_wrap ty06">
          <div>
            <label for="" class="label_ty"
              >인터넷(ISP) 사업자<span class="c_point">*</span></label
            >
            <select name="" class="sel_ty w100 medium" title="">
              <option value="">선택</option>
            </select>
          </div>
          <div>
            <label for="" class="label_ty"
              >인터넷(ISP) 사업자 사용기간<span class="c_point">*</span></label
            >
            <select name="" class="sel_ty w100 medium" title="">
              <option value="">선택</option>
            </select>
          </div>
          <div>
            <label for="" class="label_ty">IP연결동의여부</label>
            <div class="checks d_block br_b1 h40">
              <input type="radio" name="" />
              <label for="">예</label>
              <input type="radio" name="" />
              <label for="">아니오</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //가입설치장소정보 -->
</template>

<style lang="scss" module>
@import '@design';
</style>
