# -*- coding: utf-8 -*-
# from odoo import http


# class Todoapp-owl(http.Controller):
#     @http.route('/todoapp-owl/todoapp-owl/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/todoapp-owl/todoapp-owl/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('todoapp-owl.listing', {
#             'root': '/todoapp-owl/todoapp-owl',
#             'objects': http.request.env['todoapp-owl.todoapp-owl'].search([]),
#         })

#     @http.route('/todoapp-owl/todoapp-owl/objects/<model("todoapp-owl.todoapp-owl"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('todoapp-owl.object', {
#             'object': obj
#         })
