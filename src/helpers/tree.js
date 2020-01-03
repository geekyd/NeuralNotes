export default function tree(root, nodes, edges) {
  function find(predicate) {
    let foundNode;

    if (predicate(root)) {
      return root;
    }

    findInChildren(root);

    return foundNode;

    function findInChildren(node) {
      if (!node.children) {
        return;
      }

      node.children.forEach(childNode => {
        if (predicate(childNode)) {
          foundNode = childNode;
        } else {
          !foundNode && findInChildren(childNode);
        }
      });
    }
  }

  function findInNodes(nodes, edges) {

  }

  function findInEdges(nodes, edges) {

  }

  return {
    find,
  };
}
