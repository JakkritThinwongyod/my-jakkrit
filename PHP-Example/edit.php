<!doctype html>
<? include("connect.php");?>
<html>
<head>
<meta charset="utf-8">
<title>EDIT</title>
</head>

<body bgcolor="#CFCFCF">

	<form method="post" action="editsave.php?edit=<? echo $_GET["edit"];?>">
<?
$select="SELECT *FROM user WHERE U_ID ='".$_GET["edit"]."' ";
$Query=mysql_query($select);
$fetch=mysql_fetch_array($Query);
if(!$fetch){
	echo "ไม่สามารถแก้ใข ".$_GET["edit"];
}
else
{
?>
	<table align="center" border="0" width="20%">
		<tr><td align="center" colspan="2"><h2>แก้ใขข้อมูล</h2></td></tr>
		</tr>
		<tr>
			<td width="30%" align="right">ชื่อ :</td>
			<td width="70%"><input type="text" name="name" value="<? echo $fetch["U_NAME"]; ?>"></td>
		</tr>
		<tr>
			<td width="30%" align="right">นามสกุล :</td>
			<td width="70%"><input type="text" name="lastname" value="<? echo $fetch["U_LASTNAME"]; ?>"></td>
		</tr>
		<tr>
			<td width="30%" align="right">อายุ :</td>
			<td width="70%"><input type="text" name="age" value="<? echo $fetch["U_AGE"]; ?>"></td>
		</tr>
		<tr>
			<td width="30%" align="right">เบอร์โทร :</td>
			<td width="70%"><input type="text" name="tel" value="<? echo $fetch["U_TEL"]; ?>"></td>
		</tr>
		<tr>
			<td width="30%" align="right">E-mail :</td>
			<td width="70%"><input type="text" name="mail" value="<? echo $fetch["U_MAIL"]; ?>"></td>
		</tr>
		<tr>
			<td></td>
			<td width="70%">
				<input type="submit" name="sent" value="แก้ใข">
				<input type="reset" name="reset" value="ยกเลิก">
			</td>
		</tr>
	</table>
<?
}
?>
	</form>
	<br><center><a href="show.php">กลับ</a></center>
</body>
</html>