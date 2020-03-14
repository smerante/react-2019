# React-2019 udemy course 

# L9: Dev accounts

    https://auth0.com/ 

    https://console.developers.google.com/

    https://developers.facebook.com/

# L10: Slides

    https://github.com/iqbal125/react_course_ppt/blob/master/Modern%20React%20PP.pdf

# L12: Create app 
    
        npx create-react-app "app1"

# Lifecycle 'methods'

    constructor -> render -> componentDidMount -> async calls -> componentWillUnmount

#Setup Social Media Login
In https://manage.auth0.com/ go to connections -> social and edit the connection you'd like with the client id and secret

in console.developers.google.com setup a new project, set auth credentials for web and get the client secret there

In developers.facebook.com setup a new project, quickstart with web and site url: auth0.com
go to settings and get the auth creds there and secret.

# React Hooks

Main purpose to allow functional components to read and update state

Wrong:

if(true) {useEffect(()=> { return value}) }

Right:

useEffect(()=> true ? return value : null)

## Hooks overview

useState(): 
Similar to this.setState()

useEffect():
Similar to componentDidMount(), used to call function automatically

useContext()
Similar react-redux: used to read and update global context state

useReducer()
Similar react-redux: used to read and update local state not  global