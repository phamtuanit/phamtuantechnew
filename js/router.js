import Helper from "./utility/component-helper.js"

export default {
    router: new VueRouter({
        routes: [
            { path: '/test', component: Helper.loadComponent('/test.js') },
            { path: '/coverage', component: Helper.loadComponent('/coverage.js') },
            { path: '/blog', component: Helper.loadComponent('/blog.js') },
        ]
    })
}
