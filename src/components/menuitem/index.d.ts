export interface MenuItem {
    key?: string;
    label?: string;
    icon?: string;
    children?: MenuItem[];
    disabled?: boolean;
    visible?: boolean;
    url?: string;
    separator?: boolean;
}