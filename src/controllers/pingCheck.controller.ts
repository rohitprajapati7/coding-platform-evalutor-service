import { Request, Response } from "express";

function pingCheck (req:Request, res:Response) {
    return res.status(200).json({message:"ping check OK."})
}

module.exports = pingCheck;