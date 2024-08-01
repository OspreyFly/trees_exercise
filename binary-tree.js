/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node = this.root) {
    if (!node) return 0; // Base case: if the node is null, return 0
  
    // Recursively calculate the depth of the left and right subtrees
    const leftDepth = this.minDepth(node.left);
    const rightDepth = this.minDepth(node.right);
  
    // If both subtrees exist, return the minimum depth of the two plus 1
    if (leftDepth !== -1 && rightDepth !== -1) {
      return Math.min(leftDepth, rightDepth) + 1;
    }
  
    // If only one subtree exists, return the depth of that subtree plus 1
    if (leftDepth !== -1) {
      return leftDepth + 1;
    } else {
      return rightDepth + 1;
    }
  
    // If neither subtree exists, return -1 to indicate an invalid call
    return -1;
  }
  
  

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {
    if (!node) return 0; // Empty tree
    return Math.max(this.maxDepth(node.left), this.maxDepth(node.right)) + 1;
  }
  

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    function maxSumHelper(node) {
      if (node === null) return 0;
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      result = Math.max(result, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    maxSumHelper(this.root);
    return result;
  }
  
  

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    // let's use BFS for this!
    let queue = [this.root];
    let closest = null;

    while (queue.length) {
      let currentNode = queue.shift();
      let currentVal = currentNode.val;
      let higherThanLowerBound = currentVal > lowerBound;
      let shouldReassignClosest = currentVal < closest || closest === null;

      if (higherThanLowerBound && shouldReassignClosest) {
        closest = currentVal;
      }

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return closest;
  }
  
}

module.exports = { BinaryTree, BinaryTreeNode };
