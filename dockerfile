# Usa uma imagem Node LTS mais atual
FROM node:18

# Define o diretório de trabalho no container
WORKDIR /usr/src/app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante da aplicação
COPY . .

# Compila a aplicação (gera o dist/)
RUN npm run build

# Expõe a porta padrão do NestJS (pode ser 3000, se estiver configurado assim)
EXPOSE 3000

# Comando de inicialização
CMD ["node", "dist/main"]