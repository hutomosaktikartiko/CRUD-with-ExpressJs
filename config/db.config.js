require('dotenv').config()

module.exports = {
    url: `mongodb+srv://posts:${process.env.MONGODB_PASSWORD}@cluster0.ckv4d.mongodb.net/?retryWrites=true&w=majority`
}