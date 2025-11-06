import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Announcement from './models/Announcement';
import Quiz from './models/Quiz';

dotenv.config();

const seedData = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/anyware-dashboard';
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected for seeding...');

    await Announcement.deleteMany({});
    await Quiz.deleteMany({});
    console.log('Cleared existing data');

    const announcements = [
      {
        title: 'Welcome to Fall 2024 Semester',
        description: 'Welcome everyone! We are excited to start this semester. Please review the syllabus and course materials.',
        date: new Date('2024-09-01'),
        author: 'Dr. Sarah Johnson',
      },
      {
        title: 'Midterm Exam Schedule Released',
        description: 'The midterm examination schedule has been posted. Please check your student portal for specific dates and times.',
        date: new Date('2024-10-15'),
        author: 'Academic Office',
      },
      {
        title: 'Guest Lecture on AI and Machine Learning',
        description: 'Join us for an exciting guest lecture by Prof. Michael Chen on the latest developments in AI. Thursday at 3 PM in Room 204.',
        date: new Date('2024-11-03'),
        author: 'Computer Science Department',
      },
      {
        title: 'Holiday Break Notice',
        description: 'Campus will be closed from December 20th to January 5th for winter break. Happy holidays!',
        date: new Date('2024-12-10'),
        author: 'Administration',
      },
    ];

    await Announcement.insertMany(announcements);
    console.log('Announcements seeded successfully');

    const quizzes = [
      {
        title: 'Quiz 1: Introduction to Web Development',
        course: 'CS 101',
        topic: 'HTML & CSS Basics',
        dueDate: new Date('2024-11-10'),
      },
      {
        title: 'Quiz 2: JavaScript Fundamentals',
        course: 'CS 101',
        topic: 'Variables, Functions, and Control Flow',
        dueDate: new Date('2024-11-17'),
      },
      {
        title: 'Midterm Quiz: Data Structures',
        course: 'CS 201',
        topic: 'Arrays, Linked Lists, and Trees',
        dueDate: new Date('2024-11-12'),
      },
      {
        title: 'Quiz 3: Database Design',
        course: 'CS 301',
        topic: 'Normalization and SQL',
        dueDate: new Date('2024-11-20'),
      },
      {
        title: 'Final Project Presentation',
        course: 'CS 401',
        topic: 'Full Stack Application',
        dueDate: new Date('2024-12-05'),
      },
    ];

    await Quiz.insertMany(quizzes);
    console.log('Quizzes seeded successfully');

    console.log('Database seeding completed!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
