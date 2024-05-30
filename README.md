# sulej.ch

Welcome to the official repository of [sulej.ch](https://sulej.ch/), my personal website.

## Requirements

- Docker
- Node

## Usage

There is a Docker image that's ready to use at any time. You can run it using Docker Compose or Docker Run. You can add any of the tags available in this repository to rollback to a previous version (e.g., :v0.1.0).

### Docker Compose

```yml
services:
  sulej.ch:
    image: ghcr.io/arlind-dev/sulej.ch:latest
    container_name: sulej.ch
    restart: unless-stopped
    ports:
      - 8080:80
```

### Docker Run

```bash
docker run -d \
  --name sulej.ch \
  --restart unless-stopped \
  -p 8080:80 \
  ghcr.io/arlind-dev/sulej.ch:latest
```

## Running the Project

To run the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Arlind-dev/sulej.ch.git
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Access the application:**

   Open your web browser and navigate to `http://localhost:5173`.

## Building the Project

To create a production build, execute the following command:

```bash
npm run build
```

The built files will be generated in the `/build` directory.

## Contributions

Contributions to this project are welcome and greatly appreciated. If you find any bugs, please create an issue or a pull request on the project's GitHub repository.

Feel free to fork this repository and modify it to fit your needs. If you do so, please credit [the original repository](https://github.com/xafn/afn.im).

## Contributors

@MaximilianKos: v0.2.0, v0.4.0

## License

This project is licensed under the MIT License.
