import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{ id: 1, text: "This is feedback item 1", rating: 3 },
		{ id: 2, text: "This is feedback item 2", rating: 5 },
		{ id: 3, text: "This is feedback item 3", rating: 1 },
	]);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	const updateFeedback = (id, updatedItem) => {
		setFeedback(
			feedback.map((item) => {
				return item.id === id ? { ...item, ...updatedItem } : item;
			})
		);
	};

	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};

	const deleteFeedback = (id) => {
		setFeedback(feedback.filter((item) => item.id !== id));
	};

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
		console.log(newFeedback);
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
