/**
 * Demonstrates handling concurrent Promises in TypeScript
 * Shows different patterns for managing multiple async operations
 */

/**
 * Simulates fetching product data from an API
 * @param productId - The ID of the product to fetch
 * @returns A promise that resolves with product data
 */
function fetchProduct(productId: number): Promise<{id: number, name: string, price: number}> {
    const delay = Math.random() * 2000; // Random delay up to 2 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: productId,
                name: `Product ${productId}`,
                price: Math.round(Math.random() * 1000)
            });
        }, delay);
    });
}

/**
 * Fetches multiple products sequentially
 */
async function fetchSequentially() {
    console.time('Sequential fetch');
    
    const product1 = await fetchProduct(1);
    const product2 = await fetchProduct(2);
    const product3 = await fetchProduct(3);
    
    console.log('Sequential results:', [product1, product2, product3]);
    console.timeEnd('Sequential fetch');
}

/**
 * Fetches multiple products concurrently
 */
async function fetchConcurrently() {
    console.time('Concurrent fetch');
    
    const productPromises = [
        fetchProduct(4),
        fetchProduct(5),
        fetchProduct(6)
    ];
    
    const products = await Promise.all(productPromises);
    
    console.log('Concurrent results:', products);
    console.timeEnd('Concurrent fetch');
}

/**
 * Fetches products with Promise.race to get the first response
 */
async function fetchWithRace() {
    console.time('Race fetch');
    
    const winner = await Promise.race([
        fetchProduct(7),
        fetchProduct(8),
        fetchProduct(9)
    ]);
    
    console.log('First product to arrive:', winner);
    console.timeEnd('Race fetch');
}

// Run all examples
async function runExamples() {
    await fetchSequentially();
    await fetchConcurrently();
    await fetchWithRace();
}

runExamples();
