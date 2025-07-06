# API Data Explorer

A responsive web application that fetches and displays data from the JSONPlaceholder API, featuring users and posts with interactive navigation between different data models.

## 🌟 Features

- **Dual Model Display**: View both Users and Posts data from the JSONPlaceholder API
- **Interactive Navigation**: Seamless navigation between Users and Posts pages
- **Dynamic Filtering**: Filter posts by specific users
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Error Handling**: Robust error handling with retry functionality
- **Modern UI**: Clean, modern interface with smooth animations and transitions
- **Loading States**: Visual feedback during data loading

## 🚀 Live Demo

[View the live application](https://yourUsername.github.io/yourRepositoryName/)

## 📋 Requirements Met

### Structure ✅
- [x] Public GitHub repository
- [x] HTML document (`index.html`, `posts.html`)
- [x] CSS document (`style.css`)
- [x] JavaScript file (`script.js`) with API integration
- [x] README file with running instructions

### Content ✅
- [x] Display data for 2+ models (Users and Posts)
- [x] Navigation between model pages
- [x] New GET requests for linked data

### Functionality ✅
- [x] Code runs without issues
- [x] Proper navigation behavior
- [x] Readable and well-structured code
- [x] Error case handling
- [x] Effective styling and responsive design

## 🛠 Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript ES6+**: Async/await, Fetch API, DOM manipulation
- **JSONPlaceholder API**: External data source for users and posts

## 📁 Project Structure

```
api-data-explorer/
│
├── index.html          # Users page (main entry point)
├── posts.html          # Posts page
├── style.css           # Stylesheet for both pages
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🔧 Setup Instructions

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for API calls)

### Running the Application

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourUsername/yourRepositoryName.git
   cd yourRepositoryName
   ```

2. **Open the application:**
   
   **Option A: Using a local server (Recommended)**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
   Then navigate to `http://localhost:8000` in your browser.

   **Option B: Direct file opening**
   - Simply double-click on `index.html` to open in your default browser
   - Note: Some browsers may restrict API calls when opening files directly

3. **Navigate the application:**
   - Start on the Users page (`index.html`)
   - Use the navigation menu to switch between Users and Posts
   - Click "View Posts" on any user card to see their specific posts
   - Use the filter dropdown on the Posts page to filter by user

## 🎯 Usage Guide

### Users Page
- View all users from the JSONPlaceholder API
- Each user card displays:
  - Name and username
  - Contact information (email, phone)
  - Website and company details
  - Location information
- Click "View Posts" to see posts by that specific user

### Posts Page
- View all posts or filter by specific users
- Each post displays:
  - Post title and content
  - Author information
- Use the dropdown filter to show posts from specific users
- Click "Refresh Posts" to reload all posts

## 🔗 API Reference

This application uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/):

- **Users Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Posts Endpoint**: `https://jsonplaceholder.typicode.com/posts`

## 🎨 Design Features

- **Gradient Background**: Modern gradient design
- **Glass Morphism**: Semi-transparent elements with backdrop blur
- **Smooth Animations**: Hover effects and transitions
- **Responsive Grid**: Flexible layouts for different screen sizes
- **Loading Spinners**: Visual feedback during data fetching
- **Error States**: User-friendly error messages with retry options

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🐛 Troubleshooting

### Common Issues

1. **API calls not working**
   - Ensure you have an active internet connection
   - Try using a local server instead of opening files directly
   - Check browser console for specific error messages

2. **Styling issues**
   - Verify that `style.css` is in the same directory as HTML files
   - Check that CSS file is properly linked in HTML

3. **JavaScript errors**
   - Ensure `script.js` is in the same directory as HTML files
   - Check browser console for error messages
   - Verify that JavaScript is enabled in your browser

### Browser Console

Open your browser's developer tools (F12) and check the Console tab for any error messages. This will help identify specific issues.

## 📱 Mobile Responsiveness

The application is fully responsive and includes:
- Mobile-first CSS approach
- Flexible grid layouts
- Touch-friendly buttons and navigation
- Optimized typography for smaller screens

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing the free API
- [CSS Gradient](https://cssgradient.io/) for gradient inspiration
- Modern web development best practices and accessibility guidelines

---

**Note**: Replace `yourUsername` and `yourRepositoryName` with your actual GitHub username and repository name in the URLs above.