CREATE TABLE Employees
(
  Id UNIQUEIDENTIFIER PRIMARY KEY default NEWID(),
  Name VARCHAR (100),
  Email varchar(50),
  Phone int,
  Salary int,
  Department varchar(50)
 
)