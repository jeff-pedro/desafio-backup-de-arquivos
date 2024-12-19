# Criador de Backups para Arquivos JSON

**Descrição:**

Este script Node.js automatiza a criação de backups para todos os arquivos JSON encontrados em um diretório e seus subdiretórios. Ele utiliza a biblioteca `glob` para localizar os arquivos e o módulo `fs` para criar cópias com a extensão `.bak`.

**Funcionalidades:**

* **Busca Recursiva:** Localiza todos os arquivos JSON em um diretório e seus subdiretórios.
* **Criação de Backups:** Cria cópias dos arquivos JSON com a extensão `.bak` no mesmo diretório.

_Obs.: a busca ignora os diretórios `node_modules` e arquivos `package*.json`._

**Pré-requisitos:**

* Node.js (v18.18.0) e npm (ou yarn) instalados.

**Como Executar:**

1. **Clone o repositório:**

   ```bash
   git clone [https://seu-repositorio.git](https://seu-repositorio.git)
   ```

2. **Instale as dependências:**

    ```bash
    cd seu-projeto
    npm install
    ```

3. **Execute o script:**

   ```bash
   node index.js
   ```
