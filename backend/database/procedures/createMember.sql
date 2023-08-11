CREATE OR ALTER PROCEDURE addMember 
    @fname VARCHAR(255),
    @lname VARCHAR(255),
    @email VARCHAR(255),
    @cohortTitle VARCHAR(255),
    @cohortNumber INT
   

AS BEGIN 

INSERT INTO memberTable (fname , lname , email , cohortTitle, cohortNumber)

VALUES (@fname , @lname , @email ,@cohortTitle , @cohortNumber)
END;
