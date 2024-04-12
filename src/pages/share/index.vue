<template>
	<view class="w-[750rpx]">
        <view class="w-[750rpx] h-[100rpx] textClass" @click="goCropland">农⽥认种</view>
        <view class="w-[750rpx] h-[100rpx] textClass" @click="goRearLivestock">畜牧认养</view>
    </view>
</template>
<script setup lang="ts">
const goCropland = () => {
    uni.navigateTo({
        url: '/sharePackage/pages/cropland'
    });
};
const goRearLivestock = () => {
    uni.navigateTo({
        url: '/sharePackage/pages/rearLivestock'
    });
};
</script>
<style lang="scss" scoped>
.textClass{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
