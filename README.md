# OIKEON — Cross Assignment 6

## Project Overview

OIKEON is a family-centered mobile learning application.  
In this assignment, global state management was added using **Context API** and **Redux Toolkit**.

The goal was to integrate two different global state approaches into the existing React Native project:

- Context API for theme management
- Redux for saved sessions management

---

## State Management Choices

### Context API

Used for:

- **theme switching** (`light` / `dark`)

Why:

- theme is a global UI concern
- it affects multiple components at the same time
- Context API is a simple and suitable solution for UI-wide state

### Redux Toolkit

Used for:

- **saved sessions list**

Why:

- saved sessions require multiple operations:
  - add item
  - remove item
  - update quantity
- Redux Toolkit provides a clean and scalable structure for this kind of state

---

## Features Implemented

### Context API

- `ThemeContext` created in a separate file
- `ThemeProvider` wraps the application
- `toggleTheme()` implemented
- `useContext` access added through custom `useTheme()` hook
- theme applied to multiple screens and components:
  - HomeScreen
  - ProfileScreen
  - SessionListCard
  - SessionDetailsScreen

### Redux Toolkit

- store configured with `configureStore`
- `savedSessionsSlice` created
- reducers implemented:
  - `addSavedSession`
  - `removeSavedSession`
  - `updateQuantity`
- Redux `Provider` integrated at app root
- `useSelector` and `useDispatch` used in screens

---

## Project Structure

```bash
src
├── api
│   └── api.js
├── components
│   ├── SavedSessionItem.jsx
│   ├── SessionCard.jsx
│   └── SessionListCard.jsx
├── constants
│   └── theme.js
├── context
│   └── ThemeContext.js
├── redux
│   ├── store.js
│   └── slices
│       └── savedSessionsSlice.js
├── navigation
│   ├── AppNavigator.js
│   ├── HomeStack.js
│   ├── SessionsStack.js
│   └── TabsNavigator.js
└── screens
    ├── ConfirmationScreen.jsx
    ├── HomeScreen.jsx
    ├── ProfileScreen.jsx
    ├── SessionDetailsScreen.jsx
    └── SessionsScreen.jsx
```

---

## Context API Usage

The theme state is shared globally using Context API.

Users can toggle between light and dark mode.
The selected theme affects:

- background color
- text color
- card color
- border color
- button color

This is applied on at least two screens and reused across components.

---

## Redux Usage

The saved sessions flow works like this:

1. sessions are loaded from API
2. user presses **Save**
3. selected session is added to Redux store
4. saved sessions are displayed in Profile screen
5. user can:
   - increase quantity
   - decrease quantity
   - remove session

---

## Screenshots

### Light Theme

![alt text](image.png)

### Dark Theme

![alt text](image-1.png)

### Sessions List

![alt text](image-2.png)

### Saved Sessions

![alt text](image-3.png)

---

## How to Run

```bash
npm install
npx expo start -c
```

Then:

- press `w` for browser
- or use Expo Go on a mobile device

---

## Technologies Used

- React Native
- Expo
- Expo Router
- React Navigation
- Context API
- Redux Toolkit
- React Redux
- Axios

---

## Assignment Requirements Covered

- Context API integrated into project
- Redux Toolkit integrated into project
- providers connected to root component
- modular structure used
- state applied across multiple components
- Redux reducers support add / remove / update
- props used where needed
- README includes screenshots
