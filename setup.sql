CREATE TABLE IF NOT EXISTS `Transactions` (
  `text` varchar(256) NOT NULL,
  `amount` int NOT NULL,
  `createdAt` date NOT NULL,
  PRIMARY KEY (`text`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;