import { Router, Request, Response } from 'express';

const router : Router = Router();

router.get('/heroes', (req : Request, res : Response) => {
    res.json({ ok : true, message : 'All fine' });
})

export default router;