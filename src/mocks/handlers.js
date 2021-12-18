import { rest } from "msw";
const lists = [{ name: 'react', id: 1 }, { name: 'backend', id: 2 }, { name: 'blogging', id: 3 }, { name: 'react testing', id: 4 }, { name: 'frameworks', id: 5 }, { name: 'All my tools', id: 6 }];
const tools = [{ name: 'other-router', id: 1, description: 'a router for react. it support nested routes.a router for react. it support nested routes.a router for react. it support nested routes.a router for react. it support nested routes', link: 'www.reactrouter.com', tags: ['react', 'routing', 'frontend'], lists: ['react'] }, { name: 'react-router', id: 2, description: 'a router for react. it support nested routes', link: 'www.reactrouter.com', tags: ['react', 'routing', 'frontend'], lists: ['node'] }]
export const handlers = [
    rest.get('/user', (req, res, ctx) => {
        if (!req.headers._headers.authorization) {
            return res(ctx.status(401), ctx.json({ error: new Error('please re-authenticate') }))
        }
        return res(ctx.delay(1200), ctx.json({
            data: {
                username: 'izzet',
            }
        }))
    }),
    rest.post('/auth/signup', (req, res, ctx) => {
        return res(ctx.status(201), ctx.json({
            data: {
                username: req.body.username,
                token: 'dfgdfbdfb'
            }
        }))
    }),
    rest.post('/auth/login', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({
            data: {
                username: req.body.username,
                token: 'dfgdfbdfb'
            }
        }))
    }),
    rest.get('/lists', (req, res, ctx) => {
        if (!req.headers._headers.authorization) {
            return res(ctx.status(401), ctx.json({ error: new Error('please re-authenticate') }))
        }
        return res(ctx.status(200), ctx.json({
            data: lists
        }))
    }),
    rest.post('/list/new', (req, res, ctx) => {
        if (!req.headers._headers.authorization) {
            return res(ctx.status(401), ctx.json({ error: new Error('please re-authenticate') }))
        }
        lists.push({ name: req.body.name, id: lists.length });
        return res(ctx.status(201), ctx.json({
            data: { name: req.body.name, id: lists.length }
        }))
    }),
    rest.get('/tools', (req, res, ctx) => {
        if (!req.headers._headers.authorization) {
            return res(ctx.status(401), ctx.json({ error: new Error('please re-authenticate') }))
        }
        const list = req.url.searchParams.get('list');
        console.log(list, 'list found on tools');
        console.log(tools.filter((tool) => tool.lists.find((el) => el === list)))
        if (!list || list === 'All my tools') {
            return res(ctx.status(201), ctx.json({
                data: tools
            }))

        }
        return res(ctx.status(201), ctx.json({
            data: tools.filter((tool) => tool.lists.find((el) => el === list))
        }))

    }),
    rest.post('/tool/add', (req, res, ctx) => {
        if (!req.headers._headers.authorization) {
            return res(ctx.status(401), ctx.json({ error: new Error('please re-authenticate') }))
        }
        const { body } = req;
        tools.push(body);
        return res(ctx.status(201), ctx.json({
            data: body,
        }))

    }),
]
