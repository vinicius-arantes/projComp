# Projeto Final

## :page_with_curl: About

> [!NOTE]
> Bem vindo à documentação do meu projeto final! Explore como quiser!
> A formatação do README asseguir está sujeita a observações!

## :man_technologist: Technologies

* Node.js
* Express.js
* DotEnv
* Docker

## :hammer_and_wrench: How to run the project

To run this application you need to have **Git**, **Docker** and **Docker Compose** installed on your computer. Docker Compose needs to be at version 2.10.2 or higher.

### 1 - Clone the repository
```sh
git clone git@github.com:vinicius-arantes/projComp.git
```

### 2 - Enter the project folder
```sh
cd projComp
```

### 3 - Run the containers by running the command below in the root folder of the application
```sh
docker-compose up -d --build
```

This will start the NodeJS container. The NodeJS container will be running on port 3333.

### 4 - After the containers are running, you will need to connect to the bash of the NodeJS container:

```sh
docker exec -it store_manager bash
```

### 5 - In the container terminal, install the dependencies and run the application

Installing the dependencie:
```sh
npm install
```

Running the application:
```sh
npm start
```
<br />
</details>

## :books: Documentation

### Routes - User

- GET <code>/users</code> : Listar todos os usuários no Marketplace.
- GET <code>/users/:id</code> : Listar o uusuário com o ID desejado.
- POST <code>/users</code> : Cria um novo usuário.
- PUT <code>/users/:id</code> : Atualiza as atribuições ao usuário.
- DELETE <code>/users/:id</code> : Deleta o usuário com o ID desejado.

### Routes - Products

- GET <code>/products</code> : Listar todos os produtos no Marketplace.
- GET <code>/products/:id</code> : Listar o produto com o ID desejado.
- POST <code>/products</code> : Cadastro de um novo produto.
- PUT <code>/products/:id</code> : Atualiza as atribuições ao produto.
- DELETE <code>/products/:id</code> : Deleta o produto com o ID desejado.

### Body Examples

- Criar um usuário:
```json
{ 
   "user_name": "name_user",
   "password": "123",
   "email": "user@gmail.com",
   "avatar": "https://sitedouser.com/new-avatar",
    "bio": "this is a test",
    "age": "18"
}
```

- Criar um produto:
```json
[
  { 
    "title": "Marmiita Bovina",
    "description": "Ingredientes: Frango, Arroz, Feijão e Ovo",
    "price": 32.9,
    "image": "https://image/new-image"
  },
]
```

## :notebook: Notes 

### **_Projeto_**

> A ideia do escopo é desenvolver toda a base do back-end de um marketplace de culinária caseira, que envolve tanto o desenvolvimento de CRUDs para as entidades quanto outras funções, como por exemplo recuperação de senha.

### **_Entidades_**

_Foram definidas duas entidades:_

- Usuários
- Produtos

> As duas entidades se relacionam pelo "chefId", que faz referência ao usuário responsável pela produção do produto em questão.

### **_Bibliografia_**

_Foram utilizadas as seguintes dependências:_

1. Para desenvolvimento:

   - "nodemon": Utilizado para o restart do server a partir de cada save.
   - "jest": Empregado na implementação de testes automatizados para as funções do UserController.

2. Nativas:
   - "mongoose": Toda a comunicação 'banco de dados -> server' foi realizada pelo mongoose.
   - "express": Biblioteca base para a criação de todas as instâncias do projeto(app.js/routes.js).
   - "dotenv": Utlizada para a configuração de todas as variáveis de ambiente usadas no projeto.
   - "backblaze-b2": O upload de arquivos para um servidor remoto só é possível por causa da conexão que o backblaze cria.
   - "jsonwebtoken": Utilizada para a geração de hashs utilizadas como token.
   - "jsonschema": A formatação de todos os inputs das rotas dependendia dessa biblioteca.
   - "multer": Dependência utilizada para o upload de arquivos para o servidor local.
   - "nodemailer/nodemailer-express-handlebars": As duas dependências fazem parte do processo de envio de email para a recuperação de senha do usuário.

### **_Escolha do Banco de dados_**

> Durante a execução do projeto, optei pela utilização do MongoDB para desenvolvimento. Diversos pontos guiaram minha escolha, a forma como ele dispõe os dados e as tabelas e, principalmente, o fato de tornar viável a utilização do mongoose. O mongoose me pareceu uma opção bem mais interessante que o Sequelize, por ser mais prático, direto e sucinto.

### **_Uso de docker_**

> Como o projeto não envolve colaboração com nenhum outro desenvolvedor, a utilização de um docker não teria suas melhores aplicação. Porém, para tornar o projeto mais complreto e considerar todas as possibilidades de desenvolvimento futuro, todo a estrutura de pastas, arquivos e versões do projeto foram replicadas em uma imagem do docker e estão disponíveis para utilização e aplicação.

### **_CRUDs/Rotas_**

> Foram desenvolvidas rotas de CRUD tanto para a tabela de usuários, quanto para a de produtos. Quando se trata da relação entre elas, pode ser citada a opção One-to-Many, pelo fato de que um 'usuário' pode possui vários 'produtos', e cada 'produto' possui apenas um 'usuário' produtor.
>
> Porém, caso seja necessário, também foi implementado o sistema de análise das rotas/funções por testes automatizados. Na adição de bibliotecas, foi citada a aplicação do jest, que foi o meio pelo qual foi possível criar todos os possíveis testes automatizados do UserController.
>
> Além disso, foram desenvolvidas rotas de autenticação, que geram para cada usuário autenticado uma token, que pode ser utilizada para acessar outras rotas restritas à esses usuário que realizaram a autenticação.
>
> Como já citado anteriormente, a utilização do nodemailer no projeto foi feita para o desenvolvimento da rota de recuperação de senha, na qual, o usuário que solicitar o mesmo, receberá um email com uma token única criada somente para essa finalidade.

### **_Vídeo explicando sobre o desenvolvimento do projeto_**

> [Vídeo Explicativo](https://www.youtube.com/watch?v=HdW2BMRBDZ8&list=PLR8JXremim5BWiO-MCaAffQYwFZrD11-j&index=2)
