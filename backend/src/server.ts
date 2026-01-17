import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (_, res) => {
  res.send('API Adottami rodando 🐾')
})

app.listen(3333, () => {
  console.log('Server rodando em http://localhost:3333')
})
