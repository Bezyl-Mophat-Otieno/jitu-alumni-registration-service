BEGIN TRY
    CREATE TABLE memberTable (
        fname VARCHAR(250) NOT NULL,
        lname VARCHAR(500) NOT NULL,
        email VARCHAR(250) NOT NULL UNIQUE,
        cohortTitle VARCHAR(250) NOT NULL,
        cohortNumber INT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        

     );
END TRY
BEGIN CATCH
    THROW 50000, 'An error occurred while creating the tables', 1;
END CATCH;

DROP TABLE IF EXISTS memberTable;
