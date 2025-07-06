// API Configuration
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
const ENDPOINTS = {
    users: '/users',
    posts: '/posts'
};

// Global variables for data storage
let usersData = [];
let postsData = [];

// Utility Functions
const showLoading = () => {
    const loading = document.getElementById('loading');
    if (loading) loading.style.display = 'flex';
};

const hideLoading = () => {
    const loading = document.getElementById('loading');
    if (loading) loading.style.display = 'none';
};

const showError = (message = 'An error occurred') => {
    hideLoading();
    const errorElement = document.getElementById('error-message');
    if (errorElement) {
        errorElement.style.display = 'block';
        const errorText = errorElement.querySelector('p');
        if (errorText) errorText.textContent = message;
    }
};

const hideError = () => {
    const errorElement = document.getElementById('error-message');
    if (errorElement) errorElement.style.display = 'none';
};

// API Functions
async function fetchData(endpoint) {
    try {
        showLoading();
        hideError();
        
        const response = await fetch(`${API_BASE_URL}${endpoint}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        hideLoading();
        return data;
    } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
        showError(`Failed to load data. Please check your connection and try again.`);
        throw error;
    }
}

// Users Functions
async function loadUsers() {
    try {
        usersData = await fetchData(ENDPOINTS.users);
        displayUsers(usersData);
    } catch (error) {
        console.error('Failed to load users:', error);
    }
}

function displayUsers(users) {
    const container = document.getElementById('users-container');
    if (!container) return;

    if (!users || users.length === 0) {
        container.innerHTML = '<p class="no-data">No users found.</p>';
        return;
    }

    container.innerHTML = users.map(user => createUserCard(user)).join('');
}

function createUserCard(user) {
    return `
        <div class="user-card" onclick="viewUserPosts(${user.id})">
            <h3>${escapeHtml(user.name)}</h3>
            <p class="user-info"><strong>Username:</strong> ${escapeHtml(user.username)}</p>
            <p class="user-info"><strong>Email:</strong> ${escapeHtml(user.email)}</p>
            <p class="user-info"><strong>Phone:</strong> ${escapeHtml(user.phone)}</p>
            <p class="user-info"><strong>Website:</strong> ${escapeHtml(user.website)}</p>
            <p class="user-info"><strong>Company:</strong> ${escapeHtml(user.company?.name || 'N/A')}</p>
            <p class="user-info"><strong>City:</strong> ${escapeHtml(user.address?.city || 'N/A')}</p>
            <button class="view-posts-btn" onclick="event.stopPropagation(); viewUserPosts(${user.id})">
                View Posts
            </button>
        </div>
    `;
}

function viewUserPosts(userId) {
    sessionStorage.setItem('selectedUserId', userId);
    window.location.href = 'posts.html';
}

// Posts Functions
async function loadPosts() {
    try {
        postsData = await fetchData(ENDPOINTS.posts);
        
        // Check if we need to filter by a specific user
        const selectedUserId = sessionStorage.getItem('selectedUserId');
        if (selectedUserId) {
            const filteredPosts = postsData.filter(post => post.userId == selectedUserId);
            displayPosts(filteredPosts);
            // Update the filter dropdown
            const filterSelect = document.getElementById('user-filter');
            if (filterSelect) {
                filterSelect.value = selectedUserId;
            }
            // Clear the stored user ID
            sessionStorage.removeItem('selectedUserId');
        } else {
            displayPosts(postsData);
        }
    } catch (error) {
        console.error('Failed to load posts:', error);
    }
}

function displayPosts(posts) {
    const container = document.getElementById('posts-container');
    if (!container) return;

    if (!posts || posts.length === 0) {
        container.innerHTML = '<p class="no-data">No posts found.</p>';
        return;
    }

    container.innerHTML = posts.map(post => createPostCard(post)).join('');
}

function createPostCard(post) {
    const user = usersData.find(u => u.id === post.userId);
    const userName = user ? user.name : `User ${post.userId}`;
    
    return `
        <div class="post-card">
            <div class="post-header">
                <h3 class="post-title">${escapeHtml(post.title)}</h3>
                <span class="post-meta">By: ${escapeHtml(userName)}</span>
            </div>
            <p class="post-body">${escapeHtml(post.body)}</p>
        </div>
    `;
}

async function loadUsersForFilter() {
    try {
        if (usersData.length === 0) {
            usersData = await fetchData(ENDPOINTS.users);
        }
        populateUserFilter(usersData);
    } catch (error) {
        console.error('Failed to load users for filter:', error);
    }
}

function populateUserFilter(users) {
    const filterSelect = document.getElementById('user-filter');
    if (!filterSelect || !users) return;

    // Clear existing options except the first one
    const firstOption = filterSelect.children[0];
    filterSelect.innerHTML = '';
    filterSelect.appendChild(firstOption);

    // Add user options
    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.id;
        option.textContent = user.name;
        filterSelect.appendChild(option);
    });
}

function filterPosts() {
    const filterSelect = document.getElementById('user-filter');
    if (!filterSelect || !postsData) return;

    const selectedUserId = filterSelect.value;
    
    if (selectedUserId === '') {
        displayPosts(postsData);
    } else {
        const filteredPosts = postsData.filter(post => post.userId == selectedUserId);
        displayPosts(filteredPosts);
    }
}

// Utility function to escape HTML and prevent XSS
function escapeHtml(text) {
    if (typeof text !== 'string') return text;
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Error handling for navigation
window.addEventListener('error', function(event) {
    console.error('JavaScript error:', event.error);
    showError('An unexpected error occurred. Please refresh the page.');
});

window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled promise rejection:', event.reason);
    showError('Network error. Please check your connection and try again.');
});

// Initialize page based on current location
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Export functions for global access
window.loadUsers = loadUsers;
window.loadPosts = loadPosts;
window.loadUsersForFilter = loadUsersForFilter;
window.filterPosts = filterPosts;
window.viewUserPosts = viewUserPosts;
