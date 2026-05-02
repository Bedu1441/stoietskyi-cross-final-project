# OIKEON — Cross Final Project

## Project Overview

OIKEON is a family-centered mobile learning application designed to support guided parent-child learning activities.

The project was developed throughout the Cross-Platform Mobile Development course and then improved as a final project. The goal was not to create a new application from scratch, but to upgrade the existing app with better structure, navigation, global state management, API integration, and improved UX/UI.

---

## Existing App Analysis

The previous version of the app already included:

- Home screen with a featured activity
- Sessions screen with API-loaded learning sessions
- Session details screen with parameter passing
- Profile screen with saved sessions
- Theme switching through Context API
- Saved sessions management through Redux

### What worked well

- Basic navigation flow was already functional
- API data was displayed in a list
- Global state was already introduced
- The app had a clear educational theme

### Areas selected for improvement

1. Add a new feature section for family learning tips.
2. Improve the usefulness of the app by adding another API-powered content flow.
3. Improve navigation and details flow for the new feature.
4. Document the product decisions and final architecture.

---

## New Final-Project Feature

### Family Tips

A new **Family Tips** section was added.

This feature loads family-learning tips from an external REST API and displays them in a list. Users can open each tip and view details on a separate screen.

The feature includes:

- external API request
- loading state
- error state
- empty state
- FlatList rendering
- custom `FamilyTipCard` component
- navigation from list to details
- route parameter validation

---

## API Integration

The project uses JSONPlaceholder as a mock public REST API.

Family tips are loaded from:

```text
https://jsonplaceholder.typicode.com/comments

The API logic is placed in:

src/api/familyTipsApi.js

The data loading logic is separated into:

src/hooks/useFamilyTips.js

This keeps screens cleaner and improves maintainability.

State Management

The project uses both Context API and Redux.

Context API

Used for:

light / dark theme management

Why Context API:

theme is a global UI setting
it affects many screens and components
it does not require complex operations
Redux

Used for:

saved sessions

Why Redux:

saved sessions need add / remove / update behavior
the data is shared across screens
Redux Toolkit keeps this structure predictable
Navigation

The app uses Tab and Stack navigation.

Main tabs
Home
Sessions
Tips
Profile
Stack navigation
Home → Confirmation
Sessions → Session Details
Tips → Tip Details

Navigation parameters are passed from list screens to details screens.

Example:

navigation.navigate('TipDetails', {
  tipId: item.id,
  title: item.name,
  body: item.body,
  email: item.email,
});
Component Structure

New and reused components include:

FamilyTipCard
SessionListCard
SavedSessionItem
SessionCard

Each reusable component is placed in a separate file.

UX/UI Improvements

The final project includes:

cleaner visual hierarchy
card-based layout
loading and error states
retry buttons
empty state support
clear details screens
improved tab navigation
consistent color palette
Screenshots
Home Screen

Sessions Screen

Session Details

Family Tips

Tip Details

Profile / Saved Sessions

Presentation

A short final presentation is included in the presentation folder.

It explains:

the main idea of the app
the key features
the new final-project improvement
state management decisions
navigation and UX logic
Project Structure
src
├── api
│   ├── api.js
│   └── familyTipsApi.js
├── components
│   ├── FamilyTipCard.jsx
│   ├── SavedSessionItem.jsx
│   ├── SessionCard.jsx
│   └── SessionListCard.jsx
├── constants
│   ├── apiConfig.js
│   ├── finalConfig.js
│   └── theme.js
├── context
│   └── ThemeContext.js
├── hooks
│   ├── useFamilyTips.js
│   └── useSessions.js
├── navigation
│   ├── AppNavigator.js
│   ├── HomeStack.js
│   ├── SessionsStack.js
│   ├── TabsNavigator.js
│   └── TipsStack.js
├── redux
│   ├── store.js
│   └── slices
│       └── savedSessionsSlice.js
└── screens
    ├── ConfirmationScreen.jsx
    ├── FamilyTipsScreen.jsx
    ├── HomeScreen.jsx
    ├── ProfileScreen.jsx
    ├── SessionDetailsScreen.jsx
    ├── SessionsScreen.jsx
    └── TipDetailsScreen.jsx
```
