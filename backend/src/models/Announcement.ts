import mongoose, { Schema, Document } from 'mongoose';

export interface IAnnouncement extends Document {
  title: string;
  description: string;
  date: Date;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

const AnnouncementSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    date: {
      type: Date,
      default: Date.now,
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IAnnouncement>('Announcement', AnnouncementSchema);
