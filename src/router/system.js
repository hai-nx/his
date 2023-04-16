import { layout_auth }      from '@/utils/constant'

import system               from '@/views/auth/system'
import role                 from '@/views/auth/system/role'
import roleDetail           from '@/views/auth/system/role/detail'
import user                 from '@/views/auth/system/user'
import userDetail           from '@/views/auth/system/user/detail'



const systems = [
    { path: '/system', name: 'system', component: system, meta: { layout: layout_auth } },

    { path: '/roles', name: 'role', component: role, meta: { layout: layout_auth } },
    { path: '/roles/detail', name: 'role-detail', component: roleDetail, meta: { layout: layout_auth },
        children: [
            { path: ':id', name: 'role-detail-view', component: roleDetail },
        ]
    },
    { path: '/users', name: 'user', component: user, meta: { layout: layout_auth } },
    { path: '/users/detail', name: 'user-detail', component: userDetail, meta: { layout: layout_auth },
        children: [
            { path: ':id', name: 'user-detail-view', component: userDetail }
        ],
    },
]

export default systems