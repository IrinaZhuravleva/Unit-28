-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:9001
-- Generation Time: Aug 26, 2019 at 06:58 AM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `cabinet`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `birthday` varchar(100) NOT NULL,
  `sex` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `birthday`, `sex`) VALUES
(1, 'Ivan', 'ivan@r.ru', '112233', '2000-01-01', 'male'),
(2, 'Olga', 'olga@mail.ru', '7788', '2000-01-01', 'female'),
(3, 'Alex', 'a@a.ru', '998877', '2019-08-05', ''),
(4, 'Cate', 'cat@cat.ru', '111', '1988-12-12', 'female'),
(5, 'Serg', 's@s.ru', 'sss', '2019-08-11', 'other'),
(6, 'Петя', 'p@p.ru', 'pppp', '2019-08-06', 'male');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
