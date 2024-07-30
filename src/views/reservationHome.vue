<template>
  <div class="reservation-home-wrap">
    <!-- 사이드 메뉴 및 예매 진행상태 시작 -->
    <div class="reservation-home-main">
      <div class="reservation-home-side">
        <ul class="reservation-home-side-ul">
          <li class="reservation-home-side-li" :class="{ 'clicked-menu': clickedPageIndex === 0 }">
            <router-link to="/reservationHome/reservationPage1" @click="setTab(0)" class="menu-link">
              <div><strong>01</strong></div>
              <div><strong>상영시간</strong></div>
            </router-link>
          </li>
          <li class="reservation-home-side-li" :class="{ 'clicked-menu': clickedPageIndex === 1 }">
            <router-link to="/reservationHome/reservationPage2" @click="setTab(1, selectedItem)" class="menu-link">
              <div><strong>02</strong></div>
              <div><strong>인원/좌석</strong></div>
            </router-link>
          </li>
          <li class="reservation-home-side-li" :class="{ 'clicked-menu': clickedPageIndex === 2 }">
            <router-link to="/reservationHome/reservationPage3" @click="setTab(2)" class="menu-link">
              <div><strong>03</strong></div>
              <div><strong>결제</strong></div>
            </router-link>
          </li>
          <li class="reservation-home-side-li" :class="{ 'clicked-menu': clickedPageIndex === 3 }">
            <router-link to="/reservationHome/reservationPage4" @click="setTab(3)" class="menu-link">
              <div><strong>04</strong></div>
              <div><strong>결제완료</strong></div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="reservation-home-content">
        <router-view @toggle="changeTab"></router-view>
        <!-- <router-view @toggle="setTab"></router-view> -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'reservationHome',
  data() {
    return {
      clickedPageIndex: 0,
    };
  },
  created() {
  },
  computed: {
  },
  mounted() {
    this.setTab(0);
    this.$router.push('/reservationHome/reservationPage1');
  },
  methods: {
    setTab(index) {
      this.clickedPageIndex = index;
    },
    changeTab(index) {
      this.setTab(index); // 탭 변경
      this.$router.push(`/reservationHome/reservationPage${index + 1}`); // 라우터 경로 변경
    },
  }
};
</script>

<style scoped>
.reservation-home-wrap {
  width: 100%;
  margin-top: 111px;
  padding: 80px 100px;
  height: 1080px;
  background-color: #4d4b4b;
} 
.reservation-home-main {
  display: flex;
  width: 1320px;
  height: 920px;
  margin: 0 auto;
  background-color: white;
}
.reservation-home-side {
  width: 78px;
  height: 920px;
} 
.reservation-home-side-ul {
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
.reservation-home-side-li {
  display: flex;
  flex: 1; /* 동일한 비율로 높이 설정 */
  flex-direction: column;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  width: 78px;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid #ccc; /* 시각적 구분을 위해 테두리 추가 */
  background-color: white;
  color: #aaa;
}
.clicked-menu {
  border: 1px solid rgb(212, 3, 3); /* 시각적 구분을 위해 테두리 추가 */
  background-color: rgb(212, 3, 3);
}  
.clicked-menu .menu-link {
  color: white;
}  

</style>