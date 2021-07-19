const app = new Vue({
    el: '#app',
    data: {
        edit: false,
        tarefa: null,  // ou tarefa: ''
        tarefas: [],
        inputFocus: true
    },
    methods: {
      adicionaTarefa () {
        if(this.tarefa === null){
            window.alert('O campo de Texto  está vazio')
            this.deletarTarefa(index)
            this.saveTarefa();
        }
        this.tarefas.push(this.tarefa);
        this.tarefa = '';
        this.saveTarefa();
      },

      deletarTarefa (index) {
        this.tarefas.splice(index, 1);
        this.saveTarefa(); 
      },

       editaTarefa(index, tarefa) {
        this.edit = true 
        this.tarefa = tarefa
        this.selecionaIndex = index
    },

    atualizaTarefa(){
        this.tarefas.splice(this.selecionaIndex, 1, this.tarefa)
        this.tarefa =''
        this.edit = false
        this.saveTarefa();
    },

      saveTarefa () {
        const parsed = JSON.stringify(this.tarefas);
        localStorage.setItem('tarefas', parsed);
      },
    },
    mounted () {
        if (localStorage.getItem('tarefas')) {
          try {
            this.tarefas = JSON.parse(localStorage.getItem('tarefas'));
          } catch (error) {
            localStorage.removeItem('tarefas');
          }
        }
    },
})

Vue.directive("focus", {
    inserted: function(el) {
      // Focar o elemento
      el.focus()
    },
    update: function(el, binding) {
      
      var value = binding.value;
      if (value) {
     
        Vue.nextTick(function() {
          el.focus();
        });
      }
    }
  })

//    === ANIMAÇÕES  ===

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});
ScrollReveal().reveal('h1', { delay: 200 });
ScrollReveal().reveal('.h-img', { delay: 400 });
// 2 coluna
ScrollReveal().reveal('.form', { delay: 500 });
ScrollReveal().reveal('h2', { delay: 400 });
//  tarefa
ScrollReveal().reveal('ol', { delay: 400 });
