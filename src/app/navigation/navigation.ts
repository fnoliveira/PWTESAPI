export const navigation = [
    {
        'id': 'applications',
        'title': 'Applications',
        'translate': 'NAV.APPLICATIONS',
        'type': 'group',
        'icon': 'apps',
        'children': [
            {
                'id': 'dashboards',
                'title': 'Dashboards',
                'translate': 'NAV.DASHBOARDS',
                'type': 'item',
                'icon': 'dashboard',
                'url': '/apps/dashboards/analytics'
            },
            {
                'id': 'configuracao',
                'title': 'Configurações',
                'translate': 'NAV.CONFIGURACAO',
                'type': 'collapse',
                'icon': 'view_quilt',
                'children': [
                    {
                        'id': 'condominio',
                        'title': 'Condominio',
                        'type': 'item',
                        'url': '/apps/e-commerce/dashboard'
                    },
                    {
                        'id': 'products',
                        'title': 'Products',
                        'type': 'item',
                        'url': '/apps/e-commerce/products',
                        'exactMatch': true
                    },
                    {
                        'id': 'productDetail',
                        'title': 'Product Detail',
                        'type': 'item',
                        'url': '/apps/e-commerce/products/1/printed-dress',
                        'exactMatch': true
                    }
                ]
            }

        ]
    }
];
