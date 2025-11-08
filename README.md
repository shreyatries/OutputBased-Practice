# This will consist of all my learnings so far for solving quick output based questions

1. when length of array is set to 0, the array becomes empty, which means o/p is []
2. when we assign an object ex a={x,y} to a variable b. we are also passing the reference to the location.
    for example, 
    ```
    let a= {x: 1, y: 2}
    let b= a
    b.x=3
    console.log(a) \\ {x: 3, y: 2}
    console.log(b) \\ {x: 3, y: 2}

    ```
    As we can see above when we passed a to b, we passed the same reference hence both the values are showing same

    3. Differencec between var and let

    ```
    for(let/var i= 0; i<5 ; i++){
    setTimeout(()=> console.log(i))
    }

    ```
    if it was var it would print 5, 5 times
    but for let it would print, 0,1,2,3,4
    as for let it will create local instance everytimes, but for var it will create global scope
    hence, until the setTimeout is finised executing, the value will be 5 already

    4. 
    ```
    console.log({} == {}); 
    console.log({} === {});
    ```
    here both will be false as even though they look same they point to different memory locations

    5. 
    ```
    const x= 10
    function x(){
        console.log('hi')
    }
    x()
    ```
    here we will get error SyntaxError: Identifier 'x' has already been declared
    but if it was declared with var, TypeError: x is not a function

    6. when we clone a nested object using ...(spread) operator it only creates a shallow copy of top level props, 
    the nested objects are still referenced.

     To solve this we can use **JSON.parse()** but:
     JSON.parse expects a JSON string, not a JS object(userDetails), 
     so we have to stringify it first using **JSON.stringify()**

     ## Limitations of JSON.parse(JSON.stringify(obj))
     It drops functions, undefined, Symbol
     It can't handle Dates, Map, Set 

     ## Modern Alternative
     ```
     let clonedUserDetails= structuredClone(userDetails)
     ```
    - Creates true deep clone
    - Supports Dates, maps, Sets and nested Objects
    - simpler and safer than JSON

    ## If you need to support older environments
    
    -You can use polyfill like core-js, which adds structuredClone() globally
    -fall back to libraries like 

        ```
        import cloneDeep from 'lodash.clonedeep'
        const copy= cloneDeep(obj)
        ```

    7. ### Sorting
    Sorting by comparing, actually compares the numbers and gives us the actual output we need
    But sorting using the default `arr.sort()` method actually convert it to UTF-16 hence the sorting is not as expected

    ```
    const arr = [10, -1, 2];
    arr.sort((a, b) => a - b);
    console.log(arr);
    ```
    here it will o/p -1, 2, 10 for this but 
    -1, 10, 2 for **arr.sort()**    
    
    8.  filter(Boolean) removes all falsy values `(0, "" (empty string), false, null, undefined, and NaN)` from the array and keeps truthy ones.

    9. The below code will give a bit more insight into object destructuring 

    ```
    const user={
    firstName: 'Shreya',
    country: 'India'
}
var {firstName: fullName, country, lastName= 'Das', fullName= 'Bloom'}= user
console.log(fullName)
console.log(lastName)
```

| Pattern              | Property Exists? | Assigned Value | Result Variable      |
|---------------------:|------------------|----------------|----------------------|
|`firstName: fullName` |[x] Yes("Shreya") | "Shreya"       | `fullName= "Shreya"` |
| `country`            |[x] Yes("India")  | "India"        | `country= "India"`   |
|`lastName = 'Das'`    |[ ] No            | 'Das'          | `lastName= 'Das'`    |
|`fullName = 'Bloom'`  |[ ] No            | 'Bloom'        | `fullName = "Bloom"` |