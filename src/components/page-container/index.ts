import { MenuItem } from "@/components/menuitem"
export interface PageContainerConfig {
    title?: String,
    breadcrumbs?: MenuItem[],
    extras?: MenuItem[],
    paginator?: Boolean,
    currentPage?: Number,
    pageSize?: Number,
    totalRowCount?: Number,
    onPageChange?: Function,
    onPageSizeChange?: Function
}