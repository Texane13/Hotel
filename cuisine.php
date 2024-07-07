<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- custom stylesheet -->
    <link rel="stylesheet" href="css/cuisine.css">
    <link rel="shortcut icon" type="image/x-icon" href="image/logo.JPG">

    <title>Cuisine</title>
</head>
<?php
       
       include('connection.php');
       
?>

<body>
    <div id="wrapper">
        <div class="titre">
            <h2>COMMANDES REÇUES</h2>
        </div>
        <div class="table-responsive">
            <table class="table-bordered">
                <thead>
                    <tr>
                        <th>Numéro de table</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                        $query = 'SELECT DISTINCT Num_table FROM menu' ;
                        $result =  mysqli_query($db, $query) or die (mysqli_error($db));
                        while ($row = mysqli_fetch_assoc($result)) {
                            echo '<tr>';
                                echo '<td>Table n°'. $row['Num_table'].'</td>';
                                
                                ?>
                    <td>
                        <a class="btn btn-commande"
                            href="commande.php?numTable=<?php echo $row['Num_table']?>">commande</a>
                        <a class="btn btn-addition"
                            href="facture.php?numTable=<?php echo $row['Num_table']?>">facture</a>
                        <a class="btn btn-fin" href="del.php?numTable=<?php echo $row['Num_table']?>">fin de commande</a>
                    </td>
                    <?php
                        echo '</tr> ';
                        }
                    ?>
                </tbody>
            </table>
        </div>
</body>