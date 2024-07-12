export declare type MenuItemType = 'item' | 'separator';
export declare type MenuItem = {
    key: string,
    icon?: string,
    label?: string,
    tooltip?: string,
    children?: Array<MenuItem>,
    type?: MenuItemType
}
