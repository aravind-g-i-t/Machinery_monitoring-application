import express from 'express';
import cors from 'cors';
import sensorRoutes from '../presentation/routes/sensorRoutes';
import helmet from 'helmet';
import dotenv from "dotenv"
dotenv.config()
const app=express();


app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        fontSrc: ["'self'", "data:", "https:"],
        styleSrc: ["'self'", "'unsafe-inline'", "https:"],
        scriptSrc: ["'self'"]
    }
}));
                                     


 const corsOptions={
    origin: process.env.CLIENT_URL, 
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
}
app.use(cors(corsOptions))
app.use(express.json());

app.use('/sensor',sensorRoutes)


export default app;