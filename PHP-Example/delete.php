<!doctype html>
<? include("connect.php"); ?>
<html>
<head>
<meta charset="utf-8">
<title>DELETE</title>
</head>

<body>
<?
$delete="DELETE FROM user WHERE U_ID = '".$_GET["Del_ID"]."' ";
$objQuery=mysql_query($delete);

if($objQuery){
	echo "ลบข้อมูลเรียบร้อย";
}else{
	echo "ไม่สามารถลบ[".$delete."]";
}

?>
<center><a href="show.php">กลับ</a></center>
</body>
</html>