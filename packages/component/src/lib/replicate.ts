import Replicate from "replicate";

export const replicate = new Replicate({
    auth: import.meta.env.REPLICATE_API_TOKEN,
});
