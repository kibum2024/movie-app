<template>
  <div class="main-event-wrap">
    <div class="main-event-title">이벤트</div>
    <div class="main-event">
      <ul class="main-event-ul">
        <li class="event-image1"><img :src="mainEvent01" alt="이벤트화면이동"></li>
        <li class="event-image2"><img :src="mainEvent02" alt="이벤트화면이동"></li>
        <li class="event-image3"><img :src="mainEvent03" alt="이벤트화면이동"></li>
        <li class="event-image4"><img :src="mainEvent04" alt="이벤트화면이동"></li>
        <li class="event-image5"><img :src="mainEvent05" alt="이벤트화면이동"></li>
        <li class="event-image6"><img :src="mainEvent06" alt="이벤트화면이동"></li>
      </ul>
    </div>
    <div class="main-preview-title">시사회/무대인사</div>
      <ul class="main-preview-ul">
        <li class="preview-image1"><img :src="previewEvent01" alt="이벤트화면이동"></li>
        <li class="preview-image2"><img :src="previewEvent02" alt="이벤트화면이동"></li>
        <li class="preview-image3"><img :src="previewEvent03" alt="이벤트화면이동"></li>
      </ul>
  </div>
</template>

<script>
  import mainEvent01 from '@/assets/image/main/main-event01.jpg';
  import mainEvent02 from '@/assets/image/main/main-event02.jpg';
  import mainEvent03 from '@/assets/image/main/main-event03.jpg';
  import mainEvent04 from '@/assets/image/main/main-event04.jpg';
  import mainEvent05 from '@/assets/image/main/main-event05.jpg';
  import mainEvent06 from '@/assets/image/main/main-event06.jpg';
  import previewEvent01 from '@/assets/image/main/preview-event01.jpg';
  import previewEvent02 from '@/assets/image/main/preview-event02.jpg';
  import previewEvent03 from '@/assets/image/main/preview-event03.jpg';

export default {
  name: 'MainEvent',
  data() {
    return {
      mainEvent01,
      mainEvent02,
      mainEvent03,
      mainEvent04,
      mainEvent05,
      mainEvent06,
      previewEvent01,
      previewEvent02,
      previewEvent03,
    };
  },
  methods: {
    
  }
};
</script>

<style scoped>
.main-event-wrap {
  width: 100%;
  margin-top: 800px;
}
.main-event-title {
  width: 991px;
  height: 25px;
  line-height: 25px;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  margin: 0px auto;
  padding-left: 10px;
}
.main-event-ul {
  width: 991px;
  height: 511px;
  width: calc(183px + 183px + 286px + 295px + 45px);
  display: grid;
  grid-template-columns: 183px 183px 286px 295px;
  grid-template-rows: 250px 250px;
  gap: 15px;
  margin: 0 auto;
  padding: 0;
}  
.main-event-ul> li> img {
  border-radius: 5px;
}
.event-image1 {
  grid-column: 1 / 2; 
  grid-row: 1 / 2;
}
.event-image2 {
  grid-column: 2 / 3; 
  grid-row: 1 / 2;
}
.event-image3 {
  grid-column: 3 / 4; 
  grid-row: 1 / 2;
}
.event-image4 {
  grid-column: 4 / 5; 
  grid-row: 1 / 3;
}
.event-image5 {
  grid-column: 1 / 3; 
  grid-row: 2 / 3;
  width: 478px;
  margin-right: 15px;
}
.event-image6 {
  grid-column: 3 / 4; 
  grid-row: 2 / 3;
  margin-left: 100px;
}
.main-preview-title {
  width: 991px;
  height: 25px;
  line-height: 25px;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  margin: 60px auto 0px;
  padding-left: 10px;
}
.main-preview-ul {
  width: 991px;
  height: 186px;
  display: flex;
  gap: 20px;
  margin: 0 auto;
  padding: 0;
}  
.main-preview-ul> li> img {
  border-radius: 5px;
}

</style>