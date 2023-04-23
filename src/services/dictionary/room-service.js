import axiosClient from '@/utils/axiosClient'

const roomService = {
    getAll() {
        const url = 'api/SRoom/GetAll'
        const obj = {
            codeFilter: '',
            nameFilter: ''
        }
        return axiosClient.get(url, obj)
    },
    getById(id) {
        return axiosClient.get('api/SRoom/GetById', id)
    },
    createOrEdit(input) {
        return axiosClient.post('api/SRoom/CreateOrEdit', input)
    },
    delete(id) {
        return axiosClient.post('api/SRoom/Delete', id)
    }
}

export default roomService;