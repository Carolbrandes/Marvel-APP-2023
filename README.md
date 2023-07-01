# App que lista e filtra pelo nome os personagens usando a API da Marvel

App que lista e filtra pelo nome dos personagens com a API da Marvel e ao clicar no botão ver mais de cada personagem ele vai para uma página com mais informações sobre ele.

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`VITE_PUBLIC_API_KEY`

`VITE_PRIVATE_API_KEY`

`VITE_BASE_URL`

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Carolbrandes/Marvel-APP-2023.git
```

Entre no diretório do projeto

```bash
  cd Marvel-APP-2023
```

Instale as dependências

```bash
  npm install ou yarn
```

Inicie o servidor

```bash
  npm run dev ou yarn dev
```

## Documentação da API

https://developer.marvel.com/docs

BaseUrl: https://gateway.marvel.com/v1/public

#### Retorna todos os itens

```http
  GET /characters?apikey=${apikey}&ts=${time}&hash=${hash}&limit=50&orderBy=modified
```

| Parâmetro | Tipo     | Descrição                                               |
| :-------- | :------- | :------------------------------------------------------ |
| `apikey`  | `string` | **Obrigatório**. A chave pública da sua API             |
| `ts`      | `string` | **Obrigatório**. timestamp (Number(new Date()))         |
| `hash`    | `string` | **Obrigatório**. hash = Md5(time + privateKey + apikey) |

#### Retorna um item

```http
  GET /characters?apikey=${apikey}&ts=${time}&hash=${hash}&limit=50&nameStartsWith=${name}
```

| Parâmetro | Tipo     | Descrição                                               |
| :-------- | :------- | :------------------------------------------------------ |
| `apikey`  | `string` | **Obrigatório**. A chave pública da sua API             |
| `ts`      | `string` | **Obrigatório**. timestamp (Number(new Date()))         |
| `hash`    | `string` | **Obrigatório**. hash = Md5(time + privateKey + apikey) |
| `name`    | `string` | **Obrigatório**. nome do personagem                     |

## Stack utilizada

**Front-end:** React, TypeScript, Material UI, Styled Components

projeto rodando na vercel: https://marvel-app-2023.vercel.app/
