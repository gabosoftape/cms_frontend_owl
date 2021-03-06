# -*- coding: utf-8 -*-
{
    'name': "CMS PORTAL OWL",

    'summary': """
        odoo owl demo""",

    'description': """
    """,

    'author': "gabriel pabon",
    'website': "https://github.com/findsomeoneyys",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/14.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'web', 'website'],

    # always loaded
    'data': [
        'security/ir.model.access.csv',
        'views/views.xml',
        'views/task.xml',
        'views/templates.xml',
        'views/template.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
    'qweb': [
        "static/src/components/app/app.xml",
        "static/src/components/task/task.xml",
        "static/src/xml/home.xml",
    ],
    'application': True,
}
