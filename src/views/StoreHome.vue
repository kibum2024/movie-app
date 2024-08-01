<template>
  <div class="store-home-wrap">
    <div class="store-home-header" ref="titleImage"><img src="@/assets/image/main/store-title.jpg" alt="title img"></div>
    <div class="store-home-title-wrap" :class="{ sticky: isSticky }">
      <ul class="store-home-title-ul">
        <li><a href="#section1" @click.prevent="scrollToSection('section1')">베스트</a></li>
        <li><a href="#section2" @click.prevent="scrollToSection('section2')">포토카드</a></li>
        <li><a href="#section3" @click.prevent="scrollToSection('section3')">관람권</a></li>
        <li><a href="#section4" @click.prevent="scrollToSection('section4')">스낵음료</a></li>
      </ul>
    </div>
    <div class="store-home-play-wrap">
      <div class="store-home-play-sub-wrap">
        <div class="store-home-play-sub">
          <div id="section1" class="store-home-subTitle">베스트</div>
        </div>
        <div class="store-home-best-list">
          <ul class="store-home-best-ul">
            <li>
              <img src="@/assets/image/main/store-best01.jpg" alt="다음이동">
              <div class="store-home-list-title">일반 관람권</div>
              <div class="store-home-list-option">일반 관람권 1매</div>
              <div class="store-home-list-price"><strong>13,000원</strong></div>
            </li>
            <li>
              <img src="@/assets/image/main/store-best02.jpg" alt="다음이동">
              <div class="store-home-list-title">샤롯데 관람권</div>
              <div class="store-home-list-option">샤롯데관람권 1매</div>
              <div class="store-home-list-price"><strong>35,000원</strong></div>
            </li>
            <li>
              <img src="@/assets/image/main/store-best03.jpg" alt="다음이동">
              <div class="store-home-list-title">콜라 M</div>
              <div class="store-home-list-option">콜라 M</div>
              <div class="store-home-list-price"><strong>3,000원</strong></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="store-home-play-sub-wrap">
        <div class="store-home-play-sub">
          <div id="section2" class="store-home-subTitle">포토카드</div>
        </div>
        <div class="store-home-poto-list">
          <ul class="store-home-poto-ul">
            <li>
              <img src="@/assets/image/main/store-poto01.jpg" alt="다음이동">
              <div class="store-home-list-title">포토카드(일반)</div>
              <div class="store-home-list-option"></div>
              <div class="store-home-list-price"><strong>1,000원</strong></div>
            </li>
            <li>
              <img src="@/assets/image/main/store-poto02.png" alt="다음이동">
              <div class="store-home-list-title">로드 오브 히어로즈 마도대전 AR 포토카드</div>
              <div class="store-home-list-option">마도대전 포토카드는 랜덤으로 출력되며 카드 뒷면에 있는 QR코드를 통해 영웅들의 영상을 확인해 볼 수 있습니다.</div>
              <div class="store-home-list-price"><strong>3,000원</strong></div>
            </li>
            <li>
              <img src="@/assets/image/main/store-poto03.png" alt="다음이동">
              <div class="store-home-list-title">명탐정 코난 극장판 포토카드</div>
              <div class="store-home-list-option">카드 앞면은 명탐정 코난 극장판 포토카드 탬플릿 선택과 나만의 사진 추가, 뒷면은 원하는 문구를 입력할 수 있습니다.</div>
              <div class="store-home-list-price"><strong>3,000원</strong></div>
            </li>
            <li>
              <img src="@/assets/image/main/store-poto04.png" alt="다음이동">
              <div class="store-home-list-title">명탐정 코난 포토카드</div>
              <div class="store-home-list-option">카드 앞면은 명탐정 코난 포토카드 탬플릿 선택과 나만의 사진 추가, 뒷면은 원하는 문구를 입력할 수 있습니다.</div>
              <div class="store-home-list-price"><strong>3,000원</strong></div>
            </li>
            <li>
              <img src="@/assets/image/main/store-poto05.png" alt="다음이동">
              <div class="store-home-list-title">산리오캐릭터즈 (7~9월) 포토카드</div>
              <div class="store-home-list-option">카드 앞면은 산리오캐릭터즈 (7-9월)  포토카드 탬플릿 선택과 나만의 사진 추가, 뒷면은 원하는 문구를 입력할 수 있습니다.</div>
              <div class="store-home-list-price"><strong>3,000원</strong></div>
            </li>
            <li>
              <img src="@/assets/image/main/store-poto06.png" alt="다음이동">
              <div class="store-home-list-title">짱구는못말려(7~9월) 포토카드</div>
              <div class="store-home-list-option">카드 앞면은 짱구는못말려(7~9월) 포토카드 탬플릿 선택과 나만의 사진 추가, 뒷면은 원하는 문구를 입력할 수 있습니다.</div>
              <div class="store-home-list-price"><strong>3,000원</strong></div>
            </li>
            <li>
              <img src="@/assets/image/main/store-poto07.png" alt="다음이동">
              <div class="store-home-list-title">아뽀키 포토카드</div>
              <div class="store-home-list-option">카드 앞면은 아뽀키 포토카드 탬플릿 선택과 나만의 사진 추가, 뒷면은 원하는 문구를 입력할 수 있습니다.</div>
              <div class="store-home-list-price"><strong>3,000원</strong></div>
            </li>
            <li>
              <img src="@/assets/image/main/store-poto08.png" alt="다음이동">
              <div class="store-home-list-title">늑준 포토카드</div>
              <div class="store-home-list-option">카드 앞면은 늑준 포토카드 탬플릿 선택과 나만의 사진 추가, 뒷면은 원하는 문구를 입력할 수 있습니다.</div>
              <div class="store-home-list-price"><strong>3,000원</strong></div>
            </li>
            <li>
              <img src="@/assets/image/main/store-poto09.png" alt="다음이동">
              <div class="store-home-list-title">애타TV 포토카드</div>
              <div class="store-home-list-option">카드 앞면은 애타TV 포토카드 탬플릿 선택과 나만의 사진 추가, 뒷면은 원하는 문구를 입력할 수 있습니다.</div>
              <div class="store-home-list-price"><strong>3,000원</strong></div>
            </li>
            <li>
              <img src="@/assets/image/main/store-poto10.png" alt="다음이동">
              <div class="store-home-list-title">핑크버스 포토카드</div>
              <div class="store-home-list-option">카드 앞면은 핑크버스 포토카드 탬플릿 선택과 나만의 사진 추가, 뒷면은 원하는 문구를 입력할 수 있습니다.</div>
              <div class="store-home-list-price"><strong>3,000원</strong></div>
            </li>
          </ul>
        </div>
      </div> 
      <div class="store-home-play-sub-wrap">
        <div class="store-home-play-sub">
          <div id="section3" class="store-home-subTitle">관람권</div>
        </div>
        <div class="store-home-preview-list">
          <ul class="store-home-preview-ul">
            <li>
              <img src="@/assets/image/main/store-view-card01.jpg" alt="다음이동">
              <div class="store-home-list-title">일반 관람권</div>
              <div class="store-home-list-option">일반 관람권 1매</div>
              <div class="store-home-list-price"><strong>13,000원</strong></div>
            </li>
            <li>
              <img src="@/assets/image/main/store-view-card02.jpg" alt="다음이동">
              <div class="store-home-list-title">샤롯데 관람권</div>
              <div class="store-home-list-option">샤롯데관람권 1매</div>
              <div class="store-home-list-price"><strong>35,000원</strong></div>
            </li>
          </ul>
        </div>
      </div> 
      <div class="store-home-play-sub-wrap">
        <div class="store-home-play-sub">
          <div id="section4" class="store-home-subTitle">스낵음료</div>
        </div>
        <div class="store-home-snack-list">
          <ul class="store-home-snack-ul">
            <li>
              <img src="@/assets/image/main/store-snack01.jpg" alt="다음이동">
              <div class="store-home-list-title">스위트콤보</div>
              <div class="store-home-list-option">오리지널L + 탄산음료M2</div>
              <div class="store-home-list-price"><strong>11,000원</strong></div>
            </li>
            <li>
              <img src="@/assets/image/main/store-snack02.jpg" alt="다음이동">
              <div class="store-home-list-title">더블콤보</div>
              <div class="store-home-list-option">오리지널팝콘M2+탄산음료M2</div>
              <div class="store-home-list-price"><strong>15,000원</strong></div>
            </li>
            <li>
              <img src="@/assets/image/main/store-snack03.jpg" alt="다음이동">
              <div class="store-home-list-title">콜라 M</div>
              <div class="store-home-list-option">콜라 M</div>
              <div class="store-home-list-price"><strong>3,000원</strong></div>
            </li>
            <li>
              <img src="@/assets/image/main/store-snack04.jpg" alt="다음이동">
              <div class="store-home-list-title">콜라 L</div>
              <div class="store-home-list-option">콜라 L</div>
              <div class="store-home-list-price"><strong>3,500원</strong></div>
            </li>
            <li>
              <img src="@/assets/image/main/store-snack05.jpg" alt="다음이동">
              <div class="store-home-list-title">사이다 M</div>
              <div class="store-home-list-option">사이다 M</div>
              <div class="store-home-list-price"><strong>3,000원</strong></div>
            </li>
            <li>
              <img src="@/assets/image/main/store-snack06.jpg" alt="다음이동">
              <div class="store-home-list-title">사이다 L</div>
              <div class="store-home-list-option">사이다 L</div>
              <div class="store-home-list-price"><strong>3,500원</strong></div>
            </li>
            <li>
              <img src="@/assets/image/main/store-snack07.jpg" alt="다음이동">
              <div class="store-home-list-title">반반팝콘(오리지널/카라멜) L</div>
              <div class="store-home-list-option">반반팝콘(오리지널/카라멜) L</div>
              <div class="store-home-list-price"><strong>7,000원</strong></div>
            </li>
            <li>
              <img src="@/assets/image/main/store-snack08.jpg" alt="다음이동">
              <div class="store-home-list-title">오리지널팝콘L</div>
              <div class="store-home-list-option">오리지널팝콘L</div>
              <div class="store-home-list-price"><strong>6,000원</strong></div>
            </li>
            <li>
              <img src="@/assets/image/main/store-snack09.jpg" alt="다음이동">
              <div class="store-home-list-title">오리지널팝콘 M</div>
              <div class="store-home-list-option">오리지널팝콘 M</div>
              <div class="store-home-list-price"><strong>5,000원</strong></div>
            </li>
            <li>
              <img src="@/assets/image/main/store-snack10.jpg" alt="다음이동">
              <div class="store-home-list-title">카라멜팝콘 M</div>
              <div class="store-home-list-option">카라멜팝콘 M</div>
              <div class="store-home-list-price"><strong>6,000원</strong></div>
            </li>
            <li>
              <img src="@/assets/image/main/store-snack11.jpg" alt="다음이동">
              <div class="store-home-list-title">카라멜팝콘 L</div>
              <div class="store-home-list-option">카라멜팝콘 L</div>
              <div class="store-home-list-price"><strong>7,000원</strong></div>
            </li>
          </ul>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoreHome',
  components: {
  },
  data() {
    return {
      isSticky: false,
      threshold: 0
    };
  },
  mounted() {
    this.threshold = this.$refs.titleImage.clientHeight;
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed: {
  },
  methods: {
    handleScroll() {
      this.isSticky = window.scrollY >= this.threshold;
    },
    scrollToSection(id) {
      const section = document.getElementById(id);
      
      if (!section) {
          console.error(`Section with id ${id} not found`);
          return;
      }

      // header가 존재하는지 확인
      const header = this.$refs.header;
      const headerHeight = header ? header.clientHeight : 0; // header가 없으면 0으로 설정

      window.scrollTo({
          top: section.offsetTop - headerHeight - 120,
          behavior: 'smooth'
      });
    }
  }
};
</script>

<style scoped>
.store-home-wrap {
  width: 100%;
}
.store-home-header {
  width: 100%;
  height: 300px; /* 예시 높이, 필요에 따라 조정 */
  line-height: 300px; /* 예시 높이와 일치 */
}
.store-home-play-sub-wrap {
  width: 100%;
  height: auto;
  margin-bottom: 30px;
}
.store-home-title-wrap {
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(219, 213, 213);
  background-color: white;
  margin: 0px auto 30px;
  transition: all 0.3s ease;
}
.store-home-title-wrap.sticky  {
  position: fixed;
  top: 40px;
  background-color: white;
  z-index: 100;
}
.store-home-title-ul {
  width: 980px;
  display: flex;
  margin: 0 auto;
  padding: 0;
}
.store-home-title-ul> li {
  width: 25%;
  font-size: 18px;
  font-weight: bold;
  color: #aaa;
  cursor: pointer;
}
.store-home-title-ul> li:hover {
  border-bottom: 2px solid black;
}
.store-home-subTitle {
  font-size: 16px;
  font-weight: bold;
  text-align: left;
}
.store-home-play-wrap {
  width: 980px;
  margin: 50px auto;
}
.store-home-play-sub {
  display: flex;
  justify-content: space-between;
  align-items: flex-end; 
}  
.store-home-best-ul {
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
}
.store-home-best-ul> li> img {
  width: 310px;
  height: 250px;
  border-radius: 5px;
}
.store-home-poto-ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin: 0;
  padding: 0;
}
.store-home-poto-ul> li> img {
  width: 310px;
  height: 250px;
  border-radius: 5px;
  margin-top: 20px;
}
.store-home-preview-ul {
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
}
.store-home-preview-ul> li> img {
  width: 310px;
  height: 250px;
  border-radius: 5px;
}
.store-home-snack-ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin: 0;
  padding: 0;
}
.store-home-snack-ul> li> img {
  width: 314px;
  height: 184px;
  border-radius: 5px;
  margin-top: 20px;
}
.store-home-list-title {
  width: 310px;
  height: 18px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 5px 0px;
}
.store-home-list-option {
  width: 310px;
  height: 33px;
  font-size: 12px;
  text-align: center;
  color: #aaa;
  margin: 10px 0px;
  overflow: hidden; 
  text-overflow: ellipsis;
}
.store-home-list-price {
  width: 310px;
  height: 22px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 5px 0px;
}
</style>