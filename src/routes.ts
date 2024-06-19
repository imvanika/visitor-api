import { Router } from 'express';
import { getVisitorCount, incrementVisitorCount } from './visitorCounter';

const router = Router();

router.get('/visitors', getVisitorCount);
router.post('/visitors', incrementVisitorCount);

export { router };