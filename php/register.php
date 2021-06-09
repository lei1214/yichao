<?php
    header("content-type:text/html;charset=utf-8");
    $username=$_GET["username"];
    $password=$_GET["password"];
    $link=mysqli_connect("localhost","root","","eye");
    mysqli_set_charset($link,"utf8");
    $sql="select * from user where username='$username' and password='$password'";
    $res=mysqli_query($link,$sql);
    if($row=mysqli_fetch_assoc($res)){
        echo '0';
    }else{
        $sql = "INSERT INTO `user` (`username`,`password`) VALUES ('$username','$password')";
        $res=mysqli_query($link,$sql);
        if($res){
            echo '1';
        }else{
            echo '2';
        }
    }

    mysqli_close($link);
?>