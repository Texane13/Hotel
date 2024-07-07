SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Table structure for table `menu`
--
 
CREATE TABLE IF NOT EXISTS `menu` (
  `Numero` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(50) NOT NULL,
  `Quantite` int(3) NOT NULL,
  `Prix_unitaire` varchar(20) NOT NULL,
  `Sous_total` int(11) NOT NULL,
  `Num_table` int(3),
  PRIMARY KEY (`Numero`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;