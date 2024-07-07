<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- custom stylesheet -->
    <link rel="stylesheet" href="css/facture.css">
    <link rel="shortcut icon" type="image/x-icon" href="image/logo.JPG">

    <title>Facture</title>
</head>
<?php
       
       include('connection.php');
       
?>

<body>
    <div id="wrapper">
        <a type="button" href="cuisine.php"><i class="icon-arrow-alt-circle-left"></i></a>
        <div class="titre">
            <h2>FACTURE</h2>
        </div>
        <div class="table_number">
            <span>Table n°:
                <?php
                    echo $_GET['numTable']
                ?>
            </span>
        </div>
        <div class="table-responsive">
            <table class="table-bordered">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Quantité</th>
                        <th>Prix unitaire</th>
                        <th>Sous total</th>
                    </tr>
                </thead>
                <tbody>
                    <?php                  
                            $query = 'SELECT Nom, Quantite, Prix_unitaire, Sous_total FROM menu WHERE Num_table = "'.$_GET['numTable'].'"';
                            $result = mysqli_query($db, $query) or die (mysqli_error($db));
                            $total = 0;
                            while ($row = mysqli_fetch_assoc($result)) {
                                             
                                echo '<tr>';
                                echo '<td class="commande">'. $row['Nom'].'</td>';
                                echo '<td class="commande">'. $row['Quantite'].'</td>';
                                echo '<td class="commande">'. $row['Prix_unitaire'].'</td>';
                                echo '<td class="commande">'. $row['Sous_total'].'Ar</td>';
                                echo '</tr> ';

                                $total = $total + $row['Sous_total'];
                            }
                        ?>
                </tbody>
            </table>
            <div class="total">
                <span>Total:
                    <?php
                        echo $total;
                    ?>
                    Ar
                </span>
            </div>
        </div>
        <div class="confirm-order-button">
            <button onclick="window.print()" id="confirm-order-btn" class="icon-print"> Imprimer</button>
        </div>
    </div>
</body>

</html>