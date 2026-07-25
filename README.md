<div align="center">

# 🚀 Carlos Guedes Dev (Portfólio Pessoal & HUD Experience) 👨‍💻✨

**O portfólio digital interativo de Carlos Guedes — Engenheiro de Software especializado em experiências web de precisão, design imersivo e alta performance!**

[![Versão](https://img.shields.io/badge/versão-1.0.0-8a2be2?style=for-the-badge&logo=rocket&logoColor=white)](https://github.com)
[![Licença](https://img.shields.io/badge/licença-MIT-00ff88?style=for-the-badge)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Feito com Amor](https://img.shields.io/badge/Feito_com-MUITO_AMOR_❤️-ff0055?style=for-the-badge)](https://github.com)

---

🔗 **[Acessar o Projeto Ao Vivo / Demonstração Online](https://carlosguedes-dev.github.io/carlosguedes-dev/)**

<p align="center">
  <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop" alt="Banner Portfólio Futurista e Interface HUD" width="80%" style="border-radius: 20px; box-shadow: 0 10px 30px rgba(138, 43, 226, 0.4);">
</p>

</div>

---

## 📖 Sobre o Projeto

O **Carlos Guedes Dev — Portfólio Pessoal** é a vitrine digital e laboratório prático de **Carlos Guedes**, Engenheiro de Software apaixonado por unir código de precisão milimétrica, interfaces visuais de vanguarda (*Ultra-Premium HUD & Cyberpunk Dark Mode*) e arquitetura computacional escalável. Este projeto foi criado para expressar de forma interativa sua filosofia de trabalho: a crença de que tecnologia robusta e design imersivo devem fundir-se para entregar produtos digitais inesquecíveis.

Desenvolvido sob uma estética futurista com elementos inspirados em *Heads-Up Displays* (HUD) e painéis de telemetria científica, o site abandona as estruturas estáticas tradicionais. A experiência de navegação é conduzida por um sistema de profundidade baseada em *parallax* no eixo Z, criando no usuário a sensação sensorial de mergulhar através de seções interativas, projetos de destaque e competências técnicas.

O coração gráfico da aplicação reside em um motor de partículas reativo programado do zero utilizando a **Canvas API** e **TypeScript**, que responde magneticamente em tempo real à posição e velocidade do cursor. Complementado por uma arquitetura ágil impulsionada por **Vite** e deploy contínuo via GitHub Actions, este portfólio demonstra que é possível alcançar animações visuais de nível AAA com 60 FPS constantes na web nativa.

---

## ✨ Principais Funcionalidades

- 🌌 **Sistema de Partículas Dinâmico (Canvas API)**: Motor gráfico reativo programado em TypeScript, renderizando uma rede procedural de partículas e conexões que são atraídas e repelidas interativamente pelo cursor do mouse.
- 🚀 **Navegação em Profundidade 3D (Z-Depth Parallax)**: Experiência imersiva de rolagem orientada ao eixo Z, proporcionando a ilusão cinematográfica de mergulho tridimensional através do conteúdo do portfólio.
- 🎯 **HUD Futurista com Telemetria em Tempo Real**: Interface persistente que exibe coordenadas espaciais do mouse, medição contínua de FPS do navegador, progresso milimétrico de scroll e relógio global sincronizado.
- 💎 **Acabamento Pixel-Perfect & Glassmorphism**: Design projetado com maestria em Vanilla CSS, incorporando efeitos de vidro fosco (`backdrop-filter: blur`), brilhos neon em camadas e tipografia de alto padrão.
- ⚡ **Efeitos Tipográficos & Glitch Nativos**: Animações CSS3 de digitação progressiva e distorção estética inteligente (*glitch*), elevando a imersão na identidade visual futurista e tecnológica do site.
- 📱 **Desempenho Otimizado (Zero Bloatware)**: Construído sem dependências de frameworks de interface pesados, garantindo tempos de carregamento instantâneos e responsividade fluida em tablets e smartphones.

---

## 💻 Tecnologias Utilizadas

Este projeto reflete o estado da arte do desenvolvimento web moderno, priorizando controle absoluto de renderização, tipagem estática e automação contínua:

- **Vite**: Build tool de última geração que oferece inicialização instantânea do servidor local e empacotamento de produção super otimizado.
- **TypeScript**: Superset de JavaScript com tipagem estática e segurança em tempo de compilação, responsável pelo controle matemátiço do Canvas e manipulação de DOM.
- **HTML5 Semântico**: Estruturação clara, limpa e padronizada para máxima acessibilidade e indexação por motores de busca (SEO).
- **Vanilla CSS (CSS3)**: Sistema avançado de variáveis CSS, layouts flexíveis via Grid/Flexbox e animações de alta precisão em `@keyframes`.
- **GitHub Actions (CI/CD)**: Pipeline de automação configurada no repositório (`.github/workflows/deploy.yml`) que executa o build otimizado e realiza o deploy no GitHub Pages instantaneamente após cada push na branch principal.

---

## 📁 Estrutura de Arquivos

```text
carlosguedes-dev/
│
├── index.html              # Ponto de entrada da aplicação e marcação semântica do HUD
├── package.json            # Configuração de dependências e scripts de build do Vite/TypeScript
├── tsconfig.json           # Configurações do compilador TypeScript e regras de tipagem
├── vite.config.ts          # Parâmetros do empacotador e servidor de desenvolvimento Vite
├── README.md               # Documentação completa do projeto (este arquivo)
├── CONTRIBUTING.md         # Guia e diretrizes para contribuições da comunidade
├── LICENSE                 # Licença MIT do projeto
├── public/
│   ├── favicon.svg         # Ícone vetorial da aba do navegador
│   └── icons.svg           # Sprite de ícones SVG de alta resolução
└── src/
    ├── main.ts             # Núcleo de lógica em TypeScript (Canvas, HUD, Scroll Parallax)
    ├── style.css           # Sistema de design com Glassmorphism, Neon e animações CSS3
    └── assets/
        ├── hero.png        # Imagem e recursos visuais da seção principal
        ├── typescript.svg  # Vetor do selo tecnológico TypeScript
        └── vite.svg        # Vetor do selo tecnológico Vite
```

---

## 🚀 Como Executar o Projeto

Você pode rodar e explorar toda a estrutura computacional deste portfólio localmente seguindo os passos abaixo:

### Pré-requisitos
- **Node.js** (versão 18.x ou superior recomendada)
- **NPM** (ou outro gerenciador de pacotes como Yarn, PNPM ou Bun)

### Passo a Passo de Execução

1. **Clone o repositório em seu terminal:**
   ```bash
   git clone https://github.com/carlosguedes-dev/carlosguedes-dev.git
   ```
2. **Acesse o diretório raiz do projeto:**
   ```bash
   cd carlosguedes-dev
   ```
3. **Instale as dependências com o NPM:**
   ```bash
   npm install
   ```
4. **Inicie o servidor de desenvolvimento do Vite:**
   ```bash
   npm run dev
   ```
5. **Acesse o projeto no navegador:**
   Abra seu navegador e acesse o link gerado no terminal (normalmente `http://localhost:5173`). O servidor possui *Hot Module Replacement* (HMR), atualizando a interface em milissegundos conforme o código é alterado.

### Build de Produção
Para compilar o código em TypeScript e gerar os arquivos estáticos otimizados na pasta `dist/`:
```bash
npm run build
```
Para visualizar uma prévia local da versão gerada para produção:
```bash
npm run preview
```

---

## 🤝 Como Contribuir

Se você deseja explorar ideias, sugerir melhorias de performance gráfica para o motor de partículas do Canvas ou colaborar com melhorias visuais e arquiteturais, sinta-se à vontade para abrir uma Issue ou enviar um Pull Request. Confira as instruções detalhadas no nosso arquivo [CONTRIBUTING.md](CONTRIBUTING.md).

---

## 📄 Licença

Este portfólio e todos os seus recursos originais estão devidamente protegidos e distribuídos sob a licença de código aberto **MIT**. Veja o arquivo [LICENSE](LICENSE) para consultar as cláusulas de direitos autorais, cópia e modificação.

---

<div align="center">
  <p>Feito com todo o carinho, dedicação e engenharia de precisão por <a href="https://github.com/carlosguedes-dev"><b>Carlos Guedes</b></a> ❤️</p>
  <p><b>Transformando arquitetura de software e design em experiências digitais inesquecíveis! 🚀✨</b></p>
</div>
