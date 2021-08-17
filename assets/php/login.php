<?php
session_start();
$host="fdb32.awardspace.net";
$username="3905812_base";
$password="Ewqdsacxz321+@";
$database="3905812_base";
$msg="";

try{
    $connection=new PDO("mysql:host=$host;dbname=$database",$username,$password);
    $connect->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    if(isset($_POST["3905812_base"]))
    {
        if(empty($_POST["username"]) || empty($_POST["password"]))
        {
            $msg='<label>a;; field is required</label>';
        }
        else
        {
            $query="SELECT * FROM login WHERE username=:username AND password=:password";
            $statement=$connect->prepare($query);
            $statement->execute(

                array(
                'username' => $_POST["username"],
                'password' => $_POST["password"]
                );
                $count=$statement->rowCount();
                if($count > 0)
                {
                    $_SESSION["username"]=$_POST["username"];
                    header("location:login_success.php");
                }
                else
                {
                    $msg='<label>Username or Password is Wrong</label>'
                }
            )
        }
    }

}

catch(PDOException $ERROR)
{
    $msg=$error->getMessage();
}

?>