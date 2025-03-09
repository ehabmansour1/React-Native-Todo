# React Native To-Do App

![Project Screenshot](https://raw.githubusercontent.com/ehabmansour1/React-Native-Todo/main/run.gif)

A simple and intuitive To-Do app built with React Native. This app allows users to create, edit, delete, and mark tasks as completed. Tasks are saved locally using AsyncStorage, and if no tasks are available, the app fetches sample tasks from an external API.

---

## Features

- **Add Tasks**: Create new tasks with a title and optional details.
- **Edit Tasks**: Update existing tasks.
- **Delete Tasks**: Remove tasks you no longer need.
- **Mark as Completed**: Toggle tasks between completed and incomplete states.
- **Persistent Storage**: Tasks are saved locally using AsyncStorage, so they persist even after the app is closed.
- **API Integration**: If no tasks are available locally, the app fetches sample tasks from [DummyJSON API](https://dummyjson.com/todos).

---

## Technologies Used

- **React Native**: For building the cross-platform mobile app.
- **AsyncStorage**: For local storage to persist tasks.
- **DummyJSON API**: For fetching sample tasks when no local data is available.
- **React Navigation**: For navigation (if applicable).
- **JavaScript/TypeScript**: For the app logic.

---

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ehabmansour1/React-Native-Todo.git
   cd react-native-todo-app
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the app**:

   For Android:

   ```bash
   npx react-native run-android
   ```

   For iOS:

   ```bash
   npx react-native run-ios
   ```

---

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AddTodoModal.jsx # Modal for adding tasks
│   ├── EditTodoModal.jsx# Modal for editing tasks
│   └── TodoItem.jsx     # Component for individual tasks
├── controllers/         # Business logic
│   └── TodoController.js# Handles task operations
├── models/              # Data models
│   └── TodoModel.js     # Task model
├── storage/             # Storage logic
│   └── storage.js       # Handles AsyncStorage operations
├── views/               # Screens
│   └── TodoScreen.js    # Main screen for displaying tasks
├── App.jsx              # Main app component
└── index.js             # Entry point
```

---

## How It Works

### Local Storage:

- Tasks are saved locally using AsyncStorage. When the app is launched, it checks for existing tasks in AsyncStorage.
- If no tasks are found, the app fetches sample tasks from the DummyJSON API.

### Task Management:

- Users can add, edit, delete, and toggle tasks.
- All changes are saved to AsyncStorage in real-time.

### API Integration:

- The app uses the DummyJSON API to fetch sample tasks when no local data is available.
- The API provides a list of tasks with titles and completion statuses.

---

## Acknowledgments

- **DummyJSON** for providing the sample tasks API.
- **React Native** for the framework.
- **AsyncStorage** for local storage.

---
