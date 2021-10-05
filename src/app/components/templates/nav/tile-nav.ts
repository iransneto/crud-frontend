export interface TileNav {
    name: string;
    icon: string;
    routerLink: string
}

export const TILES: TileNav[] = [
    { icon: "home", name: 'Início', routerLink: '/'},
    { icon: "storefront", name: 'Produtos', routerLink: '/products' },];
