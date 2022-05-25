import {createRouter, createWebHistory} from 'vue-router'
import Navbar from '../components/Navbar.vue'
import NoteView from '../views/NotesView.vue'
import StatsView from '../views/StatsView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'navbar',
            component: Navbar,
            children: [
                {
                    path: '/',
                    name: 'note',
                    component: NoteView,
                },
                {
                    path: '/stats',
                    name: 'stats',
                    component: StatsView,
                },
            ],
        },
    ],
})

export default router
