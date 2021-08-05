// Data from our imaginary database
const users = [
    {
    "name": "Andrew",
    "followers": 27304,
    "posts": 34,
    "images": 38,
    "engagements": 2343,
    "is_verified": false
    },
    {
    "name": "Bailey",
    "followers": 32102,
    "posts": 54,
    "images": 102,
    "engagements": 9488,
    "is_verified": true
    },
    {
    "name": "Caroline",
    "followers": 19932,
    "posts": 12,
    "images": 0,
    "engagements": 19,
    "is_verified": false
    }
];

//What our ML models want to recieve [followers, posts, images, engagements, is_verified]

const vectors = users.map(user => [
        user.followers,
        user.posts,
        user.images,
        user.engagements,
        user.is_verified ? 1 : 0
]);

// note that the is_verified field was converted to an integer using the ternary operator

console.log(vectors)