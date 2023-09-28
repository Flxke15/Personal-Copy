import gunPersonalComponents from './modules/personal'

export default [
  {
    path: '/',
    redirect: '/gun/personal/request',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/gun/personal/request',
        name: 'personalRequest',
        component: () => import('@/views/personal/PersonalView.vue'),
        children: [...gunPersonalComponents]
      },
    ],
  },
]