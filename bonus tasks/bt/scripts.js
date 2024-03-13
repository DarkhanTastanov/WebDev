document.addEventListener('DOMContentLoaded', function() {
    let numbersInput = document.querySelector('.numbers'); // Select input field
    let startButton = document.querySelector('.start'); // Select start button
    let visualization = document.querySelector('.bst-visualization'); // Select visualization SVG

    startButton.addEventListener('click', function() {
        let numbersString = numbersInput.value; // Get value from input field
        let arr = numbersString.split(',').map(Number); // Split the string value and convert to array of numbers

        const bst = new BST();

        // Insert each number from the array into the BST
        arr.forEach(number => {
            if (!isNaN(number)) { // Check if the element is a valid number
                bst.insert(number);
            }
        });

        // Now you have a BST constructed from the array
        visualizeBST(bst);
    });

    class Node {
        constructor(data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }

    class BST {
        constructor() {
            this.root = null;
        }

        insert(data) {
            const newNode = new Node(data);
            if (this.root === null) {
                this.root = newNode;
            } else {
                this.insertNode(this.root, newNode);
            }
        }

        insertNode(node, newNode) {
            if (newNode.data < node.data) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    this.insertNode(node.left, newNode);
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    this.insertNode(node.right, newNode);
                }
            }
        }
    }

    function visualizeBST(bst) {
        // Clear previous visualization
        visualization.innerHTML = '';

        // Calculate tree dimensions
        const treeWidth = 600;
        const treeHeight = 400;
        const nodeRadius = 20;

        // Traverse the tree and draw nodes
        traverseAndDraw(bst.root, treeWidth / 2, nodeRadius, 500,       0);

        function traverseAndDraw(node, x, y, dx, dy) {
            if (node !== null) {
                const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                circle.setAttribute('cx', x);
                circle.setAttribute('cy', y);
                circle.setAttribute('r', nodeRadius);
                circle.setAttribute('fill', 'blue');
                visualization.appendChild(circle);

                // Draw left child
                if (node.left !== null) {
                    const childX = x - dx;
                    const childY = y + dy;
                    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                    line.setAttribute('x1', x);
                    line.setAttribute('y1', y);
                    line.setAttribute('x2', childX);
                    line.setAttribute('y2', childY);
                    line.setAttribute('stroke', 'black');
                    visualization.appendChild(line);
                    traverseAndDraw(node.left, childX, childY, dx / 2, dy + 50);
                }

                // Draw right child
                if (node.right !== null) {
                    const childX = x + dx;
                    const childY = y + dy;
                    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                    line.setAttribute('x1', x);
                    line.setAttribute('y1', y);
                    line.setAttribute('x2', childX);
                    line.setAttribute('y2', childY);
                    line.setAttribute('stroke', 'black');
                    visualization.appendChild(line);
                    traverseAndDraw(node.right, childX, childY, dx / 2, dy + 50);
                }

                // Draw node value
                const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                text.setAttribute('x', x);
                text.setAttribute('y', y + 5);
                text.setAttribute('text-anchor', 'middle');
                text.setAttribute('fill', 'white');
                text.textContent = node.data;
                visualization.appendChild(text);
            }
        }
    }
});
