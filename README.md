# API de Gerenciamento de Tarefas

Esta é uma API simples de gerenciamento de tarefas construída com Node.js e Express. A API permite criar, ler, atualizar e excluir tarefas (operações CRUD).

## Funcionalidades

- Criar novas tarefas
- Obter todas as tarefas
- Obter uma tarefa específica pelo ID
- Atualizar uma tarefa pelo ID
- Excluir uma tarefa pelo ID

## Pré-requisitos

Certifique-se de ter o seguinte instalado em sua máquina local:

- Node.js (v14 ou superior)
- npm (v6 ou superior)

## Começando

Siga estas etapas para configurar e executar o projeto em sua máquina local.

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/api-gerenciamento-tarefas.git
cd api-gerenciamento-tarefas
```

### 2. Instalar as dependencias

Instale os pacotes necessários do Node.js. Execute no terminal "npm install" .

### 3. Iniciar o servidor

Para iniciar o servidor em modo de desenvolvimento (com nodemon) execute: "npm run dev".
Para iniciar o servidor em modo de produção execute: "npm start".

### 4. Endpoints da API

Baixe o Aplicativo "Insominia" para realizar os teste da API.

# Obter Todas as Tarefas

Endpoint: /api/tasks
Método: GET
Descrição: Recupera todas as tarefas.

# Criar uma Nova Tarefa

Endpoint: /api/tasks
Método: POST
Descrição: Cria uma nova tarefa

Corpo de Requisição:
```js
    {
  "title": "Nova Tarefa",
  "description": "Descrição da nova tarefa"
    }
```

# Obter uma Tarefa pelo ID

Endpoint: /api/tasks/:id
Método: GET
Descrição: Recupera uma tarefa pelo seu ID.

# Atualizar uma Tarefa pelo ID

Endpoint: /api/tasks/:id
Método: PUT
Descrição: Atualiza o título, descrição ou status de conclusão de uma tarefa.

Corpo de Requisição:
```js
    {
  "title": "Título da Tarefa Atualizado",
  "description": "Descrição atualizada",
  "completed": true
    }
```

# Excluir uma Tarefa pelo ID

Endpoint: /api/tasks/:id
Método: DELETE
Descrição: Exclui uma tarefa pelo seu ID.

