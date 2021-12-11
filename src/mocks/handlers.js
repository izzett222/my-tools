import { rest } from "msw";
export const handlers = [
    rest.get('/test', (_, res, ctx) => {
        return res(ctx.delay(1200), ctx.json({ text: 'my tools'}))
    })
]