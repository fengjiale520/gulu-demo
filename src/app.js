import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGrop from './button-grop'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-grop', ButtonGrop)

new Vue({
    el: '#app',
    data() {
        return {
            loading1: false,
            loading2: false,
            loading3: false
        }
    }
})