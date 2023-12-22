import { ref } from "vue"

function loadSource () {
    console.log("load source")
}

export default function useLayout (locateLoadSource = loadSource) {
    const columns = ref([]); // cấu hình cột
    const title = ref(""); // tiêu đề
    const pageSize = ref(20); // số dòng trên 01 trang
    const totalRowCount = ref(0); // tổng số dòng kết quả
    const currentPage = ref(1); // trang hiện tại

    // xử lý lấy cấu hình cột
    function loadColumnTemplate () {
        console.log("load column template")
    }

    // xử lý thay đổi số dòng trên 01 trang
    function onPageSizeChange(value: number) {

        console.log("onPageSizeChange: ", value)

        pageSize.value = value;
        // currentPage.value = 1;
        // locateLoadSource();
    }

    // xử lý thay đổi trang đang xem
    function onCurrentPageChange(value: number) {
        currentPage.value = value
        locateLoadSource();
    }

    return {
        columns,
        title,
        pageSize,
        totalRowCount,
        currentPage,

        loadColumnTemplate,

        onPageSizeChange,
        onCurrentPageChange
    };
}