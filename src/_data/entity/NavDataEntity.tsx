export interface NavDataItemInterface{
    id: number | string,
    title: string,
    href: string,
}

export interface NavDataInterface{
    id: number | string,
    title: string,
    href: string,
    withDropdown: boolean,
    isOpen: boolean,
    items: NavDataItemInterface[],
}


export const NavDataItemEntity: NavDataItemInterface = {
    id: "",
    title: "",
    href: "",
}


export const NavDataEntity: NavDataInterface = {
    id: "",
    title: "",
    href: "",
    withDropdown: false,
    isOpen: false,
    items: [],
}