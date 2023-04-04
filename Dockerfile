# Escolha a imagem base
FROM node:latest

# Defina o diretório de trabalho
WORKDIR /app

# Copie o arquivo package.json para o diretório de trabalho
COPY ./ ./

# Instale as dependências
RUN npm install

# Exponha a porta 8080
EXPOSE 5173

# Rode o comando para iniciar o modo de desenvolvimento
CMD npm run dev -- --host