import express from 'express'
import postsRouter from './routes/posts'
import usersRouter from './routes/users'
import authRouter from './routes/auth'

const app = express()

app.use(express.json())

app.use('/api/posts', postsRouter)
app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)



app.listen(8080, () => {
    console.log('connected');
})