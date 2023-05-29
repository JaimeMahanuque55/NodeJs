/////////////////// Separating Routes in place  //////////////////////////
/*
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
});

router.get('/contacto', (req: Request, res: Response) => {
    res.send("Formulario de contacto");
});

router.get('/sobre', (req: Request, res: Response) => {
    res.send("Pagina institucional sobre a empresa");
});

export default router;
*/

///////////////////// Installing and Configuring Mustache /////////////////////

import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.render('home');
});

router.get('/contacto', (req: Request, res: Response) => {
    res.send("Formulario de contacto");
});

router.get('/sobre', (req: Request, res: Response) => {
    res.send("Pagina institucional sobre a empresa");
});

export default router;