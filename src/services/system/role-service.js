import axiosClient from '@/utils/axiosClient'

const roleService = {
    getAll() {
        const url = 'api/Role/GetAll'
        const obj = {
            codeFilter: '',
            nameFilter: ''
        }

        return axiosClient.get(url, obj)
    },
    getById(id) {
        console.log(id);
    },
    createOrEdit(payload) {
        console.log(payload)
    },
    delete(id) {
        console.log(id);
    }
};


export default roleService;