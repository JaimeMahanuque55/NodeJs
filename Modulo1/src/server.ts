// import express, { Request, Response } from 'express';

// const server = express();

// server.get('/', (req: Request, res: Response) => {
//     res.send("Hello World!")
// });

// server.get('/contato', (req: Request, res: Response) => {
//     res.send("Hello World, contacto!")
// });

// server.listen(3000);


/////////////////// Working with routes //////////////////////////

import express, { Request, Response } from 'express';

const server = express();

// GET, POST, PUT, DELETE

// const HomePage = (req: Request, res: Response) => {
//     res.send('Hello World')
// }


server.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

server.get('/noticia/:slug', (req: Request, res: Response) => {

    let slug: string = req.params.slug;
    res.send(`Noticia: ${slug}`);
});


server.get('/voo/:origem-:destino', (req: Request, res: Response) => {

    let { origem, destino } = req.params;

    res.send(`Procurando Voos de ${origem.toUpperCase()} ate ${destino.toUpperCase()}`);
});

server.listen(80);