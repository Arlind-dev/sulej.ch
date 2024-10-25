# sulej.ch

Welcome to the official repository of [sulej.ch](https://sulej.ch/), my personal website.

## Requirements

- **[Node](https://nodejs.org/en):** Version 20 LTS or higher
- **[pnpm](https://pnpm.io/):** Version 9.12.2 or higher
- **[Docker](https://www.docker.com/):** (Optional) Required only if you plan to use the provided Docker image, to run the static website.

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
    networks:
      - sulej.ch

networks:
  sulej.ch:
    name: sulej.ch
```

### Docker Run

```bash
docker run -d \
  --name sulej.ch \
  --restart unless-stopped \
  -p 8080:80 \
  ghcr.io/arlind-dev/sulej.ch:latest
```

### Access Pinned GitHub Repositories

I deployed a tool called [gh-pinned-repos](https://github.com/Arlind-dev/gh-pinned-repos) that scrapes your pinned GitHub repositories (works only with public profiles). This tool is a fork, and you can either host it yourself or use the existing deployment.

To change the repository link, edit the file located at [/src/components/organisms/Repos.svelte](https://github.com/Arlind-dev/sulej.ch/blob/main/src/components/organisms/Repos.svelte#L28).

## Running the Project

To run the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Arlind-dev/sulej.ch.git
   ```

2. **Install the dependencies:**

   ```bash
   pnpm install
   ```

3. **Start the development server:**

   ```bash
   pnpm run dev
   ```

4. **Access the application:**

   Open your web browser and navigate to `http://localhost:5173`.

## Building the Project

To build the project for production, follow these steps:

1. **Create a production build:**

   ```bash
   pnpm run build
   ```

   This command will generate the optimized build files in the `/build` directory.

2. **Test the production build:**

   ```bash
   pnpm run preview
   ```

3. **Access the application:**

   Open your web browser and navigate to `http://localhost:4173`.

## Contributions

Contributions to this project are welcome and greatly appreciated. If you find any bugs, please create an issue or a pull request on the project's GitHub repository.

Feel free to fork this repository and modify it to fit your needs. If you do so, please credit [the original repository](https://github.com/xafn/afn.im).

## Contributors

@MaximilianKos: v0.2.0, v0.4.0

## License

This project is licensed under the MIT License.
