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
/*
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
*/

/////////////////////// Mustache: Rendering Information ///////////////////////
/*
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {

    res.render('home', {
        user: 'James',
        age: 30
    });
});

router.get('/contacto', (req: Request, res: Response) => {
    res.send("Formulario de contacto");
});

router.get('/sobre', (req: Request, res: Response) => {
    res.send("Pagina institucional sobre a empresa");
});

export default router;
*/

///////////////////////// Mustache: Conditional Display /////////////////////
/*
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {

    let age: number = 30;
    let showOld: boolean = false;

    if (age >= 30) {
        showOld = true
    }

    res.render('home', {
        user: 'James',
        age: 30,
        showOld
    });
});

router.get('/contacto', (req: Request, res: Response) => {
    res.send("Formulario de contacto");
});

router.get('/sobre', (req: Request, res: Response) => {
    res.send("Pagina institucional sobre a empresa");
});

export default router;
*/

///////////////////// Mustache: Displaying Lists (loop) //////////////////////////
/*
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {

    let age: number = 30;
    let showOld: boolean = false;

    if (age >= 30) {
        showOld = true
    }

    res.render('home', {
        user: 'James',
        age: 30,
        showOld,
        products: [
            { title: 'Gelinhos', price: 20 },
            { title: 'Maguinha', price: 30 },
            { title: 'Frozy', price: 15 }
        ],
        dayCotes: [
            "Work hard",
            "Don't give up for nothing"
        ]
    });
});

router.get('/contacto', (req: Request, res: Response) => {
    res.send("Formulario de contacto");
});

router.get('/sobre', (req: Request, res: Response) => {
    res.send("Pagina institucional sobre a empresa");
});

export default router;
*/
///////////////////// Mustache: Else of Lists //////////////////////////
/*
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {

    let age: number = 15;
    let showOld: boolean = false;

    if (age >= 30) {
        showOld = true
    }

    res.render('home', {
        user: 'James',
        age: 30,
        showOld,
        products: [
            { title: 'Gelinhos', price: 20 },
            { title: 'Maguinha', price: 30 },
            { title: 'Frozy', price: 15 }
        ],
        dayCotes: [
        ]
    });
});

router.get('/contacto', (req: Request, res: Response) => {
    res.send("Formulario de contacto");
});

router.get('/sobre', (req: Request, res: Response) => {
    res.send("Pagina institucional sobre a empresa");
});

export default router;
*/

///////////////////// Mustache: Else of Lists //////////////////////////

/*
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {

    let age: number = 15;
    let showOld: boolean = false;

    if (age >= 30) {
        showOld = true
    }

    res.render('pages/home', {
        user: 'James',
        age: 30,
        showOld,
        products: [
            { title: 'Gelinhos', price: 20 },
            { title: 'Maguinha', price: 30 },
            { title: 'Frozy', price: 15 }
        ],
        dayCotes: [
        ]
    });
});

router.get('/contacto', (req: Request, res: Response) => {
    res.render('pages/contact');
});

router.get('/sobre', (req: Request, res: Response) => {
    res.render('pages/about');
});

export default router;
*/

///////////////////// Mustache: Else of Lists //////////////////////////
/*
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {

    let age: number = 15;
    let showOld: boolean = false;

    if (age >= 30) {
        showOld = true
    }

    res.render('pages/home', {
        user: 'James',
        age: 30,
        showOld,
        products: [
            { title: 'Gelinhos', price: 20 },
            { title: 'Maguinha', price: 30 },
            { title: 'Frozy', price: 15 }
        ],
        dayCotes: [
        ]
    });
});

router.get('/contacto', (req: Request, res: Response) => {
    res.render('pages/contact');
});

router.get('/sobre', (req: Request, res: Response) => {
    res.render('pages/about');
});

router.get('/nome', (req: Request, res: Response) => {

    let name: string = req.query.nome as string;

    res.render('pages/name', {
        nome: name
    });
});

export default router;
*/

///////////////////// Receiving data from url //////////////////////////

import { Router, Request, Response, query } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {

    let age: number = 15;
    let showOld: boolean = false;

    if (age >= 30) {
        showOld = true
    }

    res.render('pages/home', {
        user: 'James',
        age: 30,
        showOld,
        products: [
            { title: 'Gelinhos', price: 20 },
            { title: 'Maguinha', price: 30 },
            { title: 'Frozy', price: 15 }
        ],
        dayCotes: [
        ]
    });
});

router.get('/contacto', (req: Request, res: Response) => {
    res.render('pages/contact');
});

router.get('/sobre', (req: Request, res: Response) => {
    res.render('pages/about');
});

router.get('/nome', (req: Request, res: Response) => {

    let name: string = req.query.nome as string;
    let age: string = req.query.age as string;

    res.render('pages/name', {
        nome: name,
        age
    });
});

router.get('/idade', (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if (req.query.ano) {
        let anoNascimento: number = parseInt(req.query.ano as string);
        let anoActual: number = new Date().getFullYear();
        idade = anoActual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/age', {
        idade,
        mostrarIdade
    });
});

export default router;