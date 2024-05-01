import express from 'express'
import postsRouter from './routes/posts.js'
import usersRouter from './routes/users.js'
import authRouter from './routes/auth.js'

const app = express()

app.use(express.json())

app.use('/api/posts', postsRouter)
app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)



app.listen(8080, () => {
    console.log('connected');
})