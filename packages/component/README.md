# Astro Image Auto-Caption Component

![GitHub stars](https://img.shields.io/github/stars/nicolasperez19/astro-image-autocaption?style=for-the-badge)
[![GitHub Sponsors](https://img.shields.io/badge/Sponsor-GitHub%20Sponsors-red?style=for-the-badge&logo=github-sponsors)](https://github.com/sponsors/nicolasperez19)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-donate-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://buymeacoffee.com/nico_perez)

# Table of Contents
1. [Installation](#installation)
2. [Running the project](#running-the-project)
3. [Project structure](#project-structure)

## 💾 Install the Project
To install the project, clone the git repo and install the dependencies by running the following commands in your terminal:
```sh
git clone https://github.com/nicolasperez19/astro-image-autocaption.git
cd astro-image-autocaption
bun install
```
The image component uses the [Replicate API](https://replicate.com/) in order to auto-caption the image. To use the Replicate API, you need an API token for authentication. You must place your API token in a `.env` file with the variable name `REPLICATE_API_TOKEN`, like so: 
```sh
REPLICATE_API_TOKEN="<add_your_replicate_api_token_here>"
```

## 🏃‍♂️💨 Run the Project
To run the project locally in developer mode, running the following commands in your terminal:
```sh
bun run dev
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 📝 Citation

If you would like to cite this project, please use the following BibTeX entry:

```bibtex
@misc{astro_image_autocaption,
  author = {Nicolas Perez},
  title = {Astro Image Autocaption},
  year = {2024},
  publisher = {GitHub},
  journal = {GitHub repository},
  howpublished = {\url{https://github.com/nicolasperez19/astro-image-autocaption}},
  note = {Version 1.1.0},
}
```
