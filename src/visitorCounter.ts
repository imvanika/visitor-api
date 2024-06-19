import { Request, Response } from 'express';

let visitorCount = 0;

export const getVisitorCount = (req: Request, res: Response) => {
    res.json({ count: visitorCount });
};

export const incrementVisitorCount = (req: Request, res: Response) => {
    visitorCount++;
    res.json({ count: visitorCount });
};
