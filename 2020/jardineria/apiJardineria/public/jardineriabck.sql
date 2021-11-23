-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 04-12-2020 a las 22:21:49
-- Versión del servidor: 5.7.24
-- Versión de PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `jardineriabck`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `Codigo` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Telefono` varchar(15) NOT NULL,
  `Direccion` varchar(50) NOT NULL,
  `Ciudad` varchar(50) NOT NULL,
  `Pais` varchar(50) DEFAULT NULL,
  `CodigoPostal` varchar(10) DEFAULT NULL,
  `LimiteCredito` decimal(15,2) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`Codigo`, `Nombre`, `Telefono`, `Direccion`, `Ciudad`, `Pais`, `CodigoPostal`, `LimiteCredito`, `userid`) VALUES
(1, 'DGPRODUCTIONS GARDEN', '5556901745', 'False Street 52 2 A', 'San Francisco', 'USA', '24006', '3000.00', NULL),
(3, 'Gardening Associates', '5557410345', 'Wall-e Avenue', 'Miami', 'USA', '24010', '6000.00', NULL),
(4, 'Gerudo Valley', '5552323129', 'Oaks Avenue nº22', 'New York', 'USA', '85495', '12000.00', NULL),
(5, 'Tendo Garden', '55591233210', 'Null Street nº69', 'Miami', 'USA', '696969', '600000.00', NULL),
(6, 'Lasas S.A.', '34916540145', 'C/Leganes 15', 'Fuenlabrada', 'Spain', '28945', '154310.00', NULL),
(7, 'Beragua', '654987321', 'C/pintor segundo', 'Madrid', 'España', '28942', '20000.00', NULL),
(8, 'Club Golf Puerta del hierro', '62456810', 'C/sinesio delgado', 'Madrid', 'España', '28930', '40000.00', NULL),
(9, 'Naturagua', '689234750', 'C/majadahonda', 'Madrid', 'España', '28947', '32000.00', NULL),
(10, 'DaraDistribuciones', '675598001', 'C/azores', 'Madrid', 'España', '28946', '50000.00', NULL),
(11, 'Madrileña de riegos', '655983045', 'C/Lagañas', 'Madrid', 'España', '28943', '20000.00', NULL),
(12, 'Lasas S.A.', '34916540145', 'C/Leganes 15', 'Fuenlabrada', 'Spain', '28945', '154310.00', NULL),
(13, 'Camunas Jardines S.L.', '34914873241', 'C/Virgenes 45', 'San Lorenzo del Escorial', 'Spain', '28145', '16481.00', NULL),
(14, 'Dardena S.A.', '34912453217', 'C/Nueva York 74', 'Madrid', 'Spain', '28003', '321000.00', NULL),
(15, 'Jardin de Flores', '654865643', 'C/ Oña 34', 'Madrid', 'España', '28950', '40000.00', NULL),
(16, 'Flores Marivi', '666555444', 'C/Leganes24', 'Fuenlabrada', 'España', '28945', '1500.00', NULL),
(17, 'Flowers, S.A', '698754159', 'C/Luis Salquillo4', 'Montornes del valles', 'España', '24586', '3500.00', NULL),
(18, 'Naturajardin', '612343529', 'Plaza Magallón 15', 'Madrid', 'España', '28011', '5050.00', NULL),
(19, 'Golf S.A.', '916458762', 'C/Estancado', 'Santa cruz de Tenerife', 'España', '38297', '30000.00', NULL),
(20, 'AYMERICH GOLF MANAGEMENT, SL', '964493072', 'C/Letardo', 'Barcelona', 'España', '12320', '20000.00', NULL),
(21, 'Aloha', '916485852', 'C/Roman 3', 'Canarias', 'España', '35488', '50000.00', NULL),
(22, 'El Prat', '916882323', 'Avenida Tibidabo', ' Barcelona', 'España', '12320', '30000.00', NULL),
(23, 'Sotogrande', '915576622', 'C/Paseo del Parque', 'Sotogrande', 'España', '11310', '60000.00', NULL),
(24, 'Vivero Humanes', '654987690', 'C/Miguel Echegaray 54', 'Humanes', 'España', '28970', '7430.00', NULL),
(25, 'Fuenla City', '675842139', 'C/Callo 52', 'Fuenlabrada', 'España', '28574', '4500.00', NULL),
(26, 'Jardines y Mansiones CACTUS SL', '916877445', 'Polígono Industrial Maspalomas, Nº52', 'Madrid', 'España', '29874', '76000.00', NULL),
(27, 'Jardinerías Matías SL', '916544147', 'C/Francisco Arce, Nº44', 'Madrid', 'España', '37845', '100500.00', NULL),
(28, 'Agrojardin', '675432926', 'C/Mar Caspio 43', 'Getafe', 'España', '28904', '8040.00', NULL),
(29, 'Top Campo', '685746512', 'C/Ibiza 32', 'Humanes', 'España', '28574', '5500.00', NULL),
(30, 'Jardineria Sara', '675124537', 'C/Lima 1', 'Fenlabrada', 'España', '27584', '7500.00', NULL),
(31, 'Campohermoso', '645925376', 'C/Peru 78', 'Fuenlabrada', 'España', '28945', '3250.00', NULL),
(32, 'france telecom', '(33)5120578961', '6 place d Alleray 15Ã¨me', 'Paris', 'France', '75010', '10000.00', NULL),
(33, 'Musée du Louvre', '(33)0140205050', 'Quai du Louvre', 'Paris', 'France', '75058', '30000.00', NULL),
(35, 'Tutifruti S.A', '2 9261-2433', 'level 24, St. Martins Tower.-31 Market St.', 'Sydney', 'Australia', '2000', '10000.00', NULL),
(36, 'FLORES S.L.', '654352981', 'Avenida España', 'Madrid', 'España', '29643', '6000.00', NULL),
(37, 'THE MAGIC GARDEN', '926523468', 'Lihgting Park', 'London', 'United Kingdom', '65930', '10000.00', NULL),
(38, 'El Jardin Viviente S.L', '2 8005-7161', '176 Cumberland Street The rocks', 'Sydney', 'Australia', '2003', '8000.00', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gamasproductos`
--

CREATE TABLE `gamasproductos` (
  `Gama` varchar(50) NOT NULL,
  `Descripcion` text,
  `Imagen` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `gamasproductos`
--

INSERT INTO `gamasproductos` (`Gama`, `Descripcion`, `Imagen`) VALUES
('Aromáticas', 'Plantas aromáticas', 'aromaticas.png'),
('Frutales', 'Árboles pequeños de producción frutal', 'frutales.png'),
('Herbaceas', 'Plantas para jardin decorativas', 'herbaceas.png'),
('Herramientas', 'Herramientas para todo tipo de acción', 'herramientas.png'),
('Ornamentales', 'Plantas vistosas para la decoración del jardín', 'ornamentales.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `CodigoProducto` varchar(15) NOT NULL,
  `Nombre` varchar(70) NOT NULL,
  `Gama` varchar(50) NOT NULL,
  `Proveedor` varchar(50) DEFAULT NULL,
  `Descripcion` text,
  `CantidadEnStock` smallint(6) NOT NULL,
  `PrecioVenta` decimal(15,2) NOT NULL,
  `PrecioProveedor` decimal(15,2) DEFAULT NULL,
  `imagen` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`CodigoProducto`, `Nombre`, `Gama`, `Proveedor`, `Descripcion`, `CantidadEnStock`, `PrecioVenta`, `PrecioProveedor`, `imagen`) VALUES
('11679', 'Sierra de Poda 400MM', 'Herramientas', 'HiperGarden Tools', 'Gracias a la poda se consigue manipular un poco la naturaleza, dándole la forma que más nos guste. Este trabajo básico de jardinería también facilita que las plantas crezcan de un modo más equilibrado, y que las flores y los frutos vuelvan cada año con regularidad. Lo mejor es dar forma cuando los ejemplares son jóvenes, de modo que exijan pocos cuidados cuando sean adultos. Además de saber cuándo y cómo hay que podar, tener unas herramientas adecuadas para esta labor es también de vital importancia.', 15, '14.00', '11.00', 'sierrapoda.png'),
('21636', 'Pala', 'Herramientas', 'HiperGarden Tools', 'Palas de acero con cresta de corte en la punta para cortar bien el terreno. Buena penetración en tierras muy compactas.', 15, '14.00', '13.00', 'pala.png'),
('2222', 'Martillo', 'Herramientas', 'aquarius', 'sdASD', 23, '24.00', '12.00', 'DSDS'),
('22225', 'Rastrillo de Jardín', 'Herramientas', 'HiperGarden Tools', 'Fabuloso rastillo que le ayudará a eliminar piedras, hojas, ramas y otros elementos incómodos en su jardín.', 15, '12.00', '11.00', 'rastrillo.png'),
('30310', 'Azadón', 'Herramientas', 'HiperGarden Tools', 'Longitud:24cm. Herramienta fabricada en acero y pintura epoxi,alargando su durabilidad y preveniendo la corrosión.Diseño pensado para el ahorro de trabajo.', 15, '12.00', '11.00', 'azadon.png'),
('3333', 'tornillo', 'Herramientas', 'aquarius', 'sdASD', 23, '24.00', '12.00', 'DSDS'),
('4444', 'Taladro', 'Herramientas', 'aquarius', 'taladro aquuarius ...', 12, '145.00', '120.00', 'taladro.png'),
('5555', 'Destornillador', 'Herramientas', 'aquarius', 'z<cvc', 23, '323.00', '12.00', 'detornillador.png'),
('AR-001', 'Ajedrea', 'Aromáticas', 'Murcia Seasons', 'Planta aromática que fresca se utiliza para condimentar carnes y ensaladas, y seca, para pastas, sopas y guisantes', 140, '1.00', '0.00', 'ajedrea.png'),
('AR-002', 'Lavándula Dentata', 'Aromáticas', 'Murcia Seasons', 'Espliego de jardín, Alhucema rizada, Alhucema dentada, Cantueso rizado. Familia: Lamiaceae.Origen: España y Portugal. Mata de unos 60 cm de alto. Las hojas son aromáticas, dentadas y de color verde grisáceas.  Produce compactas espigas de flores pequeñas, ligeramente aromáticas, tubulares,de color azulado y con brácteas púrpuras.  Frutos: nuececillas alargadas encerradas en el tubo del cáliz.  Se utiliza en jardineria y no en perfumeria como otros cantuesos, espliegos y lavandas.  Tiene propiedades aromatizantes y calmantes. Adecuadas para la formación de setos bajos. Se dice que su aroma ahuyenta pulgones y otros insectos perjudiciales para las plantas vecinas.', 140, '1.00', '0.00', 'lavandula.png'),
('AR-003', 'Mejorana', 'Aromáticas', 'Murcia Seasons', 'Origanum majorana. No hay que confundirlo con el orégano. Su sabor se parece más al tomillo, pero es más dulce y aromático.Se usan las hojas frescas o secas, picadas, machacadas o en polvo, en sopas, rellenos, quiches y tartas, tortillas, platos con papas y, como aderezo, en ramilletes de hierbas.El sabor delicado de la mejorana se elimina durante la cocción, de manera que es mejor agregarla cuando el plato esté en su punto o en aquéllos que apenas necesitan cocción.', 140, '1.00', '0.00', 'mejorama.png'),
('AR-004', 'Melissa ', 'Aromáticas', 'Murcia Seasons', 'Es una planta perenne (dura varios años) conocida por el agradable y característico olor a limón que desprenden en verano. Nunca debe faltar en la huerta o jardín por su agradable aroma y por los variados usos que tiene: planta olorosa, condimentaria y medicinal. Su cultivo es muy fácil. Le va bien un suelo ligero, con buen drenaje y riego sin exceso. A pleno sol o por lo menos 5 horas de sol por día. Cada año, su abonado mineral correspondiente.En otoño, la melisa pierde el agradable olor a limón que desprende en verano sus flores azules y blancas. En este momento se debe cortar a unos 20 cm. del suelo. Brotará de forma densa en primavera.', 140, '1.00', '0.00', 'melisa.png'),
('AR-005', 'Mentha Sativa', 'Aromáticas', 'Murcia Seasons', 'Â¿Quién no conoce la Hierbabuena? Se trata de una plantita muy aromática, agradable y cultivada extensamente por toda España. Es hierba perenne (por tanto vive varios años, no es anual). Puedes cultivarla en maceta o plantarla en la tierra del jardín o en un rincón del huerto. Lo más importante es que cuente con bastante agua. En primavera debes aportar fertilizantes minerales. Vive mejor en semisombra que a pleno sol.Si ves orugas o los agujeros en hojas consecuencia de su ataque, retíralas una a una a mano; no uses insecticidas químicos.', 140, '1.00', '0.00', 'menta.png'),
('AR-006', 'Petrosilium Hortense (Peregil)', 'Aromáticas', 'Murcia Seasons', 'Nombre científico o latino: Petroselinum hortense, Petroselinum crispum. Nombre común o vulgar: Perejil, Perejil rizado Familia: Umbelliferae (Umbelíferas). Origen: el origen del perejil se encuentra en el Mediterraneo. Esta naturalizada en casi toda Europa. Se utiliza como condimento y para adorno, pero también en ensaladas. Se suele regalar en las fruterías y verdulerías.El perejil lo hay de 2 tipos: de hojas planas y de hojas rizadas.', 140, '1.00', '0.00', ''),
('AR-007', 'Salvia Mix', 'Aromáticas', 'Murcia Seasons', 'La Salvia es un pequeño arbusto que llega hasta el metro de alto.Tiene una vida breve, de unos pocos años.En el jardín, como otras aromáticas, queda muy bien en una rocalla o para hacer una bordura perfumada a cada lado de un camino de Salvia. Abona después de cada corte y recorta el arbusto una vez pase la floración.', 140, '1.00', '0.00', ''),
('AR-008', 'Thymus Citriodra (Tomillo limón)', 'Aromáticas', 'Murcia Seasons', 'Nombre común o vulgar: Tomillo, Tremoncillo Familia: Labiatae (Labiadas).Origen: Región mediterránea.Arbustillo bajo, de 15 a 40 cm de altura. Las hojas son muy pequeñas, de unos 6 mm de longitud; según la variedad pueden ser verdes, verdes grisáceas, amarillas, o jaspeadas. Las flores aparecen de mediados de primavera hasta bien entrada la época estival y se presentan en racimos terminales que habitualmente son de color violeta o púrpura aunque también pueden ser blancas. Esta planta despide un intenso y típico aroma, que se incrementa con el roce. El tomillo resulta de gran belleza cuando está en flor. El tomillo atrae a avispas y abejas. En jardinería se usa como manchas, para hacer borduras, para aromatizar el ambiente, llenar huecos, cubrir rocas, para jardines en miniatura, etc. Arranque las flores y hojas secas del tallo y añadálos a un popurri, introdúzcalos en saquitos de hierbas o en la almohada.También puede usar las ramas secas con flores para añadir aroma y textura a cestos abiertos.', 140, '1.00', '0.00', ''),
('AR-009', 'Thymus Vulgaris', 'Aromáticas', 'Murcia Seasons', 'Nombre común o vulgar: Tomillo, Tremoncillo Familia: Labiatae (Labiadas). Origen: Región mediterránea. Arbustillo bajo, de 15 a 40 cm de altura. Las hojas son muy pequeñas, de unos 6 mm de longitud; según la variedad pueden ser verdes, verdes grisáceas, amarillas, o jaspeadas. Las flores aparecen de mediados de primavera hasta bien entrada la época estival y se presentan en racimos terminales que habitualmente son de color violeta o púrpura aunque también pueden ser blancas. Esta planta despide un intenso y típico aroma, que se incrementa con el roce. El tomillo resulta de gran belleza cuando está en flor. El tomillo atrae a avispas y abejas.\r\n En jardinería se usa como manchas, para hacer borduras, para aromatizar el ambiente, llenar huecos, cubrir rocas, para jardines en miniatura, etc. Arranque las flores y hojas secas del tallo y añadálos a un popurri, introdúzcalos en saquitos de hierbas o en la almohada. También puede usar las ramas secas con flores para añadir aroma y textura a cestos abiertos.', 140, '1.00', '0.00', ''),
('AR-010', 'Santolina Chamaecyparys', 'Aromáticas', 'Murcia Seasons', '', 140, '1.00', '0.00', ''),
('dsfgdfs', 'fgsdf', 'Herramientas', 'sdfg', 'sdfg', 34, '34.00', '34.00', '3sdasf'),
('FR-1', 'Expositor Cítricos Mix', 'Frutales', 'Frutales Talavera S.A', '', 15, '7.00', '5.00', ''),
('FR-10', 'Limonero 2 años injerto', 'Frutales', 'NaranjasValencianas.com', 'El limonero, pertenece al grupo de los cítricos, teniendo su origen hace unos 20 millones de años en el sudeste asiático. Fue introducido por los árabes en el área mediterránea entre los años 1.000 a 1.200, habiendo experimentando numerosas modificaciones debidas tanto a la selección natural mediante hibridaciones espontáneas como a las producidas por el hombre, en este caso buscando las necesidades del mercado.', 15, '7.00', '5.00', ''),
('FR-100', 'Nectarina', 'Frutales', 'Frutales Talavera S.A', 'Se trata de un árbol derivado por mutación de los melocotoneros comunes, y los únicos caracteres diferenciales son la ausencia de tomentosidad en la piel del fruto. La planta, si se deja crecer libremente, adopta un porte globoso con unas dimensiones medias de 4-6 metros', 50, '11.00', '8.00', ''),
('FR-101', 'Nogal', 'Frutales', 'Frutales Talavera S.A', '', 50, '13.00', '10.00', ''),
('FR-102', 'Olea-Olivos', 'Frutales', 'Frutales Talavera S.A', 'Existen dos hipótesis sobre el origen del olivo, una que postula que proviene de las costas de Siria, Líbano e Israel y otra que considera que lo considera originario de Asia menor. La llegada a Europa probablemente tuvo lugar de mano de los Fenicios, en transito por Chipre, Creta, e Islas del Mar Egeo, pasando a Grecia y más tarde a Italia. Los primeros indicios de la presencia del olivo en las costas mediterráneas españolas coinciden con el dominio romano, aunque fueron posteriormente los árabes los que impulsaron su cultivo en Andalucía, convirtiendo a España en el primer país productor de aceite de oliva a nivel mundial.', 50, '18.00', '14.00', ''),
('FR-103', 'Olea-Olivos', 'Frutales', 'Frutales Talavera S.A', 'Existen dos hipótesis sobre el origen del olivo, una que postula que proviene de las costas de Siria, Líbano e Israel y otra que considera que lo considera originario de Asia menor. La llegada a Europa probablemente tuvo lugar de mano de los Fenicios, en transito por Chipre, Creta, e Islas del Mar Egeo, pasando a Grecia y más tarde a Italia. Los primeros indicios de la presencia del olivo en las costas mediterráneas españolas coinciden con el dominio romano, aunque fueron posteriormente los árabes los que impulsaron su cultivo en Andalucía, convirtiendo a España en el primer país productor de aceite de oliva a nivel mundial.', 50, '25.00', '20.00', ''),
('FR-104', 'Olea-Olivos', 'Frutales', 'Frutales Talavera S.A', 'Existen dos hipótesis sobre el origen del olivo, una que postula que proviene de las costas de Siria, Líbano e Israel y otra que considera que lo considera originario de Asia menor. La llegada a Europa probablemente tuvo lugar de mano de los Fenicios, en transito por Chipre, Creta, e Islas del Mar Egeo, pasando a Grecia y más tarde a Italia. Los primeros indicios de la presencia del olivo en las costas mediterráneas españolas coinciden con el dominio romano, aunque fueron posteriormente los árabes los que impulsaron su cultivo en Andalucía, convirtiendo a España en el primer país productor de aceite de oliva a nivel mundial.', 50, '49.00', '39.00', ''),
('FR-105', 'Olea-Olivos', 'Frutales', 'Frutales Talavera S.A', 'Existen dos hipótesis sobre el origen del olivo, una que postula que proviene de las costas de Siria, Líbano e Israel y otra que considera que lo considera originario de Asia menor. La llegada a Europa probablemente tuvo lugar de mano de los Fenicios, en transito por Chipre, Creta, e Islas del Mar Egeo, pasando a Grecia y más tarde a Italia. Los primeros indicios de la presencia del olivo en las costas mediterráneas españolas coinciden con el dominio romano, aunque fueron posteriormente los árabes los que impulsaron su cultivo en Andalucía, convirtiendo a España en el primer país productor de aceite de oliva a nivel mundial.', 50, '70.00', '56.00', ''),
('FR-106', 'Peral', 'Frutales', 'Frutales Talavera S.A', 'Árbol piramidal, redondeado en su juventud, luego oval, que llega hasta 20 metros de altura y por término medio vive 65 años.Tronco alto, grueso, de corteza agrietada, gris, de la cual se destacan con frecuencia placas lenticulares.Las ramas se insertan formando ángulo agudo con el tronco (45º), de corteza lisa, primero verde y luego gris-violácea, con numerosas lenticelas.', 50, '11.00', '8.00', ''),
('FR-107', 'Peral', 'Frutales', 'Frutales Talavera S.A', 'Árbol piramidal, redondeado en su juventud, luego oval, que llega hasta 20 metros de altura y por término medio vive 65 años.Tronco alto, grueso, de corteza agrietada, gris, de la cual se destacan con frecuencia placas lenticulares.Las ramas se insertan formando ángulo agudo con el tronco (45º), de corteza lisa, primero verde y luego gris-violácea, con numerosas lenticelas.', 50, '22.00', '17.00', ''),
('FR-108', 'Peral', 'Frutales', 'Frutales Talavera S.A', 'Árbol piramidal, redondeado en su juventud, luego oval, que llega hasta 20 metros de altura y por término medio vive 65 años.Tronco alto, grueso, de corteza agrietada, gris, de la cual se destacan con frecuencia placas lenticulares.Las ramas se insertan formando ángulo agudo con el tronco (45º), de corteza lisa, primero verde y luego gris-violácea, con numerosas lenticelas.', 50, '32.00', '25.00', ''),
('FR-11', 'Limonero 30/40', 'Frutales', 'NaranjasValencianas.com', 'El limonero, pertenece al grupo de los cítricos, teniendo su origen hace unos 20 millones de años en el sudeste asiático. Fue introducido por los árabes en el área mediterránea entre los años 1.000 a 1.200, habiendo experimentando numerosas modificaciones debidas tanto a la selección natural mediante hibridaciones espontáneas como a las producidas por el', 15, '100.00', '80.00', ''),
('FR-12', 'Kunquat ', 'Frutales', 'NaranjasValencianas.com', 'su nombre científico se origina en honor a un hoticultor escocés que recolectó especímenes en China, (\"Fortunella\"), Robert Fortune (1812-1880), y \"margarita\", del latín margaritus-a-um = perla, en alusión a sus pequeños y brillantes frutos. Se trata de un arbusto o árbol pequeño de 2-3 m de altura, inerme o con escasas espinas.Hojas lanceoladas de 4-8 (-15) cm de longitud, con el ápice redondeado y la base cuneada.Tienen el margen crenulado en su mitad superior, el haz verde brillante y el envés más pálido.Pecíolo ligeramente marginado.Flores perfumadas solitarias o agrupadas en inflorescencias axilares, blancas.El fruto es lo más característico, es el más pequeño de todos los cítricos y el único cuya cáscara se puede comer.Frutos pequeños, con semillas, de corteza fina, dulce, aromática y comestible, y de pulpa naranja amarillenta y ligeramente ácida.Sus frutos son muy pequeños y tienen un carácter principalmente ornamental.', 15, '21.00', '16.00', ''),
('FR-13', 'Kunquat  EXTRA con FRUTA', 'Frutales', 'NaranjasValencianas.com', 'su nombre científico se origina en honor a un hoticultor escocés que recolectó especímenes en China, (\"Fortunella\"), Robert Fortune (1812-1880), y \"margarita\", del latín margaritus-a-um = perla, en alusión a sus pequeños y brillantes frutos. Se trata de un arbusto o árbol pequeño de 2-3 m de altura, inerme o con escasas espinas.Hojas lanceoladas de 4-8 (-15) cm de longitud, con el ápice redondeado y la base cuneada.Tienen el margen crenulado en su mitad superior, el haz verde brillante y el envés más pálido.Pecíolo ligeramente marginado.Flores perfumadas solitarias o agrupadas en inflorescencias axilares, blancas.El fruto es lo más característico, es el más pequeño de todos los cítricos y el único cuya cáscara se puede comer.Frutos pequeños, con semillas, de corteza fina, dulce, aromática y comestible, y de pulpa naranja amarillenta y ligeramente ácida.Sus frutos son muy pequeños y tienen un carácter principalmente ornamental.', 15, '57.00', '45.00', ''),
('FR-14', 'Calamondin Mini', 'Frutales', 'Frutales Talavera S.A', 'Se trata de un pequeño arbolito de copa densa, con tendencia a la verticalidad, inerme o con cortas espinas. Sus hojas son pequeñas, elípticas de 5-10 cm de longitud, con los pecíolos estrechamente alados.Posee 1 o 2 flores en situación axilar, al final de las ramillas.Sus frutos son muy pequeños (3-3,5 cm de diámetro), con pocas semillas, esféricos u ovales, con la zona apical aplanada; corteza de color naranja-rojizo, muy fina y fácilmente separable de la pulpa, que es dulce, ácida y comestible..', 15, '10.00', '8.00', ''),
('FR-15', 'Calamondin Copa ', 'Frutales', 'Frutales Talavera S.A', 'Se trata de un pequeño arbolito de copa densa, con tendencia a la verticalidad, inerme o con cortas espinas. Sus hojas son pequeñas, elípticas de 5-10 cm de longitud, con los pecíolos estrechamente alados.Posee 1 o 2 flores en situación axilar, al final de las ramillas.Sus frutos son muy pequeños (3-3,5 cm de diámetro), con pocas semillas, esféricos u ovales, con la zona apical aplanada; corteza de color naranja-rojizo, muy fina y fácilmente separable de la pulpa, que es dulce, ácida y comestible..', 15, '25.00', '20.00', ''),
('FR-16', 'Calamondin Copa EXTRA Con FRUTA', 'Frutales', 'Frutales Talavera S.A', 'Se trata de un pequeño arbolito de copa densa, con tendencia a la verticalidad, inerme o con cortas espinas. Sus hojas son pequeñas, elípticas de 5-10 cm de longitud, con los pecíolos estrechamente alados.Posee 1 o 2 flores en situación axilar, al final de las ramillas.Sus frutos son muy pequeños (3-3,5 cm de diámetro), con pocas semillas, esféricos u ovales, con la zona apical aplanada; corteza de color naranja-rojizo, muy fina y fácilmente separable de la pulpa, que es dulce, ácida y comestible..', 15, '45.00', '36.00', ''),
('FR-17', 'Rosal bajo 1Âª -En maceta-inicio brotación', 'Frutales', 'Frutales Talavera S.A', '', 15, '2.00', '1.00', ''),
('FR-18', 'ROSAL TREPADOR', 'Frutales', 'Frutales Talavera S.A', '', 350, '4.00', '3.00', 'rosa.png'),
('FR-19', 'Camelia Blanco, Chrysler Rojo, Soraya Naranja, ', 'Frutales', 'NaranjasValencianas.com', '', 350, '4.00', '3.00', ''),
('FR-2', 'Naranjo -Plantón joven 1 año injerto', 'Frutales', 'NaranjasValencianas.com', 'El naranjo es un árbol pequeño, que no supera los 3-5 metros de altura, con una copa compacta, cónica, transformada en esérica gracias a la poda. Su tronco es de color gris y liso, y las hojas son perennes, coriáceas, de un verde intenso y brillante, con forma oval o elíptico-lanceolada. Poseen, en el caso del naranjo amargo, un típico peciolo alado en forma de Â‘corazónÂ’, que en el naranjo dulce es más estrecho y menos patente.', 15, '6.00', '4.00', ''),
('FR-20', 'Landora Amarillo, Rose Gaujard bicolor blanco-rojo', 'Frutales', 'Frutales Talavera S.A', '', 350, '4.00', '3.00', ''),
('FR-21', 'Kordes Perfect bicolor rojo-amarillo, Roundelay rojo fuerte', 'Frutales', 'Frutales Talavera S.A', '', 350, '4.00', '3.00', ''),
('FR-22', 'Pitimini rojo', 'Frutales', 'Frutales Talavera S.A', '', 350, '4.00', '3.00', ''),
('FR-23', 'Rosal copa ', 'Frutales', 'Frutales Talavera S.A', '', 400, '8.00', '6.00', ''),
('FR-24', 'Albaricoquero Corbato', 'Frutales', 'Melocotones de Cieza S.A.', 'árbol que puede pasar de los 6 m de altura, en la región mediterránea con ramas formando una copa redondeada. La corteza del tronco es pardo-violácea, agrietada; las ramas son rojizas y extendidas cuando jóvenes y las ramas secundarias son cortas, divergentes y escasas. Las yemas latentes son frecuentes especialmente sobre las ramas viejas.', 400, '8.00', '6.00', ''),
('FR-25', 'Albaricoquero Moniqui', 'Frutales', 'Melocotones de Cieza S.A.', 'árbol que puede pasar de los 6 m de altura, en la región mediterránea con ramas formando una copa redondeada. La corteza del tronco es pardo-violácea, agrietada; las ramas son rojizas y extendidas cuando jóvenes y las ramas secundarias son cortas, divergentes y escasas. Las yemas latentes son frecuentes especialmente sobre las ramas viejas.', 400, '8.00', '6.00', ''),
('FR-26', 'Albaricoquero Kurrot', 'Frutales', 'Melocotones de Cieza S.A.', 'árbol que puede pasar de los 6 m de altura, en la región mediterránea con ramas formando una copa redondeada. La corteza del tronco es pardo-violácea, agrietada; las ramas son rojizas y extendidas cuando jóvenes y las ramas secundarias son cortas, divergentes y escasas. Las yemas latentes son frecuentes especialmente sobre las ramas viejas.', 400, '8.00', '6.00', ''),
('FR-27', 'Cerezo Burlat', 'Frutales', 'Jerte Distribuciones S.L.', 'Las principales especies de cerezo cultivadas en el mundo son el cerezo dulce (Prunus avium), el guindo (P. cerasus) y el cerezo \"Duke\", híbrido de los anteriores. Ambas especies son naturales del sureste de Europa y oeste de Asia. El cerezo dulce tuvo su origen probablemente en el mar Negro y en el mar Caspio, difundiéndose después hacia Europa y Asia, llevado por los pájaros y las migraciones humanas. Fue uno de los frutales más apreciados por los griegos y con el Imperio Romano se extendió a regiones muy diversas. En la actualidad, el cerezo se encuentra difundido por numerosas regiones y países del mundo con clima templado', 400, '8.00', '6.00', ''),
('FR-28', 'Cerezo Picota', 'Frutales', 'Jerte Distribuciones S.L.', 'Las principales especies de cerezo cultivadas en el mundo son el cerezo dulce (Prunus avium), el guindo (P. cerasus) y el cerezo \"Duke\", híbrido de los anteriores. Ambas especies son naturales del sureste de Europa y oeste de Asia. El cerezo dulce tuvo su origen probablemente en el mar Negro y en el mar Caspio, difundiéndose después hacia Europa y Asia, llevado por los pájaros y las migraciones humanas. Fue uno de los frutales más apreciados por los griegos y con el Imperio Romano se extendió a regiones muy diversas. En la actualidad, el cerezo se encuentra difundido por numerosas regiones y países del mundo con clima templado', 400, '8.00', '6.00', ''),
('FR-29', 'Cerezo Napoleón', 'Frutales', 'Jerte Distribuciones S.L.', 'Las principales especies de cerezo cultivadas en el mundo son el cerezo dulce (Prunus avium), el guindo (P. cerasus) y el cerezo \"Duke\", híbrido de los anteriores. Ambas especies son naturales del sureste de Europa y oeste de Asia. El cerezo dulce tuvo su origen probablemente en el mar Negro y en el mar Caspio, difundiéndose después hacia Europa y Asia, llevado por los pájaros y las migraciones humanas. Fue uno de los frutales más apreciados por los griegos y con el Imperio Romano se extendió a regiones muy diversas. En la actualidad, el cerezo se encuentra difundido por numerosas regiones y países del mundo con clima templado', 400, '8.00', '6.00', ''),
('FR-3', 'Naranjo 2 años injerto', 'Frutales', 'NaranjasValencianas.com', 'El naranjo es un árbol pequeño, que no supera los 3-5 metros de altura, con una copa compacta, cónica, transformada en esérica gracias a la poda. Su tronco es de color gris y liso, y las hojas son perennes, coriáceas, de un verde intenso y brillante, con forma oval o elíptico-lanceolada. Poseen, en el caso del naranjo amargo, un típico peciolo alado en forma de Â‘corazónÂ’, que en el naranjo dulce es más estrecho y menos patente.', 15, '7.00', '5.00', ''),
('FR-30', 'Ciruelo R. Claudia Verde   ', 'Frutales', 'Frutales Talavera S.A', 'árbol de tamaño mediano que alcanza una altura máxima de 5-6 m. Tronco de corteza pardo-azulada, brillante, lisa o agrietada longitudinalmente. Produce ramas alternas, pequeñas, delgadas, unas veces lisas, glabras y otras pubescentes y vellosas', 400, '8.00', '6.00', ''),
('FR-31', 'Ciruelo Santa Rosa', 'Frutales', 'Frutales Talavera S.A', 'árbol de tamaño mediano que alcanza una altura máxima de 5-6 m. Tronco de corteza pardo-azulada, brillante, lisa o agrietada longitudinalmente. Produce ramas alternas, pequeñas, delgadas, unas veces lisas, glabras y otras pubescentes y vellosas', 400, '8.00', '6.00', ''),
('FR-32', 'Ciruelo Golden Japan', 'Frutales', 'Frutales Talavera S.A', 'árbol de tamaño mediano que alcanza una altura máxima de 5-6 m. Tronco de corteza pardo-azulada, brillante, lisa o agrietada longitudinalmente. Produce ramas alternas, pequeñas, delgadas, unas veces lisas, glabras y otras pubescentes y vellosas', 400, '8.00', '6.00', ''),
('FR-33', 'Ciruelo Friar', 'Frutales', 'Frutales Talavera S.A', 'árbol de tamaño mediano que alcanza una altura máxima de 5-6 m. Tronco de corteza pardo-azulada, brillante, lisa o agrietada longitudinalmente. Produce ramas alternas, pequeñas, delgadas, unas veces lisas, glabras y otras pubescentes y vellosas', 400, '8.00', '6.00', ''),
('FR-34', 'Ciruelo Reina C. De Ollins', 'Frutales', 'Frutales Talavera S.A', 'árbol de tamaño mediano que alcanza una altura máxima de 5-6 m. Tronco de corteza pardo-azulada, brillante, lisa o agrietada longitudinalmente. Produce ramas alternas, pequeñas, delgadas, unas veces lisas, glabras y otras pubescentes y vellosas', 400, '8.00', '6.00', ''),
('FR-35', 'Ciruelo Claudia Negra', 'Frutales', 'Frutales Talavera S.A', 'árbol de tamaño mediano que alcanza una altura máxima de 5-6 m. Tronco de corteza pardo-azulada, brillante, lisa o agrietada longitudinalmente. Produce ramas alternas, pequeñas, delgadas, unas veces lisas, glabras y otras pubescentes y vellosas', 400, '8.00', '6.00', ''),
('FR-36', 'Granado Mollar de Elche', 'Frutales', 'Frutales Talavera S.A', 'pequeño árbol caducifolio, a veces con porte arbustivo, de 3 a 6 m de altura, con el tronco retorcido. Madera dura y corteza escamosa de color grisáceo. Las ramitas jóvenes son más o menos cuadrangulares o angostas y de cuatro alas, posteriormente se vuelven redondas con corteza de color café grisáceo, la mayoría de las ramas, pero especialmente las pequeñas ramitas axilares, son en forma de espina o terminan en una espina aguda; la copa es extendida.', 400, '9.00', '7.00', ''),
('FR-37', 'Higuera Napolitana', 'Frutales', 'Frutales Talavera S.A', 'La higuera (Ficus carica L.) es un árbol típico de secano en los países mediterráneos. Su rusticidad y su fácil multiplicación hacen de la higuera un frutal muy apropiado para el cultivo extensivo.. Siempre ha sido considerado como árbol que no requiere cuidado alguno una vez plantado y arraigado, limitándose el hombre a recoger de él los frutos cuando maduran, unos para consumo en fresco y otros para conserva. Las únicas higueras con cuidados culturales esmerados, en muchas comarcas, son las brevales, por el interés económico de su primera cosecha, la de brevas.', 400, '9.00', '7.00', ''),
('FR-38', 'Higuera Verdal', 'Frutales', 'Frutales Talavera S.A', 'La higuera (Ficus carica L.) es un árbol típico de secano en los países mediterráneos. Su rusticidad y su fácil multiplicación hacen de la higuera un frutal muy apropiado para el cultivo extensivo.. Siempre ha sido considerado como árbol que no requiere cuidado alguno una vez plantado y arraigado, limitándose el hombre a recoger de él los frutos cuando maduran, unos para consumo en fresco y otros para conserva. Las únicas higueras con cuidados culturales esmerados, en muchas comarcas, son las brevales, por el interés económico de su primera cosecha, la de brevas.', 400, '9.00', '7.00', ''),
('FR-39', 'Higuera Breva', 'Frutales', 'Frutales Talavera S.A', 'La higuera (Ficus carica L.) es un árbol típico de secano en los países mediterráneos. Su rusticidad y su fácil multiplicación hacen de la higuera un frutal muy apropiado para el cultivo extensivo.. Siempre ha sido considerado como árbol que no requiere cuidado alguno una vez plantado y arraigado, limitándose el hombre a recoger de él los frutos cuando maduran, unos para consumo en fresco y otros para conserva. Las únicas higueras con cuidados culturales esmerados, en muchas comarcas, son las brevales, por el interés económico de su primera cosecha, la de brevas.', 400, '9.00', '7.00', ''),
('FR-4', 'Naranjo calibre 8/10', 'Frutales', 'NaranjasValencianas.com', 'El naranjo es un árbol pequeño, que no supera los 3-5 metros de altura, con una copa compacta, cónica, transformada en esérica gracias a la poda. Su tronco es de color gris y liso, y las hojas son perennes, coriáceas, de un verde intenso y brillante, con forma oval o elíptico-lanceolada. Poseen, en el caso del naranjo amargo, un típico peciolo alado en forma de Â‘corazónÂ’, que en el naranjo dulce es más estrecho y menos patente.', 15, '29.00', '23.00', ''),
('FR-40', 'Manzano Starking Delicious', 'Frutales', 'Frutales Talavera S.A', 'alcanza como máximo 10 m. de altura y tiene una copa globosa. Tronco derecho que normalmente alcanza de 2 a 2,5 m. de altura, con corteza cubierta de lenticelas, lisa, adherida, de color ceniciento verdoso sobre los ramos y escamosa y gris parda sobre las partes viejas del árbol. Tiene una vida de unos 60-80 años. Las ramas se insertan en ángulo abierto sobre el tallo, de color verde oscuro, a veces tendiendo a negruzco o violáceo. Los brotes jóvenes terminan con frecuencia en una espina', 400, '8.00', '6.00', ''),
('FR-41', 'Manzano Reineta', 'Frutales', 'Frutales Talavera S.A', 'alcanza como máximo 10 m. de altura y tiene una copa globosa. Tronco derecho que normalmente alcanza de 2 a 2,5 m. de altura, con corteza cubierta de lenticelas, lisa, adherida, de color ceniciento verdoso sobre los ramos y escamosa y gris parda sobre las partes viejas del árbol. Tiene una vida de unos 60-80 años. Las ramas se insertan en ángulo abierto sobre el tallo, de color verde oscuro, a veces tendiendo a negruzco o violáceo. Los brotes jóvenes terminan con frecuencia en una espina', 400, '8.00', '6.00', ''),
('FR-42', 'Manzano Golden Delicious', 'Frutales', 'Frutales Talavera S.A', 'alcanza como máximo 10 m. de altura y tiene una copa globosa. Tronco derecho que normalmente alcanza de 2 a 2,5 m. de altura, con corteza cubierta de lenticelas, lisa, adherida, de color ceniciento verdoso sobre los ramos y escamosa y gris parda sobre las partes viejas del árbol. Tiene una vida de unos 60-80 años. Las ramas se insertan en ángulo abierto sobre el tallo, de color verde oscuro, a veces tendiendo a negruzco o violáceo. Los brotes jóvenes terminan con frecuencia en una espina', 400, '8.00', '6.00', ''),
('FR-43', 'Membrillero Gigante de Wranja', 'Frutales', 'Frutales Talavera S.A', '', 400, '8.00', '6.00', ''),
('FR-44', 'Melocotonero Spring Crest', 'Frutales', 'Melocotones de Cieza S.A.', 'Árbol caducifolio de porte bajo con corteza lisa, de color ceniciento. Sus hojas son alargadas con el margen ligeramente aserrado, de color verde brillante, algo más claras por el envés. El melocotonero está muy arraigado en la cultura asiática.\r\nEn Japón, el noble heroe Momotaro, una especie de Cid japonés, nació del interior de un enorme melocotón que flotaba río abajo.\r\nEn China se piensa que comer melocotón confiere longevidad al ser humano, ya que formaba parte de la dieta de sus dioses inmortales.', 400, '8.00', '6.00', ''),
('FR-45', 'Melocotonero Amarillo de Agosto', 'Frutales', 'Melocotones de Cieza S.A.', 'Árbol caducifolio de porte bajo con corteza lisa, de color ceniciento. Sus hojas son alargadas con el margen ligeramente aserrado, de color verde brillante, algo más claras por el envés. El melocotonero está muy arraigado en la cultura asiática.\r\nEn Japón, el noble heroe Momotaro, una especie de Cid japonés, nació del interior de un enorme melocotón que flotaba río abajo.\r\nEn China se piensa que comer melocotón confiere longevidad al ser humano, ya que formaba parte de la dieta de sus dioses inmortales.', 400, '8.00', '6.00', ''),
('FR-46', 'Melocotonero Federica', 'Frutales', 'Melocotones de Cieza S.A.', 'Árbol caducifolio de porte bajo con corteza lisa, de color ceniciento. Sus hojas son alargadas con el margen ligeramente aserrado, de color verde brillante, algo más claras por el envés. El melocotonero está muy arraigado en la cultura asiática.\r\nEn Japón, el noble heroe Momotaro, una especie de Cid japonés, nació del interior de un enorme melocotón que flotaba río abajo.\r\nEn China se piensa que comer melocotón confiere longevidad al ser humano, ya que formaba parte de la dieta de sus dioses inmortales.', 400, '8.00', '6.00', ''),
('FR-47', 'Melocotonero Paraguayo', 'Frutales', 'Melocotones de Cieza S.A.', 'Árbol caducifolio de porte bajo con corteza lisa, de color ceniciento. Sus hojas son alargadas con el margen ligeramente aserrado, de color verde brillante, algo más claras por el envés. El melocotonero está muy arraigado en la cultura asiática.\r\nEn Japón, el noble heroe Momotaro, una especie de Cid japonés, nació del interior de un enorme melocotón que flotaba río abajo.\r\nEn China se piensa que comer melocotón confiere longevidad al ser humano, ya que formaba parte de la dieta de sus dioses inmortales.', 400, '8.00', '6.00', ''),
('FR-48', 'Nogal Común', 'Frutales', 'Frutales Talavera S.A', '', 400, '9.00', '7.00', ''),
('FR-49', 'Parra Uva de Mesa', 'Frutales', 'Frutales Talavera S.A', '', 400, '8.00', '6.00', ''),
('FR-5', 'Mandarino -Plantón joven', 'Frutales', 'Frutales Talavera S.A', '', 15, '6.00', '4.00', ''),
('FR-50', 'Peral Castell', 'Frutales', 'Frutales Talavera S.A', 'Árbol piramidal, redondeado en su juventud, luego oval, que llega hasta 20 metros de altura y por término medio vive 65 años.Tronco alto, grueso, de corteza agrietada, gris, de la cual se destacan con frecuencia placas lenticulares.Las ramas se insertan formando ángulo agudo con el tronco (45º), de corteza lisa, primero verde y luego gris-violácea, con numerosas lenticelas.', 400, '8.00', '6.00', ''),
('FR-51', 'Peral Williams', 'Frutales', 'Frutales Talavera S.A', 'Árbol piramidal, redondeado en su juventud, luego oval, que llega hasta 20 metros de altura y por término medio vive 65 años.Tronco alto, grueso, de corteza agrietada, gris, de la cual se destacan con frecuencia placas lenticulares.Las ramas se insertan formando ángulo agudo con el tronco (45º), de corteza lisa, primero verde y luego gris-violácea, con numerosas lenticelas.', 400, '8.00', '6.00', ''),
('FR-52', 'Peral Conference', 'Frutales', 'Frutales Talavera S.A', 'Árbol piramidal, redondeado en su juventud, luego oval, que llega hasta 20 metros de altura y por término medio vive 65 años.Tronco alto, grueso, de corteza agrietada, gris, de la cual se destacan con frecuencia placas lenticulares.Las ramas se insertan formando ángulo agudo con el tronco (45º), de corteza lisa, primero verde y luego gris-violácea, con numerosas lenticelas.', 400, '8.00', '6.00', ''),
('FR-53', 'Peral Blanq. de Aranjuez', 'Frutales', 'Frutales Talavera S.A', 'Árbol piramidal, redondeado en su juventud, luego oval, que llega hasta 20 metros de altura y por término medio vive 65 años.Tronco alto, grueso, de corteza agrietada, gris, de la cual se destacan con frecuencia placas lenticulares.Las ramas se insertan formando ángulo agudo con el tronco (45º), de corteza lisa, primero verde y luego gris-violácea, con numerosas lenticelas.', 400, '8.00', '6.00', ''),
('FR-54', 'Níspero Tanaca', 'Frutales', 'Frutales Talavera S.A', 'Aunque originario del Sudeste de China, el níspero llegó a Europa procedente de Japón en el siglo XVIII como árbol ornamental. En el siglo XIX se inició el consumo de los frutos en toda el área mediterránea, donde se adaptó muy bien a las zonas de cultivo de los cítricos.El cultivo intensivo comenzó a desarrollarse a finales de los años 60 y principios de los 70, cuando comenzaron a implantarse las variedades y técnicas de cultivo actualmente utilizadas.', 400, '9.00', '7.00', ''),
('FR-55', 'Olivo Cipresino', 'Frutales', 'Frutales Talavera S.A', 'Existen dos hipótesis sobre el origen del olivo, una que postula que proviene de las costas de Siria, Líbano e Israel y otra que considera que lo considera originario de Asia menor. La llegada a Europa probablemente tuvo lugar de mano de los Fenicios, en transito por Chipre, Creta, e Islas del Mar Egeo, pasando a Grecia y más tarde a Italia. Los primeros indicios de la presencia del olivo en las costas mediterráneas españolas coinciden con el dominio romano, aunque fueron posteriormente los árabes los que impulsaron su cultivo en Andalucía, convirtiendo a España en el primer país productor de aceite de oliva a nivel mundial.', 400, '8.00', '6.00', ''),
('FR-56', 'Nectarina', 'Frutales', 'Frutales Talavera S.A', '', 400, '8.00', '6.00', ''),
('FR-57', 'Kaki Rojo Brillante', 'Frutales', 'NaranjasValencianas.com', 'De crecimiento algo lento los primeros años, llega a alcanzar hasta doce metros de altura o más, aunque en cultivo se prefiere algo más bajo (5-6). Tronco corto y copa extendida. Ramifica muy poco debido a la dominancia apical. Porte más o menos piramidal, aunque con la edad se hace más globoso.', 400, '9.00', '7.00', ''),
('FR-58', 'Albaricoquero', 'Frutales', 'Melocotones de Cieza S.A.', 'árbol que puede pasar de los 6 m de altura, en la región mediterránea con ramas formando una copa redondeada. La corteza del tronco es pardo-violácea, agrietada; las ramas son rojizas y extendidas cuando jóvenes y las ramas secundarias son cortas, divergentes y escasas. Las yemas latentes son frecuentes especialmente sobre las ramas viejas.', 200, '11.00', '8.00', ''),
('FR-59', 'Albaricoquero', 'Frutales', 'Melocotones de Cieza S.A.', 'árbol que puede pasar de los 6 m de altura, en la región mediterránea con ramas formando una copa redondeada. La corteza del tronco es pardo-violácea, agrietada; las ramas son rojizas y extendidas cuando jóvenes y las ramas secundarias son cortas, divergentes y escasas. Las yemas latentes son frecuentes especialmente sobre las ramas viejas.', 200, '22.00', '17.00', ''),
('FR-6', 'Mandarino 2 años injerto', 'Frutales', 'Frutales Talavera S.A', '', 15, '7.00', '5.00', ''),
('FR-60', 'Albaricoquero', 'Frutales', 'Melocotones de Cieza S.A.', 'árbol que puede pasar de los 6 m de altura, en la región mediterránea con ramas formando una copa redondeada. La corteza del tronco es pardo-violácea, agrietada; las ramas son rojizas y extendidas cuando jóvenes y las ramas secundarias son cortas, divergentes y escasas. Las yemas latentes son frecuentes especialmente sobre las ramas viejas.', 200, '32.00', '25.00', ''),
('FR-61', 'Albaricoquero', 'Frutales', 'Melocotones de Cieza S.A.', 'árbol que puede pasar de los 6 m de altura, en la región mediterránea con ramas formando una copa redondeada. La corteza del tronco es pardo-violácea, agrietada; las ramas son rojizas y extendidas cuando jóvenes y las ramas secundarias son cortas, divergentes y escasas. Las yemas latentes son frecuentes especialmente sobre las ramas viejas.', 200, '49.00', '39.00', ''),
('FR-62', 'Albaricoquero', 'Frutales', 'Melocotones de Cieza S.A.', 'árbol que puede pasar de los 6 m de altura, en la región mediterránea con ramas formando una copa redondeada. La corteza del tronco es pardo-violácea, agrietada; las ramas son rojizas y extendidas cuando jóvenes y las ramas secundarias son cortas, divergentes y escasas. Las yemas latentes son frecuentes especialmente sobre las ramas viejas.', 200, '70.00', '56.00', ''),
('FR-63', 'Cerezo', 'Frutales', 'Jerte Distribuciones S.L.', 'Las principales especies de cerezo cultivadas en el mundo son el cerezo dulce (Prunus avium), el guindo (P. cerasus) y el cerezo \"Duke\", híbrido de los anteriores. Ambas especies son naturales del sureste de Europa y oeste de Asia. El cerezo dulce tuvo su origen probablemente en el mar Negro y en el mar Caspio, difundiéndose después hacia Europa y Asia, llevado por los pájaros y las migraciones humanas. Fue uno de los frutales más apreciados por los griegos y con el Imperio Romano se extendió a regiones muy diversas. En la actualidad, el cerezo se encuentra difundido por numerosas regiones y países del mundo con clima templado', 300, '11.00', '8.00', ''),
('FR-64', 'Cerezo', 'Frutales', 'Jerte Distribuciones S.L.', 'Las principales especies de cerezo cultivadas en el mundo son el cerezo dulce (Prunus avium), el guindo (P. cerasus) y el cerezo \"Duke\", híbrido de los anteriores. Ambas especies son naturales del sureste de Europa y oeste de Asia. El cerezo dulce tuvo su origen probablemente en el mar Negro y en el mar Caspio, difundiéndose después hacia Europa y Asia, llevado por los pájaros y las migraciones humanas. Fue uno de los frutales más apreciados por los griegos y con el Imperio Romano se extendió a regiones muy diversas. En la actualidad, el cerezo se encuentra difundido por numerosas regiones y países del mundo con clima templado', 15, '22.00', '17.00', ''),
('FR-65', 'Cerezo', 'Frutales', 'Jerte Distribuciones S.L.', 'Las principales especies de cerezo cultivadas en el mundo son el cerezo dulce (Prunus avium), el guindo (P. cerasus) y el cerezo \"Duke\", híbrido de los anteriores. Ambas especies son naturales del sureste de Europa y oeste de Asia. El cerezo dulce tuvo su origen probablemente en el mar Negro y en el mar Caspio, difundiéndose después hacia Europa y Asia, llevado por los pájaros y las migraciones humanas. Fue uno de los frutales más apreciados por los griegos y con el Imperio Romano se extendió a regiones muy diversas. En la actualidad, el cerezo se encuentra difundido por numerosas regiones y países del mundo con clima templado', 200, '32.00', '25.00', ''),
('FR-66', 'Cerezo', 'Frutales', 'Jerte Distribuciones S.L.', 'Las principales especies de cerezo cultivadas en el mundo son el cerezo dulce (Prunus avium), el guindo (P. cerasus) y el cerezo \"Duke\", híbrido de los anteriores. Ambas especies son naturales del sureste de Europa y oeste de Asia. El cerezo dulce tuvo su origen probablemente en el mar Negro y en el mar Caspio, difundiéndose después hacia Europa y Asia, llevado por los pájaros y las migraciones humanas. Fue uno de los frutales más apreciados por los griegos y con el Imperio Romano se extendió a regiones muy diversas. En la actualidad, el cerezo se encuentra difundido por numerosas regiones y países del mundo con clima templado', 50, '49.00', '39.00', ''),
('FR-67', 'Cerezo', 'Frutales', 'Jerte Distribuciones S.L.', 'Las principales especies de cerezo cultivadas en el mundo son el cerezo dulce (Prunus avium), el guindo (P. cerasus) y el cerezo \"Duke\", híbrido de los anteriores. Ambas especies son naturales del sureste de Europa y oeste de Asia. El cerezo dulce tuvo su origen probablemente en el mar Negro y en el mar Caspio, difundiéndose después hacia Europa y Asia, llevado por los pájaros y las migraciones humanas. Fue uno de los frutales más apreciados por los griegos y con el Imperio Romano se extendió a regiones muy diversas. En la actualidad, el cerezo se encuentra difundido por numerosas regiones y países del mundo con clima templado', 50, '70.00', '56.00', ''),
('FR-68', 'Cerezo', 'Frutales', 'Jerte Distribuciones S.L.', 'Las principales especies de cerezo cultivadas en el mundo son el cerezo dulce (Prunus avium), el guindo (P. cerasus) y el cerezo \"Duke\", híbrido de los anteriores. Ambas especies son naturales del sureste de Europa y oeste de Asia. El cerezo dulce tuvo su origen probablemente en el mar Negro y en el mar Caspio, difundiéndose después hacia Europa y Asia, llevado por los pájaros y las migraciones humanas. Fue uno de los frutales más apreciados por los griegos y con el Imperio Romano se extendió a regiones muy diversas. En la actualidad, el cerezo se encuentra difundido por numerosas regiones y países del mundo con clima templado', 50, '80.00', '64.00', ''),
('FR-69', 'Cerezo', 'Frutales', 'Jerte Distribuciones S.L.', 'Las principales especies de cerezo cultivadas en el mundo son el cerezo dulce (Prunus avium), el guindo (P. cerasus) y el cerezo \"Duke\", híbrido de los anteriores. Ambas especies son naturales del sureste de Europa y oeste de Asia. El cerezo dulce tuvo su origen probablemente en el mar Negro y en el mar Caspio, difundiéndose después hacia Europa y Asia, llevado por los pájaros y las migraciones humanas. Fue uno de los frutales más apreciados por los griegos y con el Imperio Romano se extendió a regiones muy diversas. En la actualidad, el cerezo se encuentra difundido por numerosas regiones y países del mundo con clima templado', 50, '91.00', '72.00', ''),
('FR-7', 'Mandarino calibre 8/10', 'Frutales', 'Frutales Talavera S.A', '', 15, '29.00', '23.00', ''),
('FR-70', 'Ciruelo', 'Frutales', 'Frutales Talavera S.A', 'árbol de tamaño mediano que alcanza una altura máxima de 5-6 m. Tronco de corteza pardo-azulada, brillante, lisa o agrietada longitudinalmente. Produce ramas alternas, pequeñas, delgadas, unas veces lisas, glabras y otras pubescentes y vellosas', 50, '11.00', '8.00', ''),
('FR-71', 'Ciruelo', 'Frutales', 'Frutales Talavera S.A', 'árbol de tamaño mediano que alcanza una altura máxima de 5-6 m. Tronco de corteza pardo-azulada, brillante, lisa o agrietada longitudinalmente. Produce ramas alternas, pequeñas, delgadas, unas veces lisas, glabras y otras pubescentes y vellosas', 50, '22.00', '17.00', ''),
('FR-72', 'Ciruelo', 'Frutales', 'Frutales Talavera S.A', 'árbol de tamaño mediano que alcanza una altura máxima de 5-6 m. Tronco de corteza pardo-azulada, brillante, lisa o agrietada longitudinalmente. Produce ramas alternas, pequeñas, delgadas, unas veces lisas, glabras y otras pubescentes y vellosas', 50, '32.00', '25.00', ''),
('FR-73', 'Granado', 'Frutales', 'Frutales Talavera S.A', 'pequeño árbol caducifolio, a veces con porte arbustivo, de 3 a 6 m de altura, con el tronco retorcido. Madera dura y corteza escamosa de color grisáceo. Las ramitas jóvenes son más o menos cuadrangulares o angostas y de cuatro alas, posteriormente se vuelven redondas con corteza de color café grisáceo, la mayoría de las ramas, pero especialmente las pequeñas ramitas axilares, son en forma de espina o terminan en una espina aguda; la copa es extendida.', 50, '13.00', '10.00', ''),
('FR-74', 'Granado', 'Frutales', 'Frutales Talavera S.A', 'pequeño árbol caducifolio, a veces con porte arbustivo, de 3 a 6 m de altura, con el tronco retorcido. Madera dura y corteza escamosa de color grisáceo. Las ramitas jóvenes son más o menos cuadrangulares o angostas y de cuatro alas, posteriormente se vuelven redondas con corteza de color café grisáceo, la mayoría de las ramas, pero especialmente las pequeñas ramitas axilares, son en forma de espina o terminan en una espina aguda; la copa es extendida.', 50, '22.00', '17.00', ''),
('FR-75', 'Granado', 'Frutales', 'Frutales Talavera S.A', 'pequeño árbol caducifolio, a veces con porte arbustivo, de 3 a 6 m de altura, con el tronco retorcido. Madera dura y corteza escamosa de color grisáceo. Las ramitas jóvenes son más o menos cuadrangulares o angostas y de cuatro alas, posteriormente se vuelven redondas con corteza de color café grisáceo, la mayoría de las ramas, pero especialmente las pequeñas ramitas axilares, son en forma de espina o terminan en una espina aguda; la copa es extendida.', 50, '32.00', '25.00', ''),
('FR-76', 'Granado', 'Frutales', 'Frutales Talavera S.A', 'pequeño árbol caducifolio, a veces con porte arbustivo, de 3 a 6 m de altura, con el tronco retorcido. Madera dura y corteza escamosa de color grisáceo. Las ramitas jóvenes son más o menos cuadrangulares o angostas y de cuatro alas, posteriormente se vuelven redondas con corteza de color café grisáceo, la mayoría de las ramas, pero especialmente las pequeñas ramitas axilares, son en forma de espina o terminan en una espina aguda; la copa es extendida.', 50, '49.00', '39.00', ''),
('FR-77', 'Granado', 'Frutales', 'Frutales Talavera S.A', 'pequeño árbol caducifolio, a veces con porte arbustivo, de 3 a 6 m de altura, con el tronco retorcido. Madera dura y corteza escamosa de color grisáceo. Las ramitas jóvenes son más o menos cuadrangulares o angostas y de cuatro alas, posteriormente se vuelven redondas con corteza de color café grisáceo, la mayoría de las ramas, pero especialmente las pequeñas ramitas axilares, son en forma de espina o terminan en una espina aguda; la copa es extendida.', 50, '70.00', '56.00', ''),
('FR-78', 'Higuera', 'Frutales', 'Frutales Talavera S.A', 'La higuera (Ficus carica L.) es un árbol típico de secano en los países mediterráneos. Su rusticidad y su fácil multiplicación hacen de la higuera un frutal muy apropiado para el cultivo extensivo.. Siempre ha sido considerado como árbol que no requiere cuidado alguno una vez plantado y arraigado, limitándose el hombre a recoger de él los frutos cuando maduran, unos para consumo en fresco y otros para conserva. Las únicas higueras con cuidados culturales esmerados, en muchas comarcas, son las brevales, por el interés económico de su primera cosecha, la de brevas.', 50, '15.00', '12.00', ''),
('FR-79', 'Higuera', 'Frutales', 'Frutales Talavera S.A', 'La higuera (Ficus carica L.) es un árbol típico de secano en los países mediterráneos. Su rusticidad y su fácil multiplicación hacen de la higuera un frutal muy apropiado para el cultivo extensivo.. Siempre ha sido considerado como árbol que no requiere cuidado alguno una vez plantado y arraigado, limitándose el hombre a recoger de él los frutos cuando maduran, unos para consumo en fresco y otros para conserva. Las únicas higueras con cuidados culturales esmerados, en muchas comarcas, son las brevales, por el interés económico de su primera cosecha, la de brevas.', 50, '22.00', '17.00', ''),
('FR-8', 'Limonero -Plantón joven', 'Frutales', 'NaranjasValencianas.com', 'El limonero, pertenece al grupo de los cítricos, teniendo su origen hace unos 20 millones de años en el sudeste asiático. Fue introducido por los árabes en el área mediterránea entre los años 1.000 a 1.200, habiendo experimentando numerosas modificaciones debidas tanto a la selección natural mediante hibridaciones espontáneas como a las producidas por el', 15, '6.00', '4.00', '');
INSERT INTO `productos` (`CodigoProducto`, `Nombre`, `Gama`, `Proveedor`, `Descripcion`, `CantidadEnStock`, `PrecioVenta`, `PrecioProveedor`, `imagen`) VALUES
('FR-80', 'Higuera', 'Frutales', 'Frutales Talavera S.A', 'La higuera (Ficus carica L.) es un árbol típico de secano en los países mediterráneos. Su rusticidad y su fácil multiplicación hacen de la higuera un frutal muy apropiado para el cultivo extensivo.. Siempre ha sido considerado como árbol que no requiere cuidado alguno una vez plantado y arraigado, limitándose el hombre a recoger de él los frutos cuando maduran, unos para consumo en fresco y otros para conserva. Las únicas higueras con cuidados culturales esmerados, en muchas comarcas, son las brevales, por el interés económico de su primera cosecha, la de brevas.', 50, '32.00', '25.00', ''),
('FR-81', 'Higuera', 'Frutales', 'Frutales Talavera S.A', 'La higuera (Ficus carica L.) es un árbol típico de secano en los países mediterráneos. Su rusticidad y su fácil multiplicación hacen de la higuera un frutal muy apropiado para el cultivo extensivo.. Siempre ha sido considerado como árbol que no requiere cuidado alguno una vez plantado y arraigado, limitándose el hombre a recoger de él los frutos cuando maduran, unos para consumo en fresco y otros para conserva. Las únicas higueras con cuidados culturales esmerados, en muchas comarcas, son las brevales, por el interés económico de su primera cosecha, la de brevas.', 50, '49.00', '39.00', ''),
('FR-82', 'Higuera', 'Frutales', 'Frutales Talavera S.A', 'La higuera (Ficus carica L.) es un árbol típico de secano en los países mediterráneos. Su rusticidad y su fácil multiplicación hacen de la higuera un frutal muy apropiado para el cultivo extensivo.. Siempre ha sido considerado como árbol que no requiere cuidado alguno una vez plantado y arraigado, limitándose el hombre a recoger de él los frutos cuando maduran, unos para consumo en fresco y otros para conserva. Las únicas higueras con cuidados culturales esmerados, en muchas comarcas, son las brevales, por el interés económico de su primera cosecha, la de brevas.', 50, '70.00', '56.00', ''),
('FR-83', 'Higuera', 'Frutales', 'Frutales Talavera S.A', 'La higuera (Ficus carica L.) es un árbol típico de secano en los países mediterráneos. Su rusticidad y su fácil multiplicación hacen de la higuera un frutal muy apropiado para el cultivo extensivo.. Siempre ha sido considerado como árbol que no requiere cuidado alguno una vez plantado y arraigado, limitándose el hombre a recoger de él los frutos cuando maduran, unos para consumo en fresco y otros para conserva. Las únicas higueras con cuidados culturales esmerados, en muchas comarcas, son las brevales, por el interés económico de su primera cosecha, la de brevas.', 50, '80.00', '64.00', ''),
('FR-84', 'Kaki', 'Frutales', 'NaranjasValencianas.com', 'De crecimiento algo lento los primeros años, llega a alcanzar hasta doce metros de altura o más, aunque en cultivo se prefiere algo más bajo (5-6). Tronco corto y copa extendida. Ramifica muy poco debido a la dominancia apical. Porte más o menos piramidal, aunque con la edad se hace más globoso.', 50, '13.00', '10.00', ''),
('FR-85', 'Kaki', 'Frutales', 'NaranjasValencianas.com', 'De crecimiento algo lento los primeros años, llega a alcanzar hasta doce metros de altura o más, aunque en cultivo se prefiere algo más bajo (5-6). Tronco corto y copa extendida. Ramifica muy poco debido a la dominancia apical. Porte más o menos piramidal, aunque con la edad se hace más globoso.', 50, '70.00', '56.00', ''),
('FR-86', 'Manzano', 'Frutales', 'Frutales Talavera S.A', 'alcanza como máximo 10 m. de altura y tiene una copa globosa. Tronco derecho que normalmente alcanza de 2 a 2,5 m. de altura, con corteza cubierta de lenticelas, lisa, adherida, de color ceniciento verdoso sobre los ramos y escamosa y gris parda sobre las partes viejas del árbol. Tiene una vida de unos 60-80 años. Las ramas se insertan en ángulo abierto sobre el tallo, de color verde oscuro, a veces tendiendo a negruzco o violáceo. Los brotes jóvenes terminan con frecuencia en una espina', 50, '11.00', '8.00', ''),
('FR-87', 'Manzano', 'Frutales', 'Frutales Talavera S.A', 'alcanza como máximo 10 m. de altura y tiene una copa globosa. Tronco derecho que normalmente alcanza de 2 a 2,5 m. de altura, con corteza cubierta de lenticelas, lisa, adherida, de color ceniciento verdoso sobre los ramos y escamosa y gris parda sobre las partes viejas del árbol. Tiene una vida de unos 60-80 años. Las ramas se insertan en ángulo abierto sobre el tallo, de color verde oscuro, a veces tendiendo a negruzco o violáceo. Los brotes jóvenes terminan con frecuencia en una espina', 50, '22.00', '17.00', ''),
('FR-88', 'Manzano', 'Frutales', 'Frutales Talavera S.A', 'alcanza como máximo 10 m. de altura y tiene una copa globosa. Tronco derecho que normalmente alcanza de 2 a 2,5 m. de altura, con corteza cubierta de lenticelas, lisa, adherida, de color ceniciento verdoso sobre los ramos y escamosa y gris parda sobre las partes viejas del árbol. Tiene una vida de unos 60-80 años. Las ramas se insertan en ángulo abierto sobre el tallo, de color verde oscuro, a veces tendiendo a negruzco o violáceo. Los brotes jóvenes terminan con frecuencia en una espina', 50, '32.00', '25.00', ''),
('FR-89', 'Manzano', 'Frutales', 'Frutales Talavera S.A', 'alcanza como máximo 10 m. de altura y tiene una copa globosa. Tronco derecho que normalmente alcanza de 2 a 2,5 m. de altura, con corteza cubierta de lenticelas, lisa, adherida, de color ceniciento verdoso sobre los ramos y escamosa y gris parda sobre las partes viejas del árbol. Tiene una vida de unos 60-80 años. Las ramas se insertan en ángulo abierto sobre el tallo, de color verde oscuro, a veces tendiendo a negruzco o violáceo. Los brotes jóvenes terminan con frecuencia en una espina', 50, '49.00', '39.00', ''),
('FR-9', 'Limonero calibre 8/10', 'Frutales', 'NaranjasValencianas.com', 'El limonero, pertenece al grupo de los cítricos, teniendo su origen hace unos 20 millones de años en el sudeste asiático. Fue introducido por los árabes en el área mediterránea entre los años 1.000 a 1.200, habiendo experimentando numerosas modificaciones debidas tanto a la selección natural mediante hibridaciones espontáneas como a las producidas por el', 15, '29.00', '23.00', ''),
('FR-90', 'Níspero', 'Frutales', 'Frutales Talavera S.A', 'Aunque originario del Sudeste de China, el níspero llegó a Europa procedente de Japón en el siglo XVIII como árbol ornamental. En el siglo XIX se inició el consumo de los frutos en toda el área mediterránea, donde se adaptó muy bien a las zonas de cultivo de los cítricos.El cultivo intensivo comenzó a desarrollarse a finales de los años 60 y principios de los 70, cuando comenzaron a implantarse las variedades y técnicas de cultivo actualmente utilizadas.', 50, '70.00', '56.00', ''),
('FR-91', 'Níspero', 'Frutales', 'Frutales Talavera S.A', 'Aunque originario del Sudeste de China, el níspero llegó a Europa procedente de Japón en el siglo XVIII como árbol ornamental. En el siglo XIX se inició el consumo de los frutos en toda el área mediterránea, donde se adaptó muy bien a las zonas de cultivo de los cítricos.El cultivo intensivo comenzó a desarrollarse a finales de los años 60 y principios de los 70, cuando comenzaron a implantarse las variedades y técnicas de cultivo actualmente utilizadas.', 50, '80.00', '64.00', ''),
('FR-92', 'Melocotonero', 'Frutales', 'Melocotones de Cieza S.A.', 'Árbol caducifolio de porte bajo con corteza lisa, de color ceniciento. Sus hojas son alargadas con el margen ligeramente aserrado, de color verde brillante, algo más claras por el envés. El melocotonero está muy arraigado en la cultura asiática.\r\nEn Japón, el noble heroe Momotaro, una especie de Cid japonés, nació del interior de un enorme melocotón que flotaba río abajo.\r\nEn China se piensa que comer melocotón confiere longevidad al ser humano, ya que formaba parte de la dieta de sus dioses inmortales.', 50, '11.00', '8.00', ''),
('FR-93', 'Melocotonero', 'Frutales', 'Melocotones de Cieza S.A.', 'Árbol caducifolio de porte bajo con corteza lisa, de color ceniciento. Sus hojas son alargadas con el margen ligeramente aserrado, de color verde brillante, algo más claras por el envés. El melocotonero está muy arraigado en la cultura asiática.\r\nEn Japón, el noble heroe Momotaro, una especie de Cid japonés, nació del interior de un enorme melocotón que flotaba río abajo.\r\nEn China se piensa que comer melocotón confiere longevidad al ser humano, ya que formaba parte de la dieta de sus dioses inmortales.', 50, '22.00', '17.00', ''),
('FR-94', 'Melocotonero', 'Frutales', 'Melocotones de Cieza S.A.', 'Árbol caducifolio de porte bajo con corteza lisa, de color ceniciento. Sus hojas son alargadas con el margen ligeramente aserrado, de color verde brillante, algo más claras por el envés. El melocotonero está muy arraigado en la cultura asiática.\r\nEn Japón, el noble heroe Momotaro, una especie de Cid japonés, nació del interior de un enorme melocotón que flotaba río abajo.\r\nEn China se piensa que comer melocotón confiere longevidad al ser humano, ya que formaba parte de la dieta de sus dioses inmortales.', 50, '32.00', '25.00', ''),
('FR-95', 'Melocotonero', 'Frutales', 'Melocotones de Cieza S.A.', 'Árbol caducifolio de porte bajo con corteza lisa, de color ceniciento. Sus hojas son alargadas con el margen ligeramente aserrado, de color verde brillante, algo más claras por el envés. El melocotonero está muy arraigado en la cultura asiática.\r\nEn Japón, el noble heroe Momotaro, una especie de Cid japonés, nació del interior de un enorme melocotón que flotaba río abajo.\r\nEn China se piensa que comer melocotón confiere longevidad al ser humano, ya que formaba parte de la dieta de sus dioses inmortales.', 50, '49.00', '39.00', ''),
('FR-96', 'Membrillero', 'Frutales', 'Frutales Talavera S.A', 'arbolito caducifolio de 4-6 m de altura con el tronco tortuoso y la corteza lisa, grisácea, que se desprende en escamas con la edad. Copa irregular, con ramas inermes, flexuosas, parduzcas, punteadas. Ramillas jóvenes tomentosas', 50, '11.00', '8.00', ''),
('FR-97', 'Membrillero', 'Frutales', 'Frutales Talavera S.A', 'arbolito caducifolio de 4-6 m de altura con el tronco tortuoso y la corteza lisa, grisácea, que se desprende en escamas con la edad. Copa irregular, con ramas inermes, flexuosas, parduzcas, punteadas. Ramillas jóvenes tomentosas', 50, '22.00', '17.00', ''),
('FR-98', 'Membrillero', 'Frutales', 'Frutales Talavera S.A', 'arbolito caducifolio de 4-6 m de altura con el tronco tortuoso y la corteza lisa, grisácea, que se desprende en escamas con la edad. Copa irregular, con ramas inermes, flexuosas, parduzcas, punteadas. Ramillas jóvenes tomentosas', 50, '32.00', '25.00', ''),
('FR-99', 'Membrillero', 'Frutales', 'Frutales Talavera S.A', 'arbolito caducifolio de 4-6 m de altura con el tronco tortuoso y la corteza lisa, grisácea, que se desprende en escamas con la edad. Copa irregular, con ramas inermes, flexuosas, parduzcas, punteadas. Ramillas jóvenes tomentosas', 50, '49.00', '39.00', ''),
('OR-001', 'Arbustos Mix Maceta', 'Ornamentales', 'Valencia Garden Service', '', 25, '5.00', '4.00', ''),
('OR-100', 'Mimosa Injerto CLASICA Dealbata ', 'Ornamentales', 'Viveros EL OASIS', 'Acacia dealbata. Nombre común o vulgar: Mimosa fina, Mimosa, Mimosa común, Mimosa plateada, Aromo francés. Familia: Mimosaceae. Origen: Australia, Sureste, (N. G. del Sur y Victoria). Arbol de follaje persistente muy usado en parques por su atractiva floración amarilla hacia fines del invierno. Altura: de 3 a 10 metros generalmente. Crecimiento rápido. Follaje perenne de tonos plateados, muy ornamental. Sus hojas son de textura fina, de color verde y sus flores amarillas que aparecen en racimos grandes. Florece de Enero a Marzo (Hemisferio Norte). Legumbre de 5-9 cm de longitud, recta o ligeramente curvada, con los bordes algo constreñidos entre las semillas, que se disponen en el fruto longitudinalmente...', 100, '12.00', '9.00', ''),
('OR-101', 'Expositor Mimosa Semilla Mix', 'Ornamentales', 'Viveros EL OASIS', 'Acacia dealbata. Nombre común o vulgar: Mimosa fina, Mimosa, Mimosa común, Mimosa plateada, Aromo francés. Familia: Mimosaceae. Origen: Australia, Sureste, (N. G. del Sur y Victoria). Arbol de follaje persistente muy usado en parques por su atractiva floración amarilla hacia fines del invierno. Altura: de 3 a 10 metros generalmente. Crecimiento rápido. Follaje perenne de tonos plateados, muy ornamental. Sus hojas son de textura fina, de color verde y sus flores amarillas que aparecen en racimos grandes. Florece de Enero a Marzo (Hemisferio Norte). Legumbre de 5-9 cm de longitud, recta o ligeramente curvada, con los bordes algo constreñidos entre las semillas, que se disponen en el fruto longitudinalmente...', 100, '6.00', '4.00', ''),
('OR-102', 'Mimosa Semilla Bayleyana  ', 'Ornamentales', 'Viveros EL OASIS', 'Acacia dealbata. Nombre común o vulgar: Mimosa fina, Mimosa, Mimosa común, Mimosa plateada, Aromo francés. Familia: Mimosaceae. Origen: Australia, Sureste, (N. G. del Sur y Victoria). Arbol de follaje persistente muy usado en parques por su atractiva floración amarilla hacia fines del invierno. Altura: de 3 a 10 metros generalmente. Crecimiento rápido. Follaje perenne de tonos plateados, muy ornamental. Sus hojas son de textura fina, de color verde y sus flores amarillas que aparecen en racimos grandes. Florece de Enero a Marzo (Hemisferio Norte). Legumbre de 5-9 cm de longitud, recta o ligeramente curvada, con los bordes algo constreñidos entre las semillas, que se disponen en el fruto longitudinalmente...', 100, '6.00', '4.00', ''),
('OR-103', 'Mimosa Semilla Bayleyana   ', 'Ornamentales', 'Viveros EL OASIS', 'Acacia dealbata. Nombre común o vulgar: Mimosa fina, Mimosa, Mimosa común, Mimosa plateada, Aromo francés. Familia: Mimosaceae. Origen: Australia, Sureste, (N. G. del Sur y Victoria). Arbol de follaje persistente muy usado en parques por su atractiva floración amarilla hacia fines del invierno. Altura: de 3 a 10 metros generalmente. Crecimiento rápido. Follaje perenne de tonos plateados, muy ornamental. Sus hojas son de textura fina, de color verde y sus flores amarillas que aparecen en racimos grandes. Florece de Enero a Marzo (Hemisferio Norte). Legumbre de 5-9 cm de longitud, recta o ligeramente curvada, con los bordes algo constreñidos entre las semillas, que se disponen en el fruto longitudinalmente...', 100, '10.00', '8.00', ''),
('OR-104', 'Mimosa Semilla Cyanophylla    ', 'Ornamentales', 'Viveros EL OASIS', 'Acacia dealbata. Nombre común o vulgar: Mimosa fina, Mimosa, Mimosa común, Mimosa plateada, Aromo francés. Familia: Mimosaceae. Origen: Australia, Sureste, (N. G. del Sur y Victoria). Arbol de follaje persistente muy usado en parques por su atractiva floración amarilla hacia fines del invierno. Altura: de 3 a 10 metros generalmente. Crecimiento rápido. Follaje perenne de tonos plateados, muy ornamental. Sus hojas son de textura fina, de color verde y sus flores amarillas que aparecen en racimos grandes. Florece de Enero a Marzo (Hemisferio Norte). Legumbre de 5-9 cm de longitud, recta o ligeramente curvada, con los bordes algo constreñidos entre las semillas, que se disponen en el fruto longitudinalmente...', 100, '10.00', '8.00', ''),
('OR-105', 'Mimosa Semilla Espectabilis  ', 'Ornamentales', 'Viveros EL OASIS', 'Acacia dealbata. Nombre común o vulgar: Mimosa fina, Mimosa, Mimosa común, Mimosa plateada, Aromo francés. Familia: Mimosaceae. Origen: Australia, Sureste, (N. G. del Sur y Victoria). Arbol de follaje persistente muy usado en parques por su atractiva floración amarilla hacia fines del invierno. Altura: de 3 a 10 metros generalmente. Crecimiento rápido. Follaje perenne de tonos plateados, muy ornamental. Sus hojas son de textura fina, de color verde y sus flores amarillas que aparecen en racimos grandes. Florece de Enero a Marzo (Hemisferio Norte). Legumbre de 5-9 cm de longitud, recta o ligeramente curvada, con los bordes algo constreñidos entre las semillas, que se disponen en el fruto longitudinalmente...', 100, '6.00', '4.00', ''),
('OR-106', 'Mimosa Semilla Longifolia   ', 'Ornamentales', 'Viveros EL OASIS', 'Acacia dealbata. Nombre común o vulgar: Mimosa fina, Mimosa, Mimosa común, Mimosa plateada, Aromo francés. Familia: Mimosaceae. Origen: Australia, Sureste, (N. G. del Sur y Victoria). Arbol de follaje persistente muy usado en parques por su atractiva floración amarilla hacia fines del invierno. Altura: de 3 a 10 metros generalmente. Crecimiento rápido. Follaje perenne de tonos plateados, muy ornamental. Sus hojas son de textura fina, de color verde y sus flores amarillas que aparecen en racimos grandes. Florece de Enero a Marzo (Hemisferio Norte). Legumbre de 5-9 cm de longitud, recta o ligeramente curvada, con los bordes algo constreñidos entre las semillas, que se disponen en el fruto longitudinalmente...', 100, '10.00', '8.00', ''),
('OR-107', 'Mimosa Semilla Floribunda 4 estaciones', 'Ornamentales', 'Viveros EL OASIS', 'Acacia dealbata. Nombre común o vulgar: Mimosa fina, Mimosa, Mimosa común, Mimosa plateada, Aromo francés. Familia: Mimosaceae. Origen: Australia, Sureste, (N. G. del Sur y Victoria). Arbol de follaje persistente muy usado en parques por su atractiva floración amarilla hacia fines del invierno. Altura: de 3 a 10 metros generalmente. Crecimiento rápido. Follaje perenne de tonos plateados, muy ornamental. Sus hojas son de textura fina, de color verde y sus flores amarillas que aparecen en racimos grandes. Florece de Enero a Marzo (Hemisferio Norte). Legumbre de 5-9 cm de longitud, recta o ligeramente curvada, con los bordes algo constreñidos entre las semillas, que se disponen en el fruto longitudinalmente...', 100, '6.00', '4.00', ''),
('OR-108', 'Abelia Floribunda', 'Ornamentales', 'Viveros EL OASIS', '', 100, '5.00', '4.00', ''),
('OR-109', 'Callistemom (Mix)', 'Ornamentales', 'Viveros EL OASIS', 'Limpitatubos. arbolito de 6-7 m de altura. Ramas flexibles y colgantes (de ahí lo de \"llorón\")..', 100, '5.00', '4.00', ''),
('OR-110', 'Callistemom (Mix)', 'Ornamentales', 'Viveros EL OASIS', 'Limpitatubos. arbolito de 6-7 m de altura. Ramas flexibles y colgantes (de ahí lo de \"llorón\")..', 100, '2.00', '1.00', ''),
('OR-111', 'Corylus Avellana \"Contorta\"', 'Ornamentales', 'Viveros EL OASIS', '', 100, '5.00', '4.00', ''),
('OR-112', 'Escallonia (Mix)', 'Ornamentales', 'Viveros EL OASIS', '', 120, '5.00', '4.00', ''),
('OR-113', 'Evonimus Emerald Gayeti', 'Ornamentales', 'Viveros EL OASIS', '', 120, '5.00', '4.00', ''),
('OR-114', 'Evonimus Pulchellus', 'Ornamentales', 'Viveros EL OASIS', '', 120, '5.00', '4.00', ''),
('OR-115', 'Forsytia Intermedia \"Lynwood\"', 'Ornamentales', 'Viveros EL OASIS', '', 120, '7.00', '5.00', ''),
('OR-116', 'Hibiscus Syriacus  \"Diana\" -Blanco Puro', 'Ornamentales', 'Viveros EL OASIS', 'Por su capacidad de soportar podas, pueden ser fácilmente moldeadas como bonsái en el transcurso de pocos años. Flores de muchos colores según la variedad, desde el blanco puro al rojo intenso, del amarillo al anaranjado. La flor apenas dura 1 día, pero continuamente aparecen nuevas y la floración se prolonga durante todo el periodo de crecimiento vegetativo.', 120, '7.00', '5.00', ''),
('OR-117', 'Hibiscus Syriacus  \"Helene\" -Blanco-C.rojo', 'Ornamentales', 'Viveros EL OASIS', 'Por su capacidad de soportar podas, pueden ser fácilmente moldeadas como bonsái en el transcurso de pocos años. Flores de muchos colores según la variedad, desde el blanco puro al rojo intenso, del amarillo al anaranjado. La flor apenas dura 1 día, pero continuamente aparecen nuevas y la floración se prolonga durante todo el periodo de crecimiento vegetativo.', 120, '7.00', '5.00', ''),
('OR-118', 'Hibiscus Syriacus \"Pink Giant\" Rosa', 'Ornamentales', 'Viveros EL OASIS', 'Por su capacidad de soportar podas, pueden ser fácilmente moldeadas como bonsái en el transcurso de pocos años. Flores de muchos colores según la variedad, desde el blanco puro al rojo intenso, del amarillo al anaranjado. La flor apenas dura 1 día, pero continuamente aparecen nuevas y la floración se prolonga durante todo el periodo de crecimiento vegetativo.', 120, '7.00', '5.00', ''),
('OR-119', 'Laurus Nobilis Arbusto - Ramificado Bajo', 'Ornamentales', 'Viveros EL OASIS', '', 120, '5.00', '4.00', ''),
('OR-120', 'Lonicera Nitida ', 'Ornamentales', 'Viveros EL OASIS', '', 120, '5.00', '4.00', ''),
('OR-121', 'Lonicera Nitida \"Maigrum\"', 'Ornamentales', 'Viveros EL OASIS', '', 120, '5.00', '4.00', ''),
('OR-122', 'Lonicera Pileata', 'Ornamentales', 'Viveros EL OASIS', '', 120, '5.00', '4.00', ''),
('OR-123', 'Philadelphus \"Virginal\"', 'Ornamentales', 'Viveros EL OASIS', '', 120, '5.00', '4.00', ''),
('OR-124', 'Prunus pisardii  ', 'Ornamentales', 'Viveros EL OASIS', '', 120, '5.00', '4.00', ''),
('OR-125', 'Viburnum Tinus \"Eve Price\"', 'Ornamentales', 'Viveros EL OASIS', '', 120, '5.00', '4.00', ''),
('OR-126', 'Weigelia \"Bristol Ruby\"', 'Ornamentales', 'Viveros EL OASIS', '', 120, '5.00', '4.00', ''),
('OR-127', 'Camelia japonica', 'Ornamentales', 'Viveros EL OASIS', 'Arbusto excepcional por su floración otoñal, invernal o primaveral. Flores: Las flores son solitarias, aparecen en el ápice de cada rama, y son con una corola simple o doble, y comprendiendo varios colores. Suelen medir unos 7-12 cm de diÃ metro y tienen 5 sépalos y 5 pétalos. Estambres numerosos unidos en la mitad o en 2/3 de su longitud.', 50, '7.00', '5.00', ''),
('OR-128', 'Camelia japonica ejemplar', 'Ornamentales', 'Viveros EL OASIS', 'Arbusto excepcional por su floración otoñal, invernal o primaveral. Flores: Las flores son solitarias, aparecen en el ápice de cada rama, y son con una corola simple o doble, y comprendiendo varios colores. Suelen medir unos 7-12 cm de diÃ metro y tienen 5 sépalos y 5 pétalos. Estambres numerosos unidos en la mitad o en 2/3 de su longitud.', 50, '98.00', '78.00', ''),
('OR-129', 'Camelia japonica ejemplar', 'Ornamentales', 'Viveros EL OASIS', 'Arbusto excepcional por su floración otoñal, invernal o primaveral. Flores: Las flores son solitarias, aparecen en el ápice de cada rama, y son con una corola simple o doble, y comprendiendo varios colores. Suelen medir unos 7-12 cm de diÃ metro y tienen 5 sépalos y 5 pétalos. Estambres numerosos unidos en la mitad o en 2/3 de su longitud.', 50, '110.00', '88.00', ''),
('OR-130', 'Callistemom COPA', 'Ornamentales', 'Viveros EL OASIS', 'Limpitatubos. arbolito de 6-7 m de altura. Ramas flexibles y colgantes (de ahí lo de \"llorón\")..', 50, '18.00', '14.00', ''),
('OR-131', 'Leptospermum formado PIRAMIDE', 'Ornamentales', 'Viveros EL OASIS', '', 50, '18.00', '14.00', ''),
('OR-132', 'Leptospermum COPA', 'Ornamentales', 'Viveros EL OASIS', '', 50, '18.00', '14.00', ''),
('OR-133', 'Nerium oleander-CALIDAD \"GARDEN\"', 'Ornamentales', 'Viveros EL OASIS', '', 50, '2.00', '1.00', ''),
('OR-134', 'Nerium Oleander Arbusto GRANDE', 'Ornamentales', 'Viveros EL OASIS', '', 100, '38.00', '30.00', ''),
('OR-135', 'Nerium oleander COPA  Calibre 6/8', 'Ornamentales', 'Viveros EL OASIS', '', 100, '5.00', '4.00', ''),
('OR-136', 'Nerium oleander ARBOL Calibre 8/10', 'Ornamentales', 'Viveros EL OASIS', '', 100, '18.00', '14.00', ''),
('OR-137', 'ROSAL TREPADOR', 'Ornamentales', 'Viveros EL OASIS', '', 100, '4.00', '3.00', ''),
('OR-138', 'Camelia Blanco, Chrysler Rojo, Soraya Naranja, ', 'Ornamentales', 'Viveros EL OASIS', '', 100, '4.00', '3.00', ''),
('OR-139', 'Landora Amarillo, Rose Gaujard bicolor blanco-rojo', 'Ornamentales', 'Viveros EL OASIS', '', 100, '4.00', '3.00', ''),
('OR-140', 'Kordes Perfect bicolor rojo-amarillo, Roundelay rojo fuerte', 'Ornamentales', 'Viveros EL OASIS', '', 100, '4.00', '3.00', ''),
('OR-141', 'Pitimini rojo', 'Ornamentales', 'Viveros EL OASIS', '', 100, '4.00', '3.00', ''),
('OR-142', 'Solanum Jazminoide', 'Ornamentales', 'Viveros EL OASIS', '', 100, '2.00', '1.00', ''),
('OR-143', 'Wisteria Sinensis  azul, rosa, blanca', 'Ornamentales', 'Viveros EL OASIS', '', 100, '9.00', '7.00', ''),
('OR-144', 'Wisteria Sinensis INJERTADAS DECÃ“', 'Ornamentales', 'Viveros EL OASIS', '', 100, '12.00', '9.00', ''),
('OR-145', 'Bougamvillea Sanderiana Tutor', 'Ornamentales', 'Viveros EL OASIS', '', 100, '2.00', '1.00', ''),
('OR-146', 'Bougamvillea Sanderiana Tutor', 'Ornamentales', 'Viveros EL OASIS', '', 100, '4.00', '3.00', ''),
('OR-147', 'Bougamvillea Sanderiana Tutor', 'Ornamentales', 'Viveros EL OASIS', '', 100, '7.00', '5.00', ''),
('OR-148', 'Bougamvillea Sanderiana Espaldera', 'Ornamentales', 'Viveros EL OASIS', '', 100, '7.00', '5.00', ''),
('OR-149', 'Bougamvillea Sanderiana Espaldera', 'Ornamentales', 'Viveros EL OASIS', '', 100, '17.00', '13.00', ''),
('OR-150', 'Bougamvillea roja, naranja', 'Ornamentales', 'Viveros EL OASIS', '', 100, '2.00', '1.00', ''),
('OR-151', 'Bougamvillea Sanderiana, 3 tut. piramide', 'Ornamentales', 'Viveros EL OASIS', '', 100, '6.00', '4.00', ''),
('OR-152', 'Expositor Árboles clima continental', 'Ornamentales', 'Viveros EL OASIS', '', 100, '6.00', '4.00', ''),
('OR-153', 'Expositor Árboles clima mediterráneo', 'Ornamentales', 'Viveros EL OASIS', '', 100, '6.00', '4.00', ''),
('OR-154', 'Expositor Árboles borde del mar', 'Ornamentales', 'Viveros EL OASIS', '', 100, '6.00', '4.00', ''),
('OR-155', 'Acer Negundo  ', 'Ornamentales', 'Viveros EL OASIS', '', 100, '6.00', '4.00', ''),
('OR-156', 'Acer platanoides  ', 'Ornamentales', 'Viveros EL OASIS', '', 100, '10.00', '8.00', ''),
('OR-157', 'Acer Pseudoplatanus ', 'Ornamentales', 'Viveros EL OASIS', '', 100, '10.00', '8.00', ''),
('OR-158', 'Brachychiton Acerifolius  ', 'Ornamentales', 'Viveros EL OASIS', '', 100, '6.00', '4.00', ''),
('OR-159', 'Brachychiton Discolor  ', 'Ornamentales', 'Viveros EL OASIS', '', 100, '6.00', '4.00', ''),
('OR-160', 'Brachychiton Rupestris', 'Ornamentales', 'Viveros EL OASIS', '', 100, '10.00', '8.00', ''),
('OR-161', 'Cassia Corimbosa  ', 'Ornamentales', 'Viveros EL OASIS', '', 100, '6.00', '4.00', ''),
('OR-162', 'Cassia Corimbosa ', 'Ornamentales', 'Viveros EL OASIS', '', 100, '10.00', '8.00', ''),
('OR-163', 'Chitalpa Summer Bells   ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '10.00', '8.00', ''),
('OR-164', 'Erytrina Kafra', 'Ornamentales', 'Viveros EL OASIS', '', 80, '6.00', '4.00', ''),
('OR-165', 'Erytrina Kafra', 'Ornamentales', 'Viveros EL OASIS', '', 80, '10.00', '8.00', ''),
('OR-166', 'Eucalyptus Citriodora  ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '6.00', '4.00', ''),
('OR-167', 'Eucalyptus Ficifolia  ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '6.00', '4.00', ''),
('OR-168', 'Eucalyptus Ficifolia   ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '10.00', '8.00', ''),
('OR-169', 'Hibiscus Syriacus  Var. Injertadas 1 Tallo ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '12.00', '9.00', ''),
('OR-170', 'Lagunaria Patersonii  ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '6.00', '4.00', ''),
('OR-171', 'Lagunaria Patersonii   ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '10.00', '8.00', ''),
('OR-172', 'Lagunaria patersonii  calibre 8/10', 'Ornamentales', 'Viveros EL OASIS', '', 80, '18.00', '14.00', ''),
('OR-173', 'Morus Alba  ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '6.00', '4.00', ''),
('OR-174', 'Morus Alba  calibre 8/10', 'Ornamentales', 'Viveros EL OASIS', '', 80, '18.00', '14.00', ''),
('OR-175', 'Platanus Acerifolia   ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '10.00', '8.00', ''),
('OR-176', 'Prunus pisardii  ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '10.00', '8.00', ''),
('OR-177', 'Robinia Pseudoacacia Casque Rouge   ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '15.00', '12.00', ''),
('OR-178', 'Salix Babylonica  Pendula  ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '6.00', '4.00', ''),
('OR-179', 'Sesbania Punicea   ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '6.00', '4.00', ''),
('OR-180', 'Tamarix  Ramosissima Pink Cascade   ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '6.00', '4.00', ''),
('OR-181', 'Tamarix  Ramosissima Pink Cascade   ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '10.00', '8.00', ''),
('OR-182', 'Tecoma Stands   ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '6.00', '4.00', ''),
('OR-183', 'Tecoma Stands  ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '10.00', '8.00', ''),
('OR-184', 'Tipuana Tipu  ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '6.00', '4.00', ''),
('OR-185', 'Pleioblastus distichus-Bambú enano', 'Ornamentales', 'Viveros EL OASIS', '', 80, '6.00', '4.00', ''),
('OR-186', 'Sasa palmata ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '6.00', '4.00', ''),
('OR-187', 'Sasa palmata ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '10.00', '8.00', ''),
('OR-188', 'Sasa palmata ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '25.00', '20.00', ''),
('OR-189', 'Phylostachys aurea', 'Ornamentales', 'Viveros EL OASIS', '', 80, '22.00', '17.00', ''),
('OR-190', 'Phylostachys aurea', 'Ornamentales', 'Viveros EL OASIS', '', 80, '32.00', '25.00', ''),
('OR-191', 'Phylostachys Bambusa Spectabilis', 'Ornamentales', 'Viveros EL OASIS', '', 80, '24.00', '19.00', ''),
('OR-192', 'Phylostachys biseti', 'Ornamentales', 'Viveros EL OASIS', '', 80, '22.00', '17.00', ''),
('OR-193', 'Phylostachys biseti', 'Ornamentales', 'Viveros EL OASIS', '', 80, '20.00', '16.00', ''),
('OR-194', 'Pseudosasa japonica (Metake)', 'Ornamentales', 'Viveros EL OASIS', '', 80, '20.00', '16.00', ''),
('OR-195', 'Pseudosasa japonica (Metake) ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '6.00', '4.00', ''),
('OR-196', 'Cedrus Deodara ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '10.00', '8.00', ''),
('OR-197', 'Cedrus Deodara \"Feeling Blue\" Novedad', 'Ornamentales', 'Viveros EL OASIS', '', 80, '12.00', '9.00', ''),
('OR-198', 'Juniperus chinensis \"Blue Alps\"', 'Ornamentales', 'Viveros EL OASIS', '', 80, '4.00', '3.00', ''),
('OR-199', 'Juniperus Chinensis Stricta', 'Ornamentales', 'Viveros EL OASIS', '', 80, '4.00', '3.00', ''),
('OR-200', 'Juniperus horizontalis Wiltonii', 'Ornamentales', 'Viveros EL OASIS', '', 80, '4.00', '3.00', ''),
('OR-201', 'Juniperus squamata \"Blue Star\"', 'Ornamentales', 'Viveros EL OASIS', '', 80, '4.00', '3.00', ''),
('OR-202', 'Juniperus x media Phitzeriana verde', 'Ornamentales', 'Viveros EL OASIS', '', 80, '4.00', '3.00', ''),
('OR-203', 'Pinus Canariensis', 'Ornamentales', 'Viveros EL OASIS', '', 80, '10.00', '8.00', ''),
('OR-204', 'Pinus Halepensis', 'Ornamentales', 'Viveros EL OASIS', '', 80, '10.00', '8.00', ''),
('OR-205', 'Pinus Pinea -Pino Piñonero', 'Ornamentales', 'Viveros EL OASIS', '', 80, '10.00', '8.00', ''),
('OR-206', 'Thuja Esmeralda ', 'Ornamentales', 'Viveros EL OASIS', '', 80, '5.00', '4.00', ''),
('OR-207', 'Tuja Occidentalis Woodwardii', 'Ornamentales', 'Viveros EL OASIS', '', 80, '4.00', '3.00', ''),
('OR-208', 'Tuja orientalis \"Aurea nana\"', 'Ornamentales', 'Viveros EL OASIS', '', 80, '4.00', '3.00', ''),
('OR-209', 'Archontophoenix Cunninghamiana', 'Ornamentales', 'Viveros EL OASIS', '', 80, '10.00', '8.00', ''),
('OR-210', 'Beucarnea Recurvata', 'Ornamentales', 'Viveros EL OASIS', '', 2, '39.00', '31.00', ''),
('OR-211', 'Beucarnea Recurvata', 'Ornamentales', 'Viveros EL OASIS', '', 5, '59.00', '47.00', ''),
('OR-212', 'Bismarckia Nobilis', 'Ornamentales', 'Viveros EL OASIS', '', 4, '217.00', '173.00', ''),
('OR-213', 'Bismarckia Nobilis', 'Ornamentales', 'Viveros EL OASIS', '', 4, '266.00', '212.00', ''),
('OR-214', 'Brahea Armata', 'Ornamentales', 'Viveros EL OASIS', '', 0, '10.00', '8.00', ''),
('OR-215', 'Brahea Armata', 'Ornamentales', 'Viveros EL OASIS', '', 100, '112.00', '89.00', ''),
('OR-216', 'Brahea Edulis', 'Ornamentales', 'Viveros EL OASIS', '', 100, '19.00', '15.00', ''),
('OR-217', 'Brahea Edulis', 'Ornamentales', 'Viveros EL OASIS', '', 100, '64.00', '51.00', ''),
('OR-218', 'Butia Capitata', 'Ornamentales', 'Viveros EL OASIS', '', 100, '25.00', '20.00', ''),
('OR-219', 'Butia Capitata', 'Ornamentales', 'Viveros EL OASIS', '', 100, '29.00', '23.00', ''),
('OR-220', 'Butia Capitata', 'Ornamentales', 'Viveros EL OASIS', '', 100, '36.00', '28.00', ''),
('OR-221', 'Butia Capitata', 'Ornamentales', 'Viveros EL OASIS', '', 100, '59.00', '47.00', ''),
('OR-222', 'Butia Capitata', 'Ornamentales', 'Viveros EL OASIS', '', 100, '87.00', '69.00', ''),
('OR-223', 'Chamaerops Humilis', 'Ornamentales', 'Viveros EL OASIS', '', 100, '4.00', '3.00', ''),
('OR-224', 'Chamaerops Humilis', 'Ornamentales', 'Viveros EL OASIS', '', 100, '7.00', '5.00', ''),
('OR-225', 'Chamaerops Humilis', 'Ornamentales', 'Viveros EL OASIS', '', 100, '10.00', '8.00', ''),
('OR-226', 'Chamaerops Humilis', 'Ornamentales', 'Viveros EL OASIS', '', 100, '38.00', '30.00', ''),
('OR-227', 'Chamaerops Humilis', 'Ornamentales', 'Viveros EL OASIS', '', 100, '64.00', '51.00', ''),
('OR-228', 'Chamaerops Humilis \"Cerifera\"', 'Ornamentales', 'Viveros EL OASIS', '', 100, '32.00', '25.00', ''),
('OR-229', 'Chrysalidocarpus Lutescens -ARECA', 'Ornamentales', 'Viveros EL OASIS', '', 100, '22.00', '17.00', ''),
('OR-230', 'Cordyline Australis -DRACAENA', 'Ornamentales', 'Viveros EL OASIS', '', 100, '38.00', '30.00', ''),
('OR-231', 'Cycas Revoluta', 'Ornamentales', 'Viveros EL OASIS', '', 100, '15.00', '12.00', ''),
('OR-232', 'Cycas Revoluta', 'Ornamentales', 'Viveros EL OASIS', '', 100, '34.00', '27.00', ''),
('OR-233', 'Dracaena Drago', 'Ornamentales', 'Viveros EL OASIS', '', 1, '13.00', '10.00', ''),
('OR-234', 'Dracaena Drago', 'Ornamentales', 'Viveros EL OASIS', '', 2, '64.00', '51.00', ''),
('OR-235', 'Dracaena Drago', 'Ornamentales', 'Viveros EL OASIS', '', 2, '92.00', '73.00', ''),
('OR-236', 'Jubaea Chilensis', 'Ornamentales', 'Viveros EL OASIS', '', 100, '49.00', '39.00', ''),
('OR-237', 'Livistonia Australis', 'Ornamentales', 'Viveros EL OASIS', '', 50, '19.00', '15.00', ''),
('OR-238', 'Livistonia Decipiens', 'Ornamentales', 'Viveros EL OASIS', '', 50, '19.00', '15.00', ''),
('OR-239', 'Livistonia Decipiens', 'Ornamentales', 'Viveros EL OASIS', '', 50, '49.00', '39.00', ''),
('OR-240', 'Phoenix Canariensis', 'Ornamentales', 'Viveros EL OASIS', '', 50, '6.00', '4.00', ''),
('OR-241', 'Phoenix Canariensis', 'Ornamentales', 'Viveros EL OASIS', '', 50, '19.00', '15.00', ''),
('OR-242', 'Rhaphis Excelsa', 'Ornamentales', 'Viveros EL OASIS', '', 50, '21.00', '16.00', ''),
('OR-243', 'Rhaphis Humilis', 'Ornamentales', 'Viveros EL OASIS', '', 50, '64.00', '51.00', ''),
('OR-244', 'Sabal Minor', 'Ornamentales', 'Viveros EL OASIS', '', 50, '11.00', '8.00', ''),
('OR-245', 'Sabal Minor', 'Ornamentales', 'Viveros EL OASIS', '', 50, '34.00', '27.00', ''),
('OR-246', 'Trachycarpus Fortunei', 'Ornamentales', 'Viveros EL OASIS', '', 50, '18.00', '14.00', ''),
('OR-247', 'Trachycarpus Fortunei', 'Ornamentales', 'Viveros EL OASIS', '', 2, '462.00', '369.00', ''),
('OR-248', 'Washingtonia Robusta', 'Ornamentales', 'Viveros EL OASIS', '', 15, '3.00', '2.00', ''),
('OR-249', 'Washingtonia Robusta', 'Ornamentales', 'Viveros EL OASIS', '', 15, '5.00', '4.00', ''),
('OR-250', 'Yucca Jewel', 'Ornamentales', 'Viveros EL OASIS', '', 15, '10.00', '8.00', ''),
('OR-251', 'Zamia Furfuracaea', 'Ornamentales', 'Viveros EL OASIS', '', 15, '168.00', '134.00', ''),
('OR-99', 'Mimosa DEALBATA Gaulois Astier  ', 'Ornamentales', 'Viveros EL OASIS', 'Acacia dealbata. Nombre común o vulgar: Mimosa fina, Mimosa, Mimosa común, Mimosa plateada, Aromo francés. Familia: Mimosaceae. Origen: Australia, Sureste, (N. G. del Sur y Victoria). Arbol de follaje persistente muy usado en parques por su atractiva floración amarilla hacia fines del invierno. Altura: de 3 a 10 metros generalmente. Crecimiento rápido. Follaje perenne de tonos plateados, muy ornamental. Sus hojas son de textura fina, de color verde y sus flores amarillas que aparecen en racimos grandes. Florece de Enero a Marzo (Hemisferio Norte). Legumbre de 5-9 cm de longitud, recta o ligeramente curvada, con los bordes algo constreñidos entre las semillas, que se disponen en el fruto longitudinalmente...', 100, '14.00', '11.00', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `role` varchar(20) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`Codigo`),
  ADD KEY `userid` (`userid`);

--
-- Indices de la tabla `gamasproductos`
--
ALTER TABLE `gamasproductos`
  ADD PRIMARY KEY (`Gama`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`CodigoProducto`),
  ADD KEY `Productos_gamaFK` (`Gama`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `Productos_gamaFK` FOREIGN KEY (`Gama`) REFERENCES `gamasproductos` (`Gama`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
