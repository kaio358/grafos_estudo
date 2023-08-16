const Grafo = require("../../../grafo")
const dfs = require("../dfs")

const teste = new Grafo()
teste.adicionaAresta(0,[1,2,5])
teste.adicionaAresta(1,[0,3,4])
teste.adicionaAresta(2,[0,5])
teste.adicionaAresta(3,[1,5,6])
teste.adicionaAresta(4,[1,6])
teste.adicionaAresta(5,[0,2,3])
teste.adicionaAresta(6,[3,4])
teste.adicionaAresta(7,[8,9])
teste.adicionaAresta(8,[7])
teste.adicionaAresta(9,[7])

const grafo = teste.getTodasArestas()




dfs(grafo)



