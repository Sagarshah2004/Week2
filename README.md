# 📚 Book Explorer

A simple and interactive React application that displays a list of books and allows users to view detailed information about each book.

---

## 🚀 Features

* 📖 Display a list of books
* 🔍 View detailed information for each book
* 🔗 External link to buy/view books
* 🔄 Dynamic routing using React Router
* 🎨 Clean UI with external CSS styling
* 📱 Responsive and user-friendly design
* 📌 Sticky footer layout

---

## 🛠️ Tech Stack

* **React.js**
* **React Router DOM**
* **JavaScript (ES6)**
* **CSS (External Styling)**

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── BookList.js
 │    ├── BookDetail.js
 │    └── Footer.js
 │
 ├── data/
 │    └── books.js
 │
 ├── styles/
 │    └── style.css
 │
 ├── App.js
 ├── index.js
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```
git clone <your-repo-link>
```

2. Navigate to project folder:

```
cd book-explorer
```

3. Install dependencies:

```
npm install
```

4. Run the app:

```
npm start
```

---

## 🌐 Routes

| Route        | Description            |
| ------------ | ---------------------- |
| `/`          | Displays list of books |
| `/books/:id` | Displays book details  |

---

## 📸 Functionality

* Clicking **"Read More"** navigates to the book detail page
* Displays:

  * Title
  * Author
  * Description
  * Book Image
* Includes **external link button** to view/buy the book
* Includes **Back button** for navigation

---

## ✨ Enhancements Implemented

* Added multiple books including *Rich Dad Poor Dad*
* Integrated external links for each book
* Styled UI using external CSS
* Implemented footer component
* Improved button spacing and layout

---

## 🎯 Learning Outcomes

* Understanding React component structure
* Working with props and data mapping
* Implementing dynamic routing using React Router
* Managing UI with external CSS
* Debugging common React errors

---

## 👨‍💻 Author

**Sagar Kumar Sha**

---

## 📌 Notes

This project was developed as part of a React assignment to practice component-based architecture and routing.

---

## ⭐ Future Improvements

* 🔍 Add search functionality
* 🌙 Add dark mode
* ❤️ Add favorites feature
* 📡 Fetch books from API

