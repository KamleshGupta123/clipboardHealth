const crypto = require("crypto");
const dataType = {
    STRING: "string"
}
function createHash(data){
  return crypto.createHash("sha3-512").update(data).digest("hex");
}
function getCandidate(event) {
    if (!event.partitionKey) {
        return event.partitionKey;
    }
    return createHash(JSON.stringify(event));
}

exports.deterministicPartitionKey = (event) => {
    const TRIVIAL_PARTITION_KEY = "0";
    const MAX_PARTITION_KEY_LENGTH = 256;
    let candidate;

    if (event) {
        candidate = getCandidate(event)
    }
    if (candidate && (typeof candidate !== dataType.STRING)) {
        candidate = JSON.stringify(candidate)
    } else {
        candidate = TRIVIAL_PARTITION_KEY;
    }
    if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
        candidate = createHash(candidate)
    }
    return candidate;
};