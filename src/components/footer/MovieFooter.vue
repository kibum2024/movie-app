<template>
  <div class="movie-footer-wrap">
    <div class="movie-advertisement"><img :src="movieAvertisement" alt="movie advertisement"></div>
    <div class="advertisement-footer">
      <a href="https://nvapi.feeldmc.com:443/ad/p/in/v1_0/clk?slotid=stw_lottelotte_36&amp;adgroupid=adg_lottecinema_20230227_112&amp;adid=adi_lottecinema_20230227_136" target="_blank" title="새창열기">
        <img :src="advertisementFooter" alt="advertisement Footer">
      </a>
    </div>
    <div class="movie-footer">
      <div class="movie-footer-img"><img :src="logoFooter" alt="logo Footer"></div>
      <div class="movie-footer-info">회사소개 | 이용약관 | 개인정보처리방침 | 이메일무단수집거부 | 고정형 영상정보처리기기 운영 및 관리방침 | L.POINT회원안내 | 배정기준 | 채용안내 | 광고/임대문의 | 사회적책임</div>
      <div class="movie-footer-info">서울특별시 송파구 올림픽로 295 삼성생명 잠실빌딩 18F</div>
      <div class="movie-footer-info">대표 이메일 lottecultureworks@lotte.net | 고객센터 1544-8855 (유료) | 사업자등록번호 313-87-00979 | 통신판매업신고번호 제1184호사업자정보확인</div>
      <div class="movie-footer-info">대표이사 최병환 | 개인정보 보호 책임자 이수민 | 호스팅 제공자 롯데이노베이트</div>
      <div class="movie-footer-info">Copyright © LOTTE Cultureworks All Right Reserved.</div>
    </div>
  </div>
</template>

<script>
import logoFooter from '@/assets/image/footer/logo_footer.gif';
import movieAvertisement from '@/assets/image/footer/Pilot_98018099.jpg';
import advertisementFooter from '@/assets/image/footer/Samsungfire_9802402.png';

export default {
  name: 'MovieFooter',
  data() {
    return {
      logoFooter,
      movieAvertisement,
      advertisementFooter
    };
  },
  methods: {
    
  }
};
</script>

<style scoped>
.movie-footer-wrap {
  width: 100%;
  margin-top: 100px;
} 
.movie-advertisement {
  width: 980px;
  height: 180px;
  margin: 50px auto;
}
.advertisement-footer {
  width: 980px;
  height: 240px;
  margin: 50px auto;
}
.movie-footer {
  width: 980px;
  height: 200px;
  margin: 0 auto;
} 
.movie-footer-img {
  height: 60px;
  text-align: left;
}
.movie-footer-info {
  font-size: 12px;
  text-align: left;
  color: #aaa;
  margin: 5px 0px;
  padding: 0;
}
</style>