<template>
    <div>
      <nav id="footer">
        <div>
          <footer>
            <div id="foot"><div class="cr">Copyright © {{ date()}}<br> By Marcus Adonis</div> </div>
          </footer>
        </div>
      </nav> 
    </div>
  </template>
  
  <script>
  export default {

  methods:{
    date() {
    const d = new Date();
    return d.getFullYear();
    }
  }
}
  </script>
  <style>
  @media screen and (max-width:750px){
.cr{
  font-size: 14px;
}
}
    /* -------- footer -------- */
    
#foot{
    position: relative;
    border:solid 3px white;
    margin: 0.7%;
    width: auto;
    height: 8vh;
    margin-bottom: 1.5%;
    margin-left: 1.2%;
    margin-right: 1.2%;
    text-align: center;
    font-size: 1.7vh;
    line-height: 1.1;
    color: rgb(60, 60, 60);
    align-content: center;
    background: #151515;
}
@media screen and (min-width:1550px){
  #foot{
    margin: 11px;
    margin-bottom: 30px;
    margin-left: 20px;
    margin-right: 20px;
    height: 8vh;
    overflow: hidden !important;
  }
  #foot, .cr{
    font-size: 15px ;
  }
}

  </style>