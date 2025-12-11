# 📱 Sorteio Proz - Simulação de Engenharia Social

Esta aplicação web simula uma landing page de sorteio de um iPhone 16 Pro, desenhada especificamente para parecer uma campanha oficial da **Proz Educação**. O objetivo é servir como uma ferramenta prática para ensinar alunos sobre os perigos do **Phishing** e a importância de proteger dados pessoais como o CPF.

## 🛠️ Preparação para Publicação (Deploy)

Para colocar este site no ar gratuitamente usando o **GitHub Pages**, você precisará dos arquivos que foram incluídos neste projeto (`vite.config.ts` e `package.json`).

Siga os passos abaixo rigorosamente:

### Passo 1: Criar o Repositório no GitHub
1. Vá até o [GitHub](https://github.com) e crie um novo repositório (ex: `sorteio-proz-2025`).
2. Deixe-o como **Public**.
3. Não adicione README ou .gitignore por enquanto.

### Passo 2: Configurar o Projeto Localmente
Baixe os arquivos deste projeto para uma pasta no seu computador. Abra o terminal (VS Code ou CMD) nesta pasta e rode:

```bash
# 1. Instalar as dependências
npm install

# 2. Instalar a ferramenta de deploy do GitHub Pages
npm install gh-pages --save-dev
```

### Passo 3: Ajustar as Configurações (IMPORTANTE)

#### A. Editar `vite.config.ts`
Abra o arquivo `vite.config.ts` na raiz do projeto. Localize a linha `base` e altere para o nome do seu repositório.

**Antes:**
```typescript
base: '/nome-do-repositorio/',
```

**Depois (exemplo):**
```typescript
base: '/sorteio-proz-2025/',
```
*Atenção: Deve começar e terminar com barra `/`.*

#### B. Editar `package.json`
Abra o arquivo `package.json`. Localize a linha `"homepage"` (perto do topo) e altere para o seu endereço do GitHub Pages.

**Exemplo:**
```json
"homepage": "https://SEU-USUARIO.github.io/sorteio-proz-2025",
```

### Passo 4: Enviar para o GitHub e Publicar

No terminal, execute os comandos na ordem:

```bash
# 1. Iniciar o git
git init

# 2. Adicionar os arquivos
git add .

# 3. Criar o primeiro commit
git commit -m "Configuração inicial do Sorteio Proz"

# 4. Renomear branch para main
git branch -M main

# 5. Conectar com seu repositório (pegue o link no GitHub)
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

# 6. Enviar os arquivos
git push -u origin main

# 7. Fazer o DEPLOY (Publicar o site)
npm run deploy
```

### Passo 5: Configurar no GitHub
1. Vá até a página do seu repositório no GitHub.
2. Clique em **Settings** (Configurações) > **Pages** (no menu lateral esquerdo).
3. Em "Build and deployment" > "Source", certifique-se que está "Deploy from a branch".
4. Em "Branch", mude de `main` (ou none) para **`gh-pages`** e clique em Save.

⏳ Aguarde alguns minutos e seu site estará no ar!

---

## ⚠️ Aviso de Responsabilidade

Este projeto é **exclusivamente educacional**.
- **Nenhum dado real é coletado ou armazenado.**
- O formulário apenas valida o formato dos dados e redireciona para uma página educativa.
- Use com responsabilidade e ética para conscientizar colegas e amigos sobre segurança da informação.
