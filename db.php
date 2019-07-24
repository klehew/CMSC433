<?php

// Get management page option #
$q = intval($_GET['q']);

// Connect to host and select database
$con = mysqli_connect('localhost','root','','OregonTrailDB');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}
mysqli_select_db($con,"OregonTrailDB");

// Display current/original top ten list
if ($q == 1 || $q == 2) {
	if ($q == 1) {
		$sql="SELECT * FROM currentTopTen ORDER BY points DESC LIMIT 10";
		$result = mysqli_query($con,$sql);

		// for testing purposes - can remove
		if (!$result) {
			printf("Error: %s\n", mysqli_error($con));
			exit();
		}

		// Set up table header for current top ten
		echo "<div id='topTenPage'>
			<p>Current Top Ten list</p>
			<div id='titlePageOptions'>
			<table>
			<tr>
			<th>Name</th>
			<th>Points</th>
			<th>Rating</th>
			</tr>";
		
	} else {
		$sql="SELECT * FROM originalTopTen ORDER BY points DESC LIMIT 10";
		$result = mysqli_query($con,$sql);

		// for testing purposes - can remove
		if (!$result) {
			printf("Error: %s\n", mysqli_error($con));
			exit();
		}

		// Set up table header for original top ten
		echo "<div id='topTenPage'>
			<p>Original Top Ten list</p>
			<div id='titlePageOptions'>
			<table>
			<tr>
			<th>Name</th>
			<th>Points</th>
			<th>Rating</th>
			</tr>";		
	}

	// Print table records
	while($row = mysqli_fetch_array($result)) {
		echo "<tr>";
		echo "<td>" . $row['name']   . "</td>";
		echo "<td>" . $row['points'] . "</td>";
		echo "<td>" . $row['rating'] . "</td>";
		echo "</tr>";
	}
	echo "</table></div></div>";
}

// Erase current top ten list
else if ($q == 3) {
	$sql="DROP TABLE currentTopTen";
	$sql="CREATE TABLE currentTopTen AS SELECT * FROM originalTopTen";
	echo "<div id=mainPage></div>";
}

/*
// Erase tombstones
else if ($q == 4) {
	echo "Are the tombstones just names from Top Ten in the
		form of 'Here lies so-and-so'?";
}

// Erase saved games
else {
	echo "What exactly needs to be erased?"
}
*/

mysqli_close($con);
?>