import axiosClient from '@/utils/axiosClient'

const branchService = {
    getAll() {
        const url = 'api/SBranch/GetAll'
        const obj = {
            codeFilter: '',
            nameFilter: ''
        }
        return axiosClient.get(url, obj)
    },
    getById(id) {
        return axiosClient.get('api/SBranch/GetById', id)
    },
    createOrEdit(input) {
        return axiosClient.post('api/SBranch/CreateOrEdit', input)
    },
    delete(id) {
        return axiosClient.post('api/SBranch/Delete', id)
    }
}

export default branchService;