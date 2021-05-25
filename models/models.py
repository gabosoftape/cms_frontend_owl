# -*- coding: utf-8 -*-

from odoo import models, fields, api


class TodoTask(models.Model):
    _name = 'todo.task'
    _description = 'Todo APP tasks'

    name = fields.Char(required=True)
    is_completed = fields.Boolean()
    description = fields.Text()

    @api.model
    def get_tasks_list(self):
        all_tasks = self.search([])
        res = [{
            'id': t.id,
            'title': t.name,
            'isCompleted': t.is_completed,
        } for t in all_tasks]
        return res

    def write(self, vals):

        res = super(TodoTask, self).write(vals)

        return res

