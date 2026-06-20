# what is Hooks in React js?
Hooks are nothing but javascript predefined functions.

# Types Of Hooks.

there are 2 types of hook in react js.
1.Predefined Hooks
2.custom hooks

# Rules of hooks

1. Always hooks prefix with use word.
2. Hooks are always need to call at the top level of the component.


# 1.Predefined Hooks

1.useState()

    // 1.it is used to manage the state inside a component.it helps to store the data and update the data dynamically.
    // 2.This hook always returns an array having 2 values.
    // 3.first value is initial value and 2 values is a function to update the intial value.

2.useRef()

useRef helps us access and manipulate real DOM elements directly without causing the component to re-render.

3.useEffect

it is used to  avoid the side effects of the react js

we can use useEffect hook in 3 ways  

1. useEffect(callback) it will execute the callback function for every re-render


2. useEffect(callback,[])

3. useEffect(callback,[dependency])

Note: useEffect hook will not return any data. (void function| void method)