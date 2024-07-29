// Activity 5: Graph (Optional)

// • Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
class Graph{
    constructor(){
        this.adjList = {};
    }

    addVertex(v){
        if(!this.adjList[v])
            this.adjList[v] = [];
    }

    addEdge(v1,v2){
        if(this.adjList[v1] && this.adjList[v2]){
            this.adjList[v1].push(v2);
            this.adjList[v2].push(v1);

        }
    }

    bfs(start){
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;

        while (queue.length) {
            const vertex = queue.shift();
            result.push(vertex);

            this.adjList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
    
}


const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

console.log(graph.bfs('A'));




// • Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

