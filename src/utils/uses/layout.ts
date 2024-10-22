import { reactive, ref } from "vue"
import MenuItem from "@/components/menuitem"

function onPageChange(page: number) {
    console.log("page change")
}
function onPageSizeChange(pageSize: number) {
    console.log("page size change")
}

const config = reactive({
    title: "",
    breadcrumbs: [{}],
    extras: [
        {
            key: 'faq', label: 'Câu hỏi', icon: 'bi bi-question-circle-fill'
        },
        {
            key: 'feedback', label: 'Góp ý', icon: 'bi bi-chat-left-dots'
        }
    ],
    paginator: true, // hiển thị phân trang
    currentPage: 1, // trang hiện tại
    pageSize: 20, // số dòng hiển thị trên 1 trang
    totalRowCount: 0, // tổng số dòng
    onPageChange: onPageChange, //  sự kiện: chọn trang
    onPageSizeChange: onPageSizeChange, // sự kiện: thay đổi số dòng hiển thị trên 1 trang
})

export function useLayout() {
    return config
}