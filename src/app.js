import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import FeedBackData from "./data/feedbackData";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	const home = (
		<div className='container'>
			<FeedbackForm />
			<FeedbackStats />
			<FeedbackList />
			<AboutIconLink />
		</div>
	);

	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<Routes>
					<Route exact path='/' element={home} />
					<Route path='/about' element={<AboutPage />} />
				</Routes>
			</Router>
		</FeedbackProvider>
	);
}

export default App;
