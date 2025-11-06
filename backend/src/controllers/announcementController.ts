import { Request, Response } from 'express';
import Announcement from '../models/Announcement';

export const getAllAnnouncements = async (req: Request, res: Response): Promise<void> => {
  try {
    const announcements = await Announcement.find().sort({ date: -1 });
    res.json(announcements);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching announcements', error });
  }
};

export const getAnnouncementById = async (req: Request, res: Response): Promise<void> => {
  try {
    const announcement = await Announcement.findById(req.params.id);
    if (!announcement) {
      res.status(404).json({ message: 'Announcement not found' });
      return;
    }
    res.json(announcement);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching announcement', error });
  }
};

export const createAnnouncement = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, date, author } = req.body;
    
    const newAnnouncement = new Announcement({
      title,
      description,
      date,
      author,
    });

    const savedAnnouncement = await newAnnouncement.save();
    res.status(201).json(savedAnnouncement);
  } catch (error) {
    res.status(400).json({ message: 'Error creating announcement', error });
  }
};

export const updateAnnouncement = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, date, author } = req.body;
    
    const updatedAnnouncement = await Announcement.findByIdAndUpdate(
      req.params.id,
      { title, description, date, author },
      { new: true, runValidators: true }
    );

    if (!updatedAnnouncement) {
      res.status(404).json({ message: 'Announcement not found' });
      return;
    }

    res.json(updatedAnnouncement);
  } catch (error) {
    res.status(400).json({ message: 'Error updating announcement', error });
  }
};

export const deleteAnnouncement = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedAnnouncement = await Announcement.findByIdAndDelete(req.params.id);
    
    if (!deletedAnnouncement) {
      res.status(404).json({ message: 'Announcement not found' });
      return;
    }

    res.json({ message: 'Announcement deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting announcement', error });
  }
};
