


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

               // trovare modo se e vuoto non aggiunge niente all array
             if (this.todoIn === '') {

               //  this.todoIn.pop()
                alert('hello')
                
             } 
        },

        control() {

        },

        remove(elemento) {
            this.arrayTodo.splice(elemento, 1)
        }


    }

});