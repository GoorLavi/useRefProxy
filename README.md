# useRefProxy    
useRefProxy is a React hook using ref element with proxy to easly access the ref current attributes.    
Instead of using the current accessor each time, you will be able to get and set the attribute directly.

## Example
  ```javascript

const getCongratsBirthday = ({name, age}) => `Congratulations ${name} for reaching to ${age} years!`;

const Component = ({}) => {
      
        const userRef = useRefProxy({ name: 'Daniel', age: 32 });
  
        // Update age attribute
        userRef.age = 29;

        const congrats = getCongratsBirthday(userRef);

        return <div {...{ className }}>
          {congrats}
        </div>;
}
```
