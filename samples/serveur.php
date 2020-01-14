<!DOCTYPE html>
<html>
    <head>
        <title>Cours PHP & MySQL</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="cours.css">
    </head>
    
    <body>
        <h1>Titre principal</h1>
        <?php
            $prez = "Je m'appelle Pierre";
            $age = 28; //Stocke le nombre 28
            $age2 = "28"; //Stocke la chaine de caractères "28"
            
            echo "La variable \$age contient une valeur de type ";
            echo gettype($age);
            
            echo "<br>La variable \$age2 contient une valeur de type ";
            echo gettype($age2);
        ?>
        <p>Un paragraphe</p>
    </body>
</html>