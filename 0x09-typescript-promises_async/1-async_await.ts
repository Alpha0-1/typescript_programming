/**
 * Demonstrates async/await syntax in TypeScript
 * Shows how to work with Promises in a more synchronous-looking way
 */

/**
 * Simulates fetching a blog post from an API
 * @param postId - The ID of the post to fetch
 * @returns A promise that resolves with post data
 */
function fetchBlogPost(postId: number): Promise<{id: number, title: string, content: string}> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: postId,
                title: `Post ${postId}`,
                content: `This is the content of post ${postId}`
            });
        }, 1500);
    });
}

/**
 * Main function demonstrating async/await
 */
async function displayBlogPost() {
    try {
        console.log('Fetching blog post...');
        
        // await pauses execution until the Promise resolves
        const post = await fetchBlogPost(1);
        console.log('Post received:', post);
        
        // Sequential requests
        const secondPost = await fetchBlogPost(2);
        console.log('Second post:', secondPost);
        
    } catch (error) {
        console.error('Failed to fetch post:', error);
    }
}

// Call the async function
displayBlogPost();

// Example of parallel execution with async/await
async function fetchMultiplePosts() {
    try {
        // Start both requests in parallel
        const post1Promise = fetchBlogPost(3);
        const post2Promise = fetchBlogPost(4);
        
        // Wait for both to complete
        const [post1, post2] = await Promise.all([post1Promise, post2Promise]);
        
        console.log('Parallel posts:', post1, post2);
    } catch (error) {
        console.error('Error fetching multiple posts:', error);
    }
}

fetchMultiplePosts();
