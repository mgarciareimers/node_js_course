import { Router, Request, Response } from 'express';
import MySQL from '../mysql/mysql';

const router : Router = Router();

router.get('/heroes', (req : Request, res : Response) => {
    const query = `
        SELECT * FROM heroes
    `;

    MySQL.execQuery(query, (error: any, heroes: Object []) => {
        if (error) {
            return res.status(400).json({ ok: false, error: error });
        }

        return res.status(200).json({ ok: true, heroes: heroes });
    });
});

router.get('/heroes/:id', (req : Request, res : Response) => {
    const { id } = req.params;
    
    const query = `
        SELECT * 
        FROM heroes
        WHERE id = ${ MySQL.instance.connection.escape(id) }
    `;

    MySQL.execQuery(query, (error: any, heroes: Object []) => {
        if (error) {
            return res.status(400).json({ ok: false, error: error });
        } else if (heroes.length <= 0) {
            return res.status(404).json({ ok: false, error: { message: 'Requested heroe was not found' } });
        }

        return res.status(200).json({ ok: true, heroe: heroes[0] });
    });
})

export default router;