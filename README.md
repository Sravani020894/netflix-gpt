## Netflix-GPT
- Created a netflix-gpt app 
    - npx create-react-app netflix-gpt
- configured tailwind css
- webpack comes with Jest library
- Created Routes
- Created Header
- Login Form


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