class Grafo{
    constructor(eDirecionada = false){
        this._vertice = []
        this._aresta = {}
        this._eDirecionada = eDirecionada
    }
    adicionaVertice(valor){
        this._vertice.push(valor)
        return this
    }
    getVerticeAdjacencias(indice){
        return this._vertice[indice]
    }
    adicionaAresta(){
        this.getVerticeAdjacencias(indice)
    }
}