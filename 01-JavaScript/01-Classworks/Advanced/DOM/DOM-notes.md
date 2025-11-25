# DOM (Document Object Model) - Complete Notes

## What is the DOM?

The **Document Object Model (DOM)** is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as a tree of objects that can be manipulated with JavaScript.

Think of the DOM as a bridge between your HTML and JavaScript. When a browser loads a web page, it creates a DOM tree from the HTML, allowing JavaScript to interact with every element on the page.

## The DOM Tree Structure

The DOM represents an HTML document as a hierarchical tree structure:

```
Document
  └── html
      ├── head
      │   ├── title
      │   └── meta
      └── body
          ├── header
          │   └── h1
          ├── main
          │   ├── p
          │   └── div
          └── footer
```

Each element in the tree is called a **node**. There are different types of nodes:
- **Element nodes**: HTML tags like `<div>`, `<p>`, `<h1>`
- **Text nodes**: The actual text content inside elements
- **Attribute nodes**: Attributes of elements like `class`, `id`, `src`
- **Comment nodes**: HTML comments

## Selecting Elements

Before you can manipulate elements, you need to select them. Here are the main methods:

### getElementById()
Selects a single element by its ID attribute.

```javascript
const header = document.getElementById('main-header');
// Returns the element with id="main-header"
```

### getElementsByClassName()
Selects all elements with a specific class name. Returns an HTMLCollection (array-like object).

```javascript
const buttons = document.getElementsByClassName('btn');
// Returns all elements with class="btn"
// Access individual elements: buttons[0], buttons[1], etc.
```

### getElementsByTagName()
Selects all elements with a specific tag name. Returns an HTMLCollection.

```javascript
const paragraphs = document.getElementsByTagName('p');
// Returns all <p> elements
```

### querySelector()
Selects the **first** element that matches a CSS selector.

```javascript
const firstButton = document.querySelector('.btn');
// Returns the first element with class="btn"

const emailInput = document.querySelector('input[type="email"]');
// Returns the first email input field
```

### querySelectorAll()
Selects **all** elements that match a CSS selector. Returns a NodeList.

```javascript
const allButtons = document.querySelectorAll('.btn');
// Returns all elements with class="btn"

const navLinks = document.querySelectorAll('nav a');
// Returns all <a> elements inside <nav>
```

**Note**: `querySelector()` and `querySelectorAll()` are more flexible because they accept any CSS selector.

## Manipulating Element Content

### textContent
Gets or sets the text content of an element (ignores HTML tags).

```javascript
const heading = document.querySelector('h1');
console.log(heading.textContent); // Get text content
heading.textContent = 'New Heading'; // Set text content
```

### innerHTML
Gets or sets the HTML content inside an element (interprets HTML tags).

```javascript
const container = document.querySelector('.container');
container.innerHTML = '<p>This is <strong>bold</strong> text</p>';
// Renders the HTML tags
```

**Warning**: Be careful with `innerHTML` when using user input, as it can lead to security vulnerabilities (XSS attacks).

### innerText
Similar to `textContent`, but respects CSS styling (won't show hidden text).

```javascript
const element = document.querySelector('.hidden-text');
console.log(element.innerText); // Won't show text if CSS hides it
console.log(element.textContent); // Shows all text regardless of CSS
```

## Manipulating Attributes

### getAttribute()
Gets the value of an attribute.

```javascript
const link = document.querySelector('a');
const url = link.getAttribute('href');
console.log(url); // Gets the href value
```

### setAttribute()
Sets or changes an attribute value.

```javascript
const image = document.querySelector('img');
image.setAttribute('src', 'new-image.jpg');
image.setAttribute('alt', 'A new image');
```

### removeAttribute()
Removes an attribute from an element.

```javascript
const button = document.querySelector('button');
button.removeAttribute('disabled');
```

### Direct Property Access
You can also access common attributes directly as properties.

```javascript
const input = document.querySelector('input');
input.value = 'Hello'; // Set input value
input.type = 'password'; // Change input type
input.placeholder = 'Enter password'; // Set placeholder
```

## Manipulating Styles

### style Property
Directly modify inline CSS styles.

```javascript
const box = document.querySelector('.box');
box.style.backgroundColor = 'blue';
box.style.width = '200px';
box.style.fontSize = '16px';
// Note: CSS properties use camelCase in JavaScript
```

### classList
A better way to work with CSS classes.

```javascript
const element = document.querySelector('.item');

// Add a class
element.classList.add('active');

// Remove a class
element.classList.remove('hidden');

// Toggle a class (add if not present, remove if present)
element.classList.toggle('highlight');

// Check if element has a class
if (element.classList.contains('active')) {
  console.log('Element is active');
}

// Replace a class
element.classList.replace('old-class', 'new-class');
```

## Creating and Adding Elements

### createElement()
Creates a new element.

```javascript
const newDiv = document.createElement('div');
const newParagraph = document.createElement('p');
const newButton = document.createElement('button');
```

### appendChild()
Adds a child element to the end of a parent element.

```javascript
const container = document.querySelector('.container');
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph';
container.appendChild(newParagraph);
```

### append()
Similar to `appendChild()`, but can append multiple elements and text.

```javascript
const container = document.querySelector('.container');
container.append('Some text', newElement, 'More text');
```

### prepend()
Adds elements to the beginning of a parent element.

```javascript
const list = document.querySelector('ul');
const newItem = document.createElement('li');
newItem.textContent = 'First item';
list.prepend(newItem); // Adds to the beginning
```

### insertBefore()
Inserts an element before a specific child element.

```javascript
const parent = document.querySelector('.parent');
const newElement = document.createElement('div');
const referenceElement = document.querySelector('.reference');
parent.insertBefore(newElement, referenceElement);
```

### insertAdjacentHTML()
Inserts HTML at a specific position relative to an element.

```javascript
const element = document.querySelector('.target');

// beforebegin: before the element itself
element.insertAdjacentHTML('beforebegin', '<p>Before</p>');

// afterbegin: inside the element, before its first child
element.insertAdjacentHTML('afterbegin', '<p>First child</p>');

// beforeend: inside the element, after its last child
element.insertAdjacentHTML('beforeend', '<p>Last child</p>');

// afterend: after the element itself
element.insertAdjacentHTML('afterend', '<p>After</p>');
```

## Removing Elements

### remove()
Removes the element from the DOM.

```javascript
const element = document.querySelector('.to-remove');
element.remove();
```

### removeChild()
Removes a child element from a parent.

```javascript
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');
parent.removeChild(child);
```

## Traversing the DOM

### Parent Navigation

```javascript
const element = document.querySelector('.child');

// Get the parent element
const parent = element.parentElement;

// Get the parent node (similar to parentElement)
const parentNode = element.parentNode;

// Get the closest ancestor that matches a selector
const closestDiv = element.closest('div');
```

### Child Navigation

```javascript
const parent = document.querySelector('.parent');

// Get all child elements
const children = parent.children; // HTMLCollection

// Get all child nodes (includes text nodes)
const childNodes = parent.childNodes; // NodeList

// Get first and last child elements
const firstChild = parent.firstElementChild;
const lastChild = parent.lastElementChild;
```

### Sibling Navigation

```javascript
const element = document.querySelector('.current');

// Get next sibling element
const nextElement = element.nextElementSibling;

// Get previous sibling element
const prevElement = element.previousElementSibling;
```

## Event Handling

Events are actions that happen in the browser (clicks, key presses, mouse movements, etc.).

### addEventListener()
The modern way to handle events.

```javascript
const button = document.querySelector('button');

button.addEventListener('click', function() {
  console.log('Button was clicked!');
});

// Using arrow function
button.addEventListener('click', () => {
  console.log('Button clicked!');
});

// Named function (can be removed later)
function handleClick() {
  console.log('Clicked!');
}
button.addEventListener('click', handleClick);
```

### Common Event Types

```javascript
// Mouse events
element.addEventListener('click', handler);
element.addEventListener('dblclick', handler);
element.addEventListener('mouseenter', handler);
element.addEventListener('mouseleave', handler);
element.addEventListener('mousemove', handler);

// Keyboard events
element.addEventListener('keydown', handler);
element.addEventListener('keyup', handler);
element.addEventListener('keypress', handler);

// Form events
form.addEventListener('submit', handler);
input.addEventListener('focus', handler);
input.addEventListener('blur', handler);
input.addEventListener('change', handler);
input.addEventListener('input', handler);

// Window events
window.addEventListener('load', handler);
window.addEventListener('resize', handler);
window.addEventListener('scroll', handler);
```

### Event Object
When an event occurs, an event object is automatically passed to the handler function.

```javascript
button.addEventListener('click', function(event) {
  console.log(event.type); // 'click'
  console.log(event.target); // The element that triggered the event
  console.log(event.currentTarget); // The element the listener is attached to
  
  // Prevent default behavior (e.g., form submission, link navigation)
  event.preventDefault();
  
  // Stop event from bubbling up to parent elements
  event.stopPropagation();
});
```

### Removing Event Listeners

```javascript
function handleClick() {
  console.log('Clicked!');
}

// Add listener
button.addEventListener('click', handleClick);

// Remove listener (must use the same function reference)
button.removeEventListener('click', handleClick);
```

## Event Delegation

Instead of adding event listeners to many elements, add one listener to a parent element and use event bubbling.

```javascript
// Instead of adding listeners to each button
const list = document.querySelector('ul');

list.addEventListener('click', function(event) {
  // Check if the clicked element is a list item
  if (event.target.tagName === 'LI') {
    console.log('List item clicked:', event.target.textContent);
  }
});
```

This is more efficient and works for dynamically added elements.

## Practical Examples

### Example 1: Toggle Dark Mode

```javascript
const toggleButton = document.querySelector('#dark-mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
```

### Example 2: Form Validation

```javascript
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const errorMessage = document.querySelector('.error');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  
  const email = emailInput.value;
  
  if (!email.includes('@')) {
    errorMessage.textContent = 'Please enter a valid email';
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
    console.log('Form submitted successfully!');
  }
});
```

### Example 3: Dynamic List

```javascript
const addButton = document.querySelector('#add-item');
const itemInput = document.querySelector('#item-input');
const list = document.querySelector('#item-list');

addButton.addEventListener('click', () => {
  const itemText = itemInput.value;
  
  if (itemText.trim() !== '') {
    // Create new list item
    const li = document.createElement('li');
    li.textContent = itemText;
    
    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      li.remove();
    });
    
    // Add delete button to list item
    li.appendChild(deleteBtn);
    
    // Add list item to list
    list.appendChild(li);
    
    // Clear input
    itemInput.value = '';
  }
});
```

### Example 4: Image Gallery

```javascript
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.querySelector('#main-image');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    // Remove active class from all thumbnails
    thumbnails.forEach(t => t.classList.remove('active'));
    
    // Add active class to clicked thumbnail
    thumbnail.classList.add('active');
    
    // Update main image
    const newSrc = thumbnail.getAttribute('data-full-image');
    mainImage.setAttribute('src', newSrc);
  });
});
```

## Best Practices

1. **Wait for DOM to Load**: Make sure the DOM is fully loaded before running your JavaScript.

```javascript
// Method 1: DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
  // Your code here
});

// Method 2: Place script tag at the end of body
// Method 3: Use defer attribute in script tag
// <script src="script.js" defer></script>
```

2. **Cache DOM Queries**: If you're accessing the same element multiple times, store it in a variable.

```javascript
// Bad: Queries the DOM multiple times
document.querySelector('.box').style.color = 'red';
document.querySelector('.box').style.fontSize = '20px';
document.querySelector('.box').textContent = 'Hello';

// Good: Query once and reuse
const box = document.querySelector('.box');
box.style.color = 'red';
box.style.fontSize = '20px';
box.textContent = 'Hello';
```

3. **Use Event Delegation**: For multiple similar elements, use event delegation instead of adding individual listeners.

4. **Prefer classList over className**: `classList` is more flexible and less error-prone.

5. **Use Modern Selectors**: `querySelector()` and `querySelectorAll()` are more versatile than older methods.

6. **Avoid innerHTML with User Input**: This can lead to XSS (Cross-Site Scripting) vulnerabilities. Use `textContent` or `createElement()` instead.

## Common Pitfalls

1. **HTMLCollection vs NodeList**: 
   - `getElementsByClassName()` and `getElementsByTagName()` return live HTMLCollections
   - `querySelectorAll()` returns a static NodeList
   - Live collections update automatically when the DOM changes

2. **Forgetting to Prevent Default**:
   ```javascript
   form.addEventListener('submit', (e) => {
     e.preventDefault(); // Don't forget this for forms!
     // Your code
   });
   ```

3. **Event Listener Memory Leaks**: Always remove event listeners when elements are removed from the DOM.

4. **Modifying Collections While Iterating**: Be careful when removing elements from a live collection while looping through it.

## Summary

The DOM is your gateway to making web pages interactive. Key concepts to remember:

- **Selecting elements**: `querySelector()`, `querySelectorAll()`, `getElementById()`
- **Manipulating content**: `textContent`, `innerHTML`, `value`
- **Manipulating attributes**: `getAttribute()`, `setAttribute()`, direct property access
- **Manipulating styles**: `style` property, `classList`
- **Creating elements**: `createElement()`, `appendChild()`, `append()`
- **Event handling**: `addEventListener()`, event object, event delegation
- **Traversing**: parent, child, and sibling navigation

Master these concepts, and you'll be able to create dynamic, interactive web applications!
