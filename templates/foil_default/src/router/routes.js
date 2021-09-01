import {Utama} from "src/router/utama/utama_route"
import {Koleksi} from "src/router/koleksi/koleksi_route"

const routes = [
  Utama,
  Koleksi,
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
