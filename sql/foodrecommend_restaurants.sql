-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: foodrecommend
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `restaurants`
--

DROP TABLE IF EXISTS `restaurants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `restaurants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `star` int(11) NOT NULL,
  `foodtype` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `tag` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurants`
--

LOCK TABLES `restaurants` WRITE;
/*!40000 ALTER TABLE `restaurants` DISABLE KEYS */;
INSERT INTO `restaurants` VALUES (1,'코지마',2,'sushi','코지마, sushi, 초밥','2020-06-10 09:09:10','2020-06-10 09:09:10'),(2,'가온',3,'korea','가온, korea, ','2020-06-10 09:44:26','2020-06-10 09:44:26'),(3,'알라 프리마',2,'innovative','알라 프리마, innovative','2020-06-11 04:25:47','2020-06-11 04:25:47'),(4,'라연',3,'korea','라연, korea','2020-06-11 04:34:07','2020-06-11 04:34:07'),(5,'권숙수',2,'korea','권숙수,korea,한식','2020-06-11 04:42:33','2020-06-11 04:42:33'),(6,'모수',2,'innovative','모수, innovative','2020-06-11 04:48:55','2020-06-11 04:48:55'),(7,'밍글스',2,'contemporary','밍글스,contemporary, korea','2020-06-11 05:01:52','2020-06-11 05:01:52'),(8,'임프레션',2,'innovative','임프레션, innovative','2020-06-11 05:10:35','2020-06-11 05:10:35'),(9,'정식당',2,'contemporary','정식당,contemporary,한식','2020-06-11 05:38:45','2020-06-11 05:38:45'),(10,'곳간',1,'korea','곳간,한식,korea','2020-06-11 05:42:45','2020-06-11 05:42:45'),(11,'도사',1,'innovative','도사, innovative','2020-06-11 05:44:36','2020-06-11 05:44:36'),(12,'떼레노',1,'spanish','떼레노, spanish','2020-06-11 05:49:39','2020-06-11 05:49:39'),(13,'묘미',1,'innovative','묘미, innovative','2020-06-11 05:53:21','2020-06-11 05:53:21'),(14,'무오키',1,'innovative','무오키, MUOKI, innovative','2020-06-11 05:57:21','2020-06-11 05:57:21'),(15,'비채나',1,'korea','비채나, korea','2020-06-11 06:00:02','2020-06-11 06:00:02'),(16,'스와니예',1,'innovative','스와니예,  innovative','2020-06-11 06:02:10','2020-06-11 06:02:10'),(17,'스테이',1,'contemporary','스테이,french,contemporary','2020-06-11 06:06:31','2020-06-11 06:06:31'),(18,'에빗',1,'innovative','에빗, innovative','2020-06-11 06:09:00','2020-06-11 06:09:00'),(19,'익스퀴진',1,'innovative','익스퀴진, innovative','2020-06-11 06:10:43','2020-06-11 06:10:43'),(20,'제로 컴플렉스',1,'innovative','제로 컴플렉스, innovative, french','2020-06-11 06:12:30','2020-06-11 06:12:30'),(21,'주옥',1,'contemporary','주옥, contemporary, 한식','2020-06-11 06:14:12','2020-06-11 06:14:12'),(22,'테이블 포 포',1,'contemporary','테이블 포 포, contemporary, european','2020-06-11 06:16:24','2020-06-11 06:16:24'),(23,'품 서울',1,'korea','품, korea','2020-06-11 06:17:30','2020-06-11 06:17:30'),(24,'피에르 가니에르',1,'contemporary','피에르 가니에르, contemporary, french','2020-06-11 06:18:51','2020-06-11 06:18:51'),(25,'한식공간',1,'korea','한식공간, korea','2020-06-11 06:20:46','2020-06-11 06:20:46');
/*!40000 ALTER TABLE `restaurants` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-07 23:02:35
