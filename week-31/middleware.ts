import type { NextFunction, Request, Response } from "express";

export const middleware = (req: Request, res: Response, next: NextFunction) => {
    const statTime = Date.now();
    next();
    const endTime = Date.now();
    console.log(`Time it took is ${endTime - statTime} ms for method ${req.method} for route ${(req.originalUrl)}`);
}