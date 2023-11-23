# Connecting HTML and JavaScript

### Create an HTML page that takes a user's name and returns 

```
"Welcome, <user's name>!"
```

Document Object Model (DOM)
When a web page is loaded, the browser creates a Document Object Model of the page. The DOM can be manipulated with Javascript after the page has been loaded.

### DOM Manipulation
The document is the actual page loaded into the window, and is represented in JavaScript by the Document object. You can use this object to return and manipulate information on the HTML and CSS that comprises the document, change its text content, apply new styles to it, etc.

### Create an HTML page
Create the boilerplate DOCTYPE
Add a form
Add a button
Add a place for the output to display
Create a JavaScript file
Create a function called greeter


### Linking the JS to HTML
Getting the HTML property (getElementBy....Id, Class, TagName, etc)


```
document.getElementById("idHere").value
document.getElementById("idHere").innerHTML
```


DOM events - onclick, onmouseup, onmousedown, many more
Add the script tag to HTML body to import the JS file


```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>My greeter page</h1>
    <input type="text" id="user-input">
    <button type="button" name="button" onclick="greeter()">Click me!</button>
    <h3 id="output"></h3>
    <script type="text/javascript" src="greeter.js"></script>
  </body>
</html>
```


```
const greeter = () => {
  let userName = document.getElementById("user-input").value
  document.getElementById("output").innerHTML = `Welcome, ${userName}!`
}
```

# Einstein's Puzzle

Variations of this riddle appear on the net from time to time. It is sometimes attributed to Albert Einstein and it is claimed that 98% of the people are incapable of solving it. Some commentators suggest that Einstein created such puzzles not to test out intelligence but to get rid of all the students who wanted him as an advisor. It is not likely that there is any truth to these stories. Wherever this comes from, it is a nice riddle.
```
Let us assume that there are five houses of different colors next to each other on the same road. In each house lives a person of a different nationality. Every person has a favorite drink, a favorite brand of cigarettes, and keeps pets of a particular kind.
```
```
The English person lives in the red house.
The Swede keeps dogs.
The Dane drinks tea.
The green house is just to the left of the white one.
The owner of the green house drinks coffee.
The Pall Mall smoker keeps birds.
The owner of the yellow house smokes Dunhills.
The person in the center house drinks milk.
The Norwegian lives in the first house.
The Blend smoker has a neighbor who keeps cats.
The person who smokes Blue Masters drinks bier.
The person who keeps horses lives next to the Dunhill smoker.
The German smokes Prince.
The Norwegian lives next to the blue house.
The Blend smoker has a neighbor who drinks water.
The question to be answered is: Who keeps fish?
```