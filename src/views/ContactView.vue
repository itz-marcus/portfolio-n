<template lang="">
    <div class="contact">
    <section class="d-flex " >
        <div id="End-title-b" data-aos="fade-right" data-aos-duration="400">
            <h2 id="End-title">Let's get in <b>touch!</b></h2>
            <div id="contact-info1">
            <p id="contact-space"><b>Contact me</b></p>
            <p id="contactinfo-space">Email: marcusadonis5@gmail.com <br> Number: +2782 929 5821 <br> Location: Mitchell's Plain</p>
        </div>
        </div>
        
        <div id="contact-info2" data-aos="fade-right" data-aos-duration="400">
            <br>
            <p id="contact-space"><b>Contact me</b></p>
            <p id="contactinfo-space" >Email: marcusadonis5@gmail.com <br> Number: +2782 929 5821 <br> Location: Mitchell's Plain</p>
        </div>
        <div id="end-space" data-aos="fade-left" data-aos-duration="400">
            <form id="Style" action="https://formspree.io/f/xblrjpoj" method="POST">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name">
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Message</label>
                    <textarea type="text" class="form-control" id="exampleInputPassword1" name="message"></textarea>
                </div>
                <button id="Button-style" type="submit" class="btn btn-primary">Submit</button>
                <button id="Button-style2" type="reset" class="btn btn-primary">Clear</button>
            </form>
        </div>
    </section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
@media screen and (max-width:880px)and (min-width:411px){
div .d-flex{
 display: flex !important;
 flex-direction: column !important;
 
}
#End-title-b{
    margin-top: 3% !important;
    order: 1 !important; 
    width: 300px !important;  
}
#End-title{
    font-size: 70px !important;
}
h2 b{
    font-size: 70px !important;
}
#end-space{
    margin-top: 1% !important;
    margin-left: 40px !important;
    order: 2 !important;
}
#Style .form-label{
    font-size: 15px !important;
    
}
#contact-info2{
    order: 3 !important;
    margin-left: -10px  !important;
    display: block !important;
}
#contact-info1{
    display: none !important;
}
#end-space input{
    width: 260px !important;
    height: 40px !important;
    font-size: 15px !important;
}
textarea{
    width: 260px !important;
    height: 80px !important;
    font-size: 15px !important;
}
#Button-style{
    width: 100px !important;
    font-size: 15px !important;
}
#Button-style2{
    width: 100px !important;
    font-size: 15px !important;
}
p b {
    font-size: 28px !important;
}
#contactinfo-space{
    font-size: 13px !important;
    
}
}
@media screen and (max-width:410px){
div .d-flex{
    display: flex !important;
    flex-direction: column !important;
 
}
#End-title-b{
    margin-left: -15px !important;
    margin-top: 3% !important;
    order: 1 !important; 
    width: 200px !important;  
}
#End-title{
    font-size: 50px !important;
}
h2 b{
    font-size: 50px !important;
}
#end-space{
    margin-top: 1% !important;
    margin-left: 10px !important;
    order: 2 !important;
}
#Style .form-label{
    font-size: 12px !important;
    
}
#contact-info2{
    order: 3 !important;
    margin-left: -30px !important;
    display: block !important;
}
#contact-info1{
    display: none !important;
}
#end-space input{
    width: 200px !important;
    height: 30px !important;
    font-size: 12px !important;
}
textarea{
    width: 200px !important;
    height: 80px !important;
    font-size: 15px !important;
}
#Button-style{
    width: 96px !important;
    font-size: 12px !important;
}
#Button-style2{
    width: 96px !important;
    font-size: 12px !important;
}
p b {
    font-size: 28px !important;
}
#contactinfo-space{
    font-size: 13px !important;
    
}
}
    img[alt='backgrounds3']{
    height: 120vh;
    top: -6%;
    background-repeat: no-repeat;
    opacity: 0.5; 
    position: fixed;
    z-index: -1;
    left: 10%;
    margin-left: auto;
    margin-right:auto;
    object-fit: contain;
}
h2{
    font-weight:bolder;
    color: white;
    line-height: 0.95;
    
}
b{
    color: rgb(255, 199, 1);
    font-size: 35px;
}
#End-title-b{
    width: 40%;    
}
#End-title{
    font-size: 8vw;
    width: 80%;
    line-height: 0.95;
    margin-top: 4%;
    margin-left:12%
}
#End-title b{
    font-size: 9vw;
}
#Style{
    color: white;
}
#Button-style{
    border: 2px solid rgb(255, 199, 1);
    background-color: rgb(255, 199, 1);
    color: black;
    font-weight: bold;
    width: 8vw;
    border-radius: 0px;
    border: 0px; 
    transition: 0.3s;
}
#Button-style2{
    border: 2px solid rgb(255, 199, 1);
    background-color: rgb(255, 199, 1);
    color: black;
    font-weight: bold;
    width: 8vw;
    border-radius: 0px;
    border: 0px;
    margin-left: 8px;
}
#Button-style:hover{
    box-shadow: 3px 4px 0px rgb(255, 199, 1);
    border: 2px solid rgb(255, 199, 1);
    background-color:black ;
    color: rgb(255, 199, 1);
}
#Button-style2:hover{
    box-shadow: 3px 4px 0px rgb(255, 199, 1);
    border: 2px solid rgb(255, 199, 1);
    background-color:black ;
    color: rgb(255, 199, 1);
}
#end-space{
    margin-top: 6%;
    margin-left: 20%;
}
#contact-space{
    margin-left: 16%;
    font-size:2vw;
}
#contactinfo-space{
    margin-left: 16%;
    color: rgb(255, 199, 1) ;
}
#end-space input{
    width: 30rem;
    border: rgb(255, 199, 1) solid 2px;
    border-radius: 0px;
}
.form-control{
    background-color: rgba(0, 0, 0, 0.515);
    color: white;
    width: 30vw;
}
p b {
    font-size: 3vw;
}
textarea{
    border: rgb(255, 199, 1) solid 2px;     
    height: 10vw;
    border-radius: 0px;
}
#contactinfo-space{
    color: white;
}
#contact-space{
    text-decoration: underline rgb(255, 199, 1);

}
#contact-info2{
    order: 3 !important;
    margin-left: 4% ;
    display: none;
}
</style>