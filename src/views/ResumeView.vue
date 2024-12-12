<template>
    <div id="resume_info" class="row">
        <div class="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in" data-aos-duration="400"> Studying Web Development & UI / UX Design at Life Choices Academy. Diving into the main aspects of building a website.
            <br>
            <b>2024-...</b>
        </div>            
        <div class="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in" data-aos-duration="400"> Worked as a Teacher Assistant and Administrator at Parkhurst Primary School. This is where I bettered my team work skills and introduced to lifeChoices Academy. 
            <br> 
            <b>2022-2023</b>
        </div>            
        <div class="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in" data-aos-duration="400"> Graduated high school at Cape Academy of Math’s Science and Technology. This was when I was first introduced to this fascinating world of coding.  
            <br>
            <b>2017-2021</b>
        </div>            
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
#resume_info{
    display: flex;
    color: white;
    justify-content:space-evenly;
    width: 92.5vw;
    margin-top: 50px !important; 
}
#resume_info div{
    width: 270px !important;
    font-size: 1.6vw !important;
    margin-bottom:10vw
}
#resume_info b{
    color:rgb(255, 199, 1);
    font-size: 1.6vw !important;
}

@media screen and (max-width:600px){
    #resume_info{
    display: flex;
    color: white;
    justify-content:space-evenly;
    width: 92.5vw;
    margin-top:1vh !important;   
}
#resume_info b{
    color:rgb(255, 199, 1);
    font-size: 10px !important;
} 
#resume_info div{
    width: 220px !important;
    font-size: 17px !important;
    margin-bottom:10vw
}  
}
</style>