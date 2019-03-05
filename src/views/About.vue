<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a-row :gutter="16">
      <a-col :span="8"></a-col>
      <a-col :span="8"></a-col>
      <a-col :span="8"></a-col>
    </a-row>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.ant-row {
  &>div {
    background: #7546c9;
    height: 40px;
    border: 1px solid #7546c9;
  }
  &>div:nth-child(1) {
    opacity: 0.9;
  }
  &>div:nth-child(2) {
    opacity: 0.6;
  }
  &>div:nth-child(3) {
    opacity: 0.3;
  }
}
</style>

