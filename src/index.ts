import express from "express";
import { ExpressAdapter } from "@bull-board/express";
import { createBullBoard } from "@bull-board/api";
import {BullAdapter} from "@bull-board/api/bullAdapter";

import SampleQueue from "./queues/SampleQueue";
import severConfig from "./config/server.config";
import apiRouter from './routes'
import sampleQueueProducer from "./producers/sampleQueue.producer";
import sampleWorker from "./workers/sampleWorker";

const app = express();

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/ui/queues');

createBullBoard({
    queues: [new BullAdapter(SampleQueue)],
  serverAdapter: serverAdapter,
})

app.use('/api', apiRouter);

app.use('/ui/queues', serverAdapter.getRouter());

app.listen(severConfig.PORT, async() => {
    
    console.log(`Server started at port : ${severConfig.PORT}`);
    console.log('For the UI, open http://localhost:8080/ui/queues');

    sampleQueueProducer('SampleJob', {
        name:"rohit",
        position: "SDE-2",
        location: "remote | pune | BLR | Ahemdabad "
    },2);

    sampleQueueProducer('SampleJob', {
        name:"rohit1",
        position: "SDE-3",
        location: "remote | pune | BLR | Ahemdabad "
    },1);

    sampleWorker('SampleQueue')
});
