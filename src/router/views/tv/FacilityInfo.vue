<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<template>
<!-- 수신설비정보 -->
    <div class="content_sec ty02">
        <p class="sub_tit">수신설비정보</p>

        <div class="scroll">
            <table class="table_ty">
                <caption>수신설비정보 테이블</caption>
                <thead>
                    <tr>
                        <th>구분</th>
                        <th>판매방식</th>
                        <th>장비금액</th>
                        <th>일시/할부금,임대료</th>
                        <th>보조금</th>
                        <th>할부/임대 개월 수</th>
                        <th>의무사용</th>
                        <th>부케ID</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>

        <!-- 수신 타입 설정 후 hide -->
        <div class="br_b1 p10_15">
            <ul>
                <li class="checks d_block tl">
                    <input type="checkbox"   name="">
                    <label for="" class="lh20 fs_14">수신기</label>
                </li>
                <li class="checks d_block tl">
                    <input type="checkbox"   name="">
                    <label for="" class="lh20 fs_14">안테나</label>
                </li>
                <li class="checks d_block tl">
                    <input type="checkbox"   name="">
                    <label for="" class="lh20 fs_14">기타부품</label>
                </li>
            </ul>
        </div>


        <div class="btm_btns mt20">
            <a href="#" class="btn_ty ty02">삭제</a>
            <a href="#" class="btn_ty ty06">수정</a>
        </div>
    </div>
    <!-- //수신설비정보 -->
</template>

<style lang="scss" module>
@import '@design';
</style>
