# Welcome

Employee dashboard technical challenge

![](docs/media/gifs/employee-dashboard-demo.gif)

# Instructions

Clone the repository and push to a personal git repository (you will need to create the empty repository before pushing):

```sh
git clone https://<TOKEN_NAME>:<TOKEN_PASSWORD>/perceptual-robotics/reporting-group/recruitment-tech-challenges.git
```

```sh
git remote add github git@github.com:<USERNAME>/pr-fe-challenge.git
```

```sh
git push --mirror github
```

Please remember to commit regularly and share a link to the completed personal repository when you have finished.



# Install 

* Run `npm i`
* Run `npm start`

> The data will be seeded at the first runtime

# Background 

The app uses React and Material UI to create the employee dashboard that is in front of you. 

Data is stored in localStorage.

Features: 
* rendering a list of employees
* correctly searching and matching employees
* employee records can be edited 
* employee records can be deleted
* employee records can be added to the list
* pagination rows can be changed
* employee pages can be changed

# Tasks

## Get familiar

Spend some time to familiarise yourself with the code

## Search

Search is broken at the minute - what could be the problem?

If we search with `ro` we search correctly

![](docs/media/search-issue-1.png)

If we search with `Ro` we no longer search correctly even though there are items that match

![](docs/media/search-issue-2.png)

## Add / Department dropdown

The department dropdown seems to be broken atm. 

What could be the issue

![](docs/media/departments-issue.png)

## Department filter dropdown

![](docs/media/where-filters-should-go.jpg)

Task: add a department filter dropdown

Consider both placement and how we migh connect the UI with the data.

Use the MUI documentation to find a correct component for this task.

User story:

```
Given: a user from marketing wants to only see employees from that department

Then: they select 'Marketing' from a 'Department' dropdown

Then: the employee list is filtered by that department
```

## Delete Multiple Users

Task: delete multiple selected users

User story:

```
Given: some departments have large numbers of users to manage

Then: they want to be able to select multiple users

Then: they should be able to delete that selection
```
