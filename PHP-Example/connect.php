<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?
$host 	= "localhost" ;
$user 	= "root" ;
$pass 	= "1234" ;
$dbname = "jakkrit" ;

$con = mysql_connect($host,$user,$pass);
if(!$con){echo "เชือมต่อไม่สำเร็จ";}

mysql_select_db($dbname,$con);
mysql_query("SET NAMES UTF8");	
?>