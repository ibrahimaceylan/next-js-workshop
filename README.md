# What we have learnt

## BEM
- Block
- Element
- Modifiers

## styled-components
- creating components `const Button = styled.button`
- extending them `styled(Button)`
- props usage `props => props.color`
- theming with `ThemeProvider` -> `props => props.theme.colors.blue`
- `as` feature to call styled component as another element like `button to a`

## next.js
- installing
- `pages` routing -> `pages/about`
- `dynamic simple routing` with custom queries -> `post/:id`
- creating custom server for server side rendering by using `express`
- handling complex endpoints -> `user/:id/:name/:surname`
- `getInitialProps` static function to get server request queries
- serving static files -> `robots.txt`
- `next dev` for development without custom server
- `next build` for build our application for production
- `next start` for start our application as client side rendered
- `nodemon` library to automatic restarting our custom server according to the file changes
- using `environment variables` -> `process.env.DEBUG`
- `next.config.js`
