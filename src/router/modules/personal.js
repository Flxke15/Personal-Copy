import Request from '@/views/personal/request/Request.vue'
import Manage from '@/views/personal/manage/Manage.vue'
import Copy from '@/views/personal/copy/Copy.vue'

export default [
  {
    path: '/gun/personal/request',
    name: 'personalRequest',
    component: Request,
    meta:{ titile: 'ทะเบียนปืน - คำขอปืนบุคคล'}
  },
  {
    path: '/gun/personal/manage',
    name: 'personalManage',
    component: Manage,
    meta:{ titile: 'ทะเบียนปืน - จัดการคำขอ'}
  },
  {
    path: '/gun/personal/copy',
    name: 'personalCopy',
    component: Copy,
    meta:{ titile: 'คัดสำเนาคนและบ้าน'}
  },
]