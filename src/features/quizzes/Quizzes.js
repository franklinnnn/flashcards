import { useSelector } from "react-redux";
import { selectQuizzes } from "./quizzesSlice";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";

export default function Quizzes() {
  const quizzes = useSelector(selectQuizzes);
  return (
    <section className="center">
      <ul className="quizzes-list">
        {Object.values(quizzes).map((quiz) => (
          <Link key={quiz.id} to={ROUTES.quizRoute(quiz.id)}>
            <li className="quiz">{quiz.name}</li>
          </Link>
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button create-new-topic-button">
        Create New Quiz
      </Link>
    </section>
  );
}
