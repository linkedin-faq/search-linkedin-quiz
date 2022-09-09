import React, { useEffect, useState } from "react";
import allCoursesStorage from "./constants/allCoursesStorage";
import MainAssessmentDialog from "./components/MainAssessmentDialog";
import AssessmentList from "./components/AssessmentList";
import SortingMenuButtons from "./components/SortingMenuButtons";
import { AssessmentResultsListItems } from "./components/AssessmentList/style";
import QuizCard from "./components/QuizCard";
import { Page, NoResultFound } from "./style";

const ALL_MENU_ITEMS_TITLE = "All";
const RECOMMENDED = "Recommended";

const App: React.FC = () => {
  const [courses, setCourses] = useState(allCoursesStorage);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategoryItem, setActiveCategoryItem] = useState(RECOMMENDED);
  const courseCategories = [
    ALL_MENU_ITEMS_TITLE,
    ...new Set(allCoursesStorage.map((course) => course.category)),
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
          ? allCoursesStorage
          : allCoursesStorage.filter((course) =>
              course.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
    } else {
      newCourses = allCoursesStorage.filter((course) => {
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
    <Page>
      <MainAssessmentDialog title="Skill assessment">
        <AssessmentList
          description="Check your skill level. Answer 15 multiple choice questions, score in the top 30%, and earn a skill badge."
          searchValue={searchQuery}
          onSearchInputChange={searchQueryHandler}
          sortingOptions={
            <SortingMenuButtons
              items={courseCategories}
              activeItem={activeCategoryItem}
              onItemClick={setActiveCategoryItem}
            />
          }
        >
          {!searchQuery ? (
            <>
              {courses.map((course) => (
                <AssessmentResultsListItems key={course.title}>
                  <QuizCard
                    image={course.image}
                    title={course.title}
                    url={course.url}
                    description={course.description}
                  />
                </AssessmentResultsListItems>
              ))}
            </>
          ) : (
            <NoResultFound>?</NoResultFound>
          )}
        </AssessmentList>
      </MainAssessmentDialog>
    </Page>
  );
};

export default App;
