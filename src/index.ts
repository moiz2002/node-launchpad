import express, { Request, Response } from 'express';
import productRoutes from './modules/products/ProductRoutes';

// Silent crashes aur unhandled DB rejections catcher
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
});

const app = express();

// Global Middlewares
app.use(express.json());

// Health Check Endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', environment: process.env.NODE_ENV });
});

// Module Routes Register
app.use('/api/products', productRoutes);

// Server Binding (Docker container ke liye '0.0.0.0' par bind hona zaroori hai)
const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

export default app;