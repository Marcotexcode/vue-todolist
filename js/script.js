


const app = new Vue({

    el:'#app',

    data: {

        todoIn: '',

        arrayTodo: [

            'Fare compiti',
            'Fare la spesa',
            'Fare il bucato'
        ]

    },

    methods: {

        addList() {
            this.arrayTodo.push(this.todoIn );
            this.todoIn = '';

            if(this.todoIn = '') {
               // trovare modo
            }
        },

        remove(elemento) {
            this.arrayTodo.splice(elemento, 1)
        }


    }

});