import {Job, Worker} from 'bullmq';
import SampleJob from '../jobs/Sample.job';
import redisConnection from '../config/redis.config';


export default function sampleWorker(queueName:string){
    new Worker(queueName,
        async (job:Job) => {
            if(job.name === "SampleJob"){
                const sampleJobInstance = new SampleJob(job.data);
                sampleJobInstance.handler(job);
            }
        },
        {connection:redisConnection}
    );
}
