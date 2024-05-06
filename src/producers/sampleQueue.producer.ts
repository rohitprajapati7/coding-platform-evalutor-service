import SampleQueue from "../queues/SampleQueue";

// added jobs into queue by producer
export default async function (name:string, payload:Record<string, unknown>, priority:number) {
   await SampleQueue.add(name, payload, {priority});
};