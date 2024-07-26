// src/menuData.js
const menuData = {
    reservationMenu: [
                        {menuName:"예매하기", menuRouter: "/reservationHome"}, 
                        {menuName:"상영시간표", menuRouter: "/reservationHome/timeSchedule"}, 
                        {menuName:"할인안내", menuRouter: "/reservationHome/discountGuide"}, 
                     ],
    MovieMenu: [
                {menuName:"홈", menuRouter: "/MovieHome"}, 
                {menuName:"현재상영작", menuRouter: "/MovieHome/seeMovie"}, 
                {menuName:"상영예정작", menuRouter: "/MovieHome/wantMovie"}, 
                {menuName:"아르떼", menuRouter: "/MovieHome/arteMovie"}, 
               ],
    cinemaMenu: [
                {menuName:"스페셜관", menuRouter: "/cinemaHome"}, 
                {menuName:"서울", menuRouter: "/cinemaHome/seeMovie"}, 
                {menuName:"경기/인천", menuRouter: "/cinemaHome/wantMovie"}, 
                {menuName:"충청/대전", menuRouter: "/cinemaHome/arteMovie"}, 
                {menuName:"전라/광주", menuRouter: "/cinemaHome/arteMovie"}, 
                {menuName:"경북/대구", menuRouter: "/cinemaHome/arteMovie"}, 
                {menuName:"경남/부산/울산", menuRouter: "/cinemaHome/arteMovie"}, 
                {menuName:"강원", menuRouter: "/cinemaHome/arteMovie"}, 
                {menuName:"제주", menuRouter: "/cinemaHome/arteMovie"}, 
               ],
    eventMenu: [
                {menuName:"홈", menuRouter: "/eventHome"}, 
                {menuName:"영화", menuRouter: "/eventHome/seeMovie"}, 
                {menuName:"시사회/무대인사", menuRouter: "/eventHome/wantMovie"}, 
                {menuName:"제휴할인", menuRouter: "/eventHome/arteMovie"}, 
                {menuName:"우리동네영화관", menuRouter: "/eventHome/arteMovie"}, 
       ],
    storeMenu: [
                {menuName:"베스트", menuRouter: "/storeHome"}, 
                {menuName:"관람권", menuRouter: "/storeHome/seeMovie"}, 
                {menuName:"스낵음료", menuRouter: "/storeHome/wantMovie"}, 
                {menuName:"포토카드", menuRouter: "/storeHome/arteMovie"}, 
       ],
  };
  
  export default menuData;
  