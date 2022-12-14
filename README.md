# TechKids 👩🏻‍💻👨🏼‍💻👩🏿‍💻👩🏽‍💻

Projeto de Conclusão do Bootcamp de Back-end - Reprograma

## **Sobre o projeto : techKids**

![<3](./IMG/kidsTech.jfif)

**É um projeto voltado para o incentivo e ensino  de programação para jovens e crianças.
em lugares onde há alto indices de pobreza** - pois sabemos que
está atrelada à piora da qualidade de vida das mesmas.
    E a solução pra esse problema é a Educação, e por que não com o ensino de programação?! 
(considerada por muitos a profissão do futuro).Acredito que a **implementação desse ensino deste cedo
 poderá mudar a vida dessas crianças monstrando para elas, que através da programação podemos não
 só digitar letrinhas coloridas no computador,muito mais do que isso: ensina  a pensar,
 desenvolver habilidades de resolução de problemas, pensamento crítico, e análitico, a desenvolver suas criatividades 
além de está aprendendo se divertindo.**
       Quando você observa como o mundo está se desenvolvendo, a codificação é uma habilidade  extremamente útil de se possuir.
 E Uma criança que aprende, como programar   terá uma vantagem na vida com mais oportunidades de emprego disponíveis para ela no futuro,
 terá a chance de mudar de vida.
      Não é nenhuma novidade de que há um número crescente de empresas que dependem de código de computador,
 não apenas as do setor de tecnologia. não importa em qual área deseja entrar; seja no setor de  finanças,
 varejo, saúde ou outro. Esta é uma razão importante pela qual a codificação deve ser ensinada.
 Pensando nisso resolvi criar uma API que permitirá cadastrar as comunidades necessitadas,
além de rotas de pessoas  que gostariam de ser volutarias,  como para dar aulas, por exemplo.

## Funcionalidades da API

- [x] cadastro de  comunidades
- [x] visualização das comunidades cadastradas
- [x] alteração de dados dessa comunidade através do seu id
- [x] exclusão da comunidade por id
- [x] o cadastro, atualização, listar todos  login e exlusão de voluntarios

## Rotas
---------------------------------------------------------------------------------
| Rotas - comunidade             | Funções                                       |
|--------------------------------|---------------------------------------------- |
| GET-/comunidades               |  Lista  todas as comunidades                  |
| GET-/comunidade/:id            |  Lista a comunidade por id                    |
| POST-/comunidade/create        |  Cadastra uma nova comunidade                 |
| PATCH-/comunidade/atualizar/:id|  Faz atualizações de dados da comunidade por id                |
| DELETE-/comunidade/deletar/:id |  Deleta por id                                |
----------------------------------------------------------------------------------
-----------------------------------------------------------------------------------
| Rotas - volutarios                | Funções                                      |
|-----------------------------------|----------------------------------------------|
| GET-/volutarios                   | Acessa  todos os vonlutarios                 |
| POST-/voluntario/create           | Cadastra um novo voluntario                  |
|PATCH-/voluntario/atualizar/:id    | Faz atualização por id                       |
| POST-/vonlutarios/login           | Login de vonlutarios                         |
| DELETE-//delete/:id               | Exclui por id                                |
------------------------------------------------------------------------------------

## Arquitetura do Projeto

```
  📁- techKids
  |
  |- 📁IMG
  | 
  |- 📁 node_modules 
  |
  |
  |-  📁 src 
  |    |
  |    |- 📁 controller 
  |    |     |- 📄 comunidadesController.js  
  |    |     |- 📄 voluntarioController.js
  |    |
  |    |- 📁 database  
  |    |     |- 📄 mongooseConnect.js   
  |    |     
  |    |
  |    |- 📁 models 
  |    |     |- 📄 comunidadesModel.js  
  |    |     |- 📄 voluntariosModel.js 
  |    |
  |    |- 📁 routes  
  |    |        |- 📄 comunidadesRoutes.js   
  |    |        |- 📄 index.js 
  |    |        |- 📄 voluntariossRoutes.js 
  |    |
  |    |
  |    |- 📄 app.js 
  |
  |----📁swagger
  |        |-📄 swagger_output.json
  |
  |
  |----📁test
  |        |--📄 apiComunidades.test.js
  |        |--📄 apiVoluntarios.test.js
  |
  |- 📄 .env 
  |
  |- 📄 .gitignore  
  |- 📄 package-lock.json  
  |- 📄 package.json 
  |- 📄 README.md  
  |- 📄 server.js  
  |- 📄 swagger.js
```

## *Tecnologias, Frameworks e Bibliotecas usadas*

- **JavaScript** :Linguagem de Programação
- **Node.js** :Ambiente de execução JavaScript
- **MongoDB** : Banco de Dados
- **Postman** : Plataforma colaborativa gratuita para criar, testar e documentar APIs.
- **Swagger** : Aplicação open source que auxilia os desenvolvedores a definir, criar, documentar e consumir APIs REST
- **Render**  :cria e implanta automaticamente seu serviço toda vez que você envia para o repositório
- **express** : Framework para o desenvolvimento de aplicações JavaScript com o uso do Node.js
- **nodemon** : Biblioteca que ajuda no desenvolvimento de sistemas com o Node.js reiniciando automaticamente o servidor
- **dotenv-safe** : Pacote útil para gerenciarmos algumas variáveis de ambiente 
- **cors** : Mecanismo que usa cabeçalhos adicionais HTTP para informar a um navegador que permita que um aplicativo Web
 seja executado em uma origem (domínio) com permissão para acessar recursos selecionados de um servidor em uma origem distinta
- **bcrypt**: Método de criptografia do tipo hash para senhas
- **jwt** :Para autenticação, autorização e compartilhamento de informações.
- **mongoose**: Biblioteca de modelagem de dados de objeto, facilita 
o gerenciamento de relacionamentos de dados e fornece validação de esquema para objetos do MongoDB.
- **jest** :Framework de testes JavaScript

-----------------------------------------------------------------------|
| *Ok, implentações futuras sobre o o projeto serão feitas.            |
|Gostaria de receber dicas, melhorias...*                              |
|                                                                      |
|                                                                      |
|                                                                      |
|                                                                      |
|                                                                      |
|                                                                      |
|                                                                      |
------------------------------------------------------------------------




