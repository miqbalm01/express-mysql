import express from "express";
import cors from 'cors';
import UserRoute from "./routers/UserRoute.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(4000, () => console.log('Connection Success'));