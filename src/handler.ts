import {RequestParams, WorkerEnv} from "./types/ctx";
import {HonoRequest} from "hono";
import utils from "./utils";
import * as path from "node:path";

export default {
    async add(env: WorkerEnv, req: HonoRequest) {
        const {album} = req.param() as RequestParams
        const rawBuffer = await req.arrayBuffer()
        const rawHash = await utils.hash_from_buffer(rawBuffer)
        const r2 = env.BUCKET
        r2.put(path.join())

    }
}