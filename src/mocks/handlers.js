import { rest } from "msw";
// const lists = []
const lists = [{ name: 'react', id: 1 }, { name: 'backend', id: 2 }, { name: 'blogging', id: 3 }, { name: 'react testing', id: 4 }, { name: 'frameworks', id: 5 }];
const tools = [{ name: 'other-router', id: 1, description: 'a router for react. it support nested routes.a router for react. it support nested routes.a router for react. it support nested routes.a router for react. it support nested routes', link: 'www.reactrouter.com', tags: [{ name: 'react' }, {name: 'routing'}, {name: 'frontend'}], lists: ['react'] }, { name: 'react-router', id: 2, description: 'a router for react. it support nested routes', link: 'www.reactrouter.com', tags: [{ name: 'react' }, {name: 'routing'}, {name: 'frontend'}], lists: ['node'] }]
export const handlers = [
    rest.get('/api/auth/user', (req, res, ctx) => {
        if (!req.headers._headers.authorization) {
            return res(ctx.status(401), ctx.json({ error: new Error('please re-authenticate') }))
        }
        return res(ctx.delay(1200), ctx.json({
            data: {
                username: 'izzet',
            }
        }))
    }),
    rest.post('/api/auth/signup', (req, res, ctx) => {
        return res(ctx.status(201), ctx.json({
            data: {
                username: req.body.username,
                token: 'dfgdfbdfb'
            }
        }))
    }),
    rest.post('/api/auth/login', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({
            data: {
                username: req.body.username,
                token: 'dfgdfbdfb'
            }
        }))
    }),
    rest.get('/api/lists', (req, res, ctx) => {
        if (!req.headers._headers.authorization) {
            return res(ctx.status(401), ctx.json({ error: new Error('please re-authenticate') }))
        }
        return res(ctx.status(200), ctx.json({
            data: lists
        }))
    }),
    rest.post('/api/lists/new', (req, res, ctx) => {
        if (!req.headers._headers.authorization) {
            return res(ctx.status(401), ctx.json({ error: new Error('please re-authenticate') }))
        }
        lists.push({ name: req.body.name, id: lists.length });
        return res(ctx.status(201), ctx.json({
            data: { name: req.body.name, id: lists.length }
        }))
    }),
    rest.get('/api/tools', (req, res, ctx) => {
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
    rest.post('/api/tools/add', (req, res, ctx) => {
        if (!req.headers._headers.authorization) {
            return res(ctx.status(401), ctx.json({ error: new Error('please re-authenticate') }))
        }
        const { body } = req;
        const { tags, ...other } = body;
        const newTags = tags.map((tag, index) => ({ name: tag, id: index})) 
        const newTool = { ...other, tags: newTags}
        tools.push(newTool);
        return res(ctx.status(201), ctx.json({
            data: newTool,
        }))

    }),
]
