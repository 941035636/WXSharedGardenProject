<template>
	<view class="w-[750rpx]">
        <view class="w-[750rpx] h-[100rpx] textClass" @click="goCourtyard">庭院信息浏览</view>
        <view class="w-[750rpx] h-[100rpx] textClass" @click="goInteriorDesign">内部设计</view>
        <view class="w-[750rpx] h-[100rpx] textClass" @click="goOnLineLease">在线租赁协议</view>
        <view class="w-[750rpx] h-[100rpx] textClass" @click="goMaintain">庭院保养服务</view>
    </view>
</template>
<script setup lang="ts">
const goCourtyard = () => {
    uni.navigateTo({
        url: '/tenancyPackage/pages/courtyard'
    });
};
const goInteriorDesign = () => {
    uni.navigateTo({
        url: '/tenancyPackage/pages/interiorDesign'
    });
};
const goOnLineLease = () => {
    uni.navigateTo({
        url: '/tenancyPackage/pages/onLineLease'
    });
};
const goMaintain = () => {
    uni.navigateTo({
        url: '/tenancyPackage/pages/maintain'
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
