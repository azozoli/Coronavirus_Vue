<template>
  <div>
    <h1> Recovered</h1>
    
	  <span>Date: </span>
    <datepicker 
        :default-value="date"
        :format="'dd.MMM.yyyy'" 
		    :week-number="true"
		    @change="onDateChange"
	  >
    </datepicker>
 
    <span> Country: </span>       
	  <dropdownlist
        :data-items="countries"
        :text-field="'Country'"
        @change="onChange"
        :value="dropdownlistValue"
    />
  	<br />
    <br />
 
    <Grid
      :data-items="this.recovered"
      :columns="columns"
    >
    </Grid>
  </div>
</template>


<script>
import { Grid } from '@progress/kendo-vue-grid'
import Service from '@/services/Service.js'
import { DatePicker } from '@progress/kendo-vue-dateinputs'
import { DropDownList } from '@progress/kendo-vue-dropdowns'
import { orderBy } from '@progress/kendo-data-query'
import moment from 'moment'

export default {
  components: {
    Grid,
    datepicker: DatePicker,
    dropdownlist: DropDownList
  },
  data() {
    return {
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      cases: [],
      columns: [
        {
          field: 'Date',
          title: 'Date'
        },
        {
          field: 'Recovered',
          title: 'Recovered cases'
        }
      ],
      dropdownlistValue: '',
      countries: []
    }
  },
  created() {
    Service.getCountries()
      .then(response => {
        this.countries = orderBy(response.data, [
          { field: 'Country', dir: 'asc' }
        ])
        this.dropdownlistValue = this.countries[0]
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      }),
      Service.getCasesByDateCountry()
        .then(response => {
          this.cases = response.data
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
  },
  methods: {
    onChange(event) {
      this.dropdownlistValue = event.target.value
      Service.getCasesByDateCountry(this.date, event.target.value)
        .then(response => {
          this.cases = response.data
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    },
    onDateChange(event) {
      this.date = event.target.value
      Service.getCasesByDateCountry(event.target.value, this.dropdownlistValue)
        .then(response => {
          this.cases = response.data
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  },
  computed: {
    recovered() {
      var formatted = []
      for (let i = 0; i < this.cases.length; i++) {
        let date = moment(String(this.cases[i].Date)).format('MM.DD.YYYY')
        formatted[i] = {
          Date: date,
          Recovered: this.cases[i].Recovered
        }
      }
      return formatted
    }
  }
}
</script>
