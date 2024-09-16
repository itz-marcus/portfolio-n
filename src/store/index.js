import { createStore } from 'vuex'

export default createStore({
  state: {
    aboutMe:null,
    projects:null,
    education:null,
    skills:null,
    workExp:null,
    testimonials:null
  },
  getters: {
  },
  mutations: {
    setAboutMe(state,payload){
      state.aboutMe = payload 
     },
     setProjects(state,payload){
      state.projects = payload 
     },
     setEducation(state,payload){
      state.education = payload 
     },
     setSkills(state,payload){
      state.skills = payload 
     },
     setWorkExp(state,payload){
      state.workExp = payload 
     },
     setTestimonial(state,payload){
      state.testimonials = payload 
     }
  },
  actions: {
    async getAboutMe({commit}){
      try {
      let fetchInfo = await fetch('https://itz-marcus.github.io/First_API/data/data.json')
      let data = await fetchInfo.json()
      console.log(data);
      let {aboutMe,projects,education,skills,workExp,testimonials} = data
      commit('setAboutMe',aboutMe)
      commit('setProjects',projects)
      commit('setEducation',education)
      commit('setSkills',skills)
      commit('setWorkExp',workExp)
      commit('setTestimonial',testimonials)  
      } catch (error){
      console.error(error)
      }
    },
  },
  modules: {
  }
})