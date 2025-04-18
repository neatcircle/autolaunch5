import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'healthy' });
});

// Default route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to AutoLaunch Studio API' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
