# 📃 ToDoTasks

- **ToDoTasks** é um projeto simples de navegador, onde seu principal papel é ser facil e intuitivo.

- Este codigo usa um recurso dos navegadores chamado de LocalStorage, onde ele armazena dados em cache para serem persistentes, e assim recuperar esses dados na proxima visita ao site.

---

## 🎯 Funcionalidades & Objetivo

- Ao carregar o index.html, o site deve aparecer com um cabeçalho e um conteudo central, tendo que identificar automaticamente no carregamento do DOM e o HTML se há alguma chave pré configurada no LocalStorage, e através de uma condicional carregar todas as notas salvas dentro dessa chave.

- No cabeçalho, há o botão de Adicionar Tarefa (+) e o botão de Limpar Tudo (=), feitos pra deixar a interface bem mais limpa e com foco na sua principal função.

- Ao pressionar o botão Adicionar Tarefa (+), deve surgir um popup pedindo as seguintes informações: Titulo, Descrição, Data e Horario(opcional). após inserir essas informações, um script irá capta-las, processa-las e salva-las em uma nova chave local (ou salvar na existente, se tiver), após isso, irá recarregar sua atividade principal no centro da pagina, devendo mostrar todas as tarefas organizadas em sua coluna. **Detalhe importante:** **Se você estiver testando o projeto direto do github pages, tem uma chance do script não funcionar corretamente, por ter sido feito com foco local. Estou trabalhando pra corrigir isso!**

- Por fim, a visualização da tarefa no centro da pagina é devidida por colunas: Hoje, Ontem, Esta semana, etc. A tarefa é mostrada em um item em linha, com o titulo em negrito na primeira linha e a descrição na segunda linha, e no lado direito desse item terá a informação de data e hora, alem do botão de alterar prazo e o botão de deletar. **Notas: a funcionalidade de dividir por colunas ainda está imcompleta, e falta configurar o botão de alterar prazo.**

---