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
import { PaymentApi } from "./payments";
export {UserApi} from "./users";
import twilioMessage from './twilio'

const app = express();

const userApi = new UserApi();
const restaurantApi = new RestaurantApi();
const ordersApi = new OrdersApi();
const dishsApi = new DishsApi();
const ratingsApi = new RatingsApi();
const commentsApi = new CommentsApi();
const paymentsApi = new PaymentApi();

const userRouter = express.Router();
const restaurantRouter = express.Router();
const ordersRouter = express.Router();
const ratingsRouter = express.Router();
const dishisRouter = express.Router();
const commentRouter = express.Router();
const paymentRouter = express.Router();

const origin = {
  origin: '*',
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors(origin))
app.use(compression())
app.use(helmet())
app.use(morgan('combined'))
//################USER END POINT ###################

userRouter.get('/users/:id',
  (req, res) => userApi.getById(req, res)
)
userRouter.get('/users',
  (req, res) => {
    let phoneValue = req.query.phone;
    if(phoneValue){
      userApi.getByPhone(req, res);
    }
    else{
      userApi.getAll(req, res);
    }
    
  }
)
userRouter.post('/users',
  (req, res) => userApi.create(req, res)
)

userRouter.post("/login", 
 (req, res) => userApi.login(req, res)
);

app.use('/api/v1', userRouter)

//################RESTAURANT  END POINT ###################
restaurantRouter.get("/restaurants", 
 (req, res) => restaurantApi.getAll(req, res)
);
restaurantRouter.get('/restaurants/:id',
  (req, res) => restaurantApi.getById(req, res)
)
app.use('/api/v1', restaurantRouter)

//################ORDER END POINT ###################
ordersRouter.get("/orders", 
 (req, res) => ordersApi.getAll(req, res)
);

ordersRouter.get("/user/:userId/orders", 
 (req, res) => ordersApi.getByUserId(req, res)
);

ordersRouter.get("/user/:userId/:done/orders", 
 (req, res) => ordersApi.getDoneOrdersByUserId(req, res)
);

ordersRouter.post("/orders", 
 (req, res) => ordersApi.create(req, res)
);

app.use('/api/v1', ordersRouter)
 
//################RATINGS END POINT ###################
ratingsRouter.get("/ratings", 
 (req, res) => ratingsApi.getAll(req, res)
);
app.use('/api/v1', ratingsRouter);

//################DISH END POINT ###################
dishisRouter.get("/dishs", 
 (req, res) => dishsApi.getAll(req, res)
);

dishisRouter.get("/restaurant/:id/dishes", 
 (req, res) => dishsApi.getByRestaurantId(req, res)
);

app.use('/api/v1', dishisRouter);

//################COMMENT END POINT ###################
commentRouter.get("/comments", 
  (req, res) => {
    if(req.query.restaurantId){
      commentsApi.getByRestaurantId(req, res);
    } else{
      commentsApi.getAll(req, res);
    }
  }
);

commentRouter.post('/comments',
  (req, res) => commentsApi.create(req, res)
)
app.use('/api/v1', commentRouter);
 
//################PAYMENT END POINT ###################
paymentRouter.post('/payments',
  (req, res) => paymentsApi.createPayment(req, res)
)
app.use('/api/v1', paymentRouter);

const port = process.env.PORT || 3002;
//################TWILIO MESSAGING ###################
paymentRouter.post('/sendMessage',
  (req, res) => {
    twilioMessage()  
    res.send('SUCCESS')
  }
)
app.use('/api/v1', paymentRouter);

app.listen(port, () => console.log(`App listening on PORT ${port}`));

