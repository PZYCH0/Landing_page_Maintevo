import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
import './index.css';

/* The entry vite-react-ssg drives: it renders these routes to static HTML at
   build time and hydrates the same tree in the browser. There is no
   BrowserRouter any more — the router is created on both sides from one
   route list, which is what lets a crawler receive real markup. */
export const createRoot = ViteReactSSG({ routes });
