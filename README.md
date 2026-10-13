# ↗ Pulba Transfer

A simple, fast, and secure file transfer tool built with Astro, Cloudflare Workers, and R2. Transfer design files from laptop to mobile without compression.

![Pulba Transfer](public/favicon.svg)

## ✨ Features

- **No Compression**: Keep your design quality intact.
- **Fast & Lightweight**: Powered by Cloudflare R2 and Workers.
- **Secure**: Access code protected.
- **Mobile Friendly**: Easy access via QR code or direct link.
- **Auto-cleanup**: Files are automatically deleted after 7 days (configurable).

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Storage**: [Cloudflare R2](https://www.cloudflare.com/products/r2/)
- **Runtime**: [Cloudflare Workers](https://workers.cloudflare.com/)
- **Styling**: Tailwind CSS & Custom CSS

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) or Node.js
- Cloudflare Account with R2 enabled

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pulba/pulbatransfer-.git
   cd pulbatransfer-
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Configure environment variables:
   Create a `.dev.vars` file in the root directory:
   ```env
   ACCESS_CODE="your_secret_code"
   FILE_RETENTION_DAYS="7"
   ```

4. Run locally:
   ```bash
   bun run dev
   ```

## 🌐 Deployment

Deploy to Cloudflare Pages:

```bash
bun run deploy
```

## 📄 License

MIT
