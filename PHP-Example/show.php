<!doctype html>
<? include("connect.php"); ?>
<html>
<head>
<meta charset="utf-8">
<title>SHOW</title>
</head>
<body bgcolor="#CFCFCF">
	<center><h1>แสดงข้อมูลจากฐานข้อมูล</h1></center>
	<table width="70%" align="center" border="1">
	<tr>
		<td width="20%" align="center">ชื่อ</td>
		<td width="20%" align="center">นามสกุล</td>
		<td width="5%" align="center">อายุ</td>
		<td width="10%" align="center">เบอร์โทร</td>
		<td width="10%" align="center">E-mail</td>
		<td width="5%" align="center">แก้ใข</td>
		<td width="5%" align="center">ลบข้อมูล</td>
	</tr>
<?
$select=mysql_query("SELECT * FROM user ",$con);
while($row=mysql_fetch_array($select)){
?>
	<tr>
		<td><? echo $row[U_NAME]?></td>
		<td><? echo $row[U_LASTNAME]?></td>
		<td align="center"><? echo $row[U_AGE]?></td>
		<td align="center"><? echo $row[U_TEL]?></td>
		<td align="center"><? echo $row[U_MAIL]?></td>
		<td align="center"><a href="edit.php?edit=<? echo $row["U_ID"]; ?>">Edit</a></td>
		<td align="center"><a href="delete.php?Del_ID=<? echo $row["U_ID"]; ?>">Delete</a></td>
	</tr>
<?
}
?>
</table>
<center><a href="index.html">กลับ</a></center>	
</body>
</html>