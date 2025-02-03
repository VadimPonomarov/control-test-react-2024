# Project

## Installation

git clone <repository URL>
npm install
npm run dev

## Technologies

React
Redux
Axios
TypeScript
TanStack Query
Tailwind CSS
Shad/cn UI
Vite
Redux-Persist 

## Contact

pvs.versia@gmail.com

## Description

When the project starts, if the user is not logged in, they will be redirected to the authentication page. All site
resources that require data loading using `accessToken` will be closed for access until authentication through the Login
form. The logged-in user will be displayed in the upper right corner of the site in the menu block and highlighted with
a red background in the badge. Upon receiving the token pair, the menu items requiring authentication will be unlocked.
When making requests to an external API, the tokens used are pulled from `redux` using a hook (not from Local Storage).
The expired token is automatically refreshed using the `refresh` procedure, triggered by a `401` response. A repeated
authentication error leads to the cycle stopping and signals the need to go through the authentication procedure again,
starting with Login.

## Functionality

- **Redirect to authentication page**: If the user is not logged in, they will be automatically redirected to the
  authentication page.
- **Access to resources**: All site resources that require `accessToken` will be inaccessible until successful
  authentication.
- **User display**: The logged-in user will be displayed in the upper right corner of the site in the menu block and
  highlighted with a red background in the badge.
- **Unlocking menu items**: Upon receiving the token pair, the menu items requiring authentication will be unlocked.
- **Using tokens**: When making requests to an external API, the tokens used are pulled from `redux` using a hook (not
  from Local Storage).
- **Automatic token refresh**: The expired token is automatically refreshed using the `refresh` procedure, triggered by
  a `401` response. Example of using:
  ```typescript
  if (error.response.status === 401 && !originalRequest._retry) {
  originalRequest._retry = true;
  dispatch(iniActions.unsetMe());
  // Token refresh procedure

}

- **Repeated authentication**: A repeated authentication error leads to the cycle stopping and signals the need to go
  through the authentication procedure again, starting with Login.
- 
## Redux-Persist

**Redux-persist** is a library that allows to save the Redux store in the local storage of the browser. This means that even if the user refreshes the page or closes and reopens the browser, the state of the Redux store will be preserved. Here are some key benefits and uses of redux-persist:

**State Persistence**: It ensures that the state of application is maintained across page reloads and browser sessions.

**User Experience**: Enhances user experience by retaining user data, such as authentication status, preferences, and other stateful information.`

**Offline Support**: Allows application to work offline by storing the state locally.`

## Working with Filters

To work with filters in the project, follow these steps:

1. **Define filters**: Filters are defined in the corresponding components and can be used to filter data based on
   various criteria.
2. **Apply filters**: Filters are applied to the data loaded using `accessToken`. Ensure that the user is logged in and
   the token is available.
3. **Use hook**: When making requests to an external API, use the hook to get tokens from `redux`. Example of using the
   hook:
   ```typescript
   const { accessToken, refreshToken } = useAppSelector(state => state.ini);
4. **User Interface for Filters**: The user interface includes a "Filters" button that opens a form for entering
   corresponding text values, which serve as templates for searching in the relevant fields of the entire list of
   objects. To remove the filter, reopen the form without entering any values.

## Infinite Scroll

**Infinite Scroll**: The project includes an infinite scroll feature. To apply it, you need to set the parameters skip=0 and limit>30

.