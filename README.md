## Para criar um novo codigo de CPF válido:

Crie uma variavel, e atribua a ela a função ```CriaCPF()```, ela irá retornar um código de CPF, que pode ou não ser válido. Para verificar se ele é ou não válido, é utilizada o método ```valida()```, que está atribuido ao construtor ```ValidaCPF```. Conforme exemplo a seguir.

<img src="https://user-images.githubusercontent.com/108747806/213822810-43edbe38-fe14-41ac-b206-c1ad431bffb0.png" width="800px">



Como a validação pode não ocorrer no primeiro código gerado, sugiro que seja criada uma estrutura de loop, para verificar a validade do CPF gerado.

<img src="https://user-images.githubusercontent.com/108747806/213822966-ba12eb40-390e-4216-b9d5-fa4da53af143.png" width="800px">

## Para verificar a validade de um CPF já existente:

Diferente do processo de criação do CPF, a sua validação depende apenas do construtor ```ValidaCPF```, que terá como parâmetro o CPF que deseja verificar, conforme ilutrado a seguir.

![image](https://user-images.githubusercontent.com/108747806/213823165-8de3c770-19a4-4efe-9a45-a5973a126cda.png)

