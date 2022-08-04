<?php 
echo 'test aucation php '."<br>";
//header( "location: http://www.ireallyhost.com" );
// exit(0);

echo 'host: '.$_SERVER['SERVER_NAME'];
//header( 'location: html' );
//exit(0);


function isMobile() {
    return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
}
// If the user is on a mobile device, redirect them
if(isMobile()){
    header("Location: m");
}else{
    header("Location: html");
}
exit(0);
?>