import multer from "multer";
import { randomUUID } from "crypto";
import { mkdirSync } from "fs";
import { extname, resolve } from "path";

const DIRETORIO_UPLOADS = resolve("uploads");
mkdirSync(DIRETORIO_UPLOADS, { recursive: true});

const MIME_TYPES_VALIDOS = ['image/jpeg', 'image/png', 'image/gif', 'image/jpeg'];

const storage = multer.diskStorage({
    destination: (_req, _file, callback) =>{
        callback(null, DIRETORIO_UPLOADS);
    },
    filename: (_req, _file, callback) =>{
        const extensao = extname(File.originalname).toLowerCase();
        
    }
})