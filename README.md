# 🧪 ZooSync API Testing Project

This project contains a complete **API testing suite** built using **Postman** and executed using **Newman**. The collection tests the full CRUD functionality of a Pet Store API, including **User**, **Pet**, and **Order** endpoints.

> 🚀 Report Generated via HTML using Newman Dashboard Theme

---

## 📊 Test Summary (Newman Dashboard)

![image](https://github.com/user-attachments/assets/ae8fd0ae-1b5d-4f77-98fc-15dfb0056ceb)


- ✅ Total Requests: 18
- 🧪 Total Assertions: 9
- ❌ Failed Tests: 1
- ⏱️ Average Response Time: 345ms

---

## 🧩 Key Features

- API Testing via Postman (v2.1 collection format)
- Dynamic variable usage with `{{$randomEmail}}`, `{{$randomUserName}}`, etc.
- Chained requests using `pm.collectionVariables.set(...)`
- Assertion logic for:
  - Status codes
  - Response contents
  - Data validation before/after update
- HTML Report with dark/light theme toggle
- Automated test execution using Newman CLI

---

## 🧰 Technologies Used

| Tool       | Purpose                    |
|------------|----------------------------|
| Postman    | API testing environment    |
| Newman     | CLI test runner            |
| JavaScript | Tests & dynamic data       |
| HTML Report | Dashboard-based result view |
| JSON       | API request payload format |

---
## ▶️ Run Tests via Newman

```bash
newman run ZooSync.postman_collection.json -r cli,html
````
---

## 📁 File Structure

project-root/
│
├── ZooSync.postman_collection.json
├── newman-report.html 



---
📄 Sample Test Coverage
👤 User Module

Create user (single, array, list)

Login/logout

Get user details

Update user

Delete user

🐶 Pet Module

Add new pet

Update pet

Get pet by ID or status

Delete pet

🛒 Store Module

Place order

Find order by ID

Delete order

Inventory check

✍️ Author
Md. Kazi Ashik Ahmed
💼 SQA | API Tester | Postman Expert | Django


