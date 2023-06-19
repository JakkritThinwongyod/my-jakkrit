<!doctype html>
<? include("connect.php"); ?>
<html>
<head>
<meta charset="utf-8">
<title>ADD</title>
</head>
<body bgcolor="#CFCFCF">
	<form method="post" action="send.php">
	<table align="center" border="0" width="20%">
		<tr><td align="center" colspan="2"><h2>เพิ่มข้อมูล</h2></td></tr>
		<tr>
			<td width="30%" align="right">ชื่อ :</td>
			<td width="70%"><input type="text" name="name"></td>
		</tr>
		<tr>
			<td width="30%" align="right">นามสกุล :</td>
			<td width="70%"><input type="text" name="lastname"></td>
		</tr>
		<tr>
			<td width="30%" align="right">อายุ :</td>
			<td width="70%"><input type="text" name="age"></td>
		</tr>
		<tr>
			<td width="30%" align="right">เบอร์โทร :</td>
			<td width="70%"><input type="text" name="tel"></td>
		</tr>
		<tr>
			<td width="30%" align="right">E-mail :</td>
			<td width="70%"><input type="text" name="mail"></td>
		</tr>
		<tr>
			<td></td>
			<td width="70%">
				<input type="submit" name="sent" value="บันทึก">
				<input type="reset" name="reset" value="ยกเลิก">
			</td>
		</tr>
	</table>
	</form>
	<br><center><a href="index.html">กลับ</a></center>
</body>
</html>