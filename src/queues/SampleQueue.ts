import {Queue} from 'bullmq';

import redisConnection from '../config/redis.config';

// creating sample queue
const SampleQueue = new Queue('SampleQueue', {connection: redisConnection});

export default SampleQueue;