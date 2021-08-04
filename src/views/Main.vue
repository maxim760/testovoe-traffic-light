<template>
  <div
    :class='$style.trafficLight'
  >
    <my-time-table
      :time='time'
    />
    <my-cirlce-list
      :index='index'
      :colorClass='colorClass'
      :isFlash='flashing'
    />
  </div>
</template>
<script>
import MyCirlceList from '@/components/MyCirlceList.vue';
import MyTimeTable from '@/components/MyTimeTable.vue';
import createColorsSequence from '../utils/createColorsSequence';
import { paths, StorageKeys } from '../utils/constants';

export default {
  components: { MyCirlceList, MyTimeTable },
  props: {
    timeInSec: {
      type: Number,
      required: true,
    },
    colorClass: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      time: this.timeInSec,
      flashing: false,
    };
  },
  methods: {
    onChangeInterval(timeout, { isImmediately = false } = {}) {
      if (!isImmediately) {
        this.time -= 1;
      }
      window.sessionStorage.setItem(StorageKeys.Time, this.time);
      if (this.time <= 3 && !this.flashing) {
        this.flashing = true;
      }
      if (this.time <= 0) {
        clearInterval(timeout);
        this.updatePage();
      }
    },
    updatePage() {
      this.flashing = false;
      const color = this.colorSequence.nextColor();
      this.$router.push(paths[color]);
    },
  },
  beforeCreate() {
    const color = this.$router.currentRoute.value.path.substring(1);
    const savedColor = sessionStorage.getItem(StorageKeys.Color);
    const savedColorIdx = +sessionStorage.getItem(StorageKeys.ColorIndex);
    this.colorSequence = color === savedColor
      ? createColorsSequence(savedColorIdx)
      : createColorsSequence(color);
  },
  watch: {
    $props: {
      deep: true,
      immediate: true,
      handler() {
        if (sessionStorage.getItem(StorageKeys.Color) === this.colorSequence.getColor()) {
          this.time = +sessionStorage.getItem(StorageKeys.Time);
        } else {
          this.time = this.timeInSec;
        }
        sessionStorage.setItem(StorageKeys.ColorIndex, this.colorSequence.getIndex());
        sessionStorage.setItem(StorageKeys.Color, this.colorSequence.getColor());

        const timeout = setInterval(() => this.onChangeInterval(timeout), 1000);
        this.onChangeInterval(timeout, { isImmediately: true });
      },
    },
  },
};
</script>

<style module  >
.trafficLight {
  height: 450px;
  width: 150px;
  margin: 75px auto 0;
  background-color: gray;
  position: relative;
  border-radius: 150px;
  border: 4px solid #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
}
</style>
