<?php
    include('connection.php')  
?>

<?php
    $numtable = $_POST["num_table"];
    $total = $_POST["total-item"];
    
    for ($i = 1; $i<=$total;$i++){
        $nom = $_POST["nom".$i];
        $prix = $_POST["prix".$i];
        $quantite = $_POST["quantite".$i];
        $soustotal = $_POST["soustotal".$i];
        switch ($_GET['action']) {
            case 'add':
                $query = "INSERT INTO `menu` (`Numero`, `Nom`, `Prix_unitaire`, `Quantite`, `Sous_total`, `Num_table`) 
					    VALUES (Null,'" .$nom ."','" .$prix ."','" .$quantite ."','" .$soustotal ."','" .$numtable ."')";
                mysqli_query($db, $query) or die('Error in updating Database');

            break;
        }
    }
?>

<script type="text/javascript">
alert("Commande envoyée.");
window.location = "index.php";
</script>