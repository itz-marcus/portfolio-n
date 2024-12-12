<template>
  <div>
    <nav id="navbar">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link id="nav3" to="/resume">Edu. & Work</router-link>
          <router-link to="/projects">Projects</router-link>
          <!-- <router-link to="/case-studies">Cases</router-link> -->
          <router-link id="nav6" to="/contact">Contact</router-link>
    </nav> 
  </div>
</template>

<script>
export default {
 
}
</script>

<style scoped>
/* -------- nav bar -------- */
nav a {
  /* margin: 6%; */
  font-weight: bold;
  color: white;
  text-decoration: none;
  rotate: -90deg;
  transition: 0.3s;
  font-size: 2.5vh;
}
nav a:hover{
  color: rgb(255, 199, 1);
  text-decoration:underline;
}
nav a.router-link-exact-active {
  color:rgb(255, 199, 1);
}
#navbar{
    height: 75vh;
    display: flex;
    justify-content:space-evenly;
    flex-direction: column;
    gap: 5%;
    width: 40px;
    margin-left: 1vw;
    margin-top: 1vw;
}
#nav3 {
    margin-top: 150%;
    margin-bottom: 70%;
}
#nav6 {
    margin-top: 40%;
}
</style>
