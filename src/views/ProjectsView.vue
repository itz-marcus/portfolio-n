<template>
    <div id="scroll">
        <div id="container" v-if="projectData()" data-aos="zoom-in" data-aos-duration="400">
          <div v-for ="project in projectData()" :key="project.name" >
            <div id="Card" >
                <div id="card-b" class="card" style="margin-top: 38.4px;border-radius: 0px; width: 272px; height: 280px; background-color: rgba(0, 0, 0, 0.544);color: white;box-shadow:0px 1px 1px 4px  rgb(255, 199, 1);" >
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
    margin-bottom: 1vw;
    height: 30px;
    width: 70px;
    font-size: 13px;
}
#button2{
    position: absolute;
    bottom: 0;
    left: 180px;
    border: 2px solid rgb(255, 199, 1);
    background-color: rgb(255, 199, 1);
    color: black;
    font-weight: bold;
    border-radius: 0px;
    border: 0px; 
    transition: 0.3s;
    margin-right: 6px;
    margin-bottom: 1vw;
    height: 30px;
    width: 80px;
    font-size: 13px;
}
#button:hover{
    box-shadow: 2px 2px 0px rgb(255, 199, 1);
    border: 2px solid rgb(255, 199, 1);
    background-color:black ;
    color: rgb(255, 199, 1);
}
#button2:hover{
    box-shadow: 0.2vw 0.3vw rgb(255, 199, 1);
    border: 2px solid rgb(255, 199, 1);
    background-color:black ;
    color: rgb(255, 199, 1);
}
#Card{
    transition: 0.3s;
    margin-left: 3vw;
    height: 284px;
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
#scroll{
    overflow-y: scroll;
    height: 83vh;
}
#container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 3rem;
    padding-right: 1.5em;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  /* background: #f1f1f1;  */
  /* display: none; */
  width: 50px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background-color:rgb(255, 199, 1) ; 
}

#proj-b{
    background-color:transparent;
}
#proj-tx{
    font-size: 11.5px;
    color: white;
}

#proj-t{
    font-size: 17px;
}

#card-cover{
    height: 140px;
    width: 100%;
}
</style>