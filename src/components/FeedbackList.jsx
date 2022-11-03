import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
	if (!feedback || feedback.length === 0) {
		return <p>No Feedback Yet</p>;
	}

	// With Animation
	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map((item) => {
					return (
						<motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
							<FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
						</motion.div>
					);
				})}
			</AnimatePresence>
		</div>
	);
	// // Without Animation
	// return (
	// 	<div className='feedback-list'>
	// 		{feedback.map((item) => {
	// 			return <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}></FeedbackItem>;
	// 		})}
	// 	</div>
	// );
}

FeedbackList.propTypes = {
	feedback: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			rating: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
		})
	),
};

export default FeedbackList;
