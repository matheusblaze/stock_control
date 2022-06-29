Esta é uma amostra de um controle de estoque simplificado feito com JavaScript usando Node.js que aplica um simulador de banco de dados chamado Json-Server para que seja possível ser carregado no gitHub e baixado facilmente, sem necessitar a instalação de um banco de dados. A interface é uma página HTML e pode ser acessada baixando o código e seguindo os seguintes passos:

Obs: tenha certeza de já ter instalado o node.js e o npm para prosseguir
1) Navegue até a pasta ["caminho onde o projeto está salvo"/admin] no seu terminal
2) Execute o comando [$npm install] para garantir que as dependencias do projeto estão instaladas
3) Execute o comando: [$json-server --watch db.json] neste terminal para deixar rodando o simulador da API com banco de dados
4) Abrir um novo terminal para o browser-sync
5) Execute o comando [$npm install -g browser-sync] para instalar globalmente o Browser-sync
6) Rodar o comando: [$browser-sync start --server --file . --host --port 5000 --startPath pages/inventory_list.html]
