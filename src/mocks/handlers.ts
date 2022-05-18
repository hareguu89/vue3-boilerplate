import { rest } from 'msw'

export default [
    rest.get('/message', (req, res, ctx) => {
        // /message로 get 요청이 오면
        return res(
            ctx.json({
                message: 'it works!', // 응답할 메시지를 it works로 정의
            })
        )
    }),
]
