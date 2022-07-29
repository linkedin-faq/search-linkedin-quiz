import React, { useEffect, useState } from "react";
import allCourses from "./constants/allCourses";
import Dialog from "./components/Dialog";
import CatalogList from "./components/CatalogList";
import Menu from "./components/Menu";
import { CatalogListItems } from "./components/CatalogList/style";
import CourseCard from "./components/CourseCard";
import "./index.css";

const ALL_ITEMS_MENU_ITEM_TITLE = "All";
const RECOMMENDED = "Recommended";

const App: React.FC = () => {
  const [courses, setCourses] = useState(allCourses);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategoryItem, setActiveCategoryItem] = useState(RECOMMENDED);
  const courseCategories = [
    ALL_ITEMS_MENU_ITEM_TITLE,
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

    if (activeCategoryItem === ALL_ITEMS_MENU_ITEM_TITLE) {
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
      <Dialog title="Skill assessment">
        <CatalogList
          disclaimer="Check your skill level. Answer 15 multiple choice questions&nbsp;15, score in the top 30%, and earn a skill badge."
          searchValue={searchQuery}
          onSearchInputChange={searchQueryHandler}
          menu={
            <Menu
              items={courseCategories}
              activeItem={activeCategoryItem}
              onItemClick={setActiveCategoryItem}
            />
          }
        >
          {courses.map((course) => (
            <CatalogListItems key={course.title}>
              <CourseCard
                image={course.image}
                title={course.title}
                url={course.url}
                description={course.description}
              />
            </CatalogListItems>
          ))}
        </CatalogList>
      </Dialog>
    </div>
  );
};

export default App;
