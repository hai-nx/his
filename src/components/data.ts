export interface NavItem {
    id: string,
    label: string,
    icon ?: string,
    path ?: string,
    children ?: Array<NavItem>
}