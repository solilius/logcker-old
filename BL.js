const Docker = require("dockerode");
const DAL = require("./DAL");

const LABEL = "test";
const BL = {
  connectToDocker: () => {
    const docker = new Docker({ host: "http://127.0.0.1" });

    docker.listContainers((err, containers) => {
      if (containers && containers.length !== 0) {
        containers.forEach(container => {
          if (LABEL in container.Labels) {
            docker.getContainer(container.Id).attach(
                { stream: true, stdout: true, stderr: true },
                (err, stream) => {
                  stream.on("data", data => {
                    DAL.insertLog(formatLog(container.Image, data));
                  });
                }
            );
          }
        });
      } else {
          console.log('No containers found');
      }
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
