export interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}


export interface ScrollFrame {
    clientHeight: number;
    clientWidth: number;
    left: number;
    scrollHeight: number;
    scrollLeft: number;
    scrollTop: number;
    scrollWidth: number;
    top: number;
}