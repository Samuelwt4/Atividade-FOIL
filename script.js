class Pessoa {
    constructor(nome, apelido, idade, cidade, anoNascimento, signo, descricao) {
        this.nome = nome;
        this.apelido = apelido;
        this.idade = idade;
        this.cidade = cidade;
        this.anoNascimento = anoNascimento;
        this.signo = signo;
        this.descricao = descricao;
    }

    apresentacao() {
        return `Olá, meu nome é ${this.nome}${this.apelido ? ' (' + this.apelido + ')' : ''}, tenho ${this.idade} anos, moro em ${this.cidade}, nasci em ${this.anoNascimento}${this.signo ? ' e sou do signo de ' + this.signo : ''}.
${this.descricao}`;
    }
}

// Pai
class Pai extends Pessoa {
    atuacao() {
        return `${this.nome} trabalha em uma empresa/ indústria na parte da ferramentaria .`;
    }
}

// Mãe
class Mae extends Pessoa {
    exercao() {
        return `${this.nome} é professora aposentada que atua ainda na profissão que mais ama.`;
    }
}

// Eu
class Filho extends Pessoa {
    Infancia() {
        return `${this.nome} adorava brincar com amigos e sozinho, sempre inventando algo novo para fazer. Grande parte da infância foi no interior 
construindo invenções, envolvido com animais, e realizando atividades como: andar de bicicleta, trator, moto, jogar futebol, pescar, tomar banho de chuva...
Uma memória marcante foi a capa do Superman, que brincava por horas usando ela, e quando chegava a hora de tirar era uma briga!`;
    }

    Passado() {
        return [
            'Mudança para morar no Recanto Maestro.',
            'Estudando no Faculdade de Sistemas de Informação (6º semestre).',
            'Trabalhando na empresa Moinho Sul.',
            'Atualmente me econtro na terceira fatia da pizza'
        ];
    }

    Futuro() {
        return [
            'desejo abrir minha própria empresa e me especializar em segurança ou infraestrutura.',
            'Após a faculdade, pretendo seguir carreira acadêmica com mestrado e seguir ampliando cada vez mais meus conhecimentos.'
        ];
    }
}

// insert de dados
const timelineData = [];

const pai = new Pai("Carlos", null, 53, "Panambi", 1971, null, "Uma pessoa que adora esportes, ideias novas, sabe demonstrar amor ajudando e agradando, muito dedicado à família, as vezes um pouco rígido.");
const mae = new Mae("Sandra", null, 52, "Panambi", 1973, null, "Pessoa amorosa, atenciosa sempre querendo ajudar em tudo e dar seu melhor, é emocional e cuida de quem ama.");
const samuel = new Filho("Samuel", "Samuca", 20, "Recanto Maestro", 2004, "Sagitário", "Criativo, gosto de aprender, inventar coisas novas, sou persistente nos meus objetivos, uma pessoa muito tranquila que sempre busca estar evoluindo em todos aspectos.");

timelineData.push(
    { lado: 'left', tipo: 'past', titulo: 'Pai - Carlos', conteudo: pai.apresentacao() + '\n' + pai.atuacao() },
    { lado: 'right', tipo: 'past', titulo: 'Mãe - Sandra', conteudo: mae.apresentacao() + '\n' + mae.exercao() },
    { lado: 'left', tipo: 'past', titulo: 'Nascimento', conteudo: samuel.apresentacao() + '\n' + samuel.Infancia() },
    { lado: 'right', tipo: 'past', titulo: 'Realizações', conteudo: samuel.Passado().join('\n') },
    { lado: 'left', tipo: 'future', titulo: 'Futuro / Em Andamento', conteudo: samuel.Futuro().join('\n') }
);

// Cards
const timeline = document.querySelector('.timeline');

timelineData.forEach(item => {
    const container = document.createElement('div');
    container.className = 'container ' + item.lado;

    const content = document.createElement('div');
    content.className = 'content ' + item.tipo;
    content.innerHTML = `<h2>${item.titulo}</h2><pre>${item.conteudo}</pre>`;

    container.appendChild(content);
    timeline.appendChild(container);
});

// Animações
window.addEventListener('scroll', () => {
    const contents = document.querySelectorAll('.content');
    const triggerBottom = window.innerHeight * 0.9;

    contents.forEach(content => {
        const contentTop = content.getBoundingClientRect().top;
        if (contentTop < triggerBottom) {
            content.classList.add('show');
        }
    });
});

window.addEventListener('load', () => {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.add('show'));
});
