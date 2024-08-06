import express from 'express';
import cors from 'cors';
import userRoutes from "./routes/user.routes";
import blogRoutes from "./routes/blog.routes";
import bodyParser from "body-parser";
import User from './models/user.model.js';
import Blog from './models/blog.model.js';
import Comment from './models/comments.model.js';
import associateModels from './models/associateModels.js';

const app = express();
const models = { User, Blog, Comment };
associateModels(models);

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Allow your frontend's origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization']
};

// Use CORS middleware
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.status(200).json({ message: "Welcome to QT APIs" });
});

app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);

export default app;
