function percursoEmProfundidade(grafo) {
        
    let visitou = {};
    let edges = [];
    let i = 1;

    function dfs(v) {
        visitou[v] = i++;
        for (let indice of grafo[v]) {
            if (!visitou[indice]) {
                edges.push([v, indice]);
                dfs(indice);
            }
        }
    }

    function depthFirstSearch() {
        for (let vertice in grafo) {
            visitou[vertice] = 0;
        }
        
        
        for (let vertice in grafo) {
            if (!visitou[vertice]) {
                dfs(vertice);
            }
        }
        
        return edges;
    }

    console.log(depthFirstSearch());
}

module.exports = percursoEmProfundidade