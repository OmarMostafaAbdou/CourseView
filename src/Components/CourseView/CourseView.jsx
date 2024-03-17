import React, { useState } from "react";
import CoursePlay from "./CoursePlay";
import Lessons from "./Lessons";
import Quiz from "./Quiz";
import StarRating from "./StarRating";

function CourseView() {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const handleLessonSelection = (lesson) => {
    setSelectedLesson(lesson);
  };

  return (
    <>
      <div className="row row-col-2" style={{ width: "100%" }}>
        <div className="col-4 lessons">
          <p
            style={{
              fontSize: "38px",
              fontWeight: "bold",
              margin: "20px 0px 0px 20px",
            }}
          >
            Course Content
          </p>
          <Lessons onLessonSelect={handleLessonSelection} />
          <Quiz />
        </div>

        <div
          className="offset-1 col-7 "
          style={{ backgroundColor: "#9dccff3e" }}
        >
          {selectedLesson && <CoursePlay lesson={selectedLesson} />}

          <StarRating courseId="65e71353ad74d566b4082214" />
        </div>
      </div>
    </>
  );
}

export default CourseView;
