const Docker = require("dockerode");
const DAL = require("./DAL");

const LABEL = "test";
const BL = {
  connectToDocker: () => {
    const docker = new Docker({ host: "http://127.0.0.1" });

    docker.listContainers((err, containers) => {
      containers.forEach((container) => {
        if (LABEL in container.Labels) {
            docker.getContainer(container.Id).attach({ stream: true, stdout: true, stderr: true },
            (err, stream) => {
                stream.on('data', (data) => {
                    DAL.insertLog(formatLog(container.Image, data));
                });
            }
          );
        }
      });
    });
  }
};

module.exports = BL;

function formatLog(container, data){
    return{
        container: container,
        step: container.split('/')[1],
        data: data.toString().substring(8)
    }
}
