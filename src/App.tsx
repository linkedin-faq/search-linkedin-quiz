import React, { useEffect, useState } from "react";
import allCourses from "./constants/allCourses";
import Dialog from "./components/Dialog";
import AssessmentList from "./components/AssessmentList";
import Menu from "./components/Menu";
import { AssessmentListItems } from "./components/AssessmentList/style";
import CourseCard from "./components/CourseCard";
import GlobalStyle from "./theme/globalStyles";

const ALL_MENU_ITEMS_TITLE = "All";
const RECOMMENDED = "Recommended";

const App: React.FC = () => {
  const [courses, setCourses] = useState(allCourses);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategoryItem, setActiveCategoryItem] = useState(RECOMMENDED);
  const courseCategories = [
    ALL_MENU_ITEMS_TITLE,
    ...new Set(allCourses.map((course) => course.category)),
  ];

  const searchQueryHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const target = event.target as HTMLInputElement;
    setSearchQuery(target.value);
  };

  useEffect(() => {
    let newCourses;

    if (activeCategoryItem === ALL_MENU_ITEMS_TITLE) {
      newCourses =
        searchQuery === ""
          ? allCourses
          : allCourses.filter((course) =>
              course.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
    } else {
      newCourses = allCourses.filter((course) => {
        return (
          (searchQuery !== ""
            ? course.title.toLowerCase().includes(searchQuery.toLowerCase())
            : course) && course.category === activeCategoryItem
        );
      });
    }

    setCourses(newCourses);
  }, [searchQuery, activeCategoryItem]);

  return (
    <div>
      <GlobalStyle />
      <Dialog title="Skill assessment">
        <AssessmentList
          description="Check your skill level. Answer 15 multiple choice questions, score in the top 30%, and earn a skill badge."
          searchValue={searchQuery}
          onSearchInputChange={searchQueryHandler}
          menuOptions={
            <Menu
              items={courseCategories}
              onItemClick={setActiveCategoryItem}
            />
          }
        >
          {courses.map((course) => (
            <AssessmentListItems key={course.title}>
              <CourseCard
                image={course.image}
                title={course.title}
                url={course.url}
                description={course.description}
              />
            </AssessmentListItems>
          ))}
        </AssessmentList>
      </Dialog>
    </div>
  );
};

export default App;
