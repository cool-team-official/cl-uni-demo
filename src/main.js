import Vue from "vue"
import App from "./App"
import cooluni from 'cl-uni'

Vue.config.productionTip = false

App.mpType = "app"

Vue.use(cooluni)

const app = new Vue({
	...App,
})
app.$mount()
