<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- custom stylesheet -->
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/responsive.css">

    <!-- animate css cdn link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <link rel="shortcut icon" type="image/x-icon" href="image/logo.JPG">
    <title>Restaurant</title>
</head>

<body>
    <!-- header section start -->
    <header>
        <nav class="navbar">
            <div class="logo">
                <a href="#" class="logo"><span>V</span>irtual <span>F</span>ood <span>C</span>ommand</a>
            </div>

            <ul class="menu-items">
                <li><a href="#banniere">Accueil</a></li>
                <li><a href="#apropos">A propos</a></li>
            </ul>

            <div class="icon-links">
                <div id="toggle-bar"><span class="toggler"></span></div>
            </div>
        </nav>
    </header>
    <!-- header section end -->

    <div class="section-content">

        <section class="banniere" id="banniere">
            <div class="contenu">
                <h2>Que Des Plats Délicieux</h2>

                <a href="#menu" class="btn1">Nos Menus</a>
            </div>
        </section>
        <section class="apropos" id="apropos">
            <div class="range">
                <div class="col50">
                    <h2 class="titre-text"><span>A </span>Propos De Nous</h2>
                    <p>Nous sommes des étudiants en première année: </p></br>
                    <p>
                    <ul>
                        <li> - ANDRIANARILALA <strong>Tsiory</strong> Fanantenana</li>
                        <li> - ARISOA <strong>Aika</strong> Fitia</li>
                        <li> - HASINDRAINY <strong>Danny</strong> Ricardo</li>
                        <li> - LANDSTEINER Ramelison <strong>Mika</strong> Jessé</li>
                        <li> - RAHARIMAMONJY Soloniaina <strong>Jessica</strong></li>
                        <li> - RAJAONARISON <strong>Tsanta</strong> Emmanuël</li>
                        <li> - RALAIAVY <strong>Fetraniaina</strong> Paul</li>
                        <li> - RIVOLALA Fabio <strong>Ismaël</strong></li>
                    </ul>
                    </p>
                </div>
                <div class="col50">
                    <div class="img">
                        <img src="image/Groupe.JPG" alt="image">
                    </div>
                </div>
            </div>
        </section>



        <section class="menu" id="menu">
            <h2 class="titre-text">
                <span>M</span>enu
            </h2>
            <div class="titre2">
                <a href="Menu.php" class="btn1">Ici pour commander</a>
            </div>
            <div class="contenu">
                <div class="box">
                    <div class="imbox">
                        <img src="image/Soupe.jpg" alt="">
                    </div>
                </div>
                <div class="box">
                    <div class="imbox">
                        <img src="image/Mine sao.jpg" alt="">
                    </div>
                </div>
                <div class="box">
                    <div class="imbox">
                        <img src="image/Pizza.png" alt="">
                    </div>
                </div>
                <div class="box">
                    <div class="imbox">
                        <img src="image/Resistance.jpg" alt="">
                    </div>
                </div>
                <div class="box">
                    <div class="imbox">
                        <img src="image/Snack.png" alt="">
                    </div>
                </div>
                <div class="box">
                    <div class="imbox">
                        <img src="image/Dessert.png" alt="">
                    </div>
                </div>
                <div class="box">
                    <div class="imbox">
                        <img src="image/Boisson.png" alt="">
                    </div>
                </div>
            </div>
        </section>

        <div class="image_click">
            <div class="close-image-area">
                <div id="close-image-area-btn"></div>
            </div>
            <div class="image-content">

            </div>
            <div class>

            </div>
        </div>

        <!-- copyright area start -->
        <?php
            include('footer.php');
        ?>
    </div>
    <!-- copyright area end -->

    <!-- costom js -->
    <script src="./js/script.js"></script>
    <script src="./js/cart.js"></script>

</body>

</html>