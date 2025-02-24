# <h1 align="center">🎲 Projeto Sorteador de Números</h1>

Um aplicativo web simples para sortear números aleatórios dentro de um intervalo definido pelo usuário.

<p align="center">
  <img src="./assets/img/desktop-mobile.png" alt="Projeto Sorteador" width="600">
</p>

## 📋 Sobre o Projeto

O Sorteador de Números é uma aplicação web que permite aos usuários gerarem números aleatórios dentro de um intervalo específico. É perfeito para sorteios, jogos, ou qualquer situação em que você precise de um número aleatório.

## ✨ Funcionalidades

- Definição de intervalo numérico personalizado (número inicial e final)
- Validação para garantir que o número inicial seja menor que o final
- Interface responsiva para uso em dispositivos desktop e móveis
- Animação visual quando o número é sorteado

## 🛠️ Tecnologias Utilizadas

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
<img src="https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google-fonts&logoColor=white" alt="Google Fonts"/>

## 📱 Layout Responsivo

O aplicativo foi desenvolvido com design responsivo em mente:
- Layout adaptável para telas de diferentes tamanhos
- Experiência otimizada para dispositivos móveis
- Elementos visuais que se ajustam conforme o tamanho da tela

## 🚀 Como Usar

1. Clone este repositório:
```
git clone https://github.com/seu-usuario/projeto-sorteador.git
```

2. Abra o arquivo `index.html` em seu navegador

3. Digite o número inicial no primeiro campo

4. Digite o número final no segundo campo

5. Clique no botão "Sortear"

6. O número sorteado será exibido na tela

## 🎯 Como Funciona

O sorteador utiliza a função `Math.random()` do JavaScript para gerar números aleatórios dentro do intervalo especificado. A fórmula utilizada é:

```javascript
Math.floor(Math.random() * (finalNumber - initialNumber + 1)) + initialNumber
```

Onde:
- `finalNumber` é o número final do intervalo
- `initialNumber` é o número inicial do intervalo

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## 📬 Contato

Desenvolvido por <b>Fabio Marques</b> - 📧 marques.sfabiorj@gmail.com

---

⭐ Se este projeto foi útil para você, não se esqueça de deixar uma estrela!

