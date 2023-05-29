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
/*
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
*/

/////////////////// Separating Routes in place  //////////////////////////

/*
import express from 'express';
import mainRoutes from './routes/index';
import painelRoutes from './routes/painel';

const server = express();

server.use('/', mainRoutes);
server.use('/painel', painelRoutes);

server.listen(80);

*/

//////////////// Creating the 404 (Page not found) //////////////////////
/*
import express, { Request, Response } from 'express';
import mainRoutes from './routes/index';
import painelRoutes from './routes/painel';

const server = express();

server.use('/', mainRoutes);
server.use('/painel', painelRoutes);

server.use((req: Request, res: Response) => {
    res.status(404).send('Pagina nao encontrada!');
});

server.listen(80);
*/

//////////////// Public Folder and Static Files //////////////////////////
/*
import express, { Request, Response } from 'express';
import path from 'path';
import mainRoutes from './routes/index';

const server = express();

// console.log(path.join(__dirname, '../public'));

// server.use(express.static('public'));
// server.use('/static', express.static('public'));
server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);

server.use((req: Request, res: Response) => {
    res.status(404).send('Pagina nao encontrada!');
});

server.listen(80);
*/

////////////// Installing and Configuring Mustache /////////////////////////

import express, { Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';

import mainRoutes from './routes/index';

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);

server.use((req: Request, res: Response) => {
    res.status(404).send('Pagina nao encontrada!');
});

server.listen(80);