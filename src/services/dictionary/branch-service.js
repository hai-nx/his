import axiosClient from '@/utils/axiosClient'

const branchService = {
    getAll() {
        const url = 'api/Branch/GetAll'
        const obj = {
            codeFilter: '',
            nameFilter: ''
        }
        return axiosClient.get(url, obj)
    },
    getById(id) {
        return axiosClient.get('api/Branch/GetById', id)
    },
    createOrEdit(input) {
        return axiosClient.post('api/Branch/CreateOrEdit', input)
    },
    delete(id) {
        return axiosClient.post('api/Branch/Delete', id)
    }
}

export default branchService;