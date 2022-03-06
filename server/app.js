var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 使用cors中间件
const cors = require('cors');
var app = express();
app.use(cors());
// 静态资源
app.use('/public', express.static('public'));
// 接口
app.get('/index/home',(req,res)=>{
  res.send({
    tabbar:[
        { label: "首页" },
        { label: "推荐" },
        { label: "预定" },
        { label: "新款" },
        { label: "社区" },
        { label: "tv版" },
        { label: "限定" },
        { label: "技术" },
        { label: "配色" },
    ],
    homedata:[
      {
        type:'iconslist',
        icons: [
          { id: 1, url: "hglogo.jpg", title: "hg" },
          { id: 2, url: "rglogo.jpg", title: "rg" },
          { id: 3, url: "mglogo.jpg", title: "mg" },
          { id: 4, url: "pglogo.jpg", title: "pg" },
        ],
      },  
      {
        type:'likelist',
        like: [
          {
            id: 1,
            url: "like1.jpg",
            title: "万代模型 HG 1/144 陆战型高达（城市战式样）/GUNDAM",
            price: 199,
          },
          {
            id: 2,
            url: "like2.jpg",
            title: "万代模型 HG 1/144 飞翼高达 天 零式/GUNDAM",
            price: 114,
          },
          {
            id: 3,
            url: "like3.jpg",
            title: "万代模型 MG 1/100 大魔",
            price: 500,
          },
          {
            id: 4,
            url: "like4.jpg",
            title: "万代模型 ENTRY GRADE 1/144 突击高达/GUNDAM",
            price: 70,
          },
        ],
      },
    ],
    recommanddata:[
      {
        type:'rocommandlist',
        recommands: [
          {
            id: 1,
            url: "recommand1.jpg",
            title: "万代模型 RG 1/144 Hi-ν 高达",
            say: "主体+推进背包",
            price: "450",
          },
          {
            id: 2,
            url: "recommand2.jpg",
            title: "万代模型 MG 1/100 AGE-2 黑猎犬高达/Gundam",
            say: "主体+武器库",
            price: "420",
          },
          {
            id: 3,
            url: "recommand3.jpg",
            title: "万代模型 PG UNLEASHED 1/60 RX-78-2 高达/GUNDAM",
            say: "主体完美爆甲pg级2.0",
            price: "2500",
          },
        ],
      },
    ],
    reservedata:[
      {
        type:'reservelist',
        reserves:[
          {id:1,url:'reserve.jpg'}
        ]
      },
    ]
    
  })
  console.log('调用了')
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
 


module.exports = app;
