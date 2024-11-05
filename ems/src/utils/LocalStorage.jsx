import React from 'react'

const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Complete Project Report",
        "taskDescription": "Finalize and submit the project report by end of the week.",
        "taskDate": "2023-10-30",
        "category": "Work"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team Meeting",
        "taskDescription": "Attend the weekly team meeting to discuss project updates.",
        "taskDate": "2023-10-25",
        "category": "Work"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Client Feedback",
        "taskDescription": "Gather feedback from the client regarding the last presentation.",
        "taskDate": "2023-10-20",
        "category": "Client"
      }
    ],
    "name": "shanker"
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Website",
        "taskDescription": "Make necessary updates to the company website.",
        "taskDate": "2023-11-05",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review the code submitted by the junior developer.",
        "taskDate": "2023-10-28",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Documentation",
        "taskDescription": "Complete the documentation for the new feature.",
        "taskDate": "2023-10-15",
        "category": "Documentation"
      }
    ],
    "name": "meet"
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Presentation",
        "taskDescription": "Create a presentation for the upcoming client meeting.",
        "taskDate": "2023-11-01",
        "category": "Work"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Market Research",
        "taskDescription": "Conduct market research for the new product launch.",
        "taskDate": "2023-10-29",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team Building Activity",
        "taskDescription": "Organize a team-building activity for the department.",
        "taskDate": "2023-10-10",
        "category": "Team"
      }
    ],
    "name": "sarthak"
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Client Call",
        "taskDescription": "Schedule and conduct a call with the client to discuss project status.",
        "taskDate": "2023-10-27",
        "category": "Client"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Budget Review",
        "taskDescription": "Review the budget for the upcoming quarter.",
        "taskDate": "2023-11-03",
        "category": "Finance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Training Session",
        "taskDescription": "Attend the training session on new software tools.",
        "taskDate": "2023-10-12",
        "category": "Training"
      }
    ],
    "name": "vikas"
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Social Media Campaign",
        "taskDescription": "Plan and execute the social media campaign for the new product.",
        "taskDate": "2023-11-10",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Content Creation",
        "taskDescription": "Create content for the upcoming blog posts.",
        "taskDate": "2023-10-31",
        "category": "Content"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Feedback Analysis",
        "taskDescription": "Analyze feedback from the last marketing campaign.",
        "taskDate": "2023-10-05",
        "category": "Analysis"
      }
    ],
    "name": "ruchika"
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

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
}