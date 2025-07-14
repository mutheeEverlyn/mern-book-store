const mongoose = require('mongoose');
const Book = require('./book.model');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

async function seedBooks() {
  try {
    await mongoose.connect(process.env.DB_URL);
    let booksData = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../../frontend/public/books.json'), 'utf-8'));
    // Remove _id field if present
    booksData = booksData.map(({_id, ...rest}) => rest);
    await Book.deleteMany({});
    await Book.insertMany(booksData);
    console.log('Books seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding books:', err);
    process.exit(1);
  }
}

seedBooks(); 