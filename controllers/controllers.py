# -*- coding: utf-8 -*-
from odoo import http


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
        return http.request.render('todoapp-owl.home', {
            'home': "obj"
        })
