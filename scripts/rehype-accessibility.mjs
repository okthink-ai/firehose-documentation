// Keep horizontally scrollable examples and tables reachable without JavaScript.
export default function readableOverflow() {
  return (tree) => {
    function visit(node) {
      if (node.type === 'element' && ['pre', 'table'].includes(node.tagName)) {
        node.properties ??= {};
        node.properties.tabIndex = 0;
        if (node.tagName === 'pre') {
          node.properties.role = 'region';
          node.properties.ariaLabel = 'Code example';
        }
      }
      for (const child of node.children ?? []) visit(child);
    }
    visit(tree);
  };
}
