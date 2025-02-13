# sulej.ch  

Welcome to the official repository of **[sulej.ch](https://sulej.ch/)**, my personal website.

---

## 📌 Requirements  

Ensure you have the following installed before running the project:  

- **[Node.js](https://nodejs.org/en)** → Version **20 LTS** or higher  
- **[pnpm](https://pnpm.io/)** → Version **9.12.2** or higher  
- **[Docker](https://www.docker.com/)** _(Optional)_ → Required if deploying via Docker  

---

## 🚀 Usage  

A **pre-built, ready-to-use Docker image** is available, supporting multiple CPU architectures:  

- **x86 (amd64)**, **ARM (arm64, arm/v7, arm/v6)**, **RISC-V**, **PowerPC (ppc64le)**, **IBM Z (s390x)**  

You can run it via **Docker Compose** or **Docker Run**. To use a previous version, specify a tag (e.g., `:v0.1.0`).  

### 🔹 Docker Compose  

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

### 🔹 Docker Run  

```bash
docker run -d \
  --name sulej.ch \
  --restart unless-stopped \
  -p 8080:80 \
  ghcr.io/arlind-dev/sulej.ch:latest
```

---

## 📌 Accessing Pinned GitHub Repositories  

This project uses **[gh-pinned-repos](https://github.com/Arlind-dev/gh-pinned-repos)** to scrape pinned repositories _(only works with public profiles)_.  

To modify the repository link, edit:  

📂 [`/src/components/organisms/Repos.svelte`](https://github.com/Arlind-dev/sulej.ch/blob/main/src/components/organisms/Repos.svelte#L28)  

---

## 🛠 Running the Project  

To run the project **locally**, follow these steps:  

1️⃣ **Clone the repository**  

```bash
git clone https://github.com/Arlind-dev/sulej.ch.git
```

2️⃣ **Install dependencies**  

```bash
pnpm install
```

3️⃣ **Start the development server**  

```bash
pnpm run dev
```

4️⃣ **Access the application**  

- Open: `http://localhost:5173`

---

## 📦 Building the Project  

1️⃣ **Generate a production build**  

```bash
pnpm run build
```

- The optimized build files will be stored in the `/build` directory.  

2️⃣ **Test the production build**  

```bash
pnpm run preview
```

3️⃣ **Access the application**  

- Open: `http://localhost:4173`

---

## 🚢 Deploying the Project  

You can deploy this project using **Docker** or **Cloudflare Pages & Workers**.  

---

### 🐳 Deploying with Docker  

#### 🔹 Steps  

1️⃣ **Fork the repository**  
- Fork this repository to your **GitHub account**.  
- Enable **GitHub Actions**.  

2️⃣ **Add GitHub Repository Secrets and Variables**  

- Navigate to **GitHub → Settings → Secrets and Variables → Actions**.  
- Add the following **secrets**:  

| Name          | Description                                  |
| ------------- | -------------------------------------------- |
| `GH_TOKEN`    | Your GitHub token _(read/write permissions)_ |
| `GH_USERNAME` | Your GitHub username                         |

- Add the following **repository variable**:  

| Name         | Description                                 |
| ------------ | ------------------------------------------- |
| `IMAGE_NAME` | Your desired Docker image name (`sulej.ch`) |

3️⃣ **Tag a New Release**  

```bash
git tag vX.X.X
```

_(Replace `vX.X.X` with the actual version number.)_  

4️⃣ **Push the Tag to GitHub**  

```bash
git push --tags
```

- This triggers **GitHub Actions** to build & push the Docker image.  

---

### ☁ Deploying to Cloudflare Pages  

#### 🔹 Steps  

1️⃣ **Fork the Repository**  
- Fork this repository to your **GitHub account**.  

2️⃣ **Create a Cloudflare Worker & Pages Project**  
- Log in to **[Cloudflare](https://dash.cloudflare.com/)**.  
- Create a **new Pages project** and connect it to your **forked GitHub repository**.  

3️⃣ **Set Environment Variables**  
- In **Cloudflare Pages → Settings → Environment Variables**, add:  

| Variable       | Value |
| -------------- | ----- |
| `NODE_VERSION` | `20`  |

4️⃣ **Configure Build Settings**  
- In **Build & Deploy settings**:  

| Setting              | Value                            |
| -------------------- | -------------------------------- |
| **Framework preset** | `None`                           |
| **Build command**    | `pnpm install && pnpm run build` |
| **Output directory** | `/build`                         |

5️⃣ **Deploy**  
- Once connected, Cloudflare will **automatically deploy** the latest changes.  

---

## 💡 Contributions  

Contributions are welcome! 🚀  

- If you find **bugs**, **submit an issue** or **create a pull request**.  
- Feel free to **fork this repository** and modify it to fit your needs.  
- If you do, please **credit** the original repository: **[xafn/afn.im](https://github.com/xafn/afn.im)**  

---

## 🎉 Contributors  

Shoutout to everyone contributing to this project!  

| Contributor        | Versions Contributed |
| ------------------ | -------------------- |
| **@MaximilianKos** | `v0.2.0`, `v0.4.0`   |
