import {Router} from 'express';
import { notifyNearbyCitizen } from '../controllers/citizen/notifyNearbyCitizen';
import { authDriver } from '../controllers/driver/authDriver';
import { notifyStartCitizen } from '../controllers/citizen/notifyStartTraking';



let multer = require('multer');
let formdata = multer();

const router = Router();

router.post(
    "/notifyNearbyCitizen",
    [formdata.fields([])],
    notifyNearbyCitizen,
);
router.post(
    "/notifyStartCitizen",
    [formdata.fields([])],
    notifyStartCitizen,
);

router.post(
    "/authDriver",
    [formdata.fields([])],
    authDriver,
);

export default router;
