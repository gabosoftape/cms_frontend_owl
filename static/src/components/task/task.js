odoo.define('cms_frontend_owl/static/src/components/task/task.js', function (require) {
    'use strict';

    const {Component} = owl;
    const { useRef, useDispatch, useState, useStore } = owl.hooks;

    const components = {};

    class Task extends Component {
        /**
         * @override
         */
        constructor(...args) {
            super(...args);
        }
        dispatch = useDispatch();
    }


    Object.assign(Task, {
        components,
        props: {
            task: Object,
        },
        template: 'cms_frontend_owl.task',
    });

    return Task;

});
