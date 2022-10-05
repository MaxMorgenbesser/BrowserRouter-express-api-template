import { Router } from "express";
import { home } from "./Services.js";
export const BrowserRouter = Router()

BrowserRouter.get('/home', home )