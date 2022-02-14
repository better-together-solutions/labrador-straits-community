import axios from 'axios'
import Vue from 'vue'
import VueLoading from 'crip-vue-loading'

Vue.use(VueLoading, {
  axios,
  applyOnRouter: false,
  color: '#007a33',
  height: '3px',
})
