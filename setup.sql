CREATE TABLE IF NOT EXISTS `Transactions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` varchar(256) NOT NULL,
  `amount` int NOT NULL,
  `createdAt` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;