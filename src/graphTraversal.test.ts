import Graph from 'comp-sci-maths-lib/dist/dataStructures/graph/Graph';
import { StringGraphVertex } from 'comp-sci-maths-lib/dist/types';
import { getStringVertex} from 'comp-sci-maths-lib/dist/common';

test('Simple Graph', () => {
    const myGraph: Graph<StringGraphVertex> = new Graph() ;

    const vertexA = getStringVertex('A');
    const vertexB = getStringVertex('B');
    const vertexC = getStringVertex('C');
    const vertexD = getStringVertex('D');
    const vertexE = getStringVertex('E');

    myGraph.addBiDirectionalEdge(vertexA, vertexB)
    .addBiDirectionalEdge(vertexA, vertexC)
    .addBiDirectionalEdge(vertexB, vertexD)
    .addBiDirectionalEdge(vertexB, vertexE)
    .addBiDirectionalEdge(vertexC, vertexE);

    const outGoingA = myGraph.getOutgoing(vertexA);
    const outGoingAValue = outGoingA.map(x=> x.to).map(o => o.value);
    const outGoingB = myGraph.getOutgoing(vertexB);
    const outGoingBValue = outGoingB.map(x=> x.to).map(o => o.value);

    expect(outGoingAValue.includes('B')).toBeTruthy();
    expect(outGoingAValue.includes('C')).toBeTruthy();
    expect(outGoingAValue.includes('D')).toBeFalsy();
    expect(outGoingBValue.includes('D')).toBeTruthy();
    expect(outGoingBValue.includes('E')).toBeTruthy();
    expect(outGoingBValue.includes('A')).toBeTruthy();
})