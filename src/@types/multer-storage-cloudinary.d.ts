declare module 'multer-storage-cloudinary' {
  import { StorageEngine } from 'multer';

  export interface CloudinaryStorageOptions {
    cloudinary: any;
    params?: any;
  }

  export class CloudinaryStorage implements StorageEngine {
    constructor(options: CloudinaryStorageOptions);
    _handleFile?: any;
    _removeFile?: any;
  }
}