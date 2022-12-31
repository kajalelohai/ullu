import { createRoot } from 'react-dom/client';
import { VocabCard } from './components/VocabCard';

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<VocabCard />);
