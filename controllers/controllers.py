# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request


class TodoappOwl(http.Controller):
    #     @http.route('/todoapp-owl/todoapp-owl/', auth='public')
    #     def index(self, **kw):
    #         return "Hello, world"

    #     @http.route('/todoapp-owl/todoapp-owl/objects/', auth='public')
    #     def list(self, **kw):
    #         return http.request.render('todoapp-owl.listing', {
    #             'root': '/todoapp-owl/todoapp-owl',
    #             'objects': http.request.env['todoapp-owl.todoapp-owl'].search([]),
    #         })

    @http.route('/todoapp/', auth='public')
    def object(self, **kw):
        return http.request.render('cms_frontend_owl.cms_layout', {
            'x_icon': "cms_frontend_owl/static/src/ico/favicon.ico",
            'web_base_url': request.env['ir.config_parameter'].sudo().get_param('web.base.url'),
        })
