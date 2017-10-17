<!DOCTYPE html>
<html>
<head>
    <title>Project-K</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSS Stylesheets -->
    <%@ include file="/ext.styles.html" %>
    <style>
        body 
        { 
        background: url(images/backgrounds/canoe.jpg) no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        }
    </style>
</head>
    
<body>
    <div class="container" style="margin-top:40px">
        <div class="row">
            <div class="col-sm-6 col-md-4 col-md-offset-4">
                <div class="panel panel-default">
                    <div class="panel-heading text-center">
                        <strong> Sign in to continue</strong>
                    </div>
                    <div class="panel-body">
                        <form role="form" action="home.jsp" method="POST">
                            <fieldset>
                                <div class="row">
                                    <div class="center-block">
                                        <img class="profile-img" src="images/userlogin.jpg" alt="">
                                    </div>
                                    </div>
                                        <div class="row">
                                            <div class="col-sm-12 col-md-10  col-md-offset-1 ">
                                                <div class="form-group">
                                                    <div class="input-group">
                                                        <span class="input-group-addon">
                                                            <i class="glyphicon glyphicon-user"></i>
                                                        </span> 
                                                            <input class="form-control" placeholder="Username" name="loginname" type="text" autofocus>
                                                    </div>
                                                </div>
                                                    <div class="form-group">
                                                        <div class="input-group">
                                                            <span class="input-group-addon">
                                                                <i class="glyphicon glyphicon-lock"></i>
                                                            </span>
                                                                <input class="form-control" placeholder="Password" name="password" type="password" value="">
                                                        </div>
                                                    </div>
                                                        <div class="form-group">
                                                            <input type="submit" class="btn btn-lg btn-primary btn-block" value="Sign in">
                                                            <input type="button" onclick="window.location.href='registerUser.jsp'" class="btn btn-lg btn-info btn-block" value="Register">
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                        <div class="panel-footer" align="center">
                                            <a href="#" onClick="">Continue as a Guest</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    <!--frameworks directory -->
    <%@ include file="/ext.frameworks.html" %>
</body>
</html>
