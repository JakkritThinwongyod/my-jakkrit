<!doctype html>
<? include("connect.php"); ?>
<html>
<head>
<meta charset="utf-8">
<title>EDIT</title>
</head>

<body>
	<?
	$name=$_POST["name"];
	$last=$_POST["lastname"];
	$age=$_POST["age"];
	$tel=$_POST["tel"];
	$mail=$_POST["mail"];
	$ID=$_GET["edit"];
	
$edit = "UPDATE user SET 
U_NAME = '$name', U_LASTNAME = '$last', U_AGE = '$age', U_TEL = '$tel', U_MAIL ='$mail' WHERE U_ID ='$ID'";
$objQuery = mysql_query($edit);
if($objQuery){
	echo "ข้อมูลได้รับการแก้ใขเรียบร้อย";
}else{
	echo "แก้ใขไม่สำเร็จ";
}

?>
<center><a href="show.php">กลับ</a></center>
<center><a href="index.html">หน้าหลัก</a></center>
</body>
</html>