const {Worker} = require('worker_threads');

function runWorker(limit){
    return new Promise((resolve, reject) => {
        const worker = new Worker("./sumWorker.js", {workerData: {limit}});
        worker.on("message", resolve);
        worker.on("error", reject);
    });
}

(async () => {
    console.time("multiWorkers");
    const results = await Promise.all([
        runWorker(5e7),
        runWorker(5e6),
        runWorker(5e8),
        runWorker(4e7),
    ]);
    console.log("Wyniki workerow = ", results);
    console.timeEnd("multiWorkers");
})();