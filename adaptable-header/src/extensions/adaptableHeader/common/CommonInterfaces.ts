export interface NavigationItem{
    name: string;
    url: string;
    description:string;
    target: string;
    iconName?: string;
    className?: string;
}

export interface PageHeaderConfig{
    id: number;
    pageName:string;
    componentsToShow: string[];
    styleInjection: boolean;
    stylesToInject:string;
}