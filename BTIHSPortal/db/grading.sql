-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2021 at 04:20 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `grading`
--

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
  `id` int(11) NOT NULL,
  `course` varchar(50) NOT NULL,
  `year` varchar(50) NOT NULL,
  `section` varchar(50) NOT NULL,
  `sem` varchar(50) NOT NULL,
  `teacher` varchar(100) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `SY` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`id`, `course`, `year`, `section`, `sem`, `teacher`, `subject`, `SY`) VALUES
(4, 'BSIT', 'III', 'A', '2nd', '16', 'IT104', '2021-2022'),
(7, 'BSIT', 'III', 'A', '2nd', '14', 'IT103', '2021-2022'),
(8, 'BSIT', 'I', 'D', '1st', '14', 'IT100', '2021-2022'),
(9, 'BSIT', 'I', 'C', '1st', '18', 'IT103', '2021-2022'),
(10, 'BSIT', 'IV', 'A', '2nd', '16', 'IT113', '2021-2022'),
(16, 'HUMSS', '11', 'B', '1st', '16', 'GM100', '2021-2022'),
(18, 'STEM', '11', 'B', '1st', '16', 'GM100', '2021-2022'),
(19, 'STEM', '11', 'A', '1st', '17', 'IT104', '2021-2022'),
(20, 'STEM', '11', 'A', '1st', '16', 'IT103', '2021-2022'),
(21, 'STEM', '11', 'A', '1st', '17', 'IT113', '2021-2022'),
(23, 'STEM', '11', 'A', '1st', '16', 'GM100', '2021-2022'),
(24, 'STEM', '11', 'A', '1st', '18', 'DT103', '2021-2022'),
(25, 'STEM', '12', 'A', '1st', '0', 'DT103', '2021-2022'),
(26, 'STEM', '12', 'A', '1st', '18', 'GB100', '2022-2023');

-- --------------------------------------------------------

--
-- Table structure for table `level`
--

CREATE TABLE `level` (
  `id` int(11) NOT NULL,
  `level` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `level`
--

INSERT INTO `level` (`id`, `level`) VALUES
(1, 11),
(2, 12);

-- --------------------------------------------------------

--
-- Table structure for table `log`
--

CREATE TABLE `log` (
  `id` int(11) NOT NULL,
  `date` varchar(50) NOT NULL,
  `activity` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `log`
--

INSERT INTO `log` (`id`, `date`, `activity`) VALUES
(24, '11-27-2014', 'update password of username admin'),
(25, '11-27-2014', 'update password of username 0001-2014'),
(26, '11-27-2014', 'add new teacher af df'),
(27, '11-27-2014', 'update teacher afsdfs dfsdf'),
(28, '11-27-2014', 'delete afsdfs from teacher'),
(29, '11-10-2021 11:18:35 AM', 'admin logged out.');

-- --------------------------------------------------------

--
-- Table structure for table `strand`
--

CREATE TABLE `strand` (
  `id` int(11) NOT NULL,
  `strand` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `strand`
--

INSERT INTO `strand` (`id`, `strand`) VALUES
(1, 'STEM'),
(2, 'TVL'),
(3, 'HUMSS'),
(4, 'ABM');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `studid` varchar(50) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `middle` varchar(2) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `studid`, `fname`, `lname`, `middle`, `email`) VALUES
(19, '18-52647', 'Logitech', 'Silvestre', 'C.', 'khen@gmail.com'),
(20, '18-52648', 'Ronn', 'Arhah', 'C.', 'ron@gmail.com'),
(21, '18-52646', 'Cyndy', 'Silvestre', 'C.', 'cyndy@gmail.com'),
(22, '123123123', 'Hiki', 'Marmar', 'M', 'hik@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `studentsubject`
--

CREATE TABLE `studentsubject` (
  `ids` int(11) NOT NULL,
  `studid` varchar(50) NOT NULL,
  `classid` int(11) NOT NULL,
  `att1` float NOT NULL,
  `att2` float NOT NULL,
  `att3` float NOT NULL,
  `att4` float NOT NULL,
  `exam1` float NOT NULL,
  `exam2` float NOT NULL,
  `exam3` float NOT NULL,
  `quiz1` float NOT NULL,
  `quiz2` float NOT NULL,
  `quiz3` float NOT NULL,
  `project1` float NOT NULL,
  `project2` float NOT NULL,
  `project3` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `studentsubject`
--

INSERT INTO `studentsubject` (`ids`, `studid`, `classid`, `att1`, `att2`, `att3`, `att4`, `exam1`, `exam2`, `exam3`, `quiz1`, `quiz2`, `quiz3`, `project1`, `project2`, `project3`) VALUES
(76, '18', 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(78, '20', 18, 10, 10, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(80, '19', 16, 21, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(81, '19', 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(105, '21', 19, 90, 90, 90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(106, '21', 20, 90, 100, 90, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(107, '21', 21, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(108, '21', 23, 90, 90, 90, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(109, '21', 24, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(110, '22', 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(111, '20', 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(112, '19', 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(113, '22', 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(114, '21', 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `id` int(11) NOT NULL,
  `code` varchar(50) NOT NULL,
  `title` varchar(100) NOT NULL,
  `unit` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`id`, `code`, `title`, `unit`) VALUES
(2, 'IT104', 'System Analysis Design', 'Specialized'),
(4, 'IT103', 'Basic Programming', 'Applied'),
(5, 'IT113', 'Capstone Project', 'haha'),
(16, 'GM100', 'Gen Math', 'Specialized'),
(23, 'DT103', 'Drafting', 'Specialized'),
(24, 'GB100', 'Gen Bio', 'Specialized');

-- --------------------------------------------------------

--
-- Table structure for table `sy`
--

CREATE TABLE `sy` (
  `id` int(11) NOT NULL,
  `schoolyear` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sy`
--

INSERT INTO `sy` (`id`, `schoolyear`) VALUES
(1, '2021-2022'),
(2, '2022-2023');

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `id` int(11) NOT NULL,
  `teachid` varchar(50) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`id`, `teachid`, `fname`, `lname`, `email`, `phone`) VALUES
(16, '001-2021', 'Philip', 'Mranan', 'philip@gmail.com', '1290129'),
(17, '002-2021', 'Sebastian', 'Crisostomo', 'seb@gmail.com', '98832323'),
(18, '003-2021', 'Gio', 'Dio', 'Gio@gmail.com', '09091208');

-- --------------------------------------------------------

--
-- Table structure for table `userdata`
--

CREATE TABLE `userdata` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `level` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userdata`
--

INSERT INTO `userdata` (`id`, `username`, `password`, `fname`, `lname`, `level`) VALUES
(1, 'admin', 'admin123', 'admin', 'admin', 'admin'),
(32, '001-2021', 'teacher', 'Philip', 'Mranan', 'teacher'),
(33, '002-2021', 'teacher', 'Sebastian', 'Crisostomo', 'teacher'),
(34, '18-52647', '0', 'Logitech', 'Silvestre', 'student'),
(35, '18-52648', '0', 'Ronn', 'Arhah', 'student'),
(36, '18-52646', '08-31-1999', 'Cyndy', 'Silvestre', 'student'),
(37, '123123123', '0', 'Hiki', 'Marmar', 'student'),
(38, '003-2021', 'dio', 'Gio', 'Dio', 'teacher');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `level`
--
ALTER TABLE `level`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `log`
--
ALTER TABLE `log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `strand`
--
ALTER TABLE `strand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `studentsubject`
--
ALTER TABLE `studentsubject`
  ADD PRIMARY KEY (`ids`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sy`
--
ALTER TABLE `sy`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userdata`
--
ALTER TABLE `userdata`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `level`
--
ALTER TABLE `level`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `log`
--
ALTER TABLE `log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `strand`
--
ALTER TABLE `strand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `studentsubject`
--
ALTER TABLE `studentsubject`
  MODIFY `ids` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `sy`
--
ALTER TABLE `sy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `userdata`
--
ALTER TABLE `userdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
