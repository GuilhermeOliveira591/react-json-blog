# 📰 Plataforma de Blog com ReactJS, JSON-Server, Cloudinary e Docker

Este é um projeto de uma **plataforma de blog** desenvolvida com **JavaScript** e **ReactJS**, integrada ao **JSON-Server** para gerenciamento de dados e à **API do Cloudinary** para processamento e armazenamento de imagens. Toda a aplicação é **containerizada com Docker**, garantindo portabilidade e consistência em qualquer ambiente.

## ✨ Funcionalidades

- CRUD completo de postagens (GET, POST, PUT, DELETE)
- Upload de imagens via API do Cloudinary
- Integração com JSON-Server para simular uma API REST
- Navegação entre páginas com React Router
- Containerização completa com Docker e Docker Compose

## 🛠️ Tecnologias Utilizadas

- ReactJS
- JavaScript (ES6+)
- JSON-Server
- Cloudinary API
- Docker
- Docker Compose

## 📦 Estrutura do Projeto

O projeto é dividido em dois serviços principais:

1. **Frontend** – Aplicação em ReactJS com interface para cadastro e listagem de postagens
2. **Backend (Mock API)** – JSON-Server responsável por armazenar e servir os dados dos posts

## ⚙️ Como executar o projeto (com Docker)

### Pré-requisitos:
- Git
- Docker e Docker Compose instalados

### Passos:

```bash
# Clone o repositório
git clone https://github.com/GuilhermeOliveira591/react-json-blog.git
cd react-json-blog

# Suba os containers
docker-compose up --build

```

## 🌐 Acesso à aplicação

Após subir os containers com `docker-compose up --build`, acesse:

- 🖥️ **Frontend (Blog):** [http://localhost:3000](http://localhost:3000)

