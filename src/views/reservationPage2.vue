<template>
  <div class="reservationPage2-wrap">
    <div class="reservationPage2-title">
      <h4>인원/좌석 선택</h4>
      <div class="person-count-note">· 인원은 최대 8명까지 선택 가능합니다.</div>
    </div>
    <div class="person-count-setect-wrap">
      <div class="movie-info-wrap">
        <div><img :src="getImagePath(movieShowImg[0].movieImgName)" alt="image view"></div>
        <div class="movie-info">
          <div class="movie-info1">
            <div class="movie-info-age" :style="ageColorObject(selectedShowtime.ageLimited)">{{selectedShowtime.ageLimited}}</div>
            <div class="movie-info-title">{{selectedShowtime.movieTitle}}</div>
            <div class="movie-info-showGubun">({{selectedShowtime.showGubun}})</div>
          </div>
          <div class="movie-info2">
            <div class="movie-info-showDate">{{movieShowDate}}</div>
            <div class="movie-info-showTime">{{selectedShowtime.showTime}}</div>
          </div>
          <div class="movie-info3">
            <div class="movie-info-showRoom">{{selectedShowtime.showRoom}}</div>
            <div class="movie-info-lineGubun">{{selectedShowtime.linesGubun}}</div>
          </div>
        </div>
      </div>
      <div class="person-count-setect">
        <ul class="person-count-setect-ul">
          <li>
            <div class="select-count-name">성인</div>
            <div class="select-count-wrap">
              <div class="select-minus"><i class="bi bi-dash-lg"></i></div>
              <div class="select-count">0</div>
              <div class="select-plus"><i class="bi bi-plus-lg"></i></div>
            </div>
          </li>
          <li>
            <div class="select-count-name">경로</div>
            <div class="select-count-wrap">
              <div class="select-minus"><i class="bi bi-dash-lg"></i></div>
              <div class="select-count">0</div>
              <div class="select-plus"><i class="bi bi-plus-lg"></i></div>
            </div>
          </li>
          <li>
            <div class="select-count-name">장애인</div>
            <div class="select-count-wrap">
              <div class="select-minus"><i class="bi bi-dash-lg"></i></div>
              <div class="select-count">0</div>
              <div class="select-plus"><i class="bi bi-plus-lg"></i></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="handicap-note">- 반드시 복지카드를 소지하신 후 입장해주세요. 미지참 시 입장이 제한됩니다. (장애의 정도가 심한 장애인: 동반 1인 포함 할인 가능/ 장애 정도가 심하지 않은 장애인: 본인에 한하여 할인 적용)</div>
    <div class="movie-screen-wrap">
      <div class="movie-screen">S  C  R  E  E  N</div>
      <div class="seat-layout">
        <div v-for="row in seatData.rows" :key="row.row_number" class="row-seat">
          <div class="row-number">
            <span v-if="row.row_number === 'TR'"></span>
            <span v-else>{{ row.row_number }}</span>
          </div>
          <div
            v-for="seat in row.seats"
            :key="seat.seat_number"
            :class="[seat.type, { reserved: seat.reserved === 'true' }]"
          >
            {{ seat.seat_number }}
          </div>
        </div>
      </div> 
      <div class="seat-gubun-wrap">
        <div class="seat-gubun-div">
          <ul class="seat-gubun-ul">
            <li>
              <div class="seat-gubun seat1"></div>
              <div class="seat-gubun-name">스위트스팟</div>
            </li>
            <li>
              <div class="seat-gubun seat2"></div>
              <div class="seat-gubun-name">발받침석</div>
            </li>
            <li>
              <div class="seat-gubun seat3"></div>
              <div class="seat-gubun-name">장애인석</div>
            </li>
            <li>
              <div class="seat-gubun seat4"></div>
              <div class="seat-gubun-name">출입문</div>
            </li>
          </ul>
        </div>
        <div class="seatSelect-gubun">
          <ul class="seatSelect-gubun-ul">
            <li>
              <div class="seat-gubun seat-able-select"></div>
              <div class="seat-gubun-name">선택</div>
            </li>
            <li>
              <div class="seat-gubun seat-selected"></div>
              <div class="seat-gubun-name">예매완료</div>
            </li>
            <li>
              <div class="seat-gubun seat-unable-select"></div>
              <div class="seat-gubun-name">선택불가</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="summary-wrap">
      <div class="summary-total">
        <div><span class="summary-total-name">총합계<span class="summary-amt">100,000</span>원</span></div>
      </div>
      <div class="summary-paymeny">결제하기</div>
      <div class="summary-paymeny-lpay-wrap"><span class="summary-paymeny-lpay-title">L.PAY</span><span class="summary-paymeny-lpay">결제하기</span></div>
    </div>  
  </div>
</template>

<script>
import seatData1 from '@/assets/data/seat_data2'; 
import { mapState } from 'vuex';
import movieData from '@/assets/data/movie_data';
import * as img from '@/assets/image/movie/index';


export default {
  name: 'reservationPage2',
  data() {
    return {
      seatData: seatData1,
      movieData,
      img
    };
  },
  computed: {
    ...mapState(['selectedShowtime']),
    movieShowDate() {
      if (this.selectedShowtime && this.selectedShowtime.showDay) {
        // YYYYMMDD 형식의 날짜를 YYYY-MM-DD로 변환
        const year = this.selectedShowtime.showDay.slice(0, 4);
        const month = this.selectedShowtime.showDay.slice(4, 6) - 1; // 월은 0부터 시작
        const day = this.selectedShowtime.showDay.slice(6, 8);
        const date = new Date(year, month, day); // 날짜 객체 생성
        const days = ['일', '월', '화', '수', '목', '금', '토'];
        const showdata = year.slice(0, 2) + '.' + month + '.' + day + '(' + days[date.getDay()] + ')';

        return showdata; // 요일 반환
      }
      return ''; // selectedShowtime이 없을 경우 빈 문자열 반환
    },
    movieShowImg() {
      if (this.selectedShowtime && this.selectedShowtime.movieNo) {
          const filteredMovies = this.movieData.filter(movie => movie.movieNo === this.selectedShowtime.movieNo);
          return filteredMovies;
      }
      return ''; // selectedShowtime이 없을 경우 빈 문자열 반환
    },
  },
  mounted() {
  },
  methods: {
    getImagePath(imageName) {
      return img[imageName];
    },
    ageColorObject(age) {
     if (age === 'ALL') {
       return { backgroundColor: 'rgb(11, 156, 49)' };
      } else if (age === '19') {
        return { backgroundColor: 'red' };
      } else if (age === '15') {
        return { backgroundColor: 'rgb(223, 141, 41)' };
      } else {
        return { backgroundColor: 'rgb(222, 233, 14)' }; // 기본값
      }
    },
  },
};
</script>

<style scoped>
.reservationPage2-wrap {
  width: 1242px;
  height: 920px;
}
.reservationPage2-title {
  width: 100%;
  height: 55px;
  background-color: black;
  position: relative;
}
.reservationPage2-title> h4 {
  margin: 0 auto;
  color: white;
  height: 55px;
  line-height: 55px;
}
.person-count-note {
  position: absolute;
  font-size: 14px;
  color: white;
  top: 35%;
  right: 40px;
}
.person-count-setect-wrap {
  display: flex;
  align-items: center;
  width: 100%;
  height: 117px;
  background-color: white;
}
.movie-info-wrap {
  display: flex;
  width: 324px;
  height: 95px;
  padding: 15px 15px;
}
.movie-info-wrap img {
  width: 46px;
  height: 65px;
  margin-right: 10px;
}
.movie-info {
  width: 279px;
  height: 60px;
}
.movie-info1 {
  display: flex;
}
.movie-info2 {
  display: flex;
}
.movie-info3 {
  display: flex;
}
.movie-info-age {
  width: 28px;
  height: 28px;
  line-height: 28px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin: 0px 5px;
  background-color: rgb(11, 156, 49);
  border: 1px solid #eee;
  border-radius: 5px;
  color: white;
}
.movie-info-title {
  font-size: 16px;
  font-weight: bold;
}
.movie-info-showGubun {
  font-size: 16px;
  font-weight: bold;
  margin-left: 5px;
}
.movie-info-showDate {
  font-size: 12px;
  text-align: left;
  width: 100px;
  margin-right: 10px;
}
.movie-info-showTime {
  font-size: 12px;
}
.movie-info-showRoom {
  font-size: 12px;
  margin-right: 10px;
}
.movie-info-lineGubun {
  font-size: 12px;

}
.person-count-setect-ul {
  display: flex;
  width: 825px;
  height: 40px;
  line-height: 40px;
  margin: 0;
  padding: 0;
}
.person-count-setect-ul> li {
  display: flex;
  width: 160px;
  height: 40px;
  margin: 0px 15px;
}
.select-count-wrap {
  display: flex;
  border: 1px solid #e6dede;
  border-radius: 7px;
}
.select-count-name {
  width: 50px;
  font-size: 14px;
  font-weight: bold;
  text-align: right;
  margin-right: 10px;
}
.select-minus {
  width: 30px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}
.select-count {
  width: 40px;
  font-size: 16px;
  font-weight: bold;
}
.select-plus {
  width: 30px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}
.handicap-note {
  width: 100%;
  height: 55px;
  line-height: 40px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  background-color: black;
  color: white;
}
.movie-screen-wrap {
  width: 100%;
  height: 633px;
  background-color: black;
}
.movie-screen {
  width: 95%;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  background-color: #807878;
  color: white;
  margin: 0 auto;
}
.seat-gubun-wrap {
  height: 60px;
  line-height: 60px;
  margin-left: 40px;
}
.seat-gubun-ul {
  display: flex;
  height: 25px;
  margin: 0;
  padding: 0;
}
.seat-gubun-ul> li {
  display: flex;
  align-items: center;
  margin: 0px 3px;
}
.seat-gubun {
  width: 11px;
  height: 8px;
  line-height: 8px;
  border-radius: 3px 3px 1px 0px;
  letter-spacing: -0.5px;
  box-sizing: border-box;
  margin-right: 3px;
}
.seat-gubun.seat1 {
  border: 0.5px solid red;
  background-color: white;
}
.seat-gubun.seat2 {
  background-color: white;
}
.seat-gubun.seat3 {
  background-color: rgb(5, 105, 38);
}
.seat-gubun.seat4 {
  background-color: rgb(5, 105, 38);
}
.seatSelect-gubun-ul {
  display: flex;
  height: 25px;
  margin: 0px 2px;
  padding: 0;
}
.seatSelect-gubun-ul> li {
  display: flex;
  align-items: center;
  margin-right: 3px;
}
.seat-able-select {
  background-color: red;
}
.seat-selected {
  background-color: rgb(85, 78, 78);
}
.seat-unable-select {
  background-color: rgb(85, 78, 78);
}
.seat-gubun-name {
  font-size: 10px;
  font-weight: bold;
  color: white;
}
.seat-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 540px;
  padding: 50px 0px;
  overflow: auto;

}
.row-seat {
  display: flex;
  margin: 2px 0px;
}
.row-number {
  margin-right: 10px;
  width: 21px;
  height: 16px;
  line-height: 16px;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  color: white
}
.seat {
  width: 21px;
  height: 16px;
  line-height: 16px;
  font-size: 10px;
  margin: 0 2px;
  background-color: white;
  color: black;
  border-radius: 7px 7px 2px 0px;
  letter-spacing: -0.5px;
  box-sizing: border-box;
}
.handicap {
  width: 21px;
  height: 16px;
  margin: 0 2px;
  font-size: 10px;
  background-color: rgb(85, 78, 78);
  color: white;
  border-radius: 7px 7px 2px 0px;
}
.aisle {
  width: 10px;
  height: 16px;
  margin: 0 2px;
  background-color: black;
  color: black;
}
.blank {
  width: 21px;
  height: 16px;
  margin: 0 2px;
  background-color: black;
  color: black;
}
.reserved {
  background-color: #f44336;
}
.summary-wrap {
  display: flex;
  height: 60px;
}
.summary-total {
  width: 890px;
  height: 60px;
  line-height: 60px;
  text-align: left;
  background-color: #807878;
}
.summary-total-name {
  margin: 0px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
}
.summary-amt {
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-left: 15px;
}
.summary-paymeny {
  width: 180px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: red;
  color: white;
}
.summary-paymeny-lpay-wrap {
  width: 180px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: white;
}
.summary-paymeny-lpay-title {
  font-size: 20px;
  font-weight: bold;
  color: rgb(49, 145, 235);
}
.summary-paymeny-lpay {
  font-size: 16px;
  font-weight: bold;
  color: black;
}
</style>
