const bodyParser = require('body-parser');
const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000 ;
const authRouter = require("./routes/authRoute");
const productRouter = require('./routes/productRoute');
const blogRouter = require('./routes/blogRoute');
const brandRouter = require('./routes/brandRoute');
const colorRouter = require('./routes/colorRoute');
const couponRouter =require('./routes/couponRoute');
const enqRouter = require('./routes/enqRoute');
const categoryRouter = require('./routes/prodcategoryRoute');
const blogcategoryRouter = require('./routes/blogCatRoute');
const uploadRouter = require('./routes/uploadRoute');

const { notFound, errorHandler } = require('./middlewares/errorHandlers');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
dbConnect();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());


app.use('/api/user', authRouter);
app.use('/api/product', productRouter);
app.use('/api/blog', blogRouter);
app.use('/api/coupon', couponRouter);
app.use('/api/category', categoryRouter);
app.use('/api/blogcategory', blogcategoryRouter);
app.use('/api/brand', brandRouter);
app.use('/api/color', colorRouter);
app.use('/api/enquiry', enqRouter);
app.use('/api/upload', uploadRouter);







app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server is starting on ${PORT}`)
});