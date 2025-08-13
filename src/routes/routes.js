import { createRouter, createWebHashHistory } from 'vue-router'
import card from "../components/card.vue"


const routes=[
    {
    path: '/',
    name: 'card',
    component: card
  }  
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router  