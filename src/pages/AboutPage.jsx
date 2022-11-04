import Card from "../components/shared/Card";

export default function AboutPage() {
	return (
		<Card>
			<div className='about'>
				<h1>About this project</h1>
				<p>This is a React app to leave a feedback</p>
				<p>Version: 1.0</p>
				<p>
					<a href='/'>Go back home</a>
				</p>
			</div>
		</Card>
	);
}
