document.addEventListener('DOMContentLoaded', function() {
    // Comment Form Submission
    const commentForm = document.getElementById('comment-form');
    
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const comment = document.getElementById('comment').value;
            
            // Basic validation
            if (!name || !email || !comment) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Create new comment
            const commentsContainer = document.querySelector('.comments-container');
            const newComment = document.createElement('div');
            newComment.className = 'comment';
            
            // Get current date
            const now = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = now.toLocaleDateString('en-US', options);
            
            newComment.innerHTML = `
                <div class="comment-avatar">
                    <img src="images/default-user.jpg" alt="User">
                </div>
                <div class="comment-content">
                    <div class="comment-header">
                        <h4>${name}</h4>
                        <span class="comment-date">${formattedDate}</span>
                    </div>
                    <p>${comment}</p>
                    <button class="reply-btn">Reply</button>
                </div>
            `;
            
            // Add new comment to the top of the comments
            commentsContainer.insertBefore(newComment, commentsContainer.firstChild);
            
            // Update comment count
            const commentsTitle = document.querySelector('.comments-section h3');
            const currentCount = parseInt(commentsTitle.textContent.match(/\d+/)[0]);
            commentsTitle.textContent = `Comments (${currentCount + 1})`;
            
            // Reset form
            commentForm.reset();
            
            // Scroll to the new comment
            newComment.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Reply button functionality
    const replyButtons = document.querySelectorAll('.reply-btn');
    
    if (replyButtons.length > 0) {
        replyButtons.forEach(button => {
            button.addEventListener('click', function() {
                const commentContent = this.closest('.comment-content');
                const commentAuthor = commentContent.querySelector('h4').textContent;
                
                // Scroll to comment form
                const commentForm = document.getElementById('comment-form');
                commentForm.scrollIntoView({ behavior: 'smooth' });
                
                // Focus on comment textarea and add reply prefix
                const commentTextarea = document.getElementById('comment');
                commentTextarea.focus();
                commentTextarea.value = `@${commentAuthor} `;
            });
        });
    }
    
    // Social share functionality
    const shareLinks = document.querySelectorAll('.social-share a');
    
    if (shareLinks.length > 0) {
        shareLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const postTitle = document.querySelector('.post-title').textContent;
                const postUrl = window.location.href;
                
                let shareUrl = '';
                
                // Determine which social platform was clicked
                if (this.querySelector('i').classList.contains('fa-facebook')) {
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`;
                } else if (this.querySelector('i').classList.contains('fa-twitter')) {
                    shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(postTitle)}&url=${encodeURIComponent(postUrl)}`;
                } else if (this.querySelector('i').classList.contains('fa-linkedin')) {
                    shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(postTitle)}`;
                } else if (this.querySelector('i').classList.contains('fa-pinterest')) {
                    const postImage = document.querySelector('.post-featured-image img').src;
                    shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(postUrl)}&media=${encodeURIComponent(postImage)}&description=${encodeURIComponent(postTitle)}`;
                }
                
                // Open share dialog
                if (shareUrl) {
                    window.open(shareUrl, 'share-dialog', 'width=800,height=600');
                }
            });
        });
    }
});