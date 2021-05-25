odoo.define('todoapp_owl.home', function (require) {
    "use strict";

    var AbstractAction = require('web.AbstractAction');
    var core = require('web.core');
    var rpc = require('web.rpc');

    const {ComponentWrapper, WidgetAdapterMixin} = require('web.OwlCompatibility');

    const {Component, Store, mount} = owl;
    const {xml} = owl.tags;
    const {whenReady} = owl.utils;

    class AppWrapper extends ComponentWrapper {
    }

    const components = {
        App: require('todoapp_owl/static/src/components/app/app.js'),
    };

    async function fetch_task_list() {
        const tasks_list = rpc.query({
            model: 'todo.task',
            method: 'get_tasks_list',
            args: [],
        });
        return tasks_list
    }

    async function create_task(vals) {
        return rpc.query({
            model: 'todo.task',
            method: 'create',
            args: [vals],
        });
    }

    async function update_task(task_id, vals) {
        return rpc.query({
            model: 'todo.task',
            method: 'write',
            args: [[task_id], vals],
        });
    }

    async function unlink_task(task_id) {
        return rpc.query({
            model: 'todo.task',
            method: 'unlink',
            args: [[task_id]],
        });
    }

    const actions = {
        async addTask({state}, title) {
            title = title.trim();
            if (title) {
                const new_task_id = await create_task({
                    'name': title,
                    'is_completed': false,
                })
                const task = {
                    id: new_task_id,
                    title: title,
                    isCompleted: false,
                };
                state.tasks.push(task);
                state.nextId = new_task_id + 1;
            }
        },
        async toggleTask({state}, id) {
            const task = state.tasks.find((t) => t.id === id);
            await update_task(task.id, {'is_completed': !task.isCompleted, 'name': task.title});
            task.isCompleted = !task.isCompleted;
        },
        async deleteTask({state}, id) {
            const index = state.tasks.findIndex((t) => t.id === id);
            const res = await unlink_task(id);
            if (res) {
                state.tasks.splice(index, 1);
            }
        },
    };


    var TodoAppHome = AbstractAction.extend(WidgetAdapterMixin, {
        template: 'todoapp_owl.home',

        /**
         * @override
         */
        init() {
            console.log('init');
            this._super(...arguments);
            this.component = undefined;
            this.env = undefined;
        },
        /**
         * @override
         */
        async start() {
            owl.config.mode = "dev";

            console.log('start');
            await this._super(...arguments);

            this.component = new AppWrapper(
                this,
                components.App,
                {}
            );

            this.env = this.component.env;

            const tasks = await fetch_task_list();

            const initialState = {
                nextId: tasks.length + 1,
                tasks: tasks,
            };

            this.component.env.store = new Store({
                env: this.env,
                actions,
                state: initialState,
            });

            await this.component.mount(this.el);
        },
    });

    core.action_registry.add('todoapp_owl.home', TodoAppHome);

    return TodoAppHome;

});
    