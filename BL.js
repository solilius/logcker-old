var Docker = require("dockerode");

const BL = {
  connectToDocker: () => {
    const docker = new Docker({ host: "http://10.0.0.8"});

    docker.listContainers(function(err, containers) {
      containers.forEach(function(containerInfo) {
        docker.getContainer(containerInfo.Id).inspect(function(err, data) {
          console.log(data);
        });
      });
    });
  }
};

module.exports = BL;
