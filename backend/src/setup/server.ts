import app from './expressApp';
import dotenv from "dotenv"
dotenv.config()

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
    
});   