import { Job } from "bullmq";
import { IJob } from "../types/bullMqJobDefinition";

class SampleJob implements IJob {

    name:string;
    payload?: Record<string, unknown>;

    constructor(payload:Record<string, unknown>){
        this.name = this.constructor.name,
        this.payload = payload
    }

    handler = (job?: Job) => {
        console.log('payload =>', this.payload)
        console.log('handler of the job called', job?.name, job?.id, job?.data)
    };

    failed = (job?: Job):void => {
        console.log('handle of the failed job called', job?.id);
    };
}

export default SampleJob;