import { createRoot } from 'react-dom/client';
import { Card } from './Card';

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<Card />);
