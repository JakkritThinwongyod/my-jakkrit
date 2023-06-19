<!doctype html>
<? include("connect.php"); ?>
<html>
<head>
<meta charset="utf-8">
<title>SEND</title>
</head>

<body>
<?
	$name=$_POST["name"];
	$last=$_POST["lastname"];
	$age=$_POST["age"];
	$tel=$_POST["tel"];
	$mail=$_POST["mail"];

$send = "INSERT INTO user (U_NAME,U_LASTNAME,U_AGE,U_TEL,U_MAIL)
VALUES ('$name','$last','$age','$tel','$mail')";
$objquery = mysql_db_query($dbname,$send);
if($objquery){
	echo "เพิ่มข้อมูลสำเร็จ";
}
else{
	echo "ERROR";
}
mysql_close($con);
?>
	<center><a href="show.php">แสดงข้อมูล</a></center>
	<center><a href="add.php">เพิ่มข้อมูล</a></center>
</body>
</html>