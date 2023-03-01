const MyNameApp = {
    data(){
        return{
            nome: "",
            idade: 30,
            inputNome:""
        }
    },
    methods:{
        salvarNome(e){

            e.preventDefault();
            //console.log(this.inputNome);

            this.nome = this.inputNome;

        }
    }
}

Vue.createApp(MyNameApp).mount("#app")