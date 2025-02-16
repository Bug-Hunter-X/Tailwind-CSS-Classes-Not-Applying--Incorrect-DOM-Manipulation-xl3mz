Instead of using `element.className = 'bg-red-500';`, use the following to correctly add the Tailwind class:

```javascript
element.classList.add('bg-red-500');
```

Or, to toggle the class on and off:

```javascript
element.classList.toggle('bg-red-500');
```

This approach ensures that the Tailwind classes are correctly added to the element's class list without overwriting other classes.