export interface MenuItem {
    key?: string;
    label?: string;
    icon?: string;
    disabled?: boolean;
    visible?: boolean;
    separator?: boolean;
    children?: MenuItem[];
}