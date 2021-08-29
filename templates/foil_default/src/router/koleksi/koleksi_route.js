export const Koleksi = {
  path: '/koleksi',
  component: () => import('layouts/default/Default.vue'),
  children: [
    { path: '', component: () => import('pages/koleksi/Koleksi.vue'), name: "koleksi" }
  ]
}
