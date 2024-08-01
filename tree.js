/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues(node = this.root) {
    if (!node) return 0; // Base case: if the node is null, return 0
  
    let total = node.val; // Start with the current node's value
    for (let child of node.children) {
      total += this.sumValues(child); // Recursively add the values of all children
    }
    return total;
  }
  

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens(node = this.root) {
    if (!node) return 0; // Base case: if the node is null, return 0
  
    let count = node.val % 2 === 0 ? 1 : 0; // Check if the current node's value is even
    for (let child of node.children) {
      count += this.countEvens(child); // Recursively count the evens of all children
    }
    return count;
  }
  

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound, node = this.root) {
    if (!node) return 0; // Base case: if the node is null, return 0
  
    let count = node.val > lowerBound ? 1 : 0; // Check if the current node's value is greater than the lower bound
    for (let child of node.children) {
      count += this.numGreater(lowerBound, child); // Recursively count the nodes greater than the lower bound among all children
    }
    return count;
  }
  
}

module.exports = { Tree, TreeNode };
