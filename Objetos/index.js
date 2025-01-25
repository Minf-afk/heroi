const pessoa = {
    nome: 'Mateus',
    idade: 23,

    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} `)
    }
}

pessoa.nome = 'Doralice'
pessoa.idade = 45

pessoa.descrever();