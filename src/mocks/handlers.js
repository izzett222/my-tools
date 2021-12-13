import { rest } from "msw";
export const handlers = [
    rest.get('/user', (req, res, ctx) => {
        if(!req.headers._headers.authorization) {
            return res( ctx.status(401), ctx.json({ error: new Error('please re-authenticate')}))
        }
        return res(ctx.delay(1200), ctx.json({ data: {
            username: 'izzet',
        }}))
    }),
    rest.post('/auth/signup', (req, res, ctx) => {   
        return res(ctx.status(201), ctx.json({ data: {
            username: req.body.username,
            token: 'dfgdfbdfb'
        }}))
    }),
    rest.post('/auth/login', (req, res, ctx) => {  
        return res(ctx.status(200), ctx.json({ data: {
            username: req.body.username,
            token: 'dfgdfbdfb'
        }}))
    }),
]
