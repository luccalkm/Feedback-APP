import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedBackData from "./data/feedbackData";

function App() {
	const [feedback, setFeedback] = useState(FeedBackData);

	const deleteFeedback = (id) => {
		setFeedback(feedback.filter((item) => item.id !== id));
	};

	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackStats feedback={feedback} />
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	);
}

export default App;
