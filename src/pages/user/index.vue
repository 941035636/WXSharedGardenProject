<template>
	<view class="w-[750rpx]">
        <view class="w-[750rpx] h-[100rpx] textClass" @click="goUserAdmin">用户管理</view>
        <view class="w-[750rpx] h-[100rpx] textClass" @click="goOrderForm">商城订单</view>
        <view class="w-[750rpx] h-[100rpx] textClass" @click="goResourceAdmin">资源管理</view>
        <view class="w-[750rpx] h-[100rpx] textClass" @click="goBrandAdmin">品牌管理</view>
        <view class="w-[750rpx] h-[100rpx] textClass" @click="goSafetyAdmin">安全管理</view>
    </view>
</template>
<script setup lang="ts">
const goUserAdmin = () => {
    uni.navigateTo({
        url: '/minePackage/pages/userAdmin'
    });
};
const goOrderForm = () => {
    uni.navigateTo({
        url: '/minePackage/pages/orderForm'
    });
};
const goResourceAdmin = () => {
    uni.navigateTo({
        url: '/minePackage/pages/resourceAdmin'
    });
};
const goBrandAdmin = () => {
    uni.navigateTo({
        url: '/minePackage/pages/brandAdmin'
    });
};
const goSafetyAdmin = () => {
    uni.navigateTo({
        url: '/minePackage/pages/safetyAdmin'
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
