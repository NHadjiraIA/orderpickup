import express from "express";
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { UserApi } from "./users";
export {UserApi} from "./users";

// import { RestaurantApi } from "./restaurants";
// export {RestaurantApi} from "./restaurants";


const app = express();

const userApi = new UserApi();
const userRouter = express.Router();

// const RestaurantApi = new RestaurantApi();
// const restaurantRouter = express.Router();

const origin = {
  origin: '*',
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors(origin))
app.use(compression())
app.use(helmet())
app.use(morgan('combined'))

userRouter.get('/users',
  (req, res) => userApi.getAll(req, res)
)
userRouter.get('/users/:id',
  (req, res) => userApi.getById(req, res)
)
userRouter.post('/users',
  (req, res) => userApi.create(req, res)
)
app.use('/api/v1', userRouter)

/**---------------------------restaurant------------------------------- */
// restaurantRouter.get('/restaurants',
//   (req, res) => RestaurantApi.getAll(req, res)
// )
// restaurantRouter.get('/restaurants/:id',
//   (req, res) => RestaurantApi.getById(req, res)
// )
// restaurantRouter.post('/restaurants',
//   (req, res) => RestaurantApi.create(req, res)
// )

// app.use('/api/v1', restaurantRouter)
// /**---------------------------restaurant------------------------------- */


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));