# Habits Tracker

## Description

Habits Tracker is an application for tracking habits that helps users create, edit, and delete habits, as well as mark the completion of habits by days of the week.

## Features

- **Add Habits**: Users can add new habits by entering the habit name in the text field and clicking the "Lägg till" button.
- **Edit Habits**: Users can edit existing habits by clicking the edit button next to the habit, entering a new name, and saving the changes.
- **Delete Habits**: Users can delete habits by clicking the delete button next to the habit.
- **Mark Habit Completion**: Users can mark the completion of habits by days of the week by checking or unchecking the boxes next to the days.
- **Data Persistence**: The application saves habit data in the browser's local storage to persist between sessions.

## Technologies Used

- **React**: A library for building user interfaces.
- **Redux**: A library for state management.
- **SCSS**: A CSS preprocessor for styling components.

## Installation and Running

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/habits-tracker.git

   cd habits-tracker

   npm install

   npm run dev
   ```

## Project Structure

# src/components: Application components.

# HabitList: Component for displaying the list of habits.

# HabitItem: Component for displaying a single habit.

# EditHabitItem: Component for editing a habit.

# InputField: Component for entering a new habit.

# src/hooks: Custom hooks.

    useHabit: Hook for managing habit state.

# src/features/habits: Redux slice for managing habit state.
