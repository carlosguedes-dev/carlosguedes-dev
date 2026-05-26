# Carlos Guedes — Dev Engineer Portfolio

![Status](https://img.shields.io/badge/Status-Online-success?style=flat-square&logo=github)
![Tech Stack](https://img.shields.io/badge/Stack-TypeScript%20%7C%20Vite%20%7C%20Vanilla%20CSS-blue?style=flat-square)

Bem-vindo ao repositório do meu site pessoal/portfólio. Este projeto foi desenvolvido para refletir a minha abordagem como engenheiro de software: **código de precisão, interfaces que impressionam e arquitetura que escala.**

O design utiliza uma estética imersiva com elementos de HUD (Heads-Up Display), efeitos 3D orientados por scroll e um sistema de partículas iterativo via Canvas API, proporcionando uma experiência de navegação fluida e tecnológica.

🔗 **Acesse o site:** [carlosguedes-dev.github.io/carlosguedes-dev](https://carlosguedes-dev.github.io/carlosguedes-dev/)

---

## ✨ Features Principais

- **Sistema de Partículas (Canvas):** Fundo interativo gerado dinamicamente com atração pelo cursor do mouse.
- **Scroll em Profundidade (Z-Depth):** Navegação baseada em *parallax* no eixo Z, criando a ilusão de mergulho no conteúdo.
- **HUD Dinâmico:** Interface persistente com telemetria simulada (coordenadas do mouse, FPS, progresso do scroll e horário).
- **Pixel-Perfect & Responsivo:** Design cuidadosamente ajustado via Vanilla CSS para funcionar perfeitamente em dispositivos móveis e desktops.
- **Efeitos Typograficos & Glitch:** Animações CSS avançadas e efeitos de digitação nativos para maior imersão.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído priorizando performance e controle absoluto, sem depender de frameworks pesados para a interface:

- **Vite:** Build tool ultrarrápido para desenvolvimento e empacotamento.
- **TypeScript:** Para lógica de interface e controle do Canvas com tipagem estática e segurança.
- **HTML5 (Semântico):** Estrutura clara e acessível.
- **Vanilla CSS (CSS3):** Estilização avançada, variáveis CSS, animações complexas (`@keyframes`) e layouts modernos (Flexbox/Grid).
- **GitHub Actions:** Pipeline automatizada (CI/CD) para deploy no GitHub Pages.

## 🚀 Como Rodar Localmente

Siga os passos abaixo para rodar o projeto na sua máquina:

### Pré-requisitos
- Node.js (versão 18 ou superior recomendada)
- NPM (ou outro gerenciador de pacotes da sua preferência)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/carlosguedes-dev/carlosguedes-dev.git
   ```
2. Entre no diretório do projeto:
   ```bash
   cd carlosguedes-dev
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Abra o navegador no endereço indicado (geralmente `http://localhost:5173`).

### Build para Produção

Para gerar os arquivos otimizados para produção:
```bash
npm run build
```
Os arquivos compilados estarão na pasta `dist/`.

## ⚙️ Arquitetura de Deploy

O deploy deste projeto é totalmente automatizado utilizando **GitHub Actions**. Qualquer alteração empurrada (*pushed*) para a branch `main` engatilha o workflow definido em `.github/workflows/deploy.yml`.

A action realiza os seguintes passos:
1. Instalação das dependências.
2. Build do projeto otimizado pelo Vite.
3. Push automático da pasta `dist/` para a branch `gh-pages`.
4. O GitHub Pages lê a branch `gh-pages` e atualiza o site no ar instantaneamente.

## 📞 Contato

Ficou interessado no meu trabalho? Vamos conversar!

- **WhatsApp:** [(53) 99141-1935](https://wa.me/5553991411935)
- **E-mail:** carlosguedes0007@gmail.com
- **GitHub:** [carlosguedes-dev](https://github.com/carlosguedes-dev)

---
*Projetado e desenvolvido por Carlos Guedes. © 2026 Todos os direitos reservados.*
