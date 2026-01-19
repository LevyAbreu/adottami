# Adottami

## Visão Geral

O **Adottami** é uma rede social completa voltada para o universo pet, que conecta tutores, entusiastas e profissionais. O projeto oferece uma experiência integrada para quem deseja adotar um animal, comprar itens especializados ou simplesmente compartilhar a rotina dos seus melhores amigos através de um feed interativo e responsivo.

> Acesse a versão online: [Adottami](https://adottami-theta.vercel.app)

---

## Funcionalidades Atuais

### Feed Interativo (Social)

* Publicação de posts com texto e suporte a imagens.
* Sistema de curtidas dinâmico com feedback visual.
* Contexto de usuário global: ao publicar, o post assume automaticamente o nome e foto do usuário logado.
* Layout responsivo inspirado nas principais redes sociais modernas.

### Sistema de Chat (Mensagens)

* Interface de conversas em tempo real com lista de contatos.
* **Comportamento Inteligente**: No mobile, funciona com navegação em pilhas (lista -> conversa); no desktop, exibe o modelo Master-Detail (lado a lado).
* Indicadores de status online e histórico de mensagens.

### Marketplace Pet

* Vitrine de produtos especializados para animais.
* Filtros por categorias (Alimentação, Brinquedos, Saúde).
* Design focado em conversão e facilidade de navegação.

### Gerenciamento de Perfil

* Edição de dados em tempo real (Nome e Bio) via **React Context API**.
* Sincronização global: alterações no perfil refletem instantaneamente no Header, Feed e Chat.
* Estatísticas de engajamento (Posts, Seguidores, Pets).

---

## Tecnologias Utilizadas

* **React.js** – Biblioteca principal para construção da interface.
* **TypeScript** – Tipagem estática para maior segurança e produtividade.
* **Tailwind CSS** – Estilização utilitária e design responsivo.
* **Lucide React** – Biblioteca de ícones modernos e leves.
* **React Router Dom** – Gerenciamento de rotas e navegação SPA.
* **Context API** – Gerenciamento de estado global (Autenticação/Usuário).

---

## Estrutura do Projeto

```
Adottami/
├── src/
│   ├── assets/          # Ícones e logos
│   ├── contexts/        # AuthContext.tsx (Estado Global)
│   ├── pages/           # Componentes de página (Feed, Chat, Profile, etc.)
│   ├── components/      # Componentes reutilizáveis (Header, BottomNav)
│   ├── App.tsx          # Lógica principal de rotas e layout
│   └── main.tsx         # Ponto de entrada do React
├── public/              # Arquivos estáticos
├── tailwind.config.js   # Configurações de design do Tailwind
└── package.json         # Dependências do projeto

```

---

## Melhorias Futuras (em desenvolvimento)

* **Cadastro de Pets**: Modal para o usuário cadastrar seus próprios animais.
* **Filtros de Adoção**: Busca avançada por espécie, porte e localização.
* **Notificações**: Alertas em tempo real para novas mensagens e interações.
* **Backend Integration**: Persistência de dados via Firebase ou Node.js.
* **Galeria de Fotos**: Álbum dedicado para cada pet no perfil do usuário.

---

## Compatibilidade

Otimizado para uma experiência fluida em todos os dispositivos:

* Mobile (iOS e Android) via Bottom Navigation.
* Desktop (Chrome, Firefox, Edge, Safari) via Sidebar persistente.

---

## Autoria

Desenvolvido por **Levy Abreu**
[GitHub](https://github.com/LevyAbreu) | [vlbdsa.vag@gmail.com](mailto:vlbdsa.vag@gmail.com)