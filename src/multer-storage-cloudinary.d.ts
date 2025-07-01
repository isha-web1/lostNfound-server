declare module 'multer-storage-cloudinary' {
  import { StorageEngine } from 'multer';
  import { ConfigOptions } from 'cloudinary';

  export interface CloudinaryStorageOptions {
    cloudinary: any;
    params?: any;
  }

  export class CloudinaryStorage implements StorageEngine {
    constructor(options: CloudinaryStorageOptions);
  }
}