<template>
	<view class="w-[750rpx]">
        <view class="w-[750rpx] h-[100rpx] textClass" @click="goZoologyProcess">生态加工</view>
        <view class="w-[750rpx] h-[100rpx] textClass" @click="goTrusteeship">托管代种</view>
        <view class="w-[750rpx] h-[100rpx] textClass" @click="goSapiential">智慧⽂旅</view>
        <view class="w-[750rpx] h-[100rpx] textClass" @click="goTechnicalSupport">技术⽀持</view>
    </view>
</template>
<script setup lang="ts">
const goZoologyProcess = () => {
    uni.navigateTo({
        url: '/homePackage/pages/zoologyProcess'
    });
};
const goTrusteeship = () => {
    uni.navigateTo({
        url: '/homePackage/pages/trusteeship'
    });
};
const goSapiential = () => {
    uni.navigateTo({
        url: '/homePackage/pages/sapiential'
    });
};
const goTechnicalSupport = () => {
    uni.navigateTo({
        url: '/homePackage/pages/technicalSupport'
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
