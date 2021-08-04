<template>
  <div :class='$style.wrapper'>
    <div
      v-for='(className, i) in formatColors'
      :class='[$style.item, className, {"flash": isFlashActive(i)}]'
      :key='i'
    />
  </div>
</template>

<script>
import { paleColorsClasses } from '../utils/constants';

export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    colorClass: {
      type: String,
      required: true,
    },
    isFlash: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    isFlashActive(i) {
      return i === this.index && this.isFlash;
    },
  },
  computed: {
    formatColors() {
      return paleColorsClasses.map((cl, i) => (i === this.index
        ? this.colorClass
        : cl));
    },
  },
};
</script>

<style module>
.wrapper {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.item {
  width:80px;
  height:80px;
  border-radius: 50%;
  border: 2px solid #333;
}
</style>
