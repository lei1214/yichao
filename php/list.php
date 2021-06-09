<?php
    header("content-type:text/html;charset-utf-8");
    $link=mysqli_connect('localhost','root','','eye');
    mysqli_set_charset($link,'utf8');
    $sql='select * from goods';
    $res=mysqli_query($link,$sql);
    $arr=[];
    while($row=mysqli_fetch_assoc($res)){
        array_push($arr,$row);
    }
    echo json_encode($arr);
    mysqli_close($link);
?>