<template>
  <div>
    <h1>Summary</h1>
    <SummaryCard v-for="country in summary.Countries" :key="country.CountryCode" :country="country"/>
  </div>
</template>

<script>
import SummaryCard from '@/components/SummaryCard.vue'
import Service from '@/services/Service.js'

export default {
  components: {
    SummaryCard
  },
  data() {
    return {
      summary: []
    }
  },
  created() {
    Service.getSummary()
      .then(response => {
        this.summary = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>
