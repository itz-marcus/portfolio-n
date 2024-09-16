<template>
  <div class="about">
    <img src="https://itz-marcus.github.io/Project_images/2nd_page_clear.png" alt="backgrounds" loading="lazy">
    <div class="flexing2">
           <!-- code here -->
                <div data-aos="fade-right" data-aos-duration="400">
                    <img src="https://itz-marcus.github.io/Project_images/PFP.jpg" alt="pfp" loading="lazy" >
                </div>
                <br>
                  <h2 data-aos="fade-left" data-aos-duration="400">Hi! I'm <b>Marcus Adonis</b>, one who is passionate about <b>Design</b>, <b>Computing</b>, <b>Video</b> <b>gaming</b>, <b>Skateboarding</b> and <b>Cars</b>. I enjoy working with a <b>team</b>, because it allows for ideas to be shared and <b>promotes</b> better work flow<b>...</b><br>
                        I continuously aim to do my best, be creative and I have ideas that play <b>outside</b> <b>the</b> <b>box</b>.
                    <br>
                    <br>
                        <b>Soft skills:</b> Team-player, Creativity 
                    <br>
                    <br>
                        <b>Hobbies:</b> Drawing, Skateboarding, Video games
                    <br>
                    <br>
                        <b>Interests:</b> Cars, Computers, Design
                    <br>
                    <br>
                        <b><u>Programming Skill-set</u></b> <br>  
                        <img src="https://itz-marcus.github.io/Project_images/HTML.png" alt="HTMLL">
                        <img src="https://itz-marcus.github.io/Project_images/CSS.png" alt="HTMLL">
                        <img src="https://itz-marcus.github.io/Project_images/JS.png" alt="HTMLL">
                        <img src="https://itz-marcus.github.io/Project_images/Boot_Strap.png" alt="HTMLL">
                        <img src="https://itz-marcus.github.io/Project_images/Vue.js_Logo.png" alt="HTMLL">
                    </h2>
                
                    
    </div>
  </div>
  
</template>
<script>
export default {
    
}
</script>
<style scoped>
@media screen and (max-width:880px) and (min-width:411px ){

  div h2 b {
    color: rgb(255, 199, 1);
    font-size: 14px !important;
    width: 65vw;
}
h2{
   font-size: 14px !important;
}
  img[alt='pfp']{
    width: 290px !important;
    left: 55%;
    margin-left: auto;
    margin-right:auto;
    object-fit: contain;
}
.flexing2{
    display:flex;
    flex-direction: column;
    width: 65%;
    margin-top: 7%;
    margin-left: 10%;

}
div h2 img{
    height: 50px !important;
}
u{
    font-size: 20px !important;
}
}
@media screen and (max-width:410px){
  div h2 b {
    color: rgb(255, 199, 1);
    font-size: 12px !important;
    width: 65vw;
}
h2{
   font-size: 12px !important;
}
  img[alt='pfp']{
    width: 200px !important;
    left: 55%;
    margin-left: auto;
    margin-right:auto;
    object-fit: contain;
}
.flexing2{
    display:flex;
    flex-direction: column;
    width: 65%;
    margin-top: 7%;
    margin-left: 10%;

}
div h2 img{
    height: 30px !important;
}
u{
    font-size: 15px !important;
}
}
.flexing2{
    display: flex;
    width: 65%;
    margin-top: 7%;
    margin-left: 10%;

}
img[alt='pfp']{
    width: 29vw;
    left: 15%;
    margin-left: auto;
    margin-right:auto;
    object-fit: contain;
}
  h2{
    font-size: 1.3vw;
    margin-left: 2%;
    font-weight:bolder;
    color: white;
    font-family: "Lekton", monospace;
    font-style:normal;
    margin-top: 0px;
    width: 65vw;
    line-height: 1.2;
  }
  h2 b {
    color: rgb(255, 199, 1);
    font-size: 1.3vw;
    width: 65vw;
}
  h2 img{
    height: 6vw;
}
img[alt='backgrounds']{
    height: 70vh;
    top:10%;
    background-repeat: no-repeat;
    opacity: 0.5; 
    position: fixed;
    z-index: -1;
    left: 15%;
    margin-left: auto;
    margin-right:auto;
    object-fit: contain;
}
u{
  font-size: 1.5vw;
}

</style>