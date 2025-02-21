import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';
import { connectDB } from './database';
import userRoutes from './routes/users.routes';
import productRoutes from './routes/products.routes';
import patientRoutes from './routes/patients.routes';
import appointmentRoutes from './routes/appointments.routes';

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/appoinments", appointmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);    
});