import Helper from "./utility/component-helper.js"
export default {
  router: new VueRouter({
    routes: [
      { path: '/shop', component: Helper.loadComponent('shop.js') },
      { path: '/card', component: Helper.loadComponent('card.js') },
    ]
  })
}
