import { Express } from 'express';
type MulterFile = Express.Multer.File;

export type TImageFiles = { [fieldname: string]: MulterFile[] };

export type TImageFile = {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    path: string;
    size: number;
    filename: string;
};