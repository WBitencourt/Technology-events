<h1 align="center">
  <img alt="Rocketseat" height="80" title="Rocketseat" src="https://avatars.githubusercontent.com/u/28929274?s=200&amp;v=4" />
</h1>

<p align="center">
  <img alt="NLW Returnn ediçao 08" src="https://user-images.githubusercontent.com/51727640/167922155-8f18c6ae-e221-4a54-b9eb-d2358f739937.svg" />
</p>

![Capa](https://user-images.githubusercontent.com/51727640/167926346-1df2d26c-47e6-4e3f-abb9-322b1e7120b4.svg)

## 💻 Projeto
Aplicativo desenvolvido inicialmente pela Equipe Rocketseat que tem o objetivo de criar um Widget para que o usuário deixe seu feedback referente a página que esta acessando.

## 🤓 Objetivo pessoal
Ao participar da edição 08 do NLW, fui desafiado pela Rocketseat a extender o projeto original adicionando novas funcionalidades.
<br />
Depois de muito aprendizado no evento decidi jogar o chapeu do outro lado e ir buscar (Frases de Diego .com haha). 
<br />
Pensei em usar esse projeto em algum local que realmente faria sentido, percebi que o site do NLW não continha essa funcionalidade, então o fiz. 😆😅
<br />
Claro, tentei simular o mais próximo dentro do tempo disponível algo parecido com a página do NLW. E valeu a pena, aprendi mais ferramentas e formas de se desenvolver uma aplicação, todo o aprendizado foi listado nos tópicos abaixo.

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/community/file/1102912516166573468). 
É necessário ter conta no [Figma](http://figma.com/) para acessá-lo.
<br />
<br />
Acesse o front-end a partir [desse link](https://nlw-return-impulse-web-woad-eight.vercel.app/). 
<br />
<br />
Acesse o back-end a partir [desse link](https://technology-course-production.up.railway.app/). 

## ✨ Tecnologias

### Front-end
-   [ ] Figma
-   [ ] ReactJS
-   [ ] Vite
-   [ ] Javascript
-   [ ] Typescript
-   [ ] Context API
-   [ ] Headless UI
-   [ ] Tailwind
-   [ ] Local Storage
-   [ ] Phosphor Icons
-   [ ] Axios
-   [ ] React router DOM
-   [ ] HTML2CANVAS

### Back-end
-   [ ] Express
-   [ ] Javascript
-   [ ] Typescript
-   [ ] Prisma
-   [ ] Jest
-   [ ] Sqlite
-   [ ] Postgresql
-   [ ] Migrations
-   [ ] SWC
-   [ ] Cors
-   [ ] Nodemailer

## :hammer_and_wrench: Features 

### Front-end
-   [ ] Envio de feedbacks do usuário em forma de texto e imagem.
-   [ ] Após registro de feedback, um e-mail é encaminhado ao usuário pelo back-end (Somente ambiente de desenvolvimento) .
-   [ ] Lista os feedbacks do servidor que o usuário registrou (Em caso real de uso, essa pagina deve ser melhor alocada dentro do projeto);
-   [ ] Feedbacks listados mostram dados como ID, Tipo do feedback, comentário e a screenshot registrada
-   [ ] Pagina se adapta a maioria dos dispositivos devido a responsividade da mesma
-   [ ] Permite alterar o tema da página, entre dark e light que fica salvo mesmo após recarregar a pagina.
-   [ ] Permite aumentar ou diminuir a fonte da página
-   [ ] Página default para areas do site que estejam em desenvolvimento
-   [ ] Permite o usuário navegar conforme seu contexto.

### Back-end
-   [ ] Back-end construído com base em uma aplicação REST
-   [ ] Permite registrar um feedback via método HTTP POST
-   [ ] Permite consultar os feedbacks via método HTTP GET
-   [ ] Possui testes unitários (npm run test)
-   [ ] Possui conceitos de SOLID
-   [ ] Envia e-mail a um usuário (Somente em ambiente de desenvolvimento)
-   [ ] Possui o ORM Prisma como intermediários ao fazer operações no banco de dados
-   [ ] A princípio foi desenvolvido com SQLite, posteriormente alterado para Postgresql em ambiente de desenvolvimento e produção 
-   [ ] Configurado para transpilar o código typescript para javascript, comando npm build.

## Executando o projeto

### Front-end
Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto.
Em seguida, inicie o projeto.

```cl
npm run dev
```

Lembre-se de definir no arquivo .env as configurações de acesso a seu servidor back-end.
 
 ```cl
VITE_API_URL=http://localhost:3333/
```

### Back-end
Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto.
Em seguida, inicie o projeto.

```cl
npm run dev
```

Lembre-se de definir no arquivo .env as configurações do seu servidor back-end com o banco de dados, projeto esta configurado para postegresql.
 
 ```cl
DATABASE_URL=
```


## 📄 Licença

Esse projeto foi desenvolvido inicialmente pela Rocketseat e disponibilizado publicamente para modificações.

<br />
