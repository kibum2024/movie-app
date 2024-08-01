<template>
  <div class="main-menu-wrap">
    <div class="main-menu-top" ref="mainMenuTop">
      <div class="main-menu-gnb">
        <ul class="main-menu1">
            <li><i class="bi bi-facebook"></i><a href="https://www.facebook.com/LotteCinema.kr" target="_blank" title="롯데시네마 페이스북 새창열림">페이스북</a></li>
            <li><i class="bi bi-youtube"></i><a href="https://www.youtube.com/channel/UCi4KivcV3a3yhkycFsjpalQ" target="_blank" title="롯데시네마 유튜브 새창열림">유튜브</a></li>
            <li><i class="bi bi-instagram"></i><a href="https://www.instagram.com/lottecinema_official/" target="_blank" title="롯데시네마 인스타그램 새창열림">인스타그램</a></li>
        </ul>
        <div class="main-logo-wrap">
          <router-link to="/" @click="mainMenuClick('mainhome')"><div class="main-logo" :style="logColorObject"><img :src="mainLog" alt="main Log">LOTTE CINEMA</div></router-link>
        </div>
        <ul class="main-menu2"> 
            <li><router-link to="/">멤버십</router-link></li>
            <li><router-link to="/">고객센터</router-link></li>
            <li><router-link to="/">단체관람/대관문의</router-link></li>
            <li><router-link to="/">로그인</router-link></li>
        </ul>
      </div>  
    </div>
    <div class="main-menu-bottom" :class="{ sticky: isSticky }">
      <div class="main-menu-bottom-inner">
        <ul class="main-dropdown-menu">
          <li class="main-sub-menu" @mouseover="showSubMenu('reservationMenu')" @mouseleave="mouseleaveMenu">
            <router-link to="/reservationHome" @click="mainMenuClick('reservationHome')">예매</router-link>
          </li>
          <li class="main-sub-menu" @mouseover="showSubMenu('MovieMenu')" @mouseleave="mouseleaveMenu">
            <router-link to="/MovieHome" @click="mainMenuClick('MovieHome')">영화</router-link>
          </li>
          <li class="main-sub-menu" @mouseover="showSubMenu('cinemaMenu')" @mouseleave="mouseleaveMenu">
            <router-link to="/cinemaHome" @click="mainMenuClick('cinemaHome')">영화관</router-link>
          </li>
          <li class="main-sub-menu" @mouseover="showSubMenu('eventMenu')" @mouseleave="mouseleaveMenu">
            <router-link to="/eventHome" @click="mainMenuClick('eventHome')">이벤트</router-link>
          </li>
          <li class="main-sub-menu" @mouseover="showSubMenu('storeMenu')" @mouseleave="mouseleaveMenu">
            <router-link to="/storeHome" @click="mainMenuClick('storeHome')">스토어</router-link>
          </li>
        </ul>
        <ul class="main-menu3">
          <li><router-link to="/">회원가입</router-link></li>
          <li><router-link to="/">바로 예매</router-link></li>
          <li><router-link to="/"><i class="bi bi-list"></i></router-link></li>
        </ul>
      </div>  
      <div v-if="activeMenu" class="main-submenu" @mouseover="keepSubMenu" @mouseleave="hideSubMenu">
        <ul class="main-submenu-ul">
          <li v-for="(submenu, index) in getActiveMenuItems" :key="index" @mouseover="showSubMenuSub(submenu)" @mouseleave="mouseleaveMenu">
            <router-link :to="getSubmenuRoute(submenu)" @click.stop="submenuClick(submenu)">{{ submenu.menuName }}</router-link>
          </li>
        </ul>
        <div v-if="activeMenuSub" class="main-submenu-sub" @mouseover="keepSubMenu" @mouseleave="hideSubMenuSub">
          <ul class="main-submenu-sub-ul">
            <li v-for="(submenuSub, index) in getActiveSubMenuItems" :key="index">
              <router-link :to="getSubmenuRoute(submenuSub)" @click.stop="submenuClick(submenuSub)">{{ submenuSub.placeName }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>  
  </div>

</template>

<script>
import mainLog from '@/assets/image/main/main_log.png';
import menuData from '@/assets/data/menu_data.js';

export default {
  name: 'MainMenu',
  data() {
    return {
      mainLog,
      activeMenu: null,
      activeMenuSub: null,
      activeMenuNo: null,
      menuData,
      selectedSubmenu: null,
      logColor: '1',
      isSticky: false,
      threshold: 0
    };
  },
  mounted() {
    // this.threshold = this.$refs.mainMenuTop.clientHeight; 
    this.threshold = 151; 
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed: {
    getActiveMenuItems() {
      // menuData가 존재하고 activeMenu가 올바르게 설정된 경우 서브메뉴 항목 반환
      return this.menuData && this.menuData[this.activeMenu] ? this.menuData[this.activeMenu] : [];
    },
    getActiveSubMenuItems() {
      // console.log("this.menuData[this.activeMenuSub] :", this.menuData[this.activeMenuSub]);
      console.log("activeMenuSub aaaa :", this.activeMenuSub);
      if (!this.activeMenuSub) {
        return [];
      }
      if (!this.menuData[this.activeMenuSub]) {
        return [];
      }
      const filteredMovies = this.menuData[this.activeMenuSub].filter(menu => menu.menuNo === this.activeMenuNo);
      return filteredMovies
    },
    logColorObject() {
      return {
        color: this.logColor === '1' ? 'white' : 'red'
      };
    }
  },
  methods: {
    showSubMenu(menu) {
      this.activeMenu = menu;
    },
    hideSubMenu() {
      this.activeMenu = null;
      this.activeMenuSub = null;
      this.activeMenuNo = null;
    },
    keepSubMenu() {
      // 이 메서드는 서브메뉴가 유지되도록 빈 상태로 두거나 필요하면 로직을 추가
    },
    showSubMenuSub(menu) {
      if (menu.menuNo.slice(0, 2) === '03') {
        this.activeMenuSub = 'cinemaPlace';
        this.activeMenuNo = menu.menuNo;
      }      
    },
    hideSubMenuSub() {
      this.activeMenuSub = null;
      this.activeMenuNo = null;
    },
    submenuClick(submenu) {
      this.selectedSubmenu = submenu;
      // 여기에 추가로 클릭된 서브메뉴 항목에 대한 처리 로직을 추가합니다.
      // 예를 들어, 다른 페이지로 이동하거나 관련 작업을 수행할 수 있습니다.
    },
    mouseleaveMenu() {
      // 이 메서드는 서브메뉴가 사라지지 않도록 빈 상태로 두거나 필요하면 로직을 추가
    },
    setActiveContent(menu) {
      this.activeContent = menu; // 클릭한 메뉴의 컨텐츠를 설정
    },
    mainMenuClick(menu) {
      this.activeMenu = menu;
      if (menu === 'mainhome') {
        this.logColor = '1';
      }
      else {
        this.logColor = '2';
      }  
    },
    getSubmenuRoute(submenu) {
      return `${submenu.menuRouter}`;
    },
    handleScroll() {
      this.isSticky = window.scrollY >= this.threshold;
    }
  },
};
</script>

<style scoped>
.main-menu-wrap {
  position: relative;
  width: 100%;
  margin: 0 auto;
  z-index: 10;
}
.main-menu-top {
  width: 100%;
}
.main-menu-gnb {
  display: flex;
  justify-content: space-between;
  width: 980px;
  height: 71px;
  align-items: flex-end;
  margin: 0 auto;
  border-bottom: 1px solid #aaa;
}
.main-logo-wrap {
  display: flex;
  height: 70px;
  line-height: 70px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.main-logo {
  font-size: 30px;
  font-weight: bold;
}
.main-logo> img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.main-menu1 {
  display: flex;
  width: auto;
  height: 14px;
  padding: 0;
}
.main-menu1> li {
  margin: 0px 7px;
  font-size: 12px;
  font-weight: bold;
  color: #aaa;
  cursor: pointer;
}
.main-menu1> li> i {
  margin: 0px 4px;
}
.main-menu2 {
  display: flex;
  width: auto;
  height: 14px;
  padding: 0;
}
.main-menu2> li {
  margin: 0px 7px;
  font-size: 12px;
  font-weight: bold;
  color: #aaa;
  cursor: pointer;
}
.main-menu-bottom {
  width: 100%;
  transition: all 0.3s ease;
}
.main-menu-bottom.sticky {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  background-color: white;
  color: black;
}
.main-menu-bottom.sticky .main-submenu {
  position: absolute;
  width: 100%;
  height: 30px;
  line-height: 30px;
  top: 100%; /* 상단 메뉴 바로 아래에 위치 */
  left: 0;
  z-index: 20;
  box-sizing: border-box;
  background-color: black;
  color: white;
  cursor: pointer;
}
.main-menu-bottom-inner {
  position: relative;
  width: 980px;
  height: 40px;
  line-height: 40px;
  display: inline-flex;
  align-items: center;
}
.main-menu3 {
  display: flex;
  position: absolute;
  top: 0px;
  right: 0px;
  width: auto;
  height: 40px;
  padding: 0;
  margin: 0px 0px 0px 35px;
}
.main-menu3> li {
  margin: 0px 7px;
  font-size: 12px;
  font-weight: bold;
  color: white;
  cursor: pointer;
}
.main-dropdown-menu {
  position: absolute;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 400px;
  height: 40px;
  line-height: 40px;
  left: 267px;
  top: 2px;
  padding: 0;
  margin: 0;
}
.main-dropdown-menu> li {
  position: relative;
  padding: 3px 15px;
  width: 80px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: white;
  cursor: pointer;
}
.main-dropdown-menu> li:hover {
  border-bottom: 2px solid red;
}
.main-dropdown-menu> li:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0px; /* 선의 위치를 조정 */
  top: 60%;
  transform: translateY(-50%);
  height: 30%; /* 선의 길이 조정 */
  font-weight: bold;
  border-right: 1px solid #aaa; /* 선의 스타일 */
}

.main-dropdown-menu> li:router-link {
  text-decoration: none;
  color: inherit;
  display: inline-block;
  padding-right: 15px;
}
 .main-submenu {
  position: absolute; /* 상위 메뉴 항목에 상대적으로 위치 */
  width: 100%; /* 상위 메뉴 항목의 너비를 기준으로 설정 */
  height: 30px;
  line-height: 30px;
  top: 100%; /* 메뉴 항목 바로 아래에 서브메뉴 위치 */
  left: 0;
  z-index: 20; /* 다른 요소들 위에 표시되도록 설정 */
  box-sizing: border-box; /* 패딩과 테두리를 포함하여 계산 */
  background-color: black;
  cursor: pointer;
}
.main-submenu-ul {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
.main-submenu-ul> li {
  color: #aaa;
  font-size: 12px;
  font-weight: bold;
  margin: 0px 10px;
}
 .main-submenu-sub {
  position: absolute; /* 상위 메뉴 항목에 상대적으로 위치 */
  width: 100%; /* 상위 메뉴 항목의 너비를 기준으로 설정 */
  height: auto;
  top: 100%; /* 메뉴 항목 바로 아래에 서브메뉴 위치 */
  left: 0;
  z-index: 30; /* 다른 요소들 위에 표시되도록 설정 */
  box-sizing: border-box; /* 패딩과 테두리를 포함하여 계산 */
  background-color: rgb(61, 58, 58);
  cursor: pointer;
}
.main-submenu-sub-ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 1000px;
  list-style: none;
  margin: 0 auto;
  padding: 0;
}
.main-submenu-sub-ul> li {
  color: #aaa;
  font-size: 12px;
  font-weight: bold;
  margin: 0px 10px;
}
</style>