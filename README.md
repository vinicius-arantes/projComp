# Projeto Final

## Back-end Project

> [!NOTE]
> Bem vindo à documentação do meu projeto final! Explore como quiser!
> A formatação do README asseguir está sujeita a observações!

### **_Projeto_**

> A ideia do escopo é desenvolver toda a base do back-end de um marketplace de culinária caseira, que envolve tanto o desenvolvimento de CRUDs para as entidades quanto outras funções, como por exemplo recuperação de senha.

### **_Entidades_**

_Foram definidas duas entidades:_

- Usuários
- Produtos

### **_Bibliografia_**

_Foram utilizadas as seguintes dependências:_

1. Para desenvolvimento:

   - "nodemon": Utilizado para o restart do server a partir de cada save.

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

### **_CRUDs/Rotas_**

> Foram desenvolvidas rotas de CRUD tanto para a tabela de usuários, quanto para a de produtos. Quando se trata da relação entre elas, pode ser citada a opção One-to-Many, pelo fato de que um 'usuário' pode possui vários 'produtos', e cada 'produto' possui apenas um 'usuário' produtor.
> Além disso, foram desenvolvidas rotas de autenticação, que geram para cada usuário autenticado uma token, que pode ser utilizada para acessar outras rotas restritas à esses usuário que realizaram a autenticação.
> Como já citado anteriormente, a utilização do nodemailer no projeto foi feita para o desenvolvimento da rota de recuperação de senha, na qual, o usuário que solicitar o mesmo, receberá um email com uma token única criada somente para essa finalidade.

### **_Vídeo explicando sobre o desenvolvimento do projeto_**

> [Vídeo Explicativo](https://www.youtube.com/watch?v=HdW2BMRBDZ8&list=PLR8JXremim5BWiO-MCaAffQYwFZrD11-j&index=2)
