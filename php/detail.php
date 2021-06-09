<?php
    header("content-type:text/html;charset-utf-8");
    $link=mysqli_connect('localhost','root','','eye');
    mysqli_set_charset($link,'utf8');
    $id=$_GET['id'];
    $sql="select * from goods where id=$id";
    $res=mysqli_query($link,$sql);
    $row=mysqli_fetch_assoc($res);
    echo json_encode($row);
    mysqli_close($link);
?>