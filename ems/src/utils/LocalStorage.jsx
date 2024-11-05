import React from 'react'

const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "active": 1,
    newTask: 2,
    completed: 3,
    failed: 4,
    tasks: [
      {
        "taskTitle": "Complete Project Report",
        "taskDescription": "Finalize and submit the project report by end of the week.",
        "taskDate": "2023-10-30",
        "category": "Work"
      },
      {
        "taskTitle": "Team Meeting",
        "taskDescription": "Attend the weekly team meeting to discuss project updates.",
        "taskDate": "2023-10-25",
        "category": "Work"
      },
      {
        "taskTitle": "Client Feedback",
        "taskDescription": "Gather feedback from the client regarding the last presentation.",
        "taskDate": "2023-10-20",
        "category": "Client"
      }
    ],
    name: "shanker"
  }, {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "active": 1,
    "newTask": 5,
    "completed": 2,
    "failed": 1,
    "tasks": [
      {
        "taskTitle": "Prepare Budget Proposal",
        "taskDescription": "Draft the budget proposal for the upcoming project.",
        "taskDate": "2023-11-01",
        "category": "Finance"
      },
      {
        "taskTitle": "Project Kickoff",
        "taskDescription": "Initiate the project with a kickoff meeting.",
        "taskDate": "2023-10-28",
        "category": "Work"
      },
      {
        "taskTitle": "Update Website",
        "taskDescription": "Make necessary updates to the company website.",
        "taskDate": "2023-10-22",
        "category": "Marketing"
      }
    ],
    "name": "rahul"
  },
  
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "active": 1,
      "newTask": 4,
      "completed": 5,
      "failed": 1,
      "tasks": [
        {
          "taskTitle": "Design New Logo",
          "taskDescription": "Create a new logo for the upcoming product launch.",
          "taskDate": "2023-11-05",
          "category": "Design"
        },
        {
          "taskTitle": "Market Research",
          "taskDescription": "Conduct market research for the new product.",
          "taskDate": "2023-10-29",
          "category": "Marketing"
        }
      ],
      "name": "Alice"
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "active": 1,
      "newTask": 2,
      "completed": 3,
      "failed": 0,
      "tasks": [
        {
          "taskTitle": "Write User Manual",
          "taskDescription": "Draft the user manual for the new software.",
          "taskDate": "2023-11-10",
          "category": "Documentation"
        },
        {
          "taskTitle": "Setup Development Environment",
          "taskDescription": "Prepare the development environment for the new project.",
          "taskDate": "2023-11-02",
          "category": "Development"
        }
      ],
      "name": "Bob"
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "active": 1,
      "newTask": 3,
      "completed": 2,
      "failed": 1,
      "tasks": [
        {
          "taskTitle": "Create Test Cases",
          "taskDescription": "Develop test cases for the new feature.",
          "taskDate": "2023-10-31",
          "category": "Testing"
        },
        {
          "taskTitle": "Bug Fixing",
          "taskDescription": "Fix bugs reported by QA team.",
          "taskDate": "2023-11-03",
          "category": "Development"
        }
      ],
      "name": "Charlie"
    },
    {
      "id": 6,
      "email": "employee6@example.com",
      "password": "123",
      "active": 1,
      "newTask": 1,
      "completed": 4,
      "failed": 1,
      "tasks": [
        {
          "taskTitle": "Prepare Presentation",
          "taskDescription": "Create a presentation for the client meeting.",
          "taskDate": "2023-10-27",
          "category": "Client"
        }
      ],
      "name": "David"
    },
    {
      "id": 7,
      "email": "employee7@example.com",
      "password": "123",
      "active": 1,
      "newTask": 6,
      "completed": 2,
      "failed": 2,
      "tasks": [
        {
          "taskTitle": "Conduct Training Session",
          "taskDescription": "Organize a training session for new employees.",
          "taskDate": "2023-11-12",
          "category": "HR"
        },
        {
          "taskTitle": "Update Employee Records",
          "taskDescription": "Ensure all employee records are up to date.",
          "taskDate": "2023-11-08",
          "category": "HR"
        }
      ],
      "name": "Eve"
    },
    {
      "id": 8,
      "email": "employee8@example.com",
      "password": "123",
      "active": 1,
      "newTask": 2,
      "completed": 3,
      "failed": 0,
      "tasks": [
        {
          "taskTitle": "Analyze Sales Data",
          "taskDescription": "Review and analyze sales data for the last quarter.",
          "taskDate": "2023-10-26",
          "category": "Sales"
        },
        {
          "taskTitle": "Prepare Sales Report",
          "taskDescription": "Compile a report based on the analyzed data.",
          "taskDate": "2023-10-30",
          "category": "Sales"
        }
      ],
      "name": "Frank"
    },
    {
      "id": 9,
      "email": "employee9@example.com",
      "password": "123",
      "active": 1,
      " newTask": 4,
      "completed": 1,
      "failed": 2,
      "tasks": [
        {
          "taskTitle": "Develop Marketing Strategy",
          "taskDescription": "Create a marketing strategy for the new product launch.",
          "taskDate": "2023-11-15",
          "category": "Marketing"
        },
        {
          "taskTitle": "Social Media Campaign",
          "taskDescription": "Plan and execute a social media campaign.",
          "taskDate": "2023-11-01",
          "category": "Marketing"
        }
      ],
      "name": "Grace"
    },
    {
      "id": 10,
      "email": "employee10@example.com",
      "password": "123",
      "active": 1,
      "newTask": 3,
      "completed": 2,
      "failed": 1,
      "tasks": [
        {
          "taskTitle": "Implement New Features",
          "taskDescription": "Work on implementing new features for the application.",
          "taskDate": "2023-11-20",
          "category": "Development"
        },
        {
          "taskTitle": "Code Review",
          "taskDescription": "Review code submitted by team members.",
          "taskDate": "2023-11-18",
          "category": "Development"
        }
      ],
      "name": "Hannah"
    },
    {
      "id": 11,
      "email": "employee11@example.com",
      "password": "123",
      "active": 1,
      "newTask": 5,
      "completed": 3,
      "failed": 1,
      "tasks": [
        {
          "taskTitle": "Client Feedback Session",
          "taskDescription": "Organize a session to gather feedback from clients.",
          "taskDate": "2023-11-25",
          "category": "Client"
        },
        {
          "taskTitle": "Update Project Timeline",
          "taskDescription": "Revise the project timeline based on current progress.",
          "taskDate": "2023-11-22",
          "category": "Project Management"
        }
      ],
      "name": "Ian"
    },
    {
      "id": 12,
      "email": "employee12@example.com",
      "password": "123",
      "active": 1,
      "newTask": 2,
      "completed": 1,
      "failed": 0,
      "tasks": [
        {
          "taskTitle": "Conduct Performance Reviews",
          "taskDescription": "Evaluate employee performance for the last quarter.",
          "taskDate": "2023-11-30",
          "category": "HR"
        }
      ],
      "name": "Judy"
    }
  
];

const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123",
  "tasks": [
    {
      "active": true,
      "newTask": true,
      "completed": false,
      "failed": false,
      "taskTitle": "Review Employee Performance",
      "taskDescription": "Conduct performance reviews for all employees.",
      "taskDate": "2023-11-15",
      "category": "Management"
    },
    {
      "active": true,
      "newTask": false,
      "completed": false,
      "failed": false,
      "taskTitle": "Budget Approval",
      "taskDescription": "Approve the budget for the next quarter.",
      "taskDate": "2023-11-05",
      "category": "Finance"
    },
    {
      "active": false,
      "newTask": false,
      "completed": true,
      "failed": false,
      "taskTitle": "Policy Update",
      "taskDescription": "Update company policies and communicate changes to staff.",
      "taskDate": "2023-10-20",
      "category": "Administration"
    }
  ],
  "name": "mustafa"
}];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}
setLocalStorage()

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
}