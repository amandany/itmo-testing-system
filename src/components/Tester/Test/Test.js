import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Test.scss";
import { GetActiveSession } from "../../../api/api";
import Context from "../../../context/Context";
import Question from "./Question/Question";

const Test = () => {
  const { User } = useContext(Context);
  const [ActiveSession, setActiveSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    GetActiveSession(User.token).then((res) => {
      console.log(res);
      setActiveSession(res);
      setIsLoading(false);
    });

    return () => {};
  }, []);

  if (isLoading) return <h1>Загрузка...</h1>;

  if (!ActiveSession.success) {
    return <h1>Нет активных тестов</h1>;
  }


  return (
    <div className="Test">
      <h1 className="header-text">{ActiveSession.topicInfo.topicName}</h1>
      <Question quest={ActiveSession.questions} token={User.token} />
      <div>
        <button>Завершить Выполнение</button>
      </div>
    </div>
  );
};

export default Test;
