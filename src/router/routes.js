import PersonalComponents from './modules/personal'

export default [
  {
    path: '/',
    redirect: '/personal/copy',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/personal/copy',
        name: 'personalCopy',
        component: () => import('@/views/personal/PersonalView.vue'),
        children: [...PersonalComponents]
      },
      
    ],
  },
]
