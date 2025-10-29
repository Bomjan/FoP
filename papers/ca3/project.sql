CREATE DATABASE Record_System;
USE Record_System;

CREATE TABLE User(
  User_ID INT NOT NULL PRIMARY KEY,
  User_fName VARCHAR(12) NOT NULL,
  User_lName VARCHAR(12),
  Date_of_Birth DATE NOT NULL,
  Gender CHAR(1) NOT NULL,
  Dzongkhag VARCHAR(20),
  Gewog VARCHAR(20)
);

CREATE TABLE Contact(
  User_ID INT NOT NULL,
  Contact CHAR(12),  -- +975 77 000 000 format
  FOREIGN KEY(User_ID) REFERENCES User(User_ID)
);

CREATE TABLE Doctor(
  Doctor_ID INT NOT NULL PRIMARY KEY,
  User_ID INT NOT NULL,
  FOREIGN KEY(User_ID) REFERENCES User(User_ID),
  Specialization VARCHAR(16)
);

CREATE TABLE Patient(
  User_ID INT NOT NULL,
  FOREIGN KEY(User_ID) REFERENCES User(User_ID),
  Patient_ID INT NOT NULL PRIMARY KEY
);

CREATE TABLE Medicine(
  Medicine_ID INT NOT NULL PRIMARY KEY,
  Medicine_Name VARCHAR(40)
);

CREATE TABLE Record(
  Patient_ID INT NOT NULL,
  Doctor_ID INT NOT NULL,
  Medicine_ID INT NOT NULL,
  PRIMARY KEY(Patient_ID, Doctor_ID, Medicine_ID),

  FOREIGN KEY(Doctor_ID) REFERENCES Doctor(Doctor_ID),
  FOREIGN KEY(Medicine_ID) REFERENCES Medicine(Medicine_ID)),
  FOREIGN KEY(Patient_ID) REFERENCES Patient(Patient_ID),

  Recorded_At DATE,
  Duration INT
);

CREATE TABLE Appoinment(

  Doctor_ID INT NOT NULL,
  Patient_ID INT NOT NULL,
  PRIMARY KEY(Doctor_ID, Patient_ID),
  FOREIGN KEY(Doctor_ID) REFERENCES Doctor(Doctor_ID),
  FOREIGN KEY(Patient_ID) REFERENCES Patient(Patient_ID),

  Appoinment_Status VARCHAR(10),
  Appoinment_Time TIME,
  Appoinment_Date DATE,
  Appoinment_Name VARCHAR(14)
);

