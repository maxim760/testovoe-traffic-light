<template>
<div :class='$style.wrapper'>
  <p :class='$style.time'>
    {{formatTime}}
  </p>
</div>
</template>

<script>
export default {
  MaxTime: 99,
  props: {
    time: {
      type: Number,
      required: true,
    },
  },
  computed: {
    formatTime() {
      const time = Math.min(this.$options.MaxTime, this.time);
      return `${time}`.padStart(2, '0');
    },
  },
};
</script>

<style module>
.wrapper {
  width: 75px;
  height: 75px;
  padding: 5px;
  background-color: #ccc;
  color: #333;
  display: flex;
  align-items: center;
  border: 2px solid #333;
}
.time {
  font-size: 3rem;
  font-family: 'Quantico', sans-serif;
}
</style>
