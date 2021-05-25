odoo.define('todoapp_owl/static/src/components/app/app.js', function (require) {
    'use strict';

    // const useStore = require('mail/static/src/component_hooks/use_store/use_store.js');

    const { Component, Store } = owl;
    const {useRef, useDispatch, useStore, useState} = owl.hooks;

    const components = {
        Task: require('todoapp_owl/static/src/components/task/task.js')
    };

    class App extends Component {
        /**
         * @override
         */
        constructor(...args) {
            super(...args);
        }

        inputRef = useRef("add-input");
        filter = useState({value: "all"});
        dispatch = useDispatch();
        tasks = useStore((state) => state.tasks);

        mounted() {
            this.inputRef.el.focus();
        }

        addTask(ev) {
            // 13 is keycode for ENTER
            if (ev.keyCode === 13) {
                this.dispatch("addTask", ev.target.value);
                ev.target.value = "";
            }
        }

        get displayedTasks() {
            switch (this.filter.value) {
                case "active":
                    return this.tasks.filter((t) => !t.isCompleted);
                case "completed":
                    return this.tasks.filter((t) => t.isCompleted);
                case "all":
                    return this.tasks;
            }
        }

        setFilter(filter) {
            this.filter.value = filter;
        }

    }


    Object.assign(App, {
        components,
        props: {},
        template: 'todoapp_owl.app',
    });

    return App;

});
