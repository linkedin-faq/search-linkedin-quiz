import blueIcon from "../assets/blue-icon.jpg";
import greenIcon from "../assets/green-icon.png";
import orangeIcon from "../assets/orange-icon.png";
import redIcon from "../assets/red-icon.png";
import numberRandomizer from "../helpers/numberRandomizer";

const courseImages = [blueIcon, greenIcon, orangeIcon, redIcon];

const minCourseImageIndex = 0;
const maxCourseImageIndex = courseImages.length - 1;

const allCoursesStorage = [
  {
    title: "JavaScript",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "JavaScript Advanced, JavaScript Fundamentals, Data Types and Structures, Functions, Objects, and Classes, Logic and Control Flow, Web Development",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/javascript/javascript-quiz.md",
    category: "Recommended",
  },
  {
    title: "Microsoft Project",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Project Setup, Resources, Scheduling, Working with Multiple Projects, Working with Tasks",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/microsoft-project/microsoft-project-quiz.md",
    category: "Recommended",
  },
  {
    title: ".NET Framework",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      ".NET Core, .NET Infrastructure, Design Patterns in .NET, Programming, Universal Windows Platform",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/dotnet-framework/dotnet-framework-quiz.md",
    category: "Tools & Technology",
  },
  {
    title: "Adobe Acrobat",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Accessibility, File Management, Forms, PDF Management, Printing",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Tools & Technology",
  },
  {
    title: "Adobe Animate",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Animation, Drawing, File Formats, General Usage, Programming",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Tools & Technology",
  },
  {
    title: "Adobe Illustrator",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Drawing, Formatting Objects, Interface, Reshaping Objects, Workflow",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/adobe-illustrator/adobe-illustrator-quiz.md",
    category: "Tools & Technology",
  },
  {
    title: "Adobe InDesign",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Colors and Effects, Documents, Interactive, Objects and Graphics and Images, Text",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Tools & Technology",
  },
  {
    title: "Adobe Lightroom",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "File Handling, Image Adjustments, Tools, Exporting, Panels",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Tools & Technology",
  },
  {
    title: "Adobe Photoshop",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Image Adjustments, Layers and Smart Objects, Panels, Selections, Tools",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/adobe-photoshop/adobe-photoshop-quiz.md",
    category: "Tools & Technology",
  },
  {
    title: "Adobe Premiere Pro",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Media, Project Setup, Audio, Timeline, Graphics",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/adobe-premiere-pro/adobe-premiere-pro-quiz.md",
    category: "Tools & Technology",
  },
  {
    title: "Adobe XD",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Animation, Integration, Interactivity, UX Design, XD Interface",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Tools & Technology",
  },
  {
    title: "After Effects",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "3D, Effects, Export, Keyframes, Project and Composition Settings",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Tools & Technology",
  },
  {
    title: "Agile Methodologies",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Agile Ceremonies, Agile Mindset and Culture, Frameworks and Scaling, Product Owner, Team Facilitator",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/agile-methodologies/agile-methodologies-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Amazon Web Services (AWS)",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Compute, Databases, Networking, Security, Storage",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/aws/aws-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Android",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Activities, Build Process, Fundamentals, Resources, User Interface",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/android/android-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Angular",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Angular CLI, Components and Directives, Dependency Injection, Routing, Template Syntax",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/angularjs/angularjs-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "ArcGIS Products",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Geodatabases, Geoprocessing, Geospatial Data, Map Layout, User Interface",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Industry Knowledge",
  },
  {
    title: "AutoCAD",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Annotation, Design Reuse, Drafting, Interface, Output",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Industry Knowledge",
  },
  {
    title: "Autodesk Fusion 360",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Assembly, Interface, Modeling, Simulation, Workspaces",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Industry Knowledge",
  },
  {
    title: "Autodesk Inventor",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Assembly, Assembly Design, Drawing, Modeling, Sketching",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Industry Knowledge",
  },
  {
    title: "Autodesk Maya",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Animation, Camera, General, Materials, Modeling",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Industry Knowledge",
  },
  {
    title: "Avid Media Composer",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Audio, Graphics, Media Management, Timeline, Transitions",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Industry Knowledge",
  },
  {
    title: "AWS Lambda",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "AWS General, Configuration, Execution, Runtimes, Testing",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/aws-lambda/aws-lambda-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Bash",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Operators, Scripting, Expansion, Environment, Constructs",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/bash/bash-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "C (Programming Language)",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "C Data Types and Data, Decision Structures, Functions, Loops, Memory Management and Storage",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/c-(programming-language)/c-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "C#",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Assemblies and Extensions, Communication, Fundamentals, Networking, Objects and Types",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/c%23/c-sharp-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "C++",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Compiler and Preprocessor, Object-Oriented Programming, Pointers and Data Structures, Standard Library, Syntax and Semantics",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/c%2B%2B/c%2B%2Bquiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Cascading Style Sheets (CSS)",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "CSS Properties, CSS Selectors, Layout, Syntax and Semantics, Typography",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/css/css-quiz.md",
    category: "Recommended",
  },
  {
    title: "Django",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Architecture, Configuration and Infrastructure, Models and Databases, Templates, URL Routing and Requests",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/django/django-quiz.md",
    category: "Recommended",
  },
  {
    title: "Dreamweaver",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "CSS, Coding, HTML, Keyboard Shortcuts, Links",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Industry Knowledge",
  },
  {
    title: "Eclipse",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Debugging, Eclipse Interface, Java in Eclipse, Source Control, Workflow Optimization",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/eclipse/eclipse-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Final Cut Pro",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Color, Editing, Organizing, Titles and Graphics, Trimming and Fine-Tuning",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Industry Knowledge",
  },
  {
    title: "Google Ads",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Bidding, Functionality, Optimizing, Setup, Terminology",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Industry Knowledge",
  },
  {
    title: "Google Analytics",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Analysis, Configuration, Functionality, Interface, Reports",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/google-analytics/google-analytics-quiz.md",
    category: "Recommended",
  },
  {
    title: "Google Cloud Platform (GCP)",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Compute, Data, Security, Services, Setup",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/google-cloud-platform/gcp-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Hadoop",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Hadoop Common, Hadoop Components, Hadoop Concepts, MapReduce, Using Hadoop",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/hadoop/hadoop-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "HTML",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Basic Structure, Forms, Global Attributes, Multimedia, Semantics",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/html/html-quiz.md",
    category: "Recommended",
  },
  {
    title: "iMovie",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Editing, Audio, Media, Adjustment Settings, Titles",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Industry Knowledge",
  },
  {
    title: "Java",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Core APIs, Java Classes and Instances, Java Data Structures, Java Fundamentals, Java System Fundamentals",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/java/java-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "jQuery",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "AJAX, Animation, Events, Install and Deploy, Selecting and Traversing",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/jquery/jquery-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "JSON",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Comparison, Data Types, Limitations and Usage, Queries, Syntax Rules",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/json/json-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Keynote",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Animating, Charts, Media, Setup, Text",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Industry Knowledge",
  },
  {
    title: "Kotlin",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Basics, Classes and Objects, Collections, Control Flow, Functions",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/kotlin/kotlin-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Linux",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Access Control, Command Line, Disk Systems, Networking, System Configuration",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/linux/linux-assesment.md",
    category: "Industry Knowledge",
  },
  {
    title: "Logic Pro",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Drummer Tracks and Drum Machine Designer, Mixing, Tools, Track Types, User Interface",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Industry Knowledge",
  },
  {
    title: "Machine Learning",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Algorithms, Data, General, Models, Types",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/machine-learning/machine-learning-quiz.md",
    category: "Recommended",
  },
  {
    title: "MATLAB",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Functions, Language Fundamentals, Loops and Vectorization, Mathematics, Plotting",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/matlab/matlab-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Maven",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Build Customization, Dependencies, Maven Command Line, Plugins, Project Definition",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/maven/maven-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Microsoft Access",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Queries, Database Design, Forms, Reports, Tables",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/microsoft-access/microsoft-access.md",
    category: "Industry Knowledge",
  },
  {
    title: "Microsoft Azure",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Azure Data Platform, Container Solutions, DevOps in Azure, Identity and Access, Modern Applications",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/microsoft-azure/microsoft-azure-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Microsoft Excel",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Charts, Formatting, Formulas and Functions, User Interface, Working with Data",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/microsoft-excel/microsoft-excel-quiz.md",
    category: "Recommended",
  },
  {
    title: "Microsoft Outlook",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Calendar, Customize, Email, General, People",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/microsoft-outlook/microsoft-outlook-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Microsoft Power Automate",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Building from Scratch, Building from Templates, Fundamentals, Power Automate Admin, Types of Initialization",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Industry Knowledge",
  },
  {
    title: "Microsoft Power BI",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Admin, Concepts, Model, Visualize, Work with Data",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/microsoft-power-bi/microsoft-power-bi-quiz.md",
    category: "Recommended",
  },
  {
    title: "Microsoft PowerPoint",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Animation and Transitions, Exporting, Media, Presenting, Setup",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/microsoft-power-point/microsoft-power-point-quiz.md",
    category: "Recommended",
  },
  {
    title: "Microsoft Word",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Charts and Tables, Layout, Media, Setup, Text",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/microsoft-word/microsoft-word-quiz.md",
    category: "Recommended",
  },
  {
    title: "MySQL",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Database Management, RDBMS Basics, SQL Statement Syntax, Stored Procedures, Triggers",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/mysql/mysql-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Node.js",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Console, Events, HTTP, Modules, Packages",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/node.js/node.js-quiz.md",
    category: "Recommended",
  },
  {
    title: "NoSQL",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Core NoSQL, NoSQL Applications, NoSQL Concepts, Optimizing NoSQL﻿, Using NoSQL",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/nosql/nosql-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Object-Oriented Programming (OOP)",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Constructors and Destructors, Design Patterns, Four Principles of OOP, Object-Oriented Fundamentals, Software Development",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/oop/object-oriented-programming-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Objective-C",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Classes, Collections, Functions, General, Variables",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/objective-c/objective-c-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "PHP",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Arrays, Classes, Language Basics, Syntax, Utility Functions",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/php/php-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Pro Tools",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Recording, Editing, File Management, Navigating, Mixing",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Industry Knowledge",
  },
  {
    title: "Python (Programming Language)",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Advanced Concepts, Data Structures, Fundamentals, Object-Oriented Programming, Sorting",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/python/python-quiz.md",
    category: "Recommended",
  },
  {
    title: "QuickBooks",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Money In: Collect Cash, Money In: Create Invoices, Navigating QuickBooks Desktop 2019, Payroll: Setting Up Employees, Setting Up Chart of Accounts",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/quickbooks/quickbooks-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "R (Programming Language)",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Data Structures, Data Management, Functions, Operators, Statistics",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/r/r-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "React.js",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Basics, Components, ESNext Syntax, Hooks, Tools",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/react/reactjs-quiz.md",
    category: "Recommended",
  },
  {
    title: "REST APIs",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "API Security, Consuming APIs, Designing APIs, Implementing APIs, Measuring APIs",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/rest-api/rest-api-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Revit",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Colors and Effects, Documents, Interactive, Objects/Graphics/Images, Text",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Industry Knowledge",
  },
  {
    title: "Rhino 3D",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Analysis, Editing, General Knowledge, Interface, Modeling",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Industry Knowledge",
  },
  {
    title: "Ruby on Rails",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "ActiveRecord, Architecture, Controllers, Routes, Views",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/ruby-on-rails/ruby-on-rails-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Scala",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Control Flow, Data Structures, Data Types, Functional Programming, Object-Oriented Programming",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/scala/scala-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Search Engine Optimization (SEO)",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "On-Page, Ranking, Technical, Terminology, Tools",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/seo/search-engine-optimization-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "SharePoint",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Administration, Libraries, Lists, SharePoint Features, SharePoint Permissions",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/sharepoint/sharepoint-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "SketchUp",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "Drawing, Tools, Interface, Groups and Components, LayOut",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Industry Knowledge",
  },
  {
    title: "SOLIDWORKS",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Assemblies, Drawings, Part Modeling, Sketching, User Interface and Basic Concepts",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Industry Knowledge",
  },
  {
    title: "Spring Framework",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description: "AOP, Boot, Core, Data, Web",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/spring-framework/spring-framework-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Swift (Programming Language)",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Classes and Structs, Closures and Functions, Control Flow, General, Types",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/swift/swift-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Transact-SQL (T-SQL)",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Data Types, Functions, SQL Syntax, Terminology, Writing Queries",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/t-sql/t-sql-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Unity",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Animation, Asset Management, C# Scripting, Gameplay, Programming",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/",
    category: "Industry Knowledge",
  },
  {
    title: "Visio",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Creating Business Process Diagrams, Creating Diagrams, Creating Organization Charts, Managing Text and Shapes and Pages, Visio Workspace",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/visio/visio-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Visual Basic for Applications (VBA)",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Declarations, Procedures and Calls, Syntax, User-Defined Elements, VBE",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/vba/vba-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Windows Server",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Active Directory, Configure Network Services and Access, Deploy/Manage/Maintain Servers, Install and Configure Server Roles and Features, Install and Configure Windows Server",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/windows-server/windows-server-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "WordPress",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Core, Development, Performance & Accessibility, Plugins, Themes",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/wordpress/wordpress-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "XML",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "DTD and DOCTYPE, Markup Language Intro, Stylesheets with CSS and XSLT, XML Schema, XML Syntax and Specifications",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/xml/xml-quiz.md",
    category: "Industry Knowledge",
  },
  {
    title: "Cybersecurity",
    image:
      courseImages[numberRandomizer(minCourseImageIndex, maxCourseImageIndex)],
    description:
      "Design and Architecture; Security Concepts; Security Engineering; Security Governance, Risk, and " +
      "Compliance (GRC); Security Operations (SecOps)",
    url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/cybersecurity/cybersecurity-quiz.md",
    category: "Industry Knowledge",
  },
];

export default allCoursesStorage;
