# 🚀 BioLink - Agregador de Links & Perfil Profissional

O **BioLink** é uma aplicação moderna de alta performance construída com **Next.js 16** e **Tailwind CSS**.

Este projeto funciona como um "Linktree" pessoal, onde você controla 100% dos dados através de um único arquivo JSON, sem precisar editar código complexo. Ele possui design *Mobile First*, tema escuro (Dark Mode) nativo e otimização de SEO automática.

## 🛠️ Tecnologias

- **Framework:** Next.js 16 (App Router)
- **Estilização:** Tailwind CSS
- **Ícones:** SVGs Locais Otimizados
- **Linguagem:** TypeScript

---

## 📦 Como Clonar e Rodar

1. **Clone o repositório:**
   git clone https://github.com/jonathaneamorim/BioLink.git

2. **Entre na pasta e instale as dependências:**
   cd BioLink
   npm install

3. **Rode o servidor de desenvolvimento:**
   npm run dev

Acesse http://localhost:3000

---

## ⚙️ Configuração

Toda a personalização é feita no arquivo: `src/data/user.json`.

### 1. Perfil e Tema
Edite as informações básicas e as cores. O sistema suporta imagens de background diferentes para Mobile e Desktop.

```json
{
  "profile": {
    "name": "Seu Nome",
    "nickname": "Seu Apelido",
    "username": "@seu_usuario",
    "bio": "Sua bio curta aqui...",
    "profileImage": "/minha-foto.png"
  },
  "theme": {
    "backgroundColor": "#000000",
    "textColor": "#ffffff",
    "buttonColor": "#111111",
    "buttonTextColor": "#ffffff",
    "bgMobile": "/bg-mobile.jpg",
    "bgDesktop": "/bg-desktop.jpg"
  }
}
```

### 2. Imagens (Pasta Public)
Para que as imagens funcionem:
1. Coloque seus arquivos (fotos, backgrounds) dentro da pasta `public/` na raiz do projeto.
2. No JSON, use o caminho com a barra inicial (ex: `/foto.png`).
3. **Fallback:** Se você não colocar uma imagem ou o nome estiver errado, o sistema carregará automaticamente a `/default-image.jpg`.

### 3. Links e Ícones
Para adicionar novos links, adicione um objeto no array `links` do JSON. O campo `icon` deve corresponder a um dos ícones disponíveis no sistema.

```json
{ 
  "id": 1, 
  "label": "Meu GitHub", 
  "url": "https://github.com/seu-usuario", 
  "icon": "github" 
}
```

**Ícones Disponíveis por Padrão:**
`coin`, `discord`, `facebook`, `github`, `globe`, `instagram`, `linkedin`, `onlyfans`, `tiktok`, `twitch`, `x`, `youtube`

**Como adicionar novos ícones:**
Os ícones do projeto são gerenciados localmente para garantir melhor performance e personalização. Para adicionar um novo:
1. Baixe o ícone desejado no formato `.svg` e coloque-o na pasta `src/data/icons/`.
2. Abra o arquivo `src/components/icons-repository.tsx`.
3. Importe o SVG e adicione-o ao objeto `iconRepository`:

```typescript
import novoIcone from '@/data/icons/novo-icone.svg';

export const iconRepository: Record<string, React.ReactNode> = {
  novo: <Image src={novoIcone} alt="Novo Ícone" width={24} height={24} />
};
```

Feito isso, basta usar o nome `"novo"` no seu `user.json`.

---

## 🌍 SEO e Metadados

O projeto possui um arquivo centralizado para configurações de SEO e compartilhamento social (Open Graph).

Arquivo: `src/app/shared-metadata.ts`

```typescript
import data from '@/data/user.json';

export const sharedMetadata = {
  title: `${data.profile.nickname} | BioLink`,
  description: data.profile.bio,
  openGraph: {
    title: `${data.profile.nickname} - Links e Contato`,
    description: data.profile.bio,
    url: 'https://seudominio.com',
    siteName: 'BioLink',
    images: [
      {
        url: data.profile.profileImage || '/default-image.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/icon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};
```

---

## 📱 Funcionalidades Extras

- **Botão de Compartilhar:** Localizado no canto inferior direito. Ao clicar, copia o link para a área de transferência.
- **Página de Perfil:** Ao clicar no cabeçalho (foto/nome) na Home, você é levado para uma página detalhada com E-mail, Telefone e outras redes.
- **Dark Mode:** O layout padrão é otimizado para fundo preto (`#000000`) e texto branco, ideal para economia de bateria em telas OLED.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.

Feito com ☕ e código.