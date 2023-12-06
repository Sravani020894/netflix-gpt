## Netflix-GPT
- Created a netflix-gpt app 
    - npx create-react-app netflix-gpt
- configured tailwind css
- webpack comes with Jest library
- Created Routes
- Created Header
- Login Form // Convert to signup form on click upon Signuop Now
- Form validation using Regex
- Firebase configuration/setup
- Deploying app with firebase hosting
- Authentication with Firebase

## Features
- Login/Signup Page
- Land to Browse page(After authentication)
    - Header
    - Background Trailer
    - Movie name and two buttons to play and get more info abt movie
    - List of Movies(with vertical scroll)
        - Movie list * n
- Netflix GPT
    - Search Bar
    - Movie suggestions

## To Refresh about Application 
- To provide routes to Different pages,install react-router-dom
    - npm i -D react-router-dom
- Router provider(for taking the routing objects as params) and createBrowserRouter(created paths to different pages under this)
## To get Logos of any Website
- How to get any Logos/Images from the original website Application
    - Inspect that application and selct img under Network tab,refresh the page.Can see the list of imgs/gifs/png/svg.Either we can copy URL or Download it by clicking on "Open into newtab".
## CSS positioning Absolute ,relative,fixed,static
- Relative:  If you set position: relative; on an element but no other positioning attributes (top, left, bottom or right), it will have no effect on it’s positioning at all, it will be exactly as it would be if you left it as position: static;But if you do give it some other positioning attribute, say, top: 10px;, it will shift its position 10 pixels down from where it would normally be. I’m sure you can imagine, the ability to shift an element around based on its regular position is pretty useful.

- Absolute: type of positioning that allows you to literally place any page element exactly where you want it. You use the positioning attributes top, left, bottom, and right to set the location. Remember that these values will be relative to the next parent element with relative (or absolute) positioning. If there is no such parent, it will default all the way back up to the <html> element itself meaning it will be placed relative to the page itself.absolute positioning is that these elements are removed from the flow of elements on the page. An element with this type of positioning is not affected by other elements and it doesn’t affect other elements. 

- Fixed: A fixed position element is positioned relative to the viewport, or the browser window itself. The viewport doesn’t change when the window is scrolled, so a fixed positioned element will stay right where it is when the page is scrolled.

## Logical Operator ( && )

- Logical AND (&&) evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters; if all values are truthy, the value of the last operand is returned.
-  && operator can be used with non Boolean operands i.e; expressions and Functions.
- Consider the pseudocode below.
 (some falsy expression) && expr   -----> on occurenc of false value it immediately returns false

 function A() {
  console.log("called A");
  return false;
}
function B() {
  console.log("called B");
  return true;
}

console.log(A() && B());
// Logs "called A" to the console due to the call for function A,
// && evaluates to false (function A returns false), then false is logged to the console;
// the AND operator short-circuits here and ignores function B

## Formik Forms for react form libraries
- If we have big forms validation of each field is crucial so formik library makes it easier

## useRef() hook
- useRef is a React Hook that lets you reference a value that’s not needed for rendering.
- const ref = useRef(initialValue)
Parameters :

initialValue: The value you want the ref object’s current property to be initially. It can be a value of any type. This argument is ignored after the initial render.

Returns :useRef returns an object with a single property

current: Initially, it’s set to the initialValue you have passed. You can later set it to something else. If you pass the ref object to React as a ref attribute to a JSX node, React will set its current property.
On the next renders, useRef will return the same object.

## Firebase
- create a app name and enable the app to deploy in firebase
- Add firebase SDK by installing npm install firebase and adding firebase configuration for the project.
- Install FIREBASE CLI . To host site with firebase hosting firbase cli is needed (npm install -g firebase-tools) 
- To deploy site with firebase hosting
    $ firebase login
        //Got an error File C:\Users\sravani.rebba\AppData\Roaming\npm\firebase.ps1 cannot be loaded because running scripts is disabled on this system.
        //[RESOLVED] : by deleting firebase.ps1 file from C:\Users\sravani.rebba\AppData\Roaming\npm
    $ firebase init
        // build will be given as public directory,like in parcel whenever project is deployed a build will be seen in dist folder.
        //to create a build for the project given 
                npm run build
    $ firebase deploy

