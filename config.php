<?php

$conn = mysqli_connect("127.0.0.1", "root", "", "test");

if (!$conn) {
    echo "Connection Failed";
}