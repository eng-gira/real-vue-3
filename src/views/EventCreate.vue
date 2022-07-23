<template>
  <div> 
    <h1>Create an Event, {{user.name + " - " + user.id}}</h1>

    <ul><li v-for="cat in categories" :key="cat">{{cat}}</li></ul>

    <!-- <p>There are {{catLength}} categs.</p> -->
    <p>An event is: {{getEventById(2)}}</p>
    <h5>You have {{$store.getters.catLength}} categories.</h5>
  </div>
</template>

<script>
  import {mapState, mapGetters} from "vuex"

  export default {
    computed: 
    // {
      // userName() {
      //   return this.$store.state.user.name
      // },
      // userID() {
      //   return this.$store.state.user.id
      // }
    // }   

      // mapState({
      //   userName: state => state.user.name,
      //   userID: state => state.user.id,
      //   categories: state => state.categories,
      // })
    
    // mapState({
    //   user: "user",
    //   categories: "categories"
    // })

    // mapState(["user", "categories"])

    {
      // catLength(){
      //   return this.$store.getters.catLength
      // },
      // getEvent() {
      //   return this.$store.getters.getEventById
      // },
      ...mapGetters(["getEventById"]),
      ...mapState(["user", "categories"])
    }
  }
</script>


<style scoped>

</style>