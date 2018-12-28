<?php
    header('Cache-Control: no-cache, must-revalidate');
    header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
    header('Content-type: application/json');

    if (isset($_POST['id'])) {
        $identifiant = $_POST['id'];
        switch ($identifiant) {
            case ('diploma'):
                $reponse = '<h1>Mes Diplômes</h1><br /><strong>2018</strong><br />Master professionnel informatique (mention bien)<br />Spécialité FSIL (<i>Fiabilité, sécurité et intégration logicielle</i>)<br />Parcours ISL (<i>Intégration de systèmes logiciels</i>)<br />Faculté des sciences d\'Aix-Marseille, site de Luminy<br /><br /><strong>2016</strong><br />Licence Informatique<br />Faculté des Sciences, Site d’Aix-Montperrin<br /><br /><strong>2015</strong><br />DUT Informatique<br />IUT d’Aix-Marseille, Site d’Aix-en-Provence<br /><br /><strong>2013</strong><br />Baccalauréat, série scientifique (S.V.T), spécialité ISN (Sciences du numérique)<br /> Lycée Georges Duby, Luynes, Académie Aix-Marseille<br /><br />';
                break;
            case ('skills'):
                $reponse = '<h1>Mes Compétences</h1><br /><strong>Programmation</strong><br />Java/JEE, PHP, Swift, Korn Shell, C<br /><br /><strong>Programmation Web</strong><br />HTML, CSS, JavaScript, JQuery, Ajax, XML, XSL<br /><br /><strong>Base de données</strong><br />Langage de requêtes structurés (SQL), PL/SQL et MySQL<br /><br /><strong>Modélisations</strong><br />Diagrammes UML, Méthode Merise<br /><br /><strong>Framework</strong><br />Symfony, Laravel, JUnit, Spring, Bootstrap<br /><br /><strong>Outils</strong><br />Gestionnaire Git<br /><br /><strong>Logiciels</strong><br />IDE Eclipse, IDE Xcode, ETL Ab Initio, Microsoft Office<br /><br /><strong>Systèmes d\'exploitation</strong><br />Windows, Mac OS, Linux<br /><br /><strong>Communication</strong><br />Réalisation de documents<br />Présentations orales<br /><br /><strong>Langue</strong><br />Anglais technique (C1)<br />Attestation de compétence en allemand (Niveau B1)<br /><br />';
                break;
            case ('projects'):
                $reponse = '<h1>Mes Réalisations</h1><strong>Pour voir tous mes projets <a href="http://semrom.fr/projets" target="_blank">cliquez ici</a>.</strong><br /><br /><strong>Projets Web</strong><br />2013 : Création et hébergement d\'un site web statique (devenu aujourd\'hui "semrom.fr")<br />2015 : Réalisation d\'un CV en ligne avec des animations JQuery (celui-ci)<br />2015 : Création d\'un site web dynamique de mise en ligne et de partage d\'images (<a href="http://semrom.fr/projets/picstore.php" target="_blank">plus d\'infos</a>).<br /><br /><strong>Projets en Java</strong><br />2014 : Création d\'un démineur (<a href="http://semrom.fr/projets/demineur.php" target="_blank">plus d\'infos</a>).<br />2015 : L\'algortihme d\'Aho-Corasick (recherche de chaînes de caractères dans un texte) avec une interface graphique (<a href="http://semrom.fr/projets/aho-corasick.php" target="_blank">plus d\'infos</a>).<br />2016 : Logiciel permettant d\'afficher les fichiers cachés sous le système OS X (<a href="http://semrom.fr/projets/mes-fichiers-caches.php" target="_blank">plus d\'infos</a>).<br /><br /><strong>Développement Android</strong><br />2015 : Réalisation d\'une application Android (<a href="http://semrom.fr/projets/tap-colors.php" target="_blank">plus d\'infos</a>)<br /><br /><strong>Modélisations Mathématiques</strong><br />2014 : Conception d\'un algorithme de résolution de labyrinthes en Java (<a href="http://semrom.fr/projets/resolution-labyrinthe.php" target="_blank">plus d\'infos</a>)<br /><br /><strong>Robotique</strong><br />2013 : Conception et programmation d\'un robot Lego® Mindstorm® avec le langage C (embarqué sur le logiciel RobotC) qui a été finaliste à un concours robotique, organisé par Cadarache, dans le cadre du projet <a href="https://fr.wikipedia.org/wiki/ITER" target="_blank">ITER</a>.<br /><br />';
                break;
            case ('proExp'):
                $reponse = '<h1>Mon Expérience Professionnelle</h1><br /><br /><strong>2018</strong><br />Stage de 6 mois dans la société <a href="https://www.capgemini.com/fr-fr/" target="_blank">Capgemini</a> (ESN) à Aix-en-Provence. <br />Ingénieur logiciel.<br />Mission : maintenance évolutive d\'une application de facturation détaillée dans le domaine des télécom (spécifications, développement, tests et évolution).<br /><br /><strong>2017</strong><br />Création de Swnowgine, ma première application web destinée à une petite entreprise de montagne. Il s\'agit d\'un outil de gestion des réservations de sorties en montagne (<a href="http://semrom.fr/projets/snowgine.php" target="_blank">plus d\'infos</a>).<br /><br /><strong>2015</strong><br />Stage de 10 semaines dans la société Acropolis Telecom<br />(appartenant aujourd\'hui à Foliateam) à Paris. <br />Développeur web au service marketing.<br />Mission : aide à la création d’un site web pour une application mobile de l\'entreprise.<br /><br />';
                break;
            case ('hobbies'):
                $reponse = '<h1>Mes Intérêts</h1><br /><strong>Sports</strong><br />Natation, Ski Alpin (niveau compétition)<br /><br /><strong>Musique</strong><br />Piano (compositions : musiques électroniques/ambiantes)<br /><br /><strong>Lecture</strong><br />Romans du genre ésotérique<br /><br /><strong>Films</strong><br />Amateur de films d\'épouvantes.<br /><br />';
                break;
            case ('contact'):
                $reponse = '<h1>Me Contacter</h1>';
                break;
        }
        echo json_encode($reponse);
    } else {
        echo '<center><h1>Erreur Fatale</h1> <br /> <a href="../index.html">Retour</a></center>';
    }
