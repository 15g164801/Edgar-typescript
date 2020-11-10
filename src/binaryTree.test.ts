import BinaryTree from 'comp-sci-maths-lib/dist/dataStructures/binaryTree/BinaryTree' ;
import traverseInOrder from 'comp-sci-maths-lib/dist/algorithms/binaryTreeTraversal/traverseInOrder' ;
import traversePreOrder from 'comp-sci-maths-lib/dist/algorithms/binaryTreeTraversal/traversePreOrder' ;
import traversePostOrder from 'comp-sci-maths-lib/dist/algorithms/binaryTreeTraversal/traversePostOrder' ;
import { add } from 'winston';

test ('Binary tree', () => {
    let myTree = new BinaryTree<number>((a, b) => a - b);

    myTree.add(7)
    myTree.add(4)
    myTree.add(6)
    myTree.add(8)
    myTree.add(90)
    myTree.add(5)

    expect(myTree.contains(6)).toBeTruthy();
    expect(myTree.contains(1)).toBeFalsy();
})
test ('Binary Tree - Traverse In Order', function() {
    let myTree = new BinaryTree<number>((a, b) => a - b);

    myTree.add(4)
    myTree.add(2)
    myTree.add(6)
    myTree.add(1)
    myTree.add(5)
    myTree.add(3)

    let inOrderResults: number[] = []
    traverseInOrder(myTree, x => inOrderResults.push(x));
    expect(inOrderResults).toEqual([1, 2, 3, 4, 5, 6])
    
    let preOrderResults: number[] = []
    traversePreOrder(myTree, x => preOrderResults.push(x));
    expect(preOrderResults).toEqual([4, 2, 1, 3, 5, 6])
    
    let postOrderResults: number[] = []
    traversePostOrder(myTree, x => postOrderResults.push(x));
    expect(postOrderResults).toEqual([1, 3, 2, 6, 5, 4])
})