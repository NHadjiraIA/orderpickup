import express from "express";
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
// import passport from 'passport';
// import passportLocal from 'passport-local';
import compression from 'compression';
import { UserApi } from "./users";
import { RestaurantApi } from "./restaurants";
import { OrdersApi } from "./orders";
import { RatingsApi } from "./ratings";
import { DishsApi } from "./dishs"
import { CommentEntity } from "./Infrastructure/db/models/comment";
import { CommentsApi } from "./comment";
export {UserApi} from "./users";


const app = express();

const userApi = new UserApi();
const restaurantApi = new RestaurantApi();
const ordersApi = new OrdersApi();
const dishsApi = new DishsApi();
const ratingsApi = new RatingsApi();
const commentsApi = new CommentsApi();
const userRouter = express.Router();
const restaurantRouter = express.Router();
const ordersRouter = express.Router();
const ratingsRouter = express.Router();
const dishisRouter = express.Router();
const commentRouter = express.Router();


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
userRouter.get('/users/:phoen',
  (req, res) => userApi.getByPhone(req, res)
)
userRouter.post('/users',
  (req, res) => userApi.create(req, res)
)

userRouter.post("/login", 
 (req, res) => userApi.login(req, res)
);

app.use('/api/v1', userRouter)

restaurantRouter.get("/restaurants", 
 (req, res) => restaurantApi.getAll(req, res)
);
restaurantRouter.get('/restaurants/:id',
  (req, res) => restaurantApi.getById(req, res)
)
app.use('/api/v1', restaurantRouter)

ordersRouter.get("/orders", 
 (req, res) => ordersApi.getAll(req, res)
);

ordersRouter.get("/user/:userId/orders", 
 (req, res) => ordersApi.getByUserId(req, res)
);


app.use('/api/v1', ordersRouter)
 
ratingsRouter.get("/ratings", 
 (req, res) => ratingsApi.getAll(req, res)
);
app.use('/api/v1', ratingsRouter);

dishisRouter.get("/dishs", 
 (req, res) => dishsApi.getAll(req, res)
);
app.use('/api/v1', dishisRouter);

commentRouter.get("/comments", 
(req, res) => commentsApi.getAll(req, res)
);
commentRouter.post('/comments',
  (req, res) => commentsApi.create(req, res)
)
app.use('/api/v1', commentRouter);
 
const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`App listening on PORT ${port}`));