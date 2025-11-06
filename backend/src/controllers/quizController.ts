import { Request, Response } from 'express';
import Quiz from '../models/Quiz';

export const getAllQuizzes = async (req: Request, res: Response): Promise<void> => {
  try {
    const quizzes = await Quiz.find().sort({ dueDate: 1 });
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching quizzes', error });
  }
};

export const getQuizById = async (req: Request, res: Response): Promise<void> => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      res.status(404).json({ message: 'Quiz not found' });
      return;
    }
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching quiz', error });
  }
};

export const createQuiz = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, course, topic, dueDate } = req.body;
    
    const newQuiz = new Quiz({
      title,
      course,
      topic,
      dueDate,
    });

    const savedQuiz = await newQuiz.save();
    res.status(201).json(savedQuiz);
  } catch (error) {
    res.status(400).json({ message: 'Error creating quiz', error });
  }
};

export const updateQuiz = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, course, topic, dueDate } = req.body;
    
    const updatedQuiz = await Quiz.findByIdAndUpdate(
      req.params.id,
      { title, course, topic, dueDate },
      { new: true, runValidators: true }
    );

    if (!updatedQuiz) {
      res.status(404).json({ message: 'Quiz not found' });
      return;
    }

    res.json(updatedQuiz);
  } catch (error) {
    res.status(400).json({ message: 'Error updating quiz', error });
  }
};

export const deleteQuiz = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedQuiz = await Quiz.findByIdAndDelete(req.params.id);
    
    if (!deletedQuiz) {
      res.status(404).json({ message: 'Quiz not found' });
      return;
    }

    res.json({ message: 'Quiz deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting quiz', error });
  }
};
