export const experienceDetail = [
  {
    id: 1,
    role: "Developer Intern (Front-end)",
    company: "Bluebik Vulcan Company Limited",
    timeline: "Nov 2024 - April 2025",
  },
  {
    id: 2,
    role: "Developer Intern (Full Stack)",
    company: "Bluebik Vulcan Company Limited",
    timeline: "May 2024 - June 2024",
  },
];

export const internProjectDetail = [
  {
    id: 1,
    title: "SHORT INTERNSHIP",
    period: "1 May 2024 - 15 June 2024 (2 months)",
    projectName: "Food ordering System",
    detailList: [
      "Study how to implement MVC pattern ,basic API design and implement taught by Mantor",
      "Design API and implement service for a food ordering in customer role",
      "Implement user interface including ordering food , update order view order data from every restaurant from you order and view customer data",
    ],
    techStack: [
      {
        toolType: "Front-end",
        toolNameList: ["React js", "Bootstrap", "JavaScript"],
      },
      {
        toolType: "Back-end",
        toolNameList: ["C# .net"],
      },
      {
        toolType: "Database",
        toolNameList: ["SQL server"],
      },
    ],
    position: "Fullstack intern",
    team: "MAD (Modenized Automation Delivery)"
  },
  {
    id: 2,
    title: "COOPERATIVE INTERNSHIP",
    period: "15 Nov 2024 - 15 April 2025 (6 months)",
    projectName: "Propilot | Skill inventory module",
    detailList: [
      "Implement the employee profile management feature which allows edit some detail including management employee profile, change profile image",
      "Implement dialog select data from profile employee page to show on CV",
      "Implement preview CV template.",
      "Implement export power point file.",
      "Setup Authorization => permission number and role",
    ],
    techStack: [
      {
        toolType: "Front-end",
        toolNameList: ["Next js", "MUI", "TypeScript"],
      },
    ],
    position: "Front-end intern",
    team: "UTEAM (Unicorn team)"
  },
];

export const skills = [
  {
    skillId: 1,
    skillType: "Programming Languages",
    skillIcon: "/image/skillIcon/programming-language.png",
    skillList: ["C", "C#", "JavaScript", "TypeScript"],
  },
  {
    skillId: 2,
    skillType: "Frontend Framework",
    skillIcon: "/image/skillIcon/web-design.png",
    skillList: ["Next.js", "React.js", "MUI", "Bootstrap", "Tailwind"],
  },
  {
    skillId: 3,
    skillType: "Backend Framework",
    skillIcon: "/image/skillIcon/back-end.png",
    skillList: [".Net core", "Node.js", "Express"],
  },
  {
    skillId: 4,
    skillType: "Databases",
    skillIcon: "/image/skillIcon/database.png",
    skillList: ["SQL server", "PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    skillId: 5,
    skillType: "Tools & Technologies",
    skillIcon: "/image/skillIcon/cpu.png",
    skillList: [
      "Git (Basic)",
      "PostMan",
      "Docker (Basic)",
      "Figma",
      "Erdplus",
      "draw.io",
      "Chat GPT",
    ],
  },
  {
    skillId: 6,
    skillType: "Other tool",
    skillIcon: "/image/skillIcon/settings.png",
    skillList: [
      "Excel (Basic function)",
      "Word",
      "Power point",
      "Canva",
      "Sketchbook",
      "Adobe illustrator",
    ],
  },
];

export const projectData = [
  {
    projectId: 1,
    projectName: "MockMYKU  (practice project)",
    projectDescription:
      "This Project is a mock version inspired from MYKU website, which is the official platform by Kasetsart University to manage student data. The main features include course registration and grade display. In this project , the course registration feature has been replicated . This is a prctice project for data management using MongoDB and API development with Node.js.",
    role: "Backend developer",
    tools: ["Express.Js", "MongoDB", "NodeJs", "ORM (mongoose)"],
    projectType: "Rest API",
    projectImage: [
      "/image/project1/1.png",
      "/image/project1/3.png",
      "/image/project1/post_createNewStudent.png",
      "/image/project1/response_createNewStudent.png",
      "/image/project1/4.png",
      "/image/project1/5.png",
      "/image/project1/GetAllEnrollment.png",
      "/image/project1/sectionDetailData.png",
      "/image/project1/9.png",
      "/image/project1/11.png",
    ],
    link: "https://github.com/MayuraJam/mockMyKU_app_API",
    timeline: "20 Apil 2025 - 26 May 2025",
  },
  {
    projectId: 2,
    projectName: "Japanease resturant system",
    projectDescription:
      "This project is a website about ordering food and beverages within a Japanese restaurant. The platform includes feature for both customers and staff (kitchen staff , cashier staff). For customer core feature include (Menu selection , ordering display , Payment , Point and member) and For staft core feature include (Approving customer orders , manageing orders , managing menu). This is my first university project with full-scale web based mnagement system.",
    role: "front end developer",
    tools: ["React.Js", "JavaScript", "Bootstrap"],
    projectType: "Website application",
    projectImage: [
      "/image/project2/login_customer.png",
      "/image/project2/manuList.png",
      "/image/project2/menu card.png",
      "/image/project2/order.png",
      "/image/project2/newOrder.png",
      "/image/project2/cancelOrder.png",
      "/image/project2/orderSUccess.png",
      "/image/project2/payment.png",
      "/image/project2/payment_card.png",
      "/image/project2/QRcode.png",
      "/image/project2/money.png",
      "/image/project2/point.png",
      "/image/project2/action_modal.png",
      "/image/project2/dropdownToMemberLogin.png",
      "/image/project2/LoginMember.png",
      "/image/project2/member_point.png",
      "/image/project2/ReviewDialog.png",
    ],
    link: "https://github.com/MayuraJam/japanese_restaurant_app",
    timeline: "8 July 2024 - 4 Nov 2024",
  },
  {
    projectId: 3,
    projectName: "Japanease resturant system",
    projectDescription:
      "This project is the server site for a Japanease resturant system. The API is divided into three main controllers : Customer , staff and Authentication. Within the controllers, there are various service including Get a list food and beverage menu item , Adding and update menu items , Create and cancel current order, Display table information to check table status , Managing the payment system , Managibg the point and membership system , Update the status of orders, Authentication system. This API service with connected SQL database to support system.",
    role: "back end developer",
    tools: ["C# .net", "SQL server", "ORM (dapper)"],
    projectType: "Rest API",
    projectImage: [
      "/image/project3/apiResturant1.png",
      "/image/project3/apiResturant2.png",
      "/image/project3/apiResturant3.png",
      "/image/project3/apiResturant4.png",
      "/image/project3/apiResturant5.png",
      "/image/project3/apiResturant6.png",
      "/image/project3/apiResturant7.png",
      "/image/project3/ER_diagram_JP_rest.png",
    ],
    link: "https://github.com/MayuraJam/japanese_restaurant_api/tree/main/basic_JWT_project",
    timeline: "8 July 2024 - 4 Nov 2024",
  },
  {
    projectId: 4,
    projectName: "Flea Market lock booking system",
    projectDescription:
      "This program is develop for use on the Window OS.It is a system for managing flea market booking system. this progeram have two user role (staff and flea maket owner). For staff core feature include (Manageing vendor information , Reserving flear market (performed by staff) , Viewing all reservation records , Payment system , Managing fines) and  flea maket owner core feature include (Checking vendor information , Viewing all reservation records , Managing flea market data). This program is use by authorized staff only.",
    role: "developer",
    tools: ["C# window app", "SQL server"],
    projectType: "desktop application",
    projectImage: [
      "/image/project4/login.png",
      "/image/project4/customerRegister.png",
      "/image/project4/reservationLock.png",
      "/image/project4/reservationSlip.png",
      "/image/project4/customerDataDialog.png",
      "/image/project4/adminLockManagement.png",
      "/image/project4/lockStatusDashboard.png",
      "/image/project4/ER_diagram_market.png",
    ],
    link: "-",
    timeline: "19 Aug 2023 - 11 Oct 2023",
  },
];

export const certificateData = [
  {
    certificateId: 1,
    certificateName: "Introduction to Go Programming Language",
    certificateImage:
      "/image/certificate/borntodev-academy_Introduction to Go Programming Language_certificate.png",
    issueDate: "27 May 2025",
    organization: "Born to dev",
    about: "Workshop and training",
  },
  {
    certificateId: 2,
    certificateName: "Certificate of Internship",
    certificateImage: "/image/certificate/BBVC2.png",
    issueDate: "15 Nov 2024 - 15 Apil 2025",
    organization: "Bluebik Vulcan Company Limited",
    about: "Internship",
  },
  {
    certificateId: 3,
    certificateName: "API Design and Cloud Architecture using Python  ",
    certificateImage: "/image/certificate/240919_213222.jpg",
    issueDate: "7 Sep 2024 - 8 Sep 2024",
    organization: "Kasetsart University (faculty of Engineering Sriracha) ",
    about: "Workshop and training",
  },
  {
    certificateId: 4,
    certificateName: "Certificate of Internship",
    certificateImage: "/image/certificate/BBVC1.png",
    issueDate: "1 May 2024 - 28 June 2024",
    organization: "Bluebik Vulcan Company Limited",
    about: "Internship",
  },
  {
    certificateId: 5,
    certificateName: "ICDL certificate",
    certificateImage: "/image/certificate/ICDLcer.png",
    issueDate: "19 Dec 2023",
    organization: "Kasetsart University",
    about: "Test",
  },
  {
    certificateId: 6,
    certificateName: "KU Digital Literacy",
    certificateImage: "/image/certificate/KU_digital.png",
    issueDate: "3 Oct 2023",
    organization: "Kasetsart University",
    about: "Test",
  },
  {
    certificateId: 7,
    certificateName: "Verified certificate of participation",
    certificateImage: "/image/certificate/certificate.png",
    issueDate: "10 Jan 2023",
    organization: "Born to dev",
    about: "DevLab",
  },
];

export const softSkillList = [
  "Teamwork",
  "Communication",
  "Problem solving",
  "Adaptability",
  "Fast leaning",
  "Time management",
  "Work underpresser",
  "Presentation",
];

export const hardSkillList = [
  {
    toolType: "Front-end",
    toolNameList: ["React js","Next js", "MUI","JavaScript" ,"TypeScript","Zustand"],
  },
  {
    toolType: "Back-end",
    toolNameList: ["C# .net"],
  },
  {
    toolType: "Database",
    toolNameList: ["Sql server"],
  },
  {
    toolType: "Team work Tools",
    toolNameList: ["Git (Fork)","Postman","Microsoft Team","Azure devops", ],
  },
];
