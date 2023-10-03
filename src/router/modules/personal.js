import Copy from '@/views/personal/copy/Copy.vue'
import Copy101 from '@/views/personal/copy101/Copy101.vue'

export default [
  {
    path: '/personal/copy',
    name: 'personalCopy',
    component: Copy,
    meta: { title: 'คัดสำเนา'}
  },
  {
    path: '/personal/copy101',
    name: 'personalCopy101',
    component: Copy101,
    meta: { title: 'คัดสำเนา101-label'}
  },
]
