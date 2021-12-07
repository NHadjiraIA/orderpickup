import express from "express";
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { BranchesApi } from "./branches";
import { OffersApi } from "./offers"
import {filtersHelper} from './application/helpers/filtersHelper'
import { DbContext } from "./Infrastructure/db/seeders/dbcontext";

const db = DbContext.db();

const app = express();

const branchApi = new BranchesApi();
const offerApi = new OffersApi();

const branchRouter = express.Router();
const offerRouter = express.Router();

//const allowedOrigins = ['http://localhost:3000', 'https://localhost:58249'];

// const options: cors.CorsOptions = {
//   origin: allowedOrigins
// };

const origin = {
  origin: '*',
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors(origin))
app.use(compression())
app.use(helmet())
app.use(morgan('combined'))
//################BRANCHES END POINT ###################

branchRouter.get('/branches',
(req, res) => {
  let branchId = req.query.id;
  if(branchId){
    branchApi.getByBranchId(req, res);
  }
  else{
    branchApi.getAll(req, res);
  }
})

branchRouter.post('/branches',
  (req, res) => branchApi.create(req, res)
)
branchRouter.delete('/branches/:id',
  (req, res) => branchApi.delete(req, res)
)

//################OFFERS END POINT ###################

offerRouter.get('/offers',
(req, res) => {
  let offerId = req.query.id;
  if(offerId){
    offerApi.getById(req, res);
  }
  else{
    offerApi.getAll(req, res);
  }
})

offerRouter.post('/offers',
  (req, res) => offerApi.create(req, res)
)
offerRouter.delete('/offers/:id',
  (req, res) => offerApi.delete(req, res)
)
offerRouter.get("/branch/:longitude/offers", 
 (req, res) => offerApi.getByLocation(req, res)
);

app.use('/api/v1', branchRouter)
app.use('/api/v1', offerRouter)
const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`App listening on PORT ${port}`));

``