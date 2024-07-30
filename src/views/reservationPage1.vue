<template>
  <div class="reservationPage1-wrap">
    <div class="reservationPage1-main">
      <!-- 영화관선택 시작 -->
      <div class="reservationPage1-cinema-wrap">
        <div class="reservationPage1-cinema-view">{{changePlace}}</div>
        <div class="reservationPage1-cinema-gubun">
          <div class="cinema-all">전체</div>
          <div class="cinema-special">스페셜관</div>
        </div>
        <div class="reservationPage1-cinema-place">
          <div class="reservationPage1-cinema">
            <ul class="reservationPage1-cinema-ul">
              <li v-for="(cinema, index) in cinemaView" :key="index" @click="toggleCheckCinema(index, cinema.menuNo)" :class="{ 'clicked-item': clickedCinemaIndex === index }" >
                <span class="reservationPage1-cinema-title">{{cinema.menuName}}<span class="reservationPage1-cinema-count">({{cinema.menuCount}})</span></span>
                <i v-if="clickedCinemaIndex === index" class="bi bi-check-lg"></i> 
              </li>
            </ul>
          </div>
          <div class="reservationPage1-place">
            <ul class="reservationPage1-place-ul">
              <li v-for="(place, index) in placeView" :key="index" @click="toggleCheckPlace(index, place.placeNo, place.placeName)">
                <span class="reservationPage1-place-title">{{place.placeName}}</span>
                <i v-if="clickedPlaceIndex === index" class="bi bi-check-lg"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 영화관선택 끝 -->
      <!-- 영화선택 시작 -->
      <div class="reservationPage1-movie-wrap">
        <div class="reservationPage1-movie-title">{{changeMovie}}</div>
        <div class="reservationPage1-movie-gubun">
          <div class="reservationPage1-movie-filter">
            <select title="영화 정렬 방법 선택">
              <option value="A">예매순</option>
              <option value="B">관객순</option>
              <option value="D">예정작</option>
            </select>
          </div>
          <div class="reservationPage1-movie-sort">
            <ul class="reservationPage1-movie-sort-ul">
              <li><i class="bi bi-list"></i></li>
              <li><i class="bi bi-grid-fill"></i></li>
            </ul>
          </div>
        </div>
        <div class="reservationPage1-movie-view">
          <ul class="reservationPage1-movie-view-ul">
            <li v-for="(movie, index) in movieView" :key="index" @click="toggleCheckMovie(index, movie.movieNo, movie.movieTitle)" :class="{ 'clicked-Movie': clickedMovieIndex === index }">
              <div class="reservationPage1-movie-view-age" :style="ageColorObject(movie.ageLimited)">{{movie.ageLimited}}</div>
              <div class="reservationPage1-movie-view-title">{{movie.movieTitle}}</div>
              <i v-if="clickedMovieIndex === index" class="bi bi-check-lg"></i>
            </li>
          </ul>
        </div>
      </div>
      <!-- 영화선택 끝 -->
      <!-- 영화시간 시작 -->
      <div class="reservationPage1-daytime-wrap">
        <div class="reservationPage1-day-title">{{changeDay}}</div>
        <div class="reservationPage1-day-title-wrap">
          <div class="reservationPage1-day-btn" @click="prevDay"><i class="bi bi-chevron-left"></i></div>
          <div class="reservationPage1-day-showdate-wrap">
            <ul class="reservationPage1-day-showdate-ul" :style="{ transform: `translateX(-${currentIndex * 416}px)`}">
              <li v-for="(showDay, index) in movieDayView" :key="index" @click="toggleCheckDay(index, showDay.viewDay, showDay.showDay)">
                <div class="day-title-month">{{showDay.month}}월</div>
                <div class="day-title-date" :class="{ 'clicked-Day': clickedDayIndex === index }">
                  <strong>{{showDay.date}}</strong>
                </div>
                <div class="day-title-day" :class="{ 'day-red-color': showDay.day === '일' || showDay.day === '오늘',
                                                     'day-blue-color': showDay.day === '토' }" >
                  {{showDay.day}}
                </div>
              </li>
            </ul>
          </div>
          <div class="reservationPage1-day-btn" @click="nextDay"><i class="bi bi-chevron-right"></i></div>
        </div>
        <div class="reservationPage1-showtime-menu-wrap">
          <ul class="reservationPage1-showtime-menu">
            <li>전체</li>
            <li>스페셜관</li>
            <li>Atmos</li>
            <li>13시 이후</li>
            <li>19시 이후</li>
            <li>심야</li>
          </ul>
        </div>
        <div class="reservationPage1-showtime-view">
          <!-- 영화시간표 시작 for -->
          <div class="reservationPage1-showtime-view-for" v-for="(movieTitle, index) in showTitleView" :key="index">
            <div class="reservationPage1-showtime-view-title-wrap">
              <div class="reservationPage1-showtime-view-age" :style="ageColorObject(movieTitle.ageLimited)">{{movieTitle.ageLimited}}</div>
              <div class="reservationPage1-showtime-view-title">{{movieTitle.movieTitle}}</div>
            </div>
            <!-- D2 등 영화구분 시작 for -->
            <div class="reservationPage1-showtime-view-gubun-for" v-for="(movieGubun, index) in showGubunView" :key="index">
              <div class="reservationPage1-showtime-view-gubun-wrap">
                <div class="reservationPage1-showtime-view-showGubun">{{movieGubun.showGubun}}</div>
                <div class="reservationPage1-showtime-view-linesGubun">{{movieGubun.linesGubun}}</div>
              </div>
              <ul class="reservationPage1-showtime-view-ul">
                <li v-for="(showtime, index) in showTimeView(movieGubun.showGubun, movieGubun.linesGubun)" :key="index" @click="toggleCheckTime(index, showtime)" :class="{ 'clicked-Movie': clickedMovieIndex === index }">
                  <div class="li-showTime">{{showtime.showTime}}</div>
                  <div class="li-showCount-wrap">
                    <div class="li-count-wrap">
                      <div class="li-reservationCount">{{showtime.reservationCount}}/</div>
                      <div class="li-capacityCount">{{showtime.capacityCount}}</div>
                    </div>
                    <div class="li-showRoom">{{showtime.showRoom}}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 영화시간 선택 끝 -->
    </div>
  </div>
</template>

<script>
import menuData from '@/assets/data/menu_data.js';
import placeData from '@/assets/data/place_data.js';
import placeMovieData from '@/assets/data/place_movie.js';
import movieShowData from '@/assets/data/movie_show_data.js';
import movieData from '@/assets/data/movie_data';
import * as img from '@/assets/image/movie/index';
import { mapMutations } from 'vuex';

export default {
  name: 'reservationPage1',
  data() {
    return {
      menuData,
      placeData,
      placeMovieData,
      movieShowData,
      movieData,
      img,
      clickedCinemaIndex: null,
      clickedPlaceIndex: null,
      clickedMovieIndex: null,
      clickedDayIndex: null,
      clickedTimeIndex: null,
      clickedCinema: null,
      clickedPlace: null,
      clickedMovie: null,
      clickedDay: null,
      clickedTime: null,
      changePlace: '영화관 선택',
      changeMovie: '영화 선택',
      changeDay: '일자 선택',
      movieDayView: [],
      currentIndex: 0,
      saveShowGubun: null,
      saveLinesGubun: null
    };
  },
  created() {
    this.generateDates();
  },
  computed: {
    cinemaView() {
      if (!this.menuData || !Array.isArray(this.menuData.cinemaMenu)) {
        return [];
      }
      const filteredMovies = this.menuData.cinemaMenu.filter(movie => movie.cinemaGUbun !== "2");
      return filteredMovies
        .sort((a, b) => a.menuNo - b.menuNo)
    },
    placeView() {
      const filteredMovies = this.placeData.filter(place => place.menuNo === this.clickedCinema);
      return filteredMovies
    },
    movieView() {
      const filteredMovies = this.placeMovieData.filter(movie => movie.menuNo === this.clickedCinema && movie.placeNo  === this.clickedPlace);
      return filteredMovies
    },
    showTitleView() {
      const filteredMovies = this.movieShowData.filter(show => show.menuNo === this.clickedCinema && 
                                                       show.placeNo  === this.clickedPlace &&
                                                       show.movieNo  === this.clickedMovie &&
                                                       show.showDay  === this.clickedDay
                                                       ).map(show => ({
                                                        menuNo: show.menuNo,
                                                        placeNo: show.placeNo,
                                                        movieNo: show.movieNo,
                                                        movieTitle: show.movieTitle,
                                                        ageLimited: show.ageLimited
                                                       }));
      const uniqueMovies = Array.from(new Set(filteredMovies.map(show => JSON.stringify(show))))
                          .map(item => JSON.parse(item));     
      return uniqueMovies
    },
    showGubunView() {
      const filteredMovies = this.movieShowData.filter(show => show.menuNo === this.clickedCinema && 
                                                       show.placeNo  === this.clickedPlace &&
                                                       show.movieNo  === this.clickedMovie &&
                                                       show.showDay  === this.clickedDay
                                                       ).map(show => ({
                                                        menuNo: show.menuNo,
                                                        placeNo: show.placeNo,
                                                        movieNo: show.movieNo,
                                                        showGubun: show.showGubun,
                                                        linesGubun: show.linesGubun
                                                       }));
      const uniqueMovies = Array.from(new Set(filteredMovies.map(show => JSON.stringify(show))))
                          .map(item => JSON.parse(item));     
      return uniqueMovies
    },
  },
  // 컴포넌트가 mount할때 실행 : 초기값 설정시 여기에 구현
  mounted() {
    if (this.cinemaView.length > 0) {
      this.toggleCheckCinema(1, this.cinemaView[1].menuNo);
    }
    if (this.placeView.length > 0) {
      this.toggleCheckPlace(0, this.placeView[0].placeNo, this.placeView[0].placeName);
    }
    if (this.movieView.length > 0) {
      this.toggleCheckMovie(0, this.movieView[0].movieNo, this.movieView[0].movieTitle);
    }
    if (this.movieDayView.length > 0) {
      this.toggleCheckDay(0, this.movieDayView[0].viewDay, this.movieDayView[0].showDay);
    }
  },
  methods: {
    ...mapMutations(['setSelectedShowtime']), 
    toggleCheckCinema(index, menuNo) {
      this.clickedCinemaIndex = index;
      this.clickedPlaceIndex = null;
      this.clickedMovieIndex = null;
      this.clickedCinema = menuNo;
    },
    toggleCheckPlace(index, placeNo, place) {
      this.clickedPlaceIndex = index;
      this.clickedMovieIndex = null;
      this.clickedPlace = placeNo;
      this.changePlace = place;
    },
    toggleCheckMovie(index, movieNo, movie) {
      this.clickedMovieIndex = index;
      this.clickedMovie = movieNo;
      this.changeMovie = movie;
    },
    toggleCheckDay(index, viewDay, showDay) {
      this.clickedDayIndex = index;
      this.clickedDay = showDay;
      this.changeDay = viewDay;
    },
    toggleCheckTime(index, showTime) {
      this.changeMovie = showTime.movieTitle;
      this.clickedTimeIndex = index;
      this.clickedTime = showTime.showTime;
      this.setSelectedShowtime(showTime);
      this.$emit('toggle', 1);
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
    generateDates() {
      const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
      const today = new Date();
      let todayCheck = null;

      for (let i = 0; i < 32; i++) {
          const currentDate = new Date();
          currentDate.setDate(today.getDate() + i);

          const year = currentDate.getFullYear();
          const month = currentDate.getMonth() + 1;
          const date = currentDate.getDate();
          let day = null;
          if (!todayCheck) {
            day = "오늘";
            todayCheck = "1";
          } else {
            day = daysOfWeek[currentDate.getDay()];
          }

          this.movieDayView.push({
            showDay: year + String(month).padStart(2, "0") + String(date).padStart(2, "0"),
            viewDay: year + '-' + String(month).padStart(2, "0") + '-' + String(date).padStart(2, "0") + '(' +  day + ')',
            month: month,
            date: date,
            day: day
          });
      }
    },
    nextDay () {
      if (this.currentIndex === 3) {
        this.currentIndex = 3;
      } else {
        this.currentIndex = this.currentIndex + 1;
      }
    },
    prevDay () {
      if (this.currentIndex === 0) {
        this.currentIndex = 0;
      } else {
        this.currentIndex = this.currentIndex - 1;
      }
    },
    showTimeView(showGubun, linesGubun) {
      const filteredMovies = this.movieShowData.filter(show => show.menuNo === this.clickedCinema && 
                                                       show.placeNo  === this.clickedPlace &&
                                                       show.movieNo  === this.clickedMovie &&
                                                       show.showDay  === this.clickedDay &&
                                                       show.showGubun  === showGubun &&
                                                       show.linesGubun  === linesGubun
                                                       );
      filteredMovies.sort((a, b) => (a.showTime > b.showTime) ? 1 : -1);

      return filteredMovies
    },
  }
};
</script>

<style scoped>
.reservationPage1-wrap {
  width: 100%;
} 
.reservationPage1-main {
  display: flex;
  width: 1242px;
  height: 920px;
  margin: 0 auto;
  background-color: white;
}
.reservationPage1-cinema-view {
  width: 390px;
  height: 55px;
  line-height: 55px;
  font-size: 18px;
  font-weight: bold;
  background-color: black;
  color: white;
}
.reservationPage1-cinema-gubun {
  display: flex;
  width: 390px;
  height: 55px;
  line-height: 55px;
  border: 1px solid #aaa;
}
.reservationPage1-cinema-gubun> div {
  width: 175px;
  height: 55px;
  line-height: 55px;
}
.reservationPage1-cinema-place {
  display: flex;
}
.reservationPage1-cinema {
  height: 810px;
  background-color: #eee;
}
.reservationPage1-cinema-ul {
  width: 175px;
  margin: 0;
  padding: 0;
}
.reservationPage1-cinema-ul> li {
  display: flex;
  width: 175px;
  height: 34px;
  line-height: 34px;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  padding: 0px 15px;
  color: rgb(57, 56, 56);
  cursor: pointer;
}
.reservationPage1-cinema-title {
  width: 140px;
  height: 34px;
  display: inline-block;
}
.reservationPage1-cinema-count {
  font-size: 10px;
  color: rgb(57, 56, 56);
}
.bi-check-lg {
  color: red;
  font-size: 1.3rem;
  font-weight: bold;
}
.reservationPage1-place {
  height: 810px;
}
.reservationPage1-place-ul {
  width: 215px;
  height: 810px;
  margin: 0;
  padding: 0;
  overflow: auto;
}
.reservationPage1-place-ul> li {
  display: inline-flex;
  width: 210px;
  height: 34px;
  line-height: 34px;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  padding: 0px 15px;
  color: rgb(57, 56, 56);
  cursor: pointer;
}
.reservationPage1-place-title {
  width: 160px;
  display: inline-block;
}
.clicked-item {
  background-color: white; /* 원하는 배경색으로 변경 */
}
.reservationPage1-movie-wrap {
  width: 350px;
}
.reservationPage1-movie-title {
  width: 355px;
  height: 55px;
  line-height: 55px;
  font-size: 18px;
  font-weight: bold;
  background-color: black;
  color: white;
}
.reservationPage1-movie-gubun {
  display: flex;
  align-items: center;
  width: 355px;
  height: 55px;
  line-height: 55px;
  border: 1px solid #aaa;
}
.reservationPage1-movie-filter {
  width: 200px;
  height: 30px;
  line-height: 30px;
  margin: 0px 55px 0px 20px;
}
.reservationPage1-movie-filter> select {
    height: 30px; /* 높이 조절 */
    width: 200px; /* 폭 조절 */
    font-size: 16px; /* 글자 크기 */
    border: 1px solid #ccc; /* 테두리 */
    border-radius: 5px; /* 모서리 둥글게 */
}
.reservationPage1-movie-filter> select option {
    background-color: #f0f0f0; /* 배경색 */
    color: #333; /* 글자색 */
    padding: 5px; /* 내부 여백 */
}
.reservationPage1-movie-sort-ul {
  display: flex;
  margin: 0;
  padding: 0;
}
.reservationPage1-movie-view-ul {
  width: 355px;
  height: 805px;
  margin: 0;
  padding: 0;
  overflow: auto;
}
.reservationPage1-movie-view-ul> li {
  display: flex;
  align-items: center;
  text-align: left;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  font-weight: bold;
}
.reservationPage1-movie-view-age {
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
.reservationPage1-movie-view-title {
  width: 300px;
}
.reservationPage1-movie-view {
  height: 810px;
}
.bi-list {
  font-size: 1.7rem;
  font-weight: bold;
  margin: 0px 10px;
}
.bi-grid-fill {
  font-size: 1.2rem;
  font-weight: bold;
}
.clicked-Movie {
  border: 2px solid black;
}
.reservationPage1-day-title-wrap {
  display: flex;
  width: 503px;
  height: 80px;
}
.reservationPage1-day-title {
  width: 503px;
  height: 55px;
  line-height: 55px;
  font-size: 18px;
  font-weight: bold;
  background-color: black;
  color: white;
}
.reservationPage1-day-btn {
  width: 55px;
  height: 80px;
  line-height: 80px;
  font-size: 1.5rem;
  color: #aaa;
  cursor: pointer;
}
.reservationPage1-day-showdate-wrap {
  width: 470px;
  height: 80px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.reservationPage1-day-showdate-ul {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  top: 15px;
} 
.reservationPage1-day-showdate-ul> li {
  width: 52px;
  height: 73px;
  line-height: 73px;
}
.day-title-month {
  font-size: 12px;
  width: 52px;
  height: 15px;
  line-height: 15px;
}
.day-title-date {
  font-size: 15px;
  font-weight: bold;
  width: 30px;
  height: 30px;
  line-height: 30px;
  margin: 0px 11.25px;
  text-align: center;
  background-color: white;
  color: black;
}
.clicked-Day {
  border-radius: 50%;
  background-color: black;
  color: white;
}
.day-title-day {
  font-size: 13px;
  width: 52px;
  height: 25px;
  line-height: 25px;
  text-align: center;
}
.day-red-color {
  color: red;
}
.day-blue-color {
  color: blue;
}
.reservationPage1-showtime-menu {
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 30px;
  margin: 0;
  padding: 0;
  height: 55px;
  line-height: 55px;
  border-bottom: 1px solid #aaa;
  cursor: pointer;
}
.reservationPage1-showtime-menu> li {
  font-size: 13px;
  font-weight: bold;
  color: #aaa;
}
.reservationPage1-showtime-view {
  width: 100%;
}
.reservationPage1-showtime-view-title-wrap {
  display: flex;
  align-content: center;
  margin: 10px;
}
.reservationPage1-showtime-view-age {
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
.reservationPage1-showtime-view-title {
  font-size: 16px;
  font-weight: bold;
  height: 28px;
  line-height: 28px;
}
.reservationPage1-showtime-view-gubun-wrap {
  display: flex;
  margin: 15px 10px 0px 20px;
}
.reservationPage1-showtime-view-showGubun, .reservationPage1-showtime-view-linesGubun {
  font-size: 12px;
  margin: 0px 5px;
}
.reservationPage1-showtime-view-ul {
  width: 455px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  margin: 0px auto;
  padding: 0;

}
.reservationPage1-showtime-view-ul> li {
  width: 100px;
  height: 50px;
  border: 1px solid #cfcccc;
  border-radius: 5px;
  cursor: pointer;
}
.li-count-wrap {
  display: flex;
}
.li-showTime {
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  height: 20px;
  line-height: 20px;
  margin-top: 5px;
}
.li-showCount-wrap {
  display: flex;
  height: 20px;
  line-height: 20px;
}
.li-count-wrap {
  display: flex;
  width: 60px;
  padding-left: 10px;
}
.li-reservationCount, .li-capacityCount {
  font-size: 10px;
}
.li-showRoom {
  font-size: 12px;
  width: 40px;
  padding-right: 10px;
  text-align: right;
}
</style>