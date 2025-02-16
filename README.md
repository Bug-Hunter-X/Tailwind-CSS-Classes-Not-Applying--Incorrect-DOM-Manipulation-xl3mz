# Tailwind CSS Class Application Issue

This repository demonstrates a common issue encountered when using Tailwind CSS with dynamic class updates in JavaScript. The problem arises from using `className` to modify classes, which overwrites existing classes instead of adding or removing them.

## Bug Description

Tailwind CSS classes are not being applied to elements, despite correct configuration and class names in the CSS output. The issue is due to the use of `element.className` in Javascript. 

## Solution

The solution involves using the `classList` property to correctly manipulate CSS classes. Using `classList.add()`, `classList.remove()`, or `classList.toggle()` ensures that Tailwind classes are added without overwriting other classes.