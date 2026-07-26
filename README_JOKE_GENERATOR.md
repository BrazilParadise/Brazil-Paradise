# Random Joke Generator 🎭

Um gerador de piadas aleatórias que utiliza uma API externa para buscar conteúdo dinâmico.

## Características

- 🎲 Busca piadas aleatórias de uma API externa
- 🚀 API REST com Express.js
- 📝 Suporte para múltiplas piadas em uma única requisição
- ⚡ Rápido e simples de usar
- 🛡️ Tratamento de erros robusto

## Instalação

```bash
# Clonar o repositório
git clone https://github.com/BrazilParadise/Brazil-Paradise.git
cd Brazil-Paradise

# Mudar para a branch feature/joke-generator
git checkout feature/joke-generator

# Instalar dependências
npm install
```

## Uso

### Iniciar o servidor

```bash
npm start
```

Ou em modo desenvolvimento com auto-reload:

```bash
npm run dev
```

O servidor iniciará em `http://localhost:3000`

### Endpoints disponíveis

#### 1. Obter uma piada aleatória

```bash
curl http://localhost:3000/joke
```

**Resposta:**
```json
{
  "success": true,
  "joke": "Why don't scientists trust atoms? Because they make up everything!",
  "timestamp": "2026-07-26T17:30:00.000Z"
}
```

#### 2. Obter múltiplas piadas

```bash
curl "http://localhost:3000/jokes?count=3"
```

**Resposta:**
```json
{
  "success": true,
  "count": 3,
  "jokes": [
    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you call a fake noodle? An impasta!",
    "Why did the scarecrow win an award? He was outstanding in his field!"
  ],
  "timestamp": "2026-07-26T17:30:00.000Z"
}
```

**Parâmetros:**
- `count` (opcional): Número de piadas a buscar (padrão: 5, máximo: 20)

## Estrutura do Projeto

```
.
├── index.js           # Servidor Express e endpoints
├── jokeService.js     # Serviço de integração com API externa
├── package.json       # Dependências do projeto
└── README.md          # Este arquivo
```

## API Externa Utilizada

Este projeto utiliza a [JokeAPI](https://jokeapi.dev/) para buscar piadas aleatórias.

## Dependências

- **express**: Framework web para Node.js
- **axios**: Cliente HTTP para fazer requisições

## Desenvolvimento

### Requisitos

- Node.js >= 14.0.0
- npm ou yarn

### Scripts disponíveis

```bash
npm start    # Inicia o servidor
npm run dev  # Inicia em modo desenvolvimento com nodemon
```

## Tratamento de Erros

A API retorna mensagens de erro estruturadas:

```json
{
  "success": false,
  "message": "Erro ao buscar piada",
  "error": "Detalhes do erro"
}
```

## Melhorias Futuras

- [ ] Cache de piadas para reduzir requisições
- [ ] Filtros por categoria (programação, animais, etc)
- [ ] Limite de requisições por IP
- [ ] Teste unitários com Jest
- [ ] Deploy em plataforma cloud
- [ ] Interface web frontend

## Licença

MIT

## Autor

Brazil Paradise
