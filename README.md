# GMUSIC CHALLENGE

Este desafio se refere ao desenvolvimento de uma aplicação em em React que funcione utilizando a API pública do Github.


| FullHD | Mobile |
| ------ | ------ |
| ![Alt text](https://i.ibb.co/bmW5c0G/Captura-de-Tela-2021-06-11-a-s-11-56-40.png "Lista") | ![Alt text](https://i.ibb.co/SQd2wmr/Captura-de-Tela-2021-06-11-a-s-11-57-05.png "Lista") |
| ![Alt text](https://i.ibb.co/hc76yPw/Captura-de-Tela-2021-06-11-a-s-13-47-27.png "Pesquisa") | ![Alt text](https://i.ibb.co/X82VkrW/Captura-de-Tela-2021-06-11-a-s-13-47-20.png "Pesquisa") |
| ![Alt text](https://i.ibb.co/0FP4K89/Captura-de-Tela-2021-06-11-a-s-13-21-32.png "Pesquisa sem resultado") | ![Alt text](https://i.ibb.co/wL6sW2D/Captura-de-Tela-2021-06-11-a-s-13-21-41.png "Pesquisa sem resultado") |
| ![Alt text](https://i.ibb.co/GQxs4pW/Captura-de-Tela-2021-06-11-a-s-11-58-18.png "Detalhes do Usuário") | ![Alt text](https://i.ibb.co/6J0cH03/Captura-de-Tela-2021-06-11-a-s-11-57-55.png "Detalhes do Usuário") |
| ![Alt text](https://i.ibb.co/hYvhHLS/Captura-de-Tela-2021-06-11-a-s-12-09-44.png "Mais detalhes do usuário") | ![Alt text](https://i.ibb.co/pwC2HrV/Captura-de-Tela-2021-06-11-a-s-11-58-07.png "Mais detalhes do usuário") |

### Caracteristicas
  - TypeScript
  - Atomic Design
  - Design System
  - ContextAPI
  - Hooks
  - Tests
  - Paginação

##### Contexto da estrutura
Essa estrutura é uma variação de Domain-driven design com o objetivo de facilitar ainda mais o desenvolvimento, manutenção e escalabilidade. Cada `pasta` é responsável por seu próprio contexto e cada `arquivo` tem sua própria responsabilidade formando uma estrutura escável e manutenivel, neste projeto ainda não foi possível mostrar o melhor dessa estrutura que se potencializa com a escalabidade e a generalização de responsabilidades.

### Ambiente para desenvolvimento 

| Item | Versão |
| ------ | ------ |
| NVM | 0.35.2 |
| Yarn | 1.22.4 |
| NPM | 7.10.0 |
| Node | v16.0.0 |

### Configurando ambiente e rodando o projeto

##### Primeira etapa
- [Homebrew para mac](https://brew.sh/index_pt-br "Instalação")
- [NVM guia de instalação](https://github.com/nvm-sh/nvm "Instalação")
- [NodeJS guia de instalação](https://nodejs.org/en/download/package-manager/ "Instalação")
- [Chocolatey para Windows](https://chocolatey.org/ "Instalação")
- [ReactJs ](https://reactjs.org/docs/add-react-to-a-new-app.html "Instalação")
- [Yarn ](https://yarnpkg.com/lang/en/docs/install/#mac-stable "Instalação")


##### Segunda etapa

Configurado o ambiente podemos seguir adiante.

> Baixando o projeto
```sh
git clone "REPOSITORIO DO PROJETO"
cd "PASTA DO PROJETO"
```


##### Terceira etapa
Está e a última etapa, para rodar o projeto
> Instalando dependências do projeto e executando o projeto.
```sh
yarn install
yarn start
```
ou
```sh
npm install
npm start
```

### Plugins

Lista dos principais plugins utilizadas no projeto.
    - typescript
    - Axios
    - SASS
    - Jest/Enzyme
    
    
### Considerações
Os testes e a funcionalidade estendida eu acabei deixando para um segundo momento devido ao foco nas demais features, mas fico a disposição para complementa-los. Os testes além do esqueleto básico, eu pretendia fazer:
- Validação de props obrigatórias e opcional
- Validação dos retornos e execuções das funções dos componentes, hooks e utils.

Obs.: Em pequenas linhas os meus testes tem como objetivo testar a passagem de propriedades, o resultado esperado de funções com o intuito de prevenir que algo seja modificado sem sabermos ou que usem de forma incorreta para prevenir bug`s.

Licença
----
**Edimilson dos Prazeres Pereira Júrnior** @EddosPrazeres
