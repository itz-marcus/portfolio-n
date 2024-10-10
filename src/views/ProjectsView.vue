<template>
    <div>
        <div id="container" v-if="projectData()">
          <div v-for ="project in projectData()" :key="project.name" data-aos="zoom-in" data-aos-duration="400">
            <div id="Card" >
                <div id="card-b" class="card" style="margin-top: 3vh;border-radius: 0px; width: 17rem; height: 17.2vw; background-color: rgba(0, 0, 0, 0.544);color: white;box-shadow:0px 1px 1px 4px  rgb(255, 199, 1);" >
                    <img id="card-cover" :src= 'project.image'  class="card-img-top" alt="...">
                    <div id="proj-b" class="card-body">
                        <h5 id="proj-t" class="card-title">{{project.name}}</h5>
                        <p id="proj-tx" class="card-text">{{ project.description }}</p>
                        <a id='button' :href='project.gitHub' target="_blank" class="btn btn-primary">Github</a>
                        <a id='button2' :href='project.vercel' target="_blank" class="btn btn-primary">See live</a>
                    </div>
                </div>  
            </div> 
        </div>  
        </div>
        <div v-else>
            <spinner-comp/>
        </div>
    </div>
</template>
<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
export default {
  components: { SpinnerComp },
    methods:{
        projectData(){
            return this.$store.state.projects
        }
    },
    computed:{
        getAboutMe(){
            return this.$store.dispatch("getAboutMe")
        }
    },
    mounted(){
        this.getAboutMe
    }   
}
</script>
<style scoped>
@media screen and (max-width:700px) and (min-width:351px){
#card-b{
    border-radius: 0px;
    width: 17rem; height: 18vw;
    background-color: rgba(0, 0, 0, 0.544);
    color: white;
    box-shadow:0px 1px 1px 4px  rgb(255, 199, 1);
    width: 130px !important;
    height: 160px !important;
    margin-top: 3vh !important;
}
#Card{
    transition: 0.3s;
    margin-left: 3vw;
    height: 160px !important;
}
#proj-tx{
    font-size: 7px !important; 
}
#card-cover{
    height: 60px !important;
}
#proj-t{
    font-size: 13px !important;
    color: white;
}
#button{
    font-size: 9px;
}
#button2{
    font-size: 9px;
}
}
@media screen and (max-width:350px){
#card-b{
    border-radius: 0px;
    width: 17rem; 
    height: 18vw ;
    background-color: rgba(0, 0, 0, 0.544);
    color: white;
    box-shadow:0px 1px 1px 4px  rgb(255, 199, 1);
    width: 100px !important;
    height: 160px !important;
    margin-top: 14vh !important;
}
#proj-tx{
    font-size: 7px !important; 
}
#card-cover{
    height: 60px !important;
}
#proj-t{
    font-size: 13px !important;
    color: white;
}
#button{
    font-size: 9px;
}
#button2{
    font-size: 9px;
}
}

#button{
    position: absolute;
    bottom: 0;
    border: 2px solid rgb(255, 199, 1);
    background-color: rgb(255, 199, 1);
    color: black;
    font-weight: bold;
    border-radius: 0px;
    border: 0px; 
    transition: 0.3s;
    margin-right: 6px;
}
#button2{
    position: absolute;
    bottom: 0;
    left: 10vw;
    border: 2px solid rgb(255, 199, 1);
    background-color: rgb(255, 199, 1);
    color: black;
    font-weight: bold;
    border-radius: 0px;
    border: 0px; 
    transition: 0.3s;
    margin-right: 6px;
}
#button:hover{
    box-shadow: 3px 4px 0px rgb(255, 199, 1);
    border: 2px solid rgb(255, 199, 1);
    background-color:black ;
    color: rgb(255, 199, 1);
}
#button2:hover{
    box-shadow: 3px 4px 0px rgb(255, 199, 1);
    border: 2px solid rgb(255, 199, 1);
    background-color:black ;
    color: rgb(255, 199, 1);
}
#Card{
    transition: 0.3s;
    margin-left: 3vw;
    height: 17vw;
}
#Card:hover{
    box-shadow: 10px 10px 0px rgb(255, 199, 1);
    background-color: black;
    transform: scale(1.02);
}
img[alt='backgrounds2']{
    height: 75vh;
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
#container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
#proj-b{
    background-color:transparent;
}
#proj-tx{
    font-size: 70%;
    color: white;
}
#card-cover{
    height: 7.5vw;
    width: 100%;
}
</style>