const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
// Step 1: Define positive and negative word arrays
pos=[ "good", "great", "excellent", "amazing"]
neg=[ "bad", "poor", "terrible", "awful"]
// Step 2: Function to classify reviews
function classifyReviews(reviews) {
    const positive = [];
    const negative = [];
    const neutral = [];
    // TODO:
    // 1. Loop through each review
    reviews.forEach(ele => {
        let lowercase=ele.toLowerCase()
        if(pos.some(word=>lowercase.includes(word))){
            positive.push(ele)

        }
        else if(neg.some(word=>lowercase.includes(word))){
            negative.push(ele)

        }
        else{
            neutral.push(ele)

        }
        
        
    });

    // 2. Convert to lowercase for case-insensitive matching
    // 3. Check if it contains any positive words
    // 4. Else, check if it contains any negative words
    // 5. Else, mark as neutral
    return { positive, negative, neutral };
}
// Step 3: Read input array from user
rl.question('Enter reviews as a JSON array: ', (input) => {
    try {
        const reviews = JSON.parse(input); // Expecting array input
        const report = classifyReviews(reviews);
        console.log("\nPositive Reviews:");
        report.positive.forEach(r => console.log(`- ${r}`));
        console.log("\nNegative Reviews:");
        report.negative.forEach(r => console.log(`- ${r}`));
        console.log("\nNeutral Reviews:");
        report.neutral.forEach(r => console.log(`- ${r}`));
    } catch (e) {
    console.log("Invalid input. Please provide an array of reviews in JSON format.");
    }
    rl.close();
});
