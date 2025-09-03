# 📌 Atividade FOIL – Linha do Tempo

Este projeto foi desenvolvido como atividade da disciplina **FOIL**.  
O objetivo é representar a **linha do tempo da minha vida** utilizando conceitos de **Programação Orientada a Objetos (POO)** em **JavaScript**, exibidos de forma visual com **HTML e CSS**.

---

## 🎯 Objetivo da Atividade
- Criar uma **estrutura de classes** que represente minha vida (pai, mãe e eu).
- Demonstrar:
  - **Classes** e **Objetos**.
  - **Atributos** (nome, idade, signo, descrição...).
  - **Métodos** (ações como `atuacao()`, `exercao()`, `Infancia()`, `Passado()` e `Futuro()`).
  - **Herança** (classes `Pai`, `Mae`, `Filho` herdando de `Pessoa`).
  - **Encapsulamento** (dados organizados dentro das classes).
  - **Polimorfismo** (métodos com comportamentos diferentes em cada classe).
- Representar o **ciclo de vida do objeto** (`new` cria e os métodos modificam seu estado).
- Mostrar as **transformações passadas e futuras** da minha vida de forma interativa.

---

## 📚 O que foi implementado
### 🔹 Classes
- `Pessoa` (classe base) → contém atributos e métodos comuns.  
- `Pai`, `Mae`, `Filho` → classes que **herdam de Pessoa** e implementam comportamentos específicos.

### 🔹 Atributos
Cada objeto possui características próprias, como:
- `nome`
- `idade`
- `signo`
- `descricao`

Esses dados são **armazenados dentro das classes** e utilizados na exibição dos cards.

### 🔹 Métodos
Foram criados métodos que representam ações e fases da vida:
- `apresentacao()` → apresenta a pessoa.  
- `atuacao()` e `exercao()` → usados para descrever atividades do pai e da mãe.  
- `Infancia()`, `Passado()`, `Futuro()` → descrevem a trajetória do filho (eu).  

### 🔹 Herança
As classes `Pai`, `Mae` e `Filho` estendem `Pessoa`, aproveitando os atributos e métodos básicos, mas **sobrescrevendo** o que é específico de cada um.

### 🔹 Encapsulamento
Os dados foram **organizados dentro das classes**, e só podem ser acessados através dos métodos definidos. Isso garante controle sobre como as informações são exibidas.

### 🔹 Polimorfismo
Métodos herdados foram **redefinidos** em cada classe para representar comportamentos diferentes:
- O `atuacao()` do pai descreve seu trabalho.  
- O `exercao()` da mãe descreve sua função.  
- O `Infancia()`, `Passado()` e `Futuro()` do filho descrevem momentos distintos da vida.

### 🔹 Ciclo de Vida dos Objetos
- Objetos são **instanciados** com `new`.  
- Métodos são chamados para alterar ou exibir informações.  
- O ciclo completo pode ser observado nos cards exibidos na tela.

---

## 🛠️ Tecnologias Utilizadas
- **HTML5** → estrutura da página.  
- **CSS3** → estilização e linha do tempo visual.  
- **JavaScript** → implementação da orientação a objetos e injeção dinâmica dos cards.

---
## Resultado: <img width="1294" height="851" alt="image" src="https://github.com/user-attachments/assets/93133987-8fe6-434c-a3cc-1920e99c9feb" /> 

---
## 🧑‍💻 Autor: Samuel Watthier Timmermann
