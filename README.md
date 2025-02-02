# 🎵 Clone do Spotify
<img src="https://github.com/ryan-ribeiro/spotify-clone/blob/main/Clone%20Spotify/Imagens/Copia-Spotify.png" alt="Texto Alternativo">

Este é um projeto de clone da pagina inicial do Spotify desenvolvido em HTML, CSS, JavaScript e React. Ele permite pesquisar artistas em um banco de dados local, utilizando um API JSON Server para realizar consultas dinâmicas.

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura da aplicação
- **CSS3**: Estilização responsiva e moderna
- **JavaScript (ES6+)**: Funcionalidades dinâmicas
- **React.js**: Construção da interface de usuário
- **JSON Server**: Simulação de um backend para armazenar artistas

## 🎯 Funcionalidades

✅ Interface semelhante ao Spotify
✅ Pesquisa dinâmica de artistas
✅ Consumo de API JSON Server
✅ Layout responsivo
✅ Componentização com React

## 📂 Estrutura do Projeto

```
├── src
│   ├── componentes
│   │   ├── api-artists
│   │   │   ├── artists.json
│   │   ├── Header
│   │   ├── Main
│   │   ├── Sidebar
│   │   ├── Footer
│   │   ├── SearchArtists
│   ├── App.js
│   ├── index.js
│   ├── styles
├── db.json (Banco de dados local JSON Server)
├── package.json
├── README.md
```

## 🔧 Como Executar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/ryan-ribeiro/clone-spotify.git
cd clone-spotify
```

### 2️⃣ Instalar as dependências

**É necessário o Node.js**
```bash
npm install @testing-library/react@latest web-vitals
```

### 3️⃣ Iniciar o JSON Server

```bash
npx json-server --watch api-artists/artists.json --port 3000
```

### 4️⃣ Rodar o projeto React

```bash
npm start
```


### Com isso, será possível a consulta dos artistas cadastrados:
<img src="https://github.com/ryan-ribeiro/spotify-clone/blob/main/Clone%20Spotify/Imagens/kanye-query.png" alt="Texto Alternativo">


## 📌 Notas

- O **JSON Server** precisa estar rodando para que a busca de artistas funcione corretamente.
- O projeto foi construído para fins educacionais e não possui integração com o Spotify real.

## 📜 Licença

Este projeto está licenciado sob a **MIT License**.

---

