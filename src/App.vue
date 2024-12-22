<template>
  <div id="border">
    <img src="https://itz-marcus.github.io/Project_images/Background_img.jpeg" alt="bgimage" loading="eager">
    <div class="flexing">
      <div id="d1">
        <navbar-comp>
        </navbar-comp>
      </div>
      <div id="d2">
        <router-view/>
      </div>
    </div>
  <div>
  
</div>
</div>
<div>
<footer-comp>
</footer-comp>
</div>


</template>
<script>

import NavbarComp from './components/NavbarComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
components: {
  NavbarComp,
  FooterComp
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lekton:ital,wght@0,400;0,700;1,400&family=Pixelify+Sans:wght@400..700&display=swap');
/* -------- body -------- */
body{
  background-color: #151515; 
}
*{
font-family: "Lekton", monospace;
font-style:normal;
font-weight: bolder;
font-size: 1vw;
}
.flexing{
  display: flex;
}

/* -------- border -------- */
#border{
  border: solid 3px rgb(255, 199, 1);
  margin-top: 1.2%;
  margin-left: 1.2%;
  margin-right: 1.2%;
  width: auto;
  height: 84vh;
  backdrop-filter:blur(px)
}
img[alt='bgimage']{
  width: 97.5vw;
  height: 83.5vh;
  background-repeat: no-repeat;
  opacity: 0.2; 
  position: fixed;
  z-index: -1;
  transform: rotate(180deg);
}
@media screen and (min-width:1550px){
  #border{
  border: solid 3px rgb(255, 199, 1);
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  width: auto;
  height: 84vh;
  backdrop-filter:blur(px)
}
}
</style>
