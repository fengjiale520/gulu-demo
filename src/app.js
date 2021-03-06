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
            loading2: true,
            loading3: false
        }
    }
})

import chai from 'chai'
import spies from 'chai-spies'

const expect = chai.expect
chai.use(spies)

//单元测试

{

    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')
    button.$el.remove()
    button.$destroy
}

{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    button.$el.remove()
    button.$destroy
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    button.$el.remove()
    button.$destroy
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy
}

//moke
{
    const Constructor = Vue.extend(Button)
    const gbutton = new Constructor({
        propsData: {
            icon: 'settings',
        }
    })
    gbutton.$mount()
    let spy = chai.spy(function () { })
    gbutton.$on('click', spy)
    let button = gbutton.$el
    button.click()
    expect(spy).to.have.been.called()
}