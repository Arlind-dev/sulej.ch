# sulej.ch

Welcome to the official repository of [sulej.ch](https://sulej.ch/), my personal website.

## Requirements

- Docker

## Usage

There is a Docker image that's ready any time. You can run it using Docker Compose or Docker Run.

### Docker Compose

```yml
services:
  sulej.ch:
    image: ghcr.io/arlind-dev/sulej.ch:v0.1.0
    container_name: sulejch
    restart: unless-stopped
    ports:
      - 8080:80
```

### Docker Run

```bash
docker run -d \
  --name sulejch \
  --restart unless-stopped \
  -p 8080:80 \
  ghcr.io/arlind-dev/sulej.ch:v0.1.0
```

## Contributions

Contributions to this project are welcome and greatly appreciated. If you find any bugs, please create an issue or a pull request on the project's GitHub repository.

Feel free to fork this repository and modify it to fit your needs. If you do so, please credit the original repository.

<!--
## Contributors

Thank you @MaximilianKos for helping me create the first real release of this Website! (v0.2.0)
-->

## License

This project is licensed under the MIT License.
