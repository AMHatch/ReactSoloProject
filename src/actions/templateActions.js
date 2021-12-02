//Muliple Actions in this File
//This is not a named export
import { SAMPLE_ACTION } from "./types"


export const sampleAction = (sampleData) => {
    return{
        type: SAMPLE_ACTION,
        data: sampleData
    }
}


