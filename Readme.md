# SelfIntroductionApp

## Summary

---

### Version

- Node: 18.16.0
- React: 18.2.0
- Typescript: 4.9.5
  <br />

## How to use

---

### Start the container

#### Command

`docker-compose up -d`

#### Port

localhost:3002

#### Notice

- Rancher-desktop is unable to resolve the [issue](https://github.com/rancher-sandbox/rancher-desktop/issues/1209) which may result in the following error log: `Error response from daemon: error while creating mount source path...chown...permission denied`. <br>If you face this problem, please try this [solution](https://github.com/rancher-sandbox/rancher-desktop/issues/1209#issuecomment-1370181132).
- **This container will automatically start the server but it may take approximately 5 minutes to do so.** If you want to show logs, please run the following command: `docker logs react`
  <br />

### Access to CLI of container

#### Command

`docker exec -it react bash`
