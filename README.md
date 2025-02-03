# Project

## Description

When the project starts, if the user is not logged in, they will be redirected to the authentication page. All site resources that require data loading using `accessToken` will be closed for access until authentication through the Login form. The logged-in user will be displayed in the upper right corner of the site in the menu block and highlighted with a red background in the badge. Upon receiving the token pair, the menu items requiring authentication will be unlocked. When making requests to an external API, the tokens used are pulled from `redux` using a hook (not from Local Storage). The expired token is automatically refreshed using the `refresh` procedure, triggered by a `401` response. A repeated authentication error leads to the cycle stopping and signals the need to go through the authentication procedure again, starting with Login.

## Functionality

- **Redirect to authentication page**: If the user is not logged in, they will be automatically redirected to the authentication page.
- **Access to resources**: All site resources that require `accessToken` will be inaccessible until successful authentication.
- **User display**: The logged-in user will be displayed in the upper right corner of the site in the menu block and highlighted with a red background in the badge.
- **Unlocking menu items**: Upon receiving the token pair, the menu items requiring authentication will be unlocked.
- **Using tokens**: When making requests to an external API, the tokens used are pulled from `redux` using a hook (not from Local Storage).
- **Automatic token refresh**: The expired token is automatically refreshed using the `refresh` procedure, triggered by a `401` response.
- **Repeated authentication**: A repeated authentication error leads to the cycle stopping and signals the need to go through the authentication procedure again, starting with Login.

## Working with Filters

To work with filters in the project, follow these steps:

1. **Define filters**: Filters are defined in the corresponding components and can be used to filter data based on various criteria.
2. **Apply filters**: Filters are applied to the data loaded using `accessToken`. Ensure that the user is logged in and the token is available.
3. **Use hook**: When making requests to an external API, use the hook to get tokens from `redux`. Example of using the hook