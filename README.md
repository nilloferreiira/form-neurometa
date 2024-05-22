# Plataforma Neurometa

## Descrição

A Plataforma Neurometa foi desenvolvida para oferecer terapias online com psicólogos especializados. A plataforma permite o cadastro de pacientes, agendamento de consultas, listagem de psicólogos, dashboard com agendamentos, e consultas online por chamada de vídeo. Além disso, conta com uma API de validação para pessoas que têm ou já tiveram câncer, pois este serviço gratuito é feito para essas pessoas.

## Tecnologias Utilizadas

- Next.js 14
- React
- Tailwind CSS
- Shadcn-UI
- React Hook Form
- React Tanstack Query
- Zod
- Axios
- Day.js
- TypeScript

## Como Utilizar

### Produção

Para começar a utilizar a Plataforma Neurometa, basta acessar a aplicação em produção no seguinte endereço:

```sh
https://neurometa.vercel.app
```

### Localmente

Se preferir rodar a aplicação localmente, siga estas etapas:

1. Clone o repositório em sua máquina local:

   ```sh
   git clone https://github.com/nilloferreiira/neurometa.git
   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd neurometa
   ```

3. Instale as dependências do projeto:

   ```sh
   npm install
   ```

4. Inicie o servidor em modo de desenvolvimento:

   ```sh
   npm run dev
   ```

5. Opcionalmente, você pode criar a build da aplicação e iniciar o servidor em modo de produção:

   ```sh
   npm run build
   npm run start
   ```

6. Atenção ao HTTPS em localhost:

   Devido a uma feature, a aplicação utiliza HTTPS mesmo em localhost. O navegador pode exibir um erro de segurança, mas basta clicar no botão "Avançado" e depois clicar em "Ir para localhost" para acessar a aplicação normalmente. Para evitar isso, você pode usar:

   ```sh
   npm run http
   ```

### Contato

Em caso de qualquer bug ou problema com a aplicação, mande um email para [nilloferreiira@email.com](mailto:nilloferreiira@email.com)
