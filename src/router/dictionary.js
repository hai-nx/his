import { layout_auth } from '@/utils/constant'

import branch               from '@/views/auth/dictionary/branch'
import branchDetail         from '@/views/auth/dictionary/branch/detail'


const dictionaries = [
    { path: '/branchs', name: 'branch', component: branch, meta: { layout: layout_auth } },
    { path: '/branchs/detail', name: 'branch-detail', component: branchDetail, meta: { layout: layout_auth },
        children: [
            { path: ':id', name: 'branch-detail-view', component: branchDetail },
        ]
    },
]

export default dictionaries

