import { Request, Response } from 'express';
import axios from 'axios';
import path from 'path';

export const reportMap = async (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/report.html'));
};