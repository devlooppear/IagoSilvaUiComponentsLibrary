# IagoSilvaUiComponentsLibrary

## Introdução

👋 Olá, pessoal! Estou atualmente estudando como criar minha própria biblioteca de componentes de UI e desenvolvi este projeto como parte da minha jornada de aprendizado. Esta biblioteca inclui uma coleção de componentes de UI reutilizáveis, construídos com React e styled-components.

## Tecnologias Usadas

![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![Styled Components](https://img.shields.io/badge/Styled%20Components-6.1.13-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.1-blue)
![Storybook](https://img.shields.io/badge/Storybook-8.3.4-blue)
![ESLint](https://img.shields.io/badge/ESLint-9.9.0-blue)

## Começando

Siga estes passos para configurar o projeto na sua máquina local:

### Pré-requisitos

Certifique-se de ter o seguinte instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Yarn](https://yarnpkg.com/) ou [pnpm](https://pnpm.js.org/) (opcional)

### Clonar o Repositório

```bash
git clone https://github.com/yourusername/iago-silva-ui-components-library.git
cd iago-silva-ui-components-library
```

### Instalar Dependências

Usando npm:

```bash
npm install
```

Executar o Servidor de Desenvolvimento
Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
```

Executando o Storybook
Para executar o Storybook e visualizar os componentes em isolamento, use:

```bash
npm run storybook
```

Uso
Você pode usar os componentes em seu projeto importando-os da seguinte forma:

```tsx
import Button from "iago-silva-ui-components-library/src/components/Button";

import Card from 'iago-silva-ui-components-library/src/components/Card';

// Exemplo de uso
<Button variant="primary">Clique Aqui</Button>
<Card title="Título do Card" content="Este é um componente de card simples construído com styled-components." />
```

## Componentes

A biblioteca atualmente inclui os seguintes componentes:

- Button: Um componente de botão personalizável.
- Card: Um componente de card simples que pode exibir um título e conteúdo.

Sinta-se à vontade para explorar os componentes e contribuir para a biblioteca!

## Usando o Storybook

O Storybook é uma ferramenta de código aberto para desenvolver componentes de UI em isolamento para React. Ele permite que você visualize diferentes estados dos seus componentes, teste-os e crie um guia de estilo vivo para sua aplicação. Com o Storybook, você pode facilmente apresentar seus componentes, documentar seu uso e construir UIs complexas de forma mais rápida e eficiente.

- **Documentação**: [Documentação do Storybook](https://storybook.js.org/docs/react/get-started/introduction)

## Por Que Usar o pnpm?

`pnpm` é um gerenciador de pacotes rápido e eficiente em termos de espaço em disco. Ele permite que você instale dependências de forma mais eficiente, usando symlinks para compartilhar pacotes entre diferentes projetos. Isso resulta em instalações mais rápidas e redução do uso de espaço em disco em comparação com outros gerenciadores de pacotes, como npm ou yarn. Ao usar o `pnpm`, você pode otimizar seu fluxo de trabalho de desenvolvimento, melhorar o desempenho e manter suas dependências de projeto organizadas.

- **Documentação**: [Documentação do pnpm](https://pnpm.js.org/)

## Contribuindo

Contribuições são bem-vindas! Se você gostaria de contribuir, por favor, faça um fork do repositório e envie um pull request.
