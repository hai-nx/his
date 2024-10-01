import { ref } from "vue"
import { MenuItem } from '../../components/menuitem';

const breadcrumbs = ref<MenuItem[]>()
const extras = ref<MenuItem[]>()

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

export function useLayout() {
    return {
        breadcrumbs,
        extras,
        loadBreadcrumb,
        loadExtra
    }
}