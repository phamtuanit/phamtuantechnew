import Helper from "./utility/component-helper.js"

export default {
    router: new VueRouter({
        routes: [
            { path: '/test', component: Helper.loadComponent('/test.js') },
            { path: '/coverage', component: Helper.loadComponent('/coverage.js') },
            {
                path: '/vue', component: Helper.loadComponent('/vue-study.js', 'vue-study.html')
            },
        ]
    })
}