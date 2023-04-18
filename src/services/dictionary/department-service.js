import axiosClient from '@/utils/axiosClient'

const departmentService = {
    getAll() {
        const url = 'api/Department/GetAll'
        const obj = {
            codeFilter: '',
            nameFilter: ''
        }
        return axiosClient.get(url, obj)
    },
    getById(id) {
        return axiosClient.get('api/Department/GetById', id)
    },
    createOrEdit(input) {
        return axiosClient.post('api/Department/CreateOrEdit', input)
    },
    delete(id) {
        return axiosClient.post('api/Department/Delete', id)
    }
}

export default departmentService;