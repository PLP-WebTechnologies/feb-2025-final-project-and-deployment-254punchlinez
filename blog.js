document.addEventListener('DOMContentLoaded', function() {
    // Sample blog posts data
    const blogPosts = [
        {
            id: 1,
            title: 'The Art of Mindfulness Meditation',
            excerpt: 'Discover how mindfulness meditation can transform your daily life and improve mental clarity.',
            category: 'wellness',
            image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            date: 'May 1, 2023',
            readTime: '5 min read',
            url: 'https://www.mindful.org/how-to-practice-mindfulness/'
        },
        {
            id: 2,
            title: '10 Productivity Hacks for Remote Work',
            excerpt: 'Learn effective strategies to boost your productivity while working from home.',
            category: 'productivity',
            image: 'https://images.unsplash.com/photo-1584931423298-c576fda54bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            date: 'April 22, 2023',
            readTime: '7 min read',
            url: 'https://www.forbes.com/sites/bryanrobinson/2020/04/04/9-tips-to-be-productive-when-working-at-home-during-covid-19/'
        },
        {
            id: 3,
            title: '5 Nutrient-Rich Breakfast Recipes',
            excerpt: 'Start your day with these delicious and nutritious breakfast options for sustained energy.',
            category: 'nutrition',
            image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            date: 'April 15, 2023',
            readTime: '4 min read',
            url: 'https://www.eatingwell.com/gallery/7893002/high-protein-breakfast-recipes-for-weight-loss/'
        },
        {
            id: 4,
            title: 'The Physical and Mental Benefits of Yoga',
            excerpt: 'Explore how regular yoga practice can improve both your physical and mental well-being.',
            category: 'wellness',
            image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            date: 'April 10, 2023',
            readTime: '6 min read',
            url: 'https://www.healthline.com/nutrition/13-benefits-of-yoga'
        },
        {
            id: 5,
            title: 'Digital Minimalism: Simplifying Your Online Life',
            excerpt: 'Learn how to reduce digital clutter and create a more intentional relationship with technology.',
            category: 'technology',
            image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            date: 'April 5, 2023',
            readTime: '8 min read',
            url: 'https://www.nytimes.com/2019/02/23/business/cell-phone-addiction.html'
        },
        {
            id: 6,
            title: 'Understanding the Gut-Brain Connection',
            excerpt: 'Discover the fascinating relationship between your gut health and mental well-being.',
            category: 'nutrition',
            image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            date: 'March 28, 2023',
            readTime: '9 min read',
            url: 'https://www.health.harvard.edu/diseases-and-conditions/the-gut-brain-connection'
        },
        {
            id: 7,
            title: 'The Power of Deep Work in a Distracted World',
            excerpt: 'Learn how to cultivate the ability to focus without distraction on cognitively demanding tasks.',
            category: 'productivity',
            image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            date: 'March 20, 2023',
            readTime: '7 min read',
            url: 'https://www.calnewport.com/blog/2016/01/19/deep-work-rules-for-focused-success-in-a-distracted-world-now-available/'
        },
        {
            id: 8,
            title: 'Ethical Tech: Navigating Privacy in the Digital Age',
            excerpt: 'Explore how to protect your personal information while still enjoying the benefits of technology.',
            category: 'technology',
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            date: 'March 15, 2023',
            readTime: '6 min read',
            url: 'https://www.wired.com/story/privacy-security-digital-life/'
        }
    ];
    
    const postsContainer = document.getElementById('posts-container');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const loadMoreBtn = document.getElementById('load-more');
    
    let currentCategory = 'all';
    let visiblePosts = 4;
    
    // Get search query from URL if present
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    
    if (searchQuery) {
        document.getElementById('search-input').value = searchQuery;
        document.querySelector('.page-header h1').textContent = `Search Results: "${searchQuery}"`;
        document.querySelector('.page-header p').textContent = 'Showing articles matching your search';
    }
    
    // Filter and render posts
    function renderPosts() {
        if (!postsContainer) return;
        
        postsContainer.innerHTML = '';
        
        let filteredPosts = blogPosts;
        
        // Apply category filter
        if (currentCategory !== 'all') {
            filteredPosts = blogPosts.filter(post => post.category === currentCategory);
        }
        
        // Apply search filter if search query exists
        if (searchQuery) {
            filteredPosts = filteredPosts.filter(post => 
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.category.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        
        // Show message if no posts match
        if (filteredPosts.length === 0) {
            postsContainer.innerHTML = `
                <div class="no-results">
                    <p>No articles found matching your criteria.</p>
                </div>
            `;
            loadMoreBtn.style.display = 'none';
            return;
        }
        
        // Limit visible posts
        const postsToShow = filteredPosts.slice(0, visiblePosts);
        
        // Create post cards
        postsToShow.forEach(post => {
            const postCard = document.createElement('div');
            postCard.className = 'post-card';
            postCard.innerHTML = `
                <div class="post-image">
                    <img src="${post.image}" alt="${post.title}">
                </div>
                <div class="post-content">
                    <div class="post-category">${post.category.charAt(0).toUpperCase() + post.category.slice(1)}</div>
                    <h3 class="post-title">${post.title}</h3>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <div class="post-meta">
                        <span class="post-date">${post.date}</span>
                        <span class="post-read-time">${post.readTime}</span>
                    </div>
                    <a href="${post.url}" class="read-more">Read More</a>
                </div>
            `;
            postsContainer.appendChild(postCard);
        });
        
        // Show/hide load more button
        if (filteredPosts.length > visiblePosts) {
            loadMoreBtn.style.display = 'inline-block';
        } else {
            loadMoreBtn.style.display = 'none';
        }
    }
    
    // Initialize posts
    renderPosts();
    
    // Category filter functionality
    if (categoryButtons.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Update current category
                currentCategory = this.getAttribute('data-category');
                
                // Reset visible posts count
                visiblePosts = 4;
                
                // Re-render posts
                renderPosts();
            });
        });
    }
    
    // Load more functionality
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            visiblePosts += 4;
            renderPosts();
        });
    }
});