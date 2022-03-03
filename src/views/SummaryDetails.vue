<template>
  <div>
    <h1 class="title">Premium summary data</h1>

    <Grid
      :data-items="this.test_data"
      :columns="columns"
    >
    </Grid>
  </div>
</template>
<script>
import Service from '@/services/Service.js'
import { Grid } from '@progress/kendo-vue-grid'

export default {
  props: ['id'],
  components: {
    Grid
  },
  data() {
    return {
      summary: [],
      columns: [
        {
          field: 'Date',
          title: 'Date'
        },
        {
          field: 'TotalCasesPerMillion',
          title: 'Total cases per million'
        },
        {
          field: 'TotalCasesPerMillion',
          title: 'Total cases per million'
        },
        {
          field: 'NewCasesPerMillion',
          title: 'New cases per million'
        },
        {
          field: 'TotalDeathsPerMillion',
          title: 'Total deaths per million'
        },
        {
          field: 'NewDeathsPerMillion',
          title: 'New cases per million'
        },

        {
          field: 'CaseFatalityRatio',
          title: 'Case fatality ratio'
        }
      ]
    }
  },
  created() {
    Service.getCountrySummary(this.id)
      .then(response => {
        this.summary = response.data[0]
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>
