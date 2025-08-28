1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is explaining below --

getElementById will select only the specific element as per the id I have used in the html,
getElementsByClassName will select all the element where contains same class I have used,
querySelector will select the first css class from the html,
querySelectorAll will select also the all element based on id, html tag, attribute.

2. How do you create and insert a new element into the DOM?

Ans: first i will make a variable then I will use document.createElement("example") for the same variable , then example.innerHtml = ` custom html tag style what ever I like to do`

3. What is Event Bubbling and how does it work?

Ans: when en event happens then at first that event will capture the same element, then it will capture its parent then its body.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans: event delegation is the technic to add event listener on child element at a same time , example if we add event listener to a <ul> tag, then same event listener will be applied to its child element for all <li> from the <ul> 

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: prevent default will stop browsers default behavior like auto reload , redirect. and stopPropagation will stop its event bubbling means it will not go to its parent element automatically.