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
                        'url': '/apps/meu-condominio/condominios',
                    }
                ]
            }

        ]
    }
];
