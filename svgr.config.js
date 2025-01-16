module.exports = {
  icon: true,
  typescript: true,
  filenameCase: "pascal", // Ensures PascalCase naming
  template: (
    { imports, interfaces, componentName, props, jsx },
    { tpl }
  ) => {
    const newName = componentName.replace(/^Svg/, "Icon");
    const recursivelyReplaceFill = (node) => {
        if (node.type === 'JSXElement') {
          node.openingElement.attributes = node.openingElement.attributes.map((attr) => {
            if (attr.type === 'JSXAttribute' && attr.name.name === 'fill') {
              return {
                ...attr,
                value: {
                  type: 'StringLiteral',
                  value: 'currentColor',
                },
              };
            }
            return attr;
          });
    
          // Recursively process children
          node.children = node.children.map(recursivelyReplaceFill);
        }
        return node;
      };
    
      const updatedJSX = recursivelyReplaceFill(jsx);
    return tpl`
        ${imports};

        ${interfaces};

        const ${newName} = (${props}) => (
            ${updatedJSX}
        );
  
        export default ${newName};
      `;
  },
};
