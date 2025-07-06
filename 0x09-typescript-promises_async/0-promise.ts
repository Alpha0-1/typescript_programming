/**
 * Basic Promise example in TypeScript
 * Demonstrates how to create and consume a simple Promise
 */

/**
 * Simulates fetching user data from an API after a delay
 * @param userId - The user ID to fetch
 * @returns A promise that resolves with user data
 */
function fetchUserData(userId: number): Promise<{id: number, name: string}> {
    return new Promise((resolve) => {
        // Simulate API delay with setTimeout
        setTimeout(() => {
            resolve({
                id: userId,
                name: `User${userId}`
            });
        }, 1000);
    });
}

// Using the Promise with .then() syntax
fetchUserData(1)
    .then((user) => {
        console.log('User data received:', user);
    })
    .catch((error) => {
        console.error('Error fetching user:', error);
    });

// Example of chaining Promises
fetchUserData(2)
    .then((user) => {
        console.log('First user:', user);
        return fetchUserData(3); // Return another Promise
    })
    .then((nextUser) => {
        console.log('Second user:', nextUser);
    })
    .catch((error) => {
        console.error('Error in chain:', error);
    });

console.log('Fetching user data... (this logs immediately)');

// This demonstrates the asynchronous nature of Promises
