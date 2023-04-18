import axiosClient from '@/utils/axiosClient'

const roomService = {
    getAll() {
        const url = 'api/Room/GetAll'
        const obj = {
            codeFilter: '',
            nameFilter: ''
        }
        return axiosClient.get(url, obj)
    },
    getById(id) {
        return axiosClient.get('api/Room/GetById', id)
    },
    createOrEdit(input) {
        return axiosClient.post('api/Room/CreateOrEdit', input)
    },
    delete(id) {
        return axiosClient.post('api/Room/Delete', id)
    }
}

export default roomService;