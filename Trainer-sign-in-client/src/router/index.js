import Router from 'vue-router'

import Homepage from '@/components/Homepage'
import Page2 from '@/components/Page2'

export default new Router({
    routes:[
        {
            path:'/',
            component:Homepage
        },
        {path:'/detail/:client',
            name:'detail',
            component:Page2
        }
    ]
})