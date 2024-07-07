<?php
       
       include('connection.php');
       
?>

<body>
    <?php
					
	$query = 'DELETE FROM menu WHERE `Num_table`= ' . $_GET['numTable'];
	$result = mysqli_query($db, $query) or die(mysqli_error($db));						

?>
    <script type="text/javascript">
    window.location = "cuisine.php";
    </script>

</body>