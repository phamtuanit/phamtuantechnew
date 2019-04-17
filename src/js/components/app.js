const router = new VueRouter({
    routes: [
        { path: '/test', component: () => import('./js/components/test.js') },
        { path: '/coverage', component: () => import('./js/components/coverage.js') },
        { path: '/vue', component: () => import('./js/components/vue-study.js') },
    ]
})

var appvm = new Vue({
    router,
    el: '#app',
    data: function () {
        return {
            title: "Phạm Tuân's Blog",
            message: "Welcome to Phạm Tuân's Blog"
        }
    },
    components: {
        "main-nav": () => import('./js/components/navigation.js'),
        "toast-noti": () => import('./js/components/toast.js'),
    },
    created: function () {
        // `this` trỏ đến đối tượng Vue hiện hành
        console.log('Vue-App initialized: ' + this.$data.title);
    },
});