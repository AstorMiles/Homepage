<?php
session_start();
require_once 'connection/connect.php';
if (@$_SESSION['user']) {
    header('Location: workspace.php');
}
?>

<!DOCTYPE html lang="lt">
<html lang="en">
<head>
    <meta Content-Type="text/plain" charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css2?family=Sacramento&family=Spectral+SC&display=swap" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>

<body>
    <header>
        <center>
            <h1>MG Planner</h1>
            <h2>small steps to greatness</h2>
        </center>
    </header>
    <div id="backborder">
<a id="back" href="..">
<h1 id="backfont">BACK</h1>
</a>
</div>
    <div class="login">
        <div class="loginfields">
            <center>
                <h1>Log in</h1>
            </center>
            <form action="connection/signin.php" method="POST">
                <div class="input-box">
                    <label for="login">Email:</label>
                    <input type="text" name="login" pattern="|^[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,6}$|i" value="axisliber@gmail.com" required="required">
                </div>
                <div class="input-box">
                    <label for="password">Password:</label>
                    <input type="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!%*#?&/\])" value="Liberatt1" required="required">
                </div>
                <center><button type="submit">Step in</button></center>
            </form>


             <?php
            if(isset($_SESSION['loginError'])){
                echo $_SESSION['loginError'];
            }
            ?>
            <?php
            if(isset($_SESSION['logoutmsg'])){
                echo $_SESSION['logoutmsg'];
            }
            ?>

            <p>Don't have an account?</p>
            <a href="register.php">Register</a>
              <footer>
                <h6><sup>©</sup> POWERED BY BAIBURETTA</h6>
            </footer>
        </div>
            <script src="js/script.js"></script>
</body>

</html>
