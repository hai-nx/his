import { ref } from "vue"
import { MenuItem } from '../../components/menuitem';

const breadcrumbs = ref<MenuItem[]>()
const extras = ref<MenuItem[]>()

const title = ref('')
const currentPage = ref(1)
const pageSize = ref(20)
const totalRowCount = ref(0)

function loadBreadcrumb() {
    console.log('asdasd ád')
}
function loadExtra() {
    extras.value = [
        {
            key: 'faq', label: 'Câu hỏi', icon: 'bi bi-question-circle-fill'
        },
        {
            key: 'feedback', label: 'Góp ý', icon: 'bi bi-chat-left-dots'
        }
    ]
}

function initData() {
    loadBreadcrumb()
    loadExtra()
}

// function pageSizeChanged(){
// }

// function currentPageChanged(){
// }

export function useLayout() {
    return {
        breadcrumbs,
        extras,
        initData,
        loadBreadcrumb,
        loadExtra
    }
}