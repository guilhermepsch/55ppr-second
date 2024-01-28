import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AdapterClient from './patterns/adapter/AdapterClient';
import CompositeClient from './patterns/composite/CompositeClient';
import DecoratorClient from './patterns/decorator/DecoratorClient';
import StateClient from './patterns/state/StateClient';
import VisitorClient from './patterns/visitor/VisitorClient';
import Home from './components/Home';

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/adapter" element={<AdapterClient />} />
				<Route path="/state" element={<StateClient />} />
				<Route path="/composite" element={<CompositeClient />} />
				<Route path="/visitor" element={<VisitorClient />} />
				<Route path="/decorator" element={<DecoratorClient />} />
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
