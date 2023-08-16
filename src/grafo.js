 class Grafo{
    constructor(eDirecionada = false){
        this._vertice = []
        this._aresta = {}
        this._adjacente = {}
        this._eDirecionada = eDirecionada
    }

    //Vertice
    adicionaVertice(valor){
        this._vertice.push(valor)
        this._adjacente[valor] = []; 
        return this
    }
    
    getVertice(indice){
        return this._vertice[indice]
    }

    // Aresta
    adicionaAresta(peso , vertice_1,vertice_2){
  
        if (!this._aresta[peso] && !Array.isArray(vertice_1)) {
            this._aresta[peso] = [];

            this._aresta[peso].push(this.getVerticeAdjacencias(vertice_1))
            this._aresta[peso].push(this.getVerticeAdjacencias(vertice_2))
        }
        else if(Array.isArray(vertice_1)){
            this._aresta[peso] = vertice_1
        }
        else{
            this._aresta[peso].push(this.getVerticeAdjacencias(vertice_1))
            this._aresta[peso].push(this.getVerticeAdjacencias(vertice_2))
        }
   
    }
    getAresta(indice){
        return this._aresta[indice]
    }
    getTodasArestas(){
        return this._aresta
    }

    getVerticeAdjacencias(indice){
        return this._adjacente[indice]
    }
    
}

module.exports = Grafo