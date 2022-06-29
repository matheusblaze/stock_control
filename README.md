Passos para a execução do controle de Estoque MicroCosmos3D:

1) Navegue até a pasta ["caminho onde o projeto está salvo"/admin] no seu terminal
2) Execute o comando $npm install para garantir que as dependencias do projeto estão instaladas
3) Execute o comando: [$json-server --watch db.json] neste terminal para deixar rodando o simulador da API com banco de dados
4) Abrir um novo terminal para o browser-sync
5) Rodar o comando: [$browser-sync start --server --file . --host --port 5000 --startPath pages/inventory_list.html]
