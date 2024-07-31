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
              <div class="select-minus" @click="grownUpDecrease"><i class="bi bi-dash-lg"></i></div>
              <div class="select-count">{{grownUpCount}}</div>
              <div class="select-plus" @click="grownUpIncrease"><i class="bi bi-plus-lg"></i></div>
            </div>
          </li>
          <li v-if="selectedShowtime.ageLimited !== '19'">
            <div class="select-count-name">청소년</div>
            <div class="select-count-wrap">
              <div class="select-minus" @click="teenagerDecrease"><i class="bi bi-dash-lg"></i></div>
              <div class="select-count">{{teenagerCount}}</div>
              <div class="select-plus" @click="teenagerIncrease"><i class="bi bi-plus-lg"></i></div>
            </div>
          </li>
          <li>
            <div class="select-count-name">경로</div>
            <div class="select-count-wrap">
              <div class="select-minus" @click="oldNameDecrease"><i class="bi bi-dash-lg"></i></div>
              <div class="select-count">{{oldManCount}}</div>
              <div class="select-plus" @click="oldNameIncrease"><i class="bi bi-plus-lg"></i></div>
            </div>
          </li>
          <li>
            <div class="select-count-name">장애인</div>
            <div class="select-count-wrap">
              <div class="select-minus" @click="handicapDecrease"><i class="bi bi-dash-lg"></i></div>
              <div class="select-count">{{hanicapCount}}</div>
              <div class="select-plus" @click="handicapIncrease"><i class="bi bi-plus-lg"></i></div>
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
            :class="[seat.type, { 'reserved': seat.reserved === 'true', 
                                  'selected': seat.selected === 'true', 
                                  'no-select': isNoSelect(seat) }]" 
            @click="seatClick(row.row_number, seat.seat_number, seat)"
          >
            {{ seat.seat_number }}
          </div>
            <!-- @click="!isNoSelect(seat) && selectSeat(row.row_number, seat.seat_number)" -->
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
        <div><span class="summary-total-name">총합계<span class="summary-amt">{{totalAmt.toLocaleString()}}</span>원</span></div>
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
      img,
      grownUpCount: 0,
      teenagerCount: 0,
      oldManCount: 0,
      hanicapCount: 0,
      selectedCount: 0,
      maxSelectCount: 0,
      totalAmt: 0
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
    maxCountCheck(gaeGubun) {
      if (this.maxSelectCount > 8) {
        if (gaeGubun === 'grownUp') {
          this.grownUpCount -= 1;
        } else if (gaeGubun === 'teenager') {
          this.teenagerCount -= 1;
        } else if (gaeGubun === 'oldMan') {
          this.oldManCount -= 1;
        } else if (gaeGubun === 'hanicap') {
          this.hanicapCount -= 1;
        } 
        this.maxSelectCount -= 1;
        alert("인원은 최대 8명까지 선택 가능합니다.");
      }
    },
    grownUpIncrease() {
      if (this.grownUpCount < 8) {
        this.grownUpCount += 1;
        this.maxSelectCount += 1;
        this.maxCountCheck('grownUp');
      }
    },
    grownUpDecrease() {
      if (this.grownUpCount > 0) {
        this.grownUpCount -= 1;
        this.maxSelectCount -= 1;
      }
    },
    teenagerIncrease() {
      if (this.teenagerCount < 8) {
        this.teenagerCount += 1;
        this.maxSelectCount += 1;
        this.maxCountCheck('teenager');
      }
    },
    teenagerDecrease() {
      if (this.teenagerCount > 0) {
        this.teenagerCount -= 1;
        this.maxSelectCount -= 1;
      }
    },
    oldNameIncrease() {
      if (this.oldManCount < 8) {
        this.oldManCount += 1;
        this.maxSelectCount += 1;
        this.maxCountCheck('oldMan');
      }
    },
    oldNameDecrease() {
      if (this.oldManCount > 0) {
        this.oldManCount -= 1;
        this.maxSelectCount -= 1;
      }
    },
    handicapIncrease() {
      if (this.hanicapCount < 8) {
        this.hanicapCount += 1;
        this.maxSelectCount += 1;
        this.maxCountCheck('hanicap');
      }
    },
    handicapDecrease() {
      if (this.hanicapCount > 0) {
        this.hanicapCount -= 1;
        this.maxSelectCount -= 1;
      }
    },
    isNoSelect(seat) {
      return (this.maxSelectCount === this.selectedCount && seat.reserved === 'false' && this.maxSelectCount > 0 && seat.type !== 'aisle' && seat.type !== 'blank') || (seat.selected === 'true') || seat.type === 'handicap' && this.hanicapCount === 0;
    },
    seatClick(rowNumber, seatNumber, seat) {
      if (this.isNoSelect(seat)) {
        return; // 클릭 무시
      }
      this.selectSeat(rowNumber, seatNumber);
    },
    selectSeat(rowNumber, seatNumber) {
      if (this.grownUpCount === 0 && this.teenagerCount === 0  && this.oldManCount === 0  && this.hanicapCount === 0) {
        alert("인원을 선택해 주십시오.");
      } else { 
              this.seatData.rows.forEach(row => {
                if (row.row_number === rowNumber) {
                  row.seats.forEach(seat => {
                    if (seat.seat_number === seatNumber) {
                      if (seat.reserved === 'true') {
                        seat.reserved = 'false';
                        this.selectedCount -= 1;
                      } else {
                        seat.reserved = 'true';
                        this.selectedCount += 1;
                      }
                    }
                  });
                }
              });
              if (this.maxSelectCount === this.selectedCount) {
                this.summaryAmt();
              }
      }
    },
    summaryAmt() {
      this.totalAmt = (this.grownUpCount * 13000) + (this.teenagerCount  * 12000) + (this.oldManCount * 7000) + (this.hanicapCount * 5000);
    }
  }
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
.row-col-number {
  display: flex;
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
  cursor: pointer;
}
.handicap {
  width: 21px;
  height: 16px;
  margin: 0 2px;
  font-size: 10px;
  background-color: rgb(93, 187, 84);
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
.no-select {
  background-color: #03778b;
  /* background: #e8e8e8 url('seat_no_select.png') no-repeat center center; */
  background-size: 28px 21px;
  opacity: 0.5;
  font-size: 0px;
  cursor: not-allowed;
}
.reserved {
  background-color: #f44336;
  border: 1px solid #f44336;
  color: white;
  cursor: pointer;
}
.selected {
  background-color: green; /* 선택된 좌석 색상 */
}
.selected.no-select {
  background-color: #838885;
  font-size: 10px;
  color: white;
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
