export default function generateUniqueId() {
    // Generate a random number and convert it to a hexadecimal string
    const randomNumber = Math.random().toString(36).substr(2, 8);

    // Get the current timestamp and convert it to a hexadecimal string
    const timestamp = Date.now().toString(36);

    // Combine the random number and timestamp to create a unique ID
    const uniqueId = randomNumber + timestamp;

    return uniqueId;
}

