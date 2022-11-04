import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
	const [feedback, setFeedback] = useState(FeedBackData);

	const deleteFeedback = (id) => {
		setFeedback(feedback.filter((item) => item.id !== id));
	};

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
		console.log(newFeedback);
	};

	const home = (
		<div className='container'>
			<FeedbackForm handleAdd={addFeedback} />
			<FeedbackStats feedback={feedback} />
			<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
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
