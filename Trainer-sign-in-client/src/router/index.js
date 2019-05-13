import Router from 'vue-router'

import NewClientForm from '@/components/NewClientForm'
import ClientDetail from '@/components/ClientDetail'

export default new Router({
    routes:[
        {
            path:'/',
            component:NewClientForm
        },
        {path:'/detail/:client',
            name:'detail',
            component:ClientDetail
        }
    ]
})