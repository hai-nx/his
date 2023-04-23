import axiosClient from '@/utils/axiosClient'

const departmentService = {
    getAll() {
        const url = 'api/SDepartment/GetAll'
        const obj = {
            codeFilter: '',
            nameFilter: ''
        }
        return axiosClient.get(url, obj)
    },
    getById(id) {
        return axiosClient.get('api/SDepartment/GetById', id)
    },
    createOrEdit(input) {
        return axiosClient.post('api/SDepartment/CreateOrEdit', input)
    },
    delete(id) {
        return axiosClient.post('api/SDepartment/Delete', id)
    }
}

export default departmentService;