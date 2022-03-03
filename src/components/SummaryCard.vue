<template>
  <router-link class="summary-link" :to="{ name: 'summary-show', params: { id: country.Slug } }">
    <div class="summary-card -shadow">
      <h4 class="title">{{ country.Country }}  {{ country.CountryCode }}</h4>
      <p class="title">New confirmed:   {{ country.NewConfirmed }}</p>
      <p class="title">Total confirmed: {{ country.TotalConfirmed }}</p>
      <p class="title">New deaths:      {{ country.NewDeaths }}</p>
      <p class="title">Total deaths:    {{ country.TotalDeaths }}</p>
      <p class="title">New decovered:   {{ country.NewRecovered }}</p>
      <p class="title">Total recovered: {{ country.TotalRecovered }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    country: Object
  }
}
</script>

<style scoped>
.summary-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.summary-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.summary-card > .title {
  margin: 0;
}
.summary-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
