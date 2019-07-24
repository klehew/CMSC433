-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2019 at 05:00 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oregontraildb`
--

-- --------------------------------------------------------

--
-- Table structure for table `currenttopten`
--

CREATE TABLE `currenttopten` (
  `name` varchar(30) DEFAULT NULL,
  `points` int(6) UNSIGNED DEFAULT NULL,
  `rating` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `currenttopten`
--

INSERT INTO `currenttopten` (`name`, `points`, `rating`) VALUES
('Stephen Meek', 7650, 'Travel guide'),
('Celinda Hines', 5694, 'Adventurer'),
('Andrew Sublette', 4138, 'Adventurer'),
('David Hastings', 2945, 'Greenhorn'),
('Ezra Meeker', 2052, 'Greenhorn'),
('William Vaughn', 1401, 'Greenhorn'),
('Mary Bartlett', 937, 'Greenhorn'),
('William Wiggins', 615, 'Greenhorn'),
('Charles Hopper', 396, 'Greenhorn'),
('Elijah White', 250, 'Greenhorn');

-- --------------------------------------------------------

--
-- Table structure for table `originaltopten`
--

CREATE TABLE `originaltopten` (
  `name` varchar(30) DEFAULT NULL,
  `points` int(6) UNSIGNED DEFAULT NULL,
  `rating` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `originaltopten`
--

INSERT INTO `originaltopten` (`name`, `points`, `rating`) VALUES
('Stephen Meek', 7650, 'Travel guide'),
('Celinda Hines', 5694, 'Adventurer'),
('Andrew Sublette', 4138, 'Adventurer'),
('David Hastings', 2945, 'Greenhorn'),
('Ezra Meeker', 2052, 'Greenhorn'),
('William Vaughn', 1401, 'Greenhorn'),
('Mary Bartlett', 937, 'Greenhorn'),
('William Wiggins', 615, 'Greenhorn'),
('Charles Hopper', 396, 'Greenhorn'),
('Elijah White', 250, 'Greenhorn');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
