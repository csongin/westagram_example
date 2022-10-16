# 진행순서

1. 초기 세팅
2. health check
3. CRUD

## Project Structure

```
.
├── README.md
├── api
│   ├── controllers
│   │   ├── index.js
│   │   ├── postController.js
│   │   └── userController.js
│   ├── models
│   │   ├── dataSource.js
│   │   ├── index.js
│   │   ├── postDao.js
│   │   └── userDao.js
│   ├── routes
│   │   ├── index.js
│   │   ├── postRouter.js
│   │   └── userRouter.js
│   ├── services
│   │   ├── index.js
│   │   ├── postService.js
│   │   └── userService.js
│   └── utils
│       ├── auth.js
│       └── error.js
├── app.js
├── package-lock.json
└── package.json
```
