const grafo = {
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
}
var visitou = {}
var cont = 0

// function dfs(indice){

    
//     visitou[indice] = cont++
    
//     // if(visitou[indice] == 0){
//     //     dfs(indice)
//     // }
  
  
// }

function depthFirstSearch(){
    for(var indice in grafo){
        visitou[indice] = 0
        
    }
    
    
    for(var indice in visitou){
        
        while(visitou[indice]== 0){
                visitou[indice] = cont++
        }
    }
}

depthFirstSearch()
console.log(visitou);

