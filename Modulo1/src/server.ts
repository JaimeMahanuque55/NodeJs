import express, { Request, Response } from 'express';

const server = express();

server.get('/', (req: Request, res: Response) => {
    res.send("Hello World!")
});

server.get('/contato', (req: Request, res: Response) => {
    res.send("Hello World, contacto!")
});

server.listen(3000);