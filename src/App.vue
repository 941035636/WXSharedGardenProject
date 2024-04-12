<script setup lang="ts">

onLaunch(() => {
  console.log("App Launch");
  // if (!wx.cloud) {
  //     console.error('请使用 2.2.3 或以上的基础库以使用云能力')
  // } else {
  //     wx.cloud.init({
  //       //env: '你的环境ID',
  //       env: 'XXXX',
  //       traceUser: true,
  //     })
  // }
});

onShow(() => {
  console.log("App Show");
  /* #ifdef MP */
  update();
  /* #endif */
});

onHide(() => {
  console.log("App Hide");
});

</script>

<style lang="scss">
@import 'tailwindcss/base';
@import 'tailwindcss/utilities';
@import "wxcomponents/vant/common/index.wxss";
page {
	width: 100%;
	height: 100%;
}
/* 隐藏滚动条 */
::-webkit-scrollbar{
  width: 0;
  height: 0;
  color: transparent;
}
/* #ifdef APP-PLUS || H5 */
*, ::before, ::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
  touch-action: pan-y;
}
/* #endif */
</style>
