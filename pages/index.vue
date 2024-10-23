<template>
  <div class="relative h-screen overflow-hidden">
    <img ref="backgroundImage" class="background-image" src="~/assets/img/bg-.jpg" alt="背景图" />
    <div 
    ref="container"
    class="h-screen flex flex-col justify-center items-center">
      <h1 class="text-8xl font-bold text-black">{{ devInfo.name }}</h1>
      <div class="mt-4">
        <el-button 
          v-for="link in devInfo.links" 
          :key="link.name" 
          class="mx-1 text-blue-500" 
          :href="link.url" 
          target="_blank"
          circle
        >
          <IconByName :name="link.name" />
        </el-button>
      </div>
      <nuxt-link to="/projects" class="mt-4 text-lg text-blue-500">项目列表</nuxt-link>
      <div
      v-for="(fish, index) in fishIcons"
      :key="index"
      :ref="el => fishRefs[index] = el"
      :style="{ left: fish.x + 'px', top: fish.y + 'px', position: 'absolute' }">
        <font-awesome
        icon="fa-solid fa-fish"
        :class="[
          index === 0 ? 'text-orange-500' : '',
          index === 1 ? 'text-orange-200' : '',
          index === 2 ? 'text-red-500' : ''
        ]"
        class="text-4xl"/>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { devInfo } from '~/data/index';
import IconByName from '~/components/IconByName.vue';
definePageMeta({
  layout: false
});

const backgroundImage = ref(null);
const fishIcons = ref([
  { x: 50, y: 50, angle: 0 }, // 第一个鱼的初始位置和角度
  { x: 600, y: 300, angle: 0 }, // 第二个鱼的初始位置和角度
  { x: 850, y: 450, angle: 0 }, // 第三个鱼的初始位置和角度
]);
const fishRefs = ref([]); // 用于存储每个鱼的引用
const container = ref(null);

const moveFish = (index) => {
  let curFish = fishIcons.value[index];
  const angle = Math.random() * 60 - 30; // 随机生成一个夹角，范围在 -30 到 30 度
  curFish.angle += angle;
  // console.log(curFish.angle)
  const distance = 100; // 每次移动的距离
  const currentX = parseFloat(fishRefs.value[index].style?.left|| 0); // 获取当前 X 坐标
  const currentY = parseFloat(fishRefs.value[index].style?.top || 0); // 获取当前 Y 坐标

  // 计算新的位置
  const newX = currentX + distance * Math.cos(curFish.angle * (Math.PI / 180)); // 使用 Math.PI 转换角度
  const newY = currentY + distance * Math.sin(curFish.angle * (Math.PI / 180)); // 使用 Math.PI 转换角度
  // 检查边界
  const containerRect = container.value?.getBoundingClientRect();
  const fishRect = fishRefs.value[index]?.getBoundingClientRect();

  // 如果碰到边界，随机改变方向
  if (newX < 0 || newX + fishRect.width > containerRect.width || newY < 0 || newY + fishRect.height > containerRect.height) {
    // 反转角度
    curFish.angle += 180; // 反向移动

    gsap.to(fishRefs.value[index], {
      duration: 0.5,
      rotation: curFish.angle, // 更新旋转角度
      onComplete: ()=>moveFish(index) // 继续移动
    });
  } else {
    // 更新位置
    gsap.to(fishRefs.value[index], {
      duration: 0.5,
      left: `${newX}px`,
      top: `${newY}px`,
      rotation: curFish.angle, // 更新旋转角度
      onComplete: ()=>moveFish(index) // 继续移动
    });
  }
};

onMounted(async () => {
  // 使用 GSAP 创建动画
  gsap.fromTo(
    backgroundImage.value,
    { scale: 1 }, // 初始状态
    {
      scale: 1.05,
      duration: 2, // 动画持续时间
      ease: 'linear', // 动画缓动效果
      repeat: -1, // 无限循环
      yoyo: true, // 往返动画
    }
  );
  // 等待 DOM 更新
  await nextTick();
  // 启动每个鱼的移动
  fishIcons.value.forEach(async (_, index) => {
    moveFish(index); // 开始移动每个鱼
  });
});


</script>
  
<style scoped>
.background-image {
  background-size: cover; /* 使背景图像覆盖整个容器 */
  background-position: center; /* 使背景图像居中 */
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

</style>
  