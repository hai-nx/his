import { ref } from "vue"

export default function () {
    const columns = ref([])

    const getCollumn = async () => {
        console.log("get column")
    }

    // return ra các giá trị để component sử dụng
    return {
        columns,
        getCollumn
    }
}