<template>
  <div class="events">
    <h1>Events For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import axios from axios

export default {
  name: 'Home',
  components: {
    EventCard
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    axios.get("https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3")
    .then(response => {console.log(response.data)})
    .catch(error=>{console.log(error)})
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
