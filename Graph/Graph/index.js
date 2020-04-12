class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  //  make vertex be array in object
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  //  add edge or connection
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  //  filter edge in array where  value cannot same in vertex
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  //  remover vertex , cek vertex length, make var to delete value in array,  call func remove  and delete vertex
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

g = new Graph();

g.addVertex("Ampel");
g.addVertex("Boyolali");
g.addVertex("Solo");
g.addEdge("Ampel", "Solo");
g.addEdge("Boyolali", "Solo");
