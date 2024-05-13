<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>intent</title>
    <style>
        .container{
            height: 100vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        .links{
            margin: 15px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="links">
            <a href="intent://#Intent;scheme=tgt;package=id.oktal.target;action=android.intent.action.VIEW;end">Buka Aplikasi Target</a>
        </div>
        <div class="links">
            <a href="intent://promo.html#Intent;scheme=tgt;package=id.oktal.target;end">Deeplink</a>
        </div>
    </div>
</body>
</html>