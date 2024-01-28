import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AdapterClient from './patterns/adapter/AdapterClient';
import CompositeClient from './patterns/composite/CompositeClient';
import DecoratorClient from './patterns/decorator/DecoratorClient';

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/adapter" element={<AdapterClient />} />
				<Route path="/state" element={<></>} />
				<Route path="/composite" element={<CompositeClient />} />
				<Route path="/visitor" element={<></>} />
				<Route path="/decorator" element={<DecoratorClient />} />
				<Route path="/" element={<></>} />
				<Route path="*" element={<></>} />
			</Routes>
		</>
	);
}

export default App;
