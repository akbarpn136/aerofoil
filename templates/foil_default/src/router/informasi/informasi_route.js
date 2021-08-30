export const Informasi = {
  path: '/informasi',
  component: () => import('layouts/default/Default.vue'),
  children: [
    { path: '', component: () => import('pages/informasi/Informasi.vue'), name: "informasi" }
  ]
}
