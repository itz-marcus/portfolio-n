<template>
  <router-view/>
  <img src="https://itz-marcus.github.io/Project_images/Logo.png" alt="logo" loading="lazy" data-aos="zoom-in" data-aos-duration="400">
  <div class="home">
    <div>
        <div id="title">
          <h1 id="home-title" data-aos="fade-right" data-aos-duration="400">Hi,<br> I'm <br><p>Marcus</p></h1>
        </div>
        <div id="sub">
          <p class="sub-title" data-aos="fade-right">An Aspiring Web Developer!</p>
        </div>
        <div id="socials" data-aos="fade-right" data-aos-duration="400">
          <a href="https://github.com/itz-marcus" target="_blank"><i class="lab la-github"></i></a>
          <a href="https://za.pinterest.com/marcusadonis5/my-saves/" target="_blank"><i class="lab la-pinterest-p"></i></a>
          <a href="https://www.linkedin.com/in/marcus-adonis-9a28512b6/" target="_blank"><i class="lab la-linkedin-in"></i></a>
        </div>
          
    </div>
        
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  }
}
</script>
<style scoped>

@media screen and (max-width:750px) and (min-width:406px) {
  #border h1{
    font-size: 17vw;
    margin-top:7vh ;
  }
  #home-title p{
    font-size: 17vw;  
  }
  img[alt='logo']{
    width: 15vw;
    object-fit: contain;
    background-repeat: no-repeat; 
    left: 40%;
  }
  #sub .sub-title{
    font-size: 4vw;
    width: 52vw;
  }
  .effects img[alt='banner']{
    right: 9vw;
  }
}
@media screen and (max-width:405px){
  #border h1{
    font-size: 17vw;
    margin-top:7vh ;
  }
  #home-title p{
    font-size: 17vw;  
  }
  img[alt='logo']{
    width: 15vw;
    object-fit: contain;
    height: 7vh;
    background-repeat: no-repeat; 
    position: absolute;
    z-index: -1;
    top: 3vw;
    left: 40%;
  }
  img[alt='m-player']{
    width: 93vw;
    object-fit: contain;
    background-repeat: no-repeat; 
    position: absolute;
    z-index: -1;
    top:72.5vh;
    right: 3.5vw;
    margin: 2px;
}
  #sub .sub-title{
    font-size: 4vw;
    width: 52vw;
  }
  .effects img[alt='banner']{
    right: 9vw;
    width: 15vw;
    object-fit: contain;
  }
}
@media screen and (min-width:1550px){
  #border h1{
    font-size: 120px;
    margin-top:7vh ;
  }
  #home-title p{
    font-size: 120px;  
  }
  #sub .sub-title{
    font-size: 32px;
    width: 52vw;
  }
  img[alt='bgimage']{
    width: 985px;
    height: auto;
    background-repeat: no-repeat;
    opacity: 0.5; 
    position: fixed;
    z-index: -1;
    left: 50vw;
    /* display: block; */
    /* margin-left: auto;
    margin-right: auto; */
}
}
#home-title{
    margin-top: 10%;
    width: 40vw;
    font-size: 8vw;
    margin-left: 10%;
    font-weight:bolder;
    color: white;
    line-height: 0.95;
    margin-bottom: 0px;  
}  
h1 p{
    color:rgb(255, 199, 1);
    font-size: 8vw;
}
.sub-title{
    font-size: 2vw;
    margin-left: 10%;
    font-weight:bolder;
    color: white;
    font-family: "Lekton", monospace;
    font-style:normal;
    margin-top: 0px;
}
#socials{
  margin-left: 4%;
}
i{ 
    font-size: 45px;
    color: white;    
    margin-left: 4%;
    font-weight: lighter;
    cursor: pointer;
    transition: 0.2s;
    
}
i:hover{
    color: rgb(255, 199, 1);
    text-shadow: 0px 2px 0px  rgb(53, 53, 53) ;
    transform: scale(120%);
}
img[alt='logo']{
    height: 7vh;
    background-repeat: no-repeat; 
    position: absolute;
    z-index: -1;
    top: 5%;
    left: 46%;
    /* margin-left: auto;
    margin-right:auto; */

}
img[alt='banner']{
    height: 56vh;
    background-repeat: no-repeat; 
    position: absolute;
    z-index: -1;
    top: 5vh;
    right: 5vw;
    margin: 2px;
}
img[alt='globe']{
    height: 9vh;
    background-repeat: no-repeat; 
    position: absolute;
    z-index: -1;
    top:62.5vh;
    right: 3vw;
    margin-right: 143px;
}
img[alt='disc-imp']{
    height: 11vh;
    background-repeat: no-repeat; 
    position: absolute;
    z-index: -1;
    top: 61.5vh;
    right: 2.6vw;
    margin-right: 0px;
}
img[alt='m-player']{
    height: 10vh;
    background-repeat: no-repeat; 
    position: absolute;
    z-index: -1;
    top:72.5vh;
    right: 3.5vw;
    margin: 2px;
}
</style>

