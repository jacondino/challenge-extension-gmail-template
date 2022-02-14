import { Snippets, Templates } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App = () => <Snippets />;

// export const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Snippets />} />
//         <Route path="/templates" element={<Templates />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
