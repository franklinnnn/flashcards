import NewTopicForm from "../../components/NewTopicForm";
import { useSelector } from "react-redux";
import { selectTopics } from "./topicsSlice";
import { selectQuizzes } from "../quizzes/quizzesSlice";
import { Link, useParams } from "react-router-dom";
import ROUTES from "../../app/routes";
import "./Topic.css";

export default function Topic() {
  const topics = useSelector(selectTopics);
  const quizzes = useSelector(selectQuizzes);
  let { topicId } = useParams();
  const topic = topics[topicId];
  const quizzesForTopic = topic.quizIds.map((quizId) => quizzes[quizId]);

  return (
    <section>
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>{topic.name}</h1>
      <ul className="quizzes-list">
        {quizzesForTopic.map((quiz) => (
          <Link to={ROUTES.quizRoute(quiz.id)}>
            <li className="quiz" key={quiz.id}>
              {quiz.name}
            </li>
          </Link>
        ))}
      </ul>
      <Link to="/quizzes/new" className="button create-new-topic-button">
        Create a New Quiz
      </Link>
    </section>
  );
}
