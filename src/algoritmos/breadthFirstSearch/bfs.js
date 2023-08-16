function percursoEmLargura(grafo) {
    let visitou = {};
    let fila = []
    let edges = [];
    let i = 1;

    function breadthFirstSearch(){
        for (let vertice in grafo) {
            visitou[vertice] = 0;
        }
        
        
        for (let vertice in grafo) {
            if (!visitou[vertice]) {

                visitou[vertice] = i++;
                fila.push(vertice)
                console.log(fila);
                while (fila.length) {
                    const currentVertice = fila.shift();
                    // console.log(currentVertice);
                    for (let indice of grafo[vertice]) {
                        if (!visitou[indice]) {
                            visitou[indice] = i++;
                            fila.push(indice)
                            
                            edges.push([vertice, indice]);
                    
                        }
                    }
                }

            }
        }
        return edges;
    }
    console.log(breadthFirstSearch());
}

percursoEmLargura({
    0:[1,2,5],
    1:[0,3,4],
    2:[0,5],
    3:[1,5,6],
    4:[1,6],
    5:[0,2,3],
    6:[3,4],
    7:[8,9],
    8:[7],
    9:[7],
    10:[]
})