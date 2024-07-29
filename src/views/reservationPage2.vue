<template>
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
</template>

<script>
import seatData1 from '@/assets/data/seat_data2'; 

export default {
  name: 'reservationPage4',
  data() {
    return {
      seatData: seatData1
    };
  }
};
</script>

<style scoped>
.seat-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.row-seat {
  display: flex;
}
.row-number {
  margin-right: 10px;
  width: 21px;
  height: 16px;
  line-height: 16px;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
}
.seat {
  width: 21px;
  height: 16px;
  line-height: 16px;
  font-size: 10px;
  margin: 0 2px;
  background-color: #4caf50;
  color: white;
  border-radius: 7px 7px 2px 0px;
  letter-spacing: -0.5px;
  box-sizing: border-box;
}
.handicap {
  width: 21px;
  height: 16px;
  margin: 0 2px;
  font-size: 10px;
  background-color: rgb(167, 159, 159);
  color: white;
  border-radius: 7px 7px 2px 0px;
}
.aisle {
  width: 10px;
  height: 16px;
  margin: 0 2px;
  background-color: #ffffff;
  color: #ffffff;
}
.blank {
  width: 21px;
  height: 16px;
  margin: 0 2px;
  background-color: #ffffff;
  color: #ffffff;
}
.reserved {
  background-color: #f44336;
}
</style>
