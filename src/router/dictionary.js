import { layout_auth } from '@/utils/constant'

import branch               from '@/views/auth/dictionary/branch'
import branchDetail         from '@/views/auth/dictionary/branch/detail'

import department               from '@/views/auth/dictionary/department'
import departmentDetail         from '@/views/auth/dictionary/department/detail'


const dictionaries = [
    { path: '/branchs', name: 'branch', component: branch, meta: { layout: layout_auth } },
    { path: '/branchs/detail', name: 'branch-detail', component: branchDetail, meta: { layout: layout_auth },
        children: [
            { path: ':id', name: 'branch-detail-view', component: branchDetail },
        ]
    },

    { path: '/departments', name: 'department', component: department, meta: { layout: layout_auth } },
    { path: '/departments/detail', name: 'department-detail', component: departmentDetail, meta: { layout: layout_auth },
        children: [
            { path: ':id', name: 'department-detail-view', component: departmentDetail },
        ]
    },
]

export default dictionaries

