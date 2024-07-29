<template>
  <div>
    <h1>극장 좌석 예약</h1>
    <div class="seat-map">
      <div
        v-for="(row, rowIndex) in seats"
        :key="rowIndex"
        class="seat-row"
      >
        <div
          v-for="(seat, seatIndex) in row"
          :key="seatIndex"
          :class="['seat', { reserved: seat.reserved, selected: selectedSeats.includes(seat.id) }]"
          @click="toggleSeat(seat.id)"
        >
          {{ seat.number }}
        </div>
      </div>
    </div>
    <button @click="reserveSeats" :disabled="selectedSeats.length === 0">예약하기</button>
    <div v-if="message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'reservationPage2',
  data() {
    return {
      // 20x20 좌석 초기화
      seats: Array.from({ length: 20 }, (v, rowIndex) => {
        return Array.from({ length: 20 }, (v, seatIndex) => ({
          id: `${rowIndex}-${seatIndex}`,
          number: String.fromCharCode(65 + rowIndex) + (seatIndex + 1), // A1, A2, ..., T20
          reserved: false,
        }));
      }),
      selectedSeats: [],
      message: '',
    };
  },
  methods: {
    toggleSeat(seatId) {
      const seat = this.seats.flat().find(s => s.id === seatId);
      if (seat.reserved) {
        alert('이 좌석은 예약되어 있습니다.');
        return;
      }
      if (this.selectedSeats.includes(seatId)) {
        this.selectedSeats = this.selectedSeats.filter(id => id !== seatId);
      } else {
        this.selectedSeats.push(seatId);
      }
    },
    reserveSeats() {
      this.selectedSeats.forEach(seatId => {
        const seat = this.seats.flat().find(s => s.id === seatId);
        if (seat) {
          seat.reserved = true; // 좌석 예약 처리
        }
      });
      this.message = `${this.selectedSeats.length} 좌석이 예약되었습니다: ${this.selectedSeats.join(', ')}`;
      this.selectedSeats = []; // 예약 후 선택 초기화
    },
  },
};
</script>

<style>
.seat-map {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.seat-row {
  display: flex;
}

.seat {
  width: 30px;
  height: 30px;
  margin: 5px;
  background-color: lightgreen;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.seat.reserved {
  background-color: red;
  cursor: not-allowed;
}

.seat.selected {
  background-color: orange;
}
</style>

<style scoped>
</style>