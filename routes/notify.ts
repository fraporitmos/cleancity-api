import {Router} from 'express';
import { notifyNearbyCitizen } from '../controllers/citizen/notifyNearbyCitizen';
import { notifyStartCitizen } from '../controllers/citizen/notifyStartTraking';
import { reportMap } from '../controllers/report/reportMap';



const router = Router();

router.get(
    "/notifyNearbyCitizen",
    notifyNearbyCitizen,
);
router.get(
    "/notifyStartCitizen",
    notifyStartCitizen,
);
router.get(
    "/report",
    reportMap,
);
export default router;
