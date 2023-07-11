<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


## Descrição

### Prólogo
Aplicação desenvolvida para simulação de uma loja de Quadrinhos. Nela possível cadastrar, editar e encomendar HQ’s raras e comuns usando cupons de desconto.

####  *No código, nos algoritmos, nas regras de negócio e na documentaçãoI existem diversas referências às HQ's da DC Comics. Divirta-se!*


### Solução
Um CRUD (Criar, Ler, Atualizar e Deletar) para Quadrinhos, Cupons, Usuários e Pedidos. O arquivo "Desafio SQUAD Digital.pdf" possui os requisitos que direcionaram as tomadas de decisão do projeto.


## Tecnologias
Para implementação e documentação da API foram utilizados:

--> NodeJS (16.13.2)
--> NestJS (10.0.5)
--> MySql
--> TypeORM
--> Swagger

Importante destacar que o NestJS funciona sobreposto ao Express e traz o ESlint como linter padrão. Além disso, algumas bibliotecas foram usadas para fins específicos como hash, validação de dados e autenticação.


## Requisitos e Pré-requisitos

- Para utilizar a API será preciso ter instalado o MySql e uma conexão com o banco de dados aberta.

- Em seu ambiente MySql crie o BD 'dc' com o seguinte comando: CREATE DATABASE  dc;

- No arquivo *databse.providers.ts* (localizado em 'src/database/') altere os campos "username" e "password" para as suas credenciais.
  
- O NodeJS deve estar instalado em uma versão superior à 9.0.0.
  

Posteriormente explipcaremos algumas decições tomadas para o desenvolvimento.
  

## Instalação
```bash
$  npm  install
// ou simplesmente
$ npm i
```

## Inicializando Aplicação

```bash
# development
$  npm  run  start

# watch mode
$  npm  run  start:dev

# production mode
$  npm  run  start:prod
```

ATENÇÃO! O app será iniciado em "localhost:3001" (não na convencional 3000).
A rota de inialização deve responder com uma linda frase dita pelo Flash ao Lanterna Verde.

  

## Testes

Estes são os testes que, por padrão, são trazidos pelo NestJS e não estão concluídos.
```bash
# unit tests
$  npm  run  test

# e2e tests
$  npm  run  test:e2e

# test coverage
$  npm  run  test:cov
```

  ## Documentação
  Na rota '/docs' você terá acesso ao Swagger. Ali pode-se testar cada uma das rotas da API, bem como verificar os dados que elas recebem e/ou retornam.
  
  ## Endpoints
  
Abaixo estão listados os métodos acessíveis de cada rota
 - **Comics**
	 - Get, Get{id}, Post, Patch{id}, Delete{id}
 - **User**	
	  - Get, Get{id}, Get{email} Post, Patch{id}, Delete{id}
 - **Coupon**
	 - Get, Get{id}, Post, Patch{id}, Delete{id}
 - **Order**	
	- Get, Get{id}, Post, Patch{id}, Delete{id}

Acesse a rota  '/docs' para mais detalhes.

 **Porque Patch no lugar do Put?**
Nos padrões de API Restfull, requisições Put devem ser utilizadas para alterar um objeto por completo, ou seja, todos os seus atributos. Enquanto o Patch pode ser implementado para qualquer número de alterações. Esta é a forma padrão do NestJS trabalhar, então seguimos com essa abordagem.

## Entidades

Na tabela a seguir encontram-se as entidades do banco de dados com seus atributos:


|Entidade|Atributos|
|--|--|
|Comic| Id, Title, Edition, Character, Author, Rare, Price, Cover|
|User| Id, Name, Email, Password, Coupons[ ] |
|Coupon|Id, Rare, Hash, Value |
|Order|Id, OwnerId, ComicTitle, CouponHash |
|User_coupons_coupon| UserId, CouponID|

## Descisões Importantes

### Arquitetura do NestJS
Implementamos esta Api com os padrões do NestJS, ou seja, através de *services*, *models* e *controllers*, além de aplicar alguns padrões de projeto como estes:
**Repository** 
--> Praticamente todas as ligações com o banco de dados é realizada a partir de *decorators*. Não há *queries* escritas diretamente no código, facilitando sua implementação e manutenção.
**Data Transfer Objec**
--> O uso de DTO simplifica todas as alterações nos objetos. Graças à aplicação deste padrão é possível utilizar herança para reutilizar métodos e funções

### JWT
A utilização dos tokens de acesso tem grande importância para a segurança da aplicação. Infelizmente sua estruturação não está completa, mas você pode testar a criação dos tokens realizando uma requisição via cmd com o seguinte comando:

	curl -X POST http://localhost:3001/auth/login -d "{\"username\": \ "faster@man.alive\", \ "password\":\"1234567\"}" -H "Content-Type: application/json"
Mas atenção: O username deve ser o e-mail de um usuário já cadastado, bem como o campo password.

### Usabilidade Vs Segurança
Neste projeto a facilidade no uso e a modificabilidade foram de extrema importância, enquanto alguns pontos de segurança foram deixados de lado, então aqui estão algumas instruções para reverter esse quadro:

 1. Desative o *synchronize:  true* no arquivo *database.providers.ts*. Utilize migrations em sua aplicação
 2. Guarde a variável *secret* do arquivo *constants.ts* no arquivo *.env* e lembre de coloca-lo no *.gitignore*
 3.  No arquivo *main.ts* está o *app.enableCors()*. No atributo *origin* você pode escolher quem poderá acessar os endpoints da Api.
 4. O *hash* para senhas está dando 7 saltos, você pode aumentar esse número, mas se a Liga da Justiça possui exatamente 7 integrantes, acho que esse número é bom o bastante.

## License
Nest is [MIT licensed](LICENSE).