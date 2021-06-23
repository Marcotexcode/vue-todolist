


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
            
            (this.todoIn === '') ? alert("Nessun Todo") : this.arrayTodo.push(this.todoIn);

            this.todoIn = '';  
            
        },

       

        remove(elemento) {
            this.arrayTodo.splice(elemento, 1);
        },


    }

});