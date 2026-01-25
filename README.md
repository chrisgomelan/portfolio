# Portfolio

This is a full-stack portfolio project featuring a modern frontend built with React and Vite, styled with Tailwind CSS, and a backend API for handling features like email sending and chat. The project is organized for easy deployment (e.g., with Vercel) and extensibility.

## Features

- **Frontend**: React (Vite), Tailwind CSS, modular components, responsive design
- **Backend API**: Node.js endpoints for email and chat
- **Contact Form**: Sends emails via API
- **Chatbot**: Interactive chat interface
- **Project Showcase**: Dynamic project data
- **Modern UI**: Custom UI components and effects

## Project Structure

```
api/                # Node.js API endpoints (email, chat)
frontend/           # Main frontend app
	src/
		components/     # React components (UI, mvpblocks, etc.)
		data/           # Project and context data
		lib/            # Utility functions
		pages/          # Main pages (Home, About, Contact, etc.)
		assets/         # Static assets
	public/           # Public images and static files
	...               # Config files (Vite, Tailwind, ESLint, etc.)
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
	 ```sh
	 git clone <your-repo-url>
	 cd portfolio/frontend
	 ```
2. Install dependencies:
	 ```sh
	 npm install
	 # or
	 yarn
	 ```

### Running the Frontend

```sh
npm run dev
# or
yarn dev
```
The app will be available at `http://localhost:5173` by default.

### Running the API (if separate)

If you want to run the API endpoints locally, ensure you have Node.js installed and run the scripts in the `api/` folder as needed.

## Deployment

This project is ready for deployment on platforms like Vercel. See `vercel.json` for configuration.

## Customization

- Update your project data in `frontend/src/data/project.js`.
- Edit or add components in `frontend/src/components/`.
- Adjust styles in `frontend/src/App.css` or Tailwind config.

## License

MIT License. See [LICENSE](LICENSE) for details.

---

*Built with React, Vite, and Tailwind CSS.*