<template>
    <div class="e-pon-loading">
      <section class="e-pon">
        <E class="ani-jump e" />
        <Line class="ani-jump line" />
        <P class="ani-jump p" />
        <O class="ani-jump o" />
        <N class="ani-jump n" />
        <TM class="ani-jump TM" />
      </section>
    </div>
  </template>
  
  
  <script setup>
  import E from '@svg/e-pon/e-pon_e.svg'
  import Line from '@svg/e-pon/e-pon_-.svg'
  import P from '@svg/e-pon/e-pon_p.svg'
  import O from '@svg/e-pon/e-pon_o.svg'
  import N from '@svg/e-pon/e-pon_n.svg'
  import TM from '@svg/e-pon/e-pon_TM.svg'
  </script>
  
  <style lang="scss" scoped>
  @keyframes move {
    0% {
      left: var(--width) ;
      transform: scaleX(1);
    }
    20% {
      transform: scaleX(0.5);
      left: 20%;
    }
    40% {
      transform: scaleX(1.2);
      left: 40%;
    }
    60% {
      transform: scaleX(.5);
      left: 60%;
    }
    80% {
      transform: scaleX(1.2);
      left: 80%;
    }
    100% {
      transform: scaleX(1);
      left: calc(100%);
    }
  }
  @keyframes jump {
    0% {
      transform: translateY(var(--translate-y)) scale3d(1, 1, 1);
    }
    10% {
      transform: translateY(calc(var(--translate-y) + 10px)) scale3d(1.4, 0.6, 1);
    }
    20% {
      transform: translateY(-20px) scale3d(0.6, 1.4, 1);
    }
    30% {
      transform: translateY(var(--translate-y) ) scale3d(1, 1, 1)
    }
    100% {
      transform: translateY(var(--translate-y)) scale3d(1, 1, 1);
    }
  }
  .e-pon-loading {
    --width: min(300px, 50vw);
    position: fixed;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    // left: calc((100vw - min(300px, 50vw)) / 2);
    // top: calc(50vh - (min(300px, 50vw) / 2));
    background-color: transparent;
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
  }
  
  .e-pon{
    position: relative;
    padding-bottom: 15px;
    &::after{
      content: '';
      width: 20px;
      height: 8px;
      border-radius: 4px;
      background-color: #F79135;
      position: absolute;
      bottom: 0px;
      left: 0px;
      --width: -25px;
      --width-r: 25px;
      transform: scaleX(1);
      animation:move 1.2s infinite linear;
      animation-delay: .1s;
    }
  }
  .ani-jump{
    animation:jump 1.2s infinite ease-in-out;
    --translate-y: 0px;
    transform: translateY(var(--translate-y)) scale3d(1, 1, 1);
    margin: 0 1px;
    display: inline-block;
    &.e{
      animation-delay: .1s;
      --translate-y: 1px;
    }
    &.line{
      animation-delay: .2s;
      --translate-y: 0px;
      font-size: 10px;
      margin: 0 2px;
      transform: translateY(var(--translate-y)) scale3d(1, 1, 1);
    }
    &.p{
      animation-delay: .3s;
      --translate-y: 4px;
      font-size: 21px;
      margin-right: -1px;
      transform: translateY(var(--translate-y)) scale3d(1, 1, 1);
    }
    &.o{
      --translate-y: 1px;
      animation-delay: .4s;
      margin-left: 2px;
      margin-right: -1px;
      transform: translateY(var(--translate-y)) scale3d(1, 1, 1);
    }
    &.n{
      --translate-y: 1px;
      animation-delay: .5s;
      transform: translateY(var(--translate-y)) scale3d(1, 1, 1);
    }
    &.TM{
      animation-delay: .6s;
      font-size: 10px;
      margin-left: 0px;
      --translate-y: -7px;
      transform: translateY(var(--translate-y)) scale3d(1, 1, 1);
    }
  }
  </style>
  