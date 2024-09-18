<template lang="">
    <div>
        <div id='timeline-pos'>
                <div id="grid" class="container text-center">
                        <div id="grid-space" class="row row-cols-3">
                            <div class="col" id='font' data-aos="fade-right" data-aos-duration="400">
                                    Graduated high school at Cape Academy of Math’s Science and Technology.
                                <br>
                                    <b>2017-2021</b>
                            </div>

                            <div id='col-size' class="col"></div>
                            
                            <div class="col"></div>
                            
                            <div class="col"></div>
                            
                            <div id='col-size' class="col"></div>

                            <div class="col" id='font' data-aos="fade-left" data-aos-duration="400">
                                    Studying Web Development & UI / UX Design at Life Choices Academy...
                                <br>
                                    <b>2024-...</b>
                            </div>
                                
                            <div class="col" id='font' data-aos="fade-right" data-aos-duration="400">
                                    <br> 
                                    Worked as a Teacher Assistant and Administrator at Parkhurst Primary School. 
                                    <br> 
                                    <b>2022-2023</b>   
                                </div>

                            <div id='col-size' class="col"></div>
                                
                            <div class="col">
                                <button>Download CV</button>
                            </div>

                            </div>
                        </div>
                        <div >
                            <img src="https://itz-marcus.github.io/Project_images/time-line.png" class="timeline" alt="">
                        </div>
        </div>
                    
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

button{
    font-size: 20px;
    font-weight: bold;
    background-color: rgb(255, 199, 1);
}
#font{
    color:rgb(255, 199, 1);
    font-size: 1.5vw;
    width: 20vw;
}
#grid{
    width: 80vw;
}  
b{
    color: white;
}  
#grid-space{
    height: 79vh;    
    margin-top: 6.5%;
}
.timeline{
    position: absolute;
    object-fit: contain;
    height: 51vh;
    top: 14%;
    left: 49.5%;
}
img[alt='backgrounds']{
    height: 70vh;
    top: 10%;
    background-repeat: no-repeat;
    opacity: 0.5; 
    position: fixed;
    z-index: -1;
    left: 15%;
    margin-left: auto;
    margin-right:auto;
    object-fit: contain;
}
#col-size{
width: 100px;
}
.col{
left: 0;
}
.col2{
left: 50%;
}
</style>