<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- custom stylesheet -->
    <link rel="stylesheet" href="css/commande.css">
    <link rel="shortcut icon" type="image/x-icon" href="image/logo.JPG">

    <title>Commande</title>
</head>
<?php
       
       include('connection.php');
       
       ?>

<body>
    <a class="before" type="button" href="cuisine.php"><i class="icon-arrow-alt-circle-left"></i></a>
    <div class="col-lg-12">
        <h2> <span>L</span>iste des <span>C</span>ommandes</h2>
    </div>
    <div id="wrapper">
        <div class="table_number">
            <span class="num">Table n°:
                <?php
                    echo $_GET['numTable'];
                ?>
            </span>
        </div>
        <div class="table-responsive">
            <table class="table-bordered">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Quantité</th>
                    </tr>
                </thead>
                <tbody>
                    <?php                  
                            $query = 'SELECT Nom, Quantite FROM menu WHERE Num_table = "'.$_GET['numTable'].'"';
                            $result = mysqli_query($db, $query) or die (mysqli_error($db));
                  
                            while ($row = mysqli_fetch_assoc($result)) {
                                             
                                echo '<tr>';
                                echo '<td>'. $row['Nom'].'</td>';
                                echo '<td class="commande">'. $row['Quantite'].'</td>';
                                echo '</tr> ';
                            }
                        ?>
                </tbody>
            </table>
        </div>
    </div>
</body>

</html>