export const navigation = [
    {
        'id'       : 'applications',
        'title'    : 'Applications',
        'translate': 'NAV.APPLICATIONS',
        'type'     : 'group',
        'icon'     : 'apps',
        'children' : [
           {
                'id'       : 'e-commerce',
                'title'    : 'E-Commerce',
                'translate': 'NAV.ECOMMERCE',
                'type'     : 'collapse',
                'icon'     : 'shopping_cart',
                'url'  : '/apps/e-commerce/dashboard',
                'children' : [
                    {
                        'id'   : 'dashboard',
                        'title': 'Dashboard',
                        'type' : 'item',
                        'url'  : '/apps/e-commerce/dashboard'
                    },
                    {
                        'id'        : 'products',
                        'title'     : 'Products',
                        'type'      : 'item',
                        'url'       : '/apps/e-commerce/products',
                        'exactMatch': true
                    },
                    {
                        'id'        : 'productDetail',
                        'title'     : 'Product Detail',
                        'type'      : 'item',
                        'url'       : '/apps/e-commerce/products/1/printed-dress',
                        'exactMatch': true
                    }
                ]
            }
        ]
    }
];
