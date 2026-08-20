import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Custom Vite middleware to rewrite local /go/:providerId queries to /go/index.html during dev
const goRouteDevMiddleware = () => ({
  name: 'go-route-dev-middleware',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      // Catch any URL starting with /go/ (excluding file extensions or paths with dots like JS/CSS assets)
      if (req.url && req.url.startsWith('/go/') && !req.url.includes('.')) {
        req.url = '/go/index.html';
      }
      next();
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), goRouteDevMiddleware()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        go: resolve(__dirname, 'go/index.html')
      }
    }
  }
})
