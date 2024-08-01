<template>
  <div class="event-home-wrap">
    <div class="event-home-play-wrap">
      <div class="event-home-title-wrap">
        <div class="event-home-title">전체 이벤트</div>
        <div>
          <ul class="event-home-title-ul">
            <li>당첨자 발표</li>
            <li>응모내역</li>
            <li>지난 이벤트</li>
          </ul>
        </div>
      </div>
      <div class="event-home-play-sub-wrap">
        <div class="event-home-play-sub">
          <div class="event-home-subTitle">영화</div>
          <div class="event-home-plusView">더보기<i class="bi bi-chevron-right"></i></div>
        </div>
        <div class="event-home-play-list">
          <ul class="event-home-play-ul">
            <li>
              <img src="@/assets/image/main/event-movie01.jpg" alt="다음이동">
              <div class="event-home-list-title">2024.08.07 ~ 2024.08.13</div>
            </li>
            <li>
              <img src="@/assets/image/main/event-movie02.jpg" alt="다음이동">
              <div class="event-home-list-title">2024.08.02 ~ 2024.08.08</div>
            </li>
            <li>
              <img src="@/assets/image/main/event-movie03.jpg" alt="다음이동">
              <div class="event-home-list-title">2024.08.01 ~ 2024.08.07</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="event-home-play-sub-wrap">
        <div class="event-home-play-sub">
          <div class="event-home-subTitle">시사회/무대인사</div>
          <div class="event-home-plusView">더보기<i class="bi bi-chevron-right"></i></div>
        </div>
        <div class="event-home-play-list">
          <ul class="event-home-play-ul">
            <li>
              <img src="@/assets/image/main/event-preview01.jpg" alt="다음이동">
              <div class="event-home-list-title">2024.08.15 ~ 2024.08.18</div>
            </li>
            <li>
              <img src="@/assets/image/main/event-preview02.jpg" alt="다음이동">
              <div class="event-home-list-title">2024.08.14 ~ 2024.08.18</div>
            </li>
            <li>
              <img src="@/assets/image/main/event-preview03.jpg" alt="다음이동">
              <div class="event-home-list-title">2024.07.30 ~ 2024.08.04</div>
            </li>
          </ul>
        </div>
      </div> 
      <div class="event-home-play-sub-wrap">
        <div class="event-home-play-sub">
          <div class="event-home-subTitle">HOT</div>
          <div class="event-home-plusView">더보기<i class="bi bi-chevron-right"></i></div>
        </div>
        <div class="event-home-play-list">
          <ul class="event-home-play-ul">
            <li>
              <img src="@/assets/image/main/event-hot01.jpg" alt="다음이동">
              <div class="event-home-list-title">2024.08.21 ~ 2024.09.03</div>
            </li>
            <li>
              <img src="@/assets/image/main/event-hot02.jpg" alt="다음이동">
              <div class="event-home-list-title">2024.07.31 ~ 2024.08.25</div>
            </li>
            <li>
              <img src="@/assets/image/main/event-hot03.jpg" alt="다음이동">
              <div class="event-home-list-title">2024.07.31 ~ 2024.12.31</div>
            </li>
          </ul>
        </div>
      </div> 
      <div class="event-home-play-sub-wrap">
        <div class="event-home-play-sub">
          <div class="event-home-subTitle">제휴할인</div>
          <div class="event-home-plusView">더보기<i class="bi bi-chevron-right"></i></div>
        </div>
        <div class="event-home-play-list">
          <ul class="event-home-play-ul">
            <li>
              <img src="@/assets/image/main/event-sale01.jpg" alt="다음이동">
              <div class="event-home-list-title">2024.06.05 ~ 2024.12.31</div>
            </li>
            <li>
              <img src="@/assets/image/main/event-sale02.jpg" alt="다음이동">
              <div class="event-home-list-title">2024.05.31 ~ 2024.12.31</div>
            </li>
            <li>
              <img src="@/assets/image/main/event-sale03.jpg" alt="다음이동">
              <div class="event-home-list-title">2024.05.22 ~ 2024.12.31</div>
            </li>
          </ul>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventHome',
  components: {
  },

  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  }
};
</script>

<style scoped>
.event-home-wrap {
  margin-top: 131px;
}
.event-home-play-sub-wrap {
  width: 100%;
  height: auto;
  margin-bottom: 30px;
}
.event-home-title-wrap {
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(219, 213, 213);
}
.event-home-title {
  font-size: 22px;
  font-weight: bold;
  text-align: left;
}
.event-home-title-ul {
  display: flex;
  margin: 0;
  padding: 0;
}
.event-home-title-ul> li {
  position: relative;
  font-size: 16px;
  color: #aaa;
  padding: 0px 10px;
}
.event-home-title-ul> li:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0px; /* 선의 위치를 조정 */
  top: 50%;
  transform: translateY(-50%);
  height: 25%; /* 선의 길이 조정 */
  font-weight: bold;
  border-right: 1px solid #aaa; /* 선의 스타일 */
}
.event-home-subTitle {
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  margin: 10px 0px;
}
.event-home-play-wrap {
  width: 980px;
  margin: 50px auto;
}
.event-home-play-sub {
  display: flex;
  justify-content: space-between;
  align-items: flex-end; 
}  
.event-home-plusView {
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  color: #aaa;
}
.event-home-play-ul {
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
}
.event-home-play-ul> li> img {
  width: 314px;
  height: 184px;
  border-radius: 5px;
}
.event-home-list-title {
  font-size: 12px;
  text-align: left;
  margin: 10px 20px 5px;
}
</style>