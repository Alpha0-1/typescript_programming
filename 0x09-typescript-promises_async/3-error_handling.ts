/**
 * Demonstrates error handling in async/await and Promises
 * Shows different patterns for catching and handling errors
 */

/**
 * Simulates an API call that might fail
 * @param resource - The resource to fetch
 * @param shouldFail - Whether the call should fail
 * @returns A promise that might reject
 */
function fetchData(resource: string, shouldFail: boolean = false): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error(`Failed to fetch ${resource}`));
            } else {
                resolve(`Data from ${resource}`);
            }
        }, 1000);
    });
}

// Error handling with .catch()
fetchData('user-profile', true)
    .then((data) => console.log('Success:', data))
    .catch((error) => console.error('Caught error:', error.message));

// Error handling with try/catch in async/await
async function loadData() {
    try {
        const data = await fetchData('settings', false);
        console.log('Settings loaded:', data);
        
        const failingData = await fetchData('messages', true);
        console.log('This wont log:', failingData);
    } catch (error) {
        console.error('Async error caught:', error.message);
    }
}

loadData();

// Handling multiple promises with possible errors
async function loadMultipleResources() {
    const promises = [
        fetchData('posts'),
        fetchData('comments', true), // This one will fail
        fetchData('tags')
    ];
    
    // Promise.all will fail fast if any promise rejects
    try {
        const results = await Promise.all(promises);
        console.log('All results:', results);
    } catch (error) {
        console.error('One of the promises failed:', error.message);
    }
    
    // Using Promise.allSettled to get all results regardless of rejection
    const settledResults = await Promise.allSettled(promises);
    console.log('Settled results:');
    settledResults.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`Promise ${index} succeeded:`, result.value);
        } else {
            console.log(`Promise ${index} failed:`, result.reason.message);
        }
    });
}

loadMultipleResources();
