export const Utama = {
  path: '/',
  component: () => import('layouts/default/Default.vue'),
  children: [
    { path: '', component: () => import('pages/utama/Utama.vue'), name: "utama" }
  ]
}
