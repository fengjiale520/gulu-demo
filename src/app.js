import Vue from 'vue'
import vm from './vm'
import Icon from './icon'
import vmGrop from './vm-grop'

Vue.component('g-vm', vm)
Vue.component('g-icon', Icon)
Vue.component('g-vm-grop', vmGrop)

new Vue({
    el: '#app',
    data() {
        return {
            loading1: false,
            loading2: true,
            loading3: false
        }
    }
})

import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)
const expect = chai.expect
//单元测试


{
    const Constructor = Vue.extend(vm)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')

}

{
    const Constructor = Vue.extend(vm)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    vm.$el.remove()
    vm.$destroy
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Constructor = Vue.extend(vm)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Constructor = Vue.extend(vm)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy
}

//moke
{
    const Constructor = Vue.extend(vm)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
    })
    vm.$mount()
    let spy = chai.spy(function () { })
    vm.$on('click', spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
}