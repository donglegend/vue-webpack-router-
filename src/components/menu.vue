<template>
  <ul>
    <li><a v-link="{ path: '/index' }">index</a></li>
    <li><a v-link="{ path: '/login' }">login</a></li>
    <li><a v-link="{ path: '/list' }">list</a></li>
  </ul>
</template>


<style>
  ul{
    text-align: center;
  }
  li{
    display: inline-block; padding: 0 30px;
    font-size: 20px; text-decoration: underline;
  }

  .slide-transition {
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .slide-enter {
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
}

.slide-leave {
  -webkit-animation-name: slideOutLeft;
  animation-name: slideOutLeft;
}


  @-webkit-keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}



@-webkit-keyframes slideOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes slideOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}


</style>
