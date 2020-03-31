import Vue from 'vue'
import IconSvg from '@/components/IconSvg'
Vue.component('icon-svg', IconSvg)
const req = require.context('./svg', false, /\.svg$/)
req.keys().map(req)
