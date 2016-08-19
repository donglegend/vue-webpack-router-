import Index from './views/index.vue'
import Login from './views/login.vue'
import List from './views/list.vue'


export default {
    '/index': {
        component: Index
    },
    '/login': {
    	component: Login
    },
    '/list': {
    	component: List
    }
}