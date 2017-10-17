<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>JSP Page</title>
    <!-- CSS Stylesheets -->
    <%@include file="/ext.styles.html"%>    
<style>
   
</style>
</head>
<body>
    <%@ include file="/static.nav.html"%>
    
    <!-- Page content -->
    <div class="container">
        <div class="row">
        <br>
        <!--br-->
            <div class="col-sm-12">
                <h3 class="page-header text-center text-primary">Sponsores</h3>
                <!--h6 class="text-center">Organised by: Newbury Canoe Club</h6-->
            </div>
        </div>
        <br>
        <br>
        <div class="container" id="features">
            <div class="row">
                
                <div class="col-md-4 feature">
                    <i class="glyphicon glyphicon-picture"></i>
                    <h3>Devizes to Westminster</h3>
                    <div class="title_border"></div>
                    <p>Official Devizes to Westminster Page</p>
                </div>
                
                <div class="divider">
                <div class="col-md-4 feature">
                    <i class="glyphicon glyphicon-globe"></i>
                    <h3>Official Devizes to Westminster Page</h3>
                    <div class="title_border"></div>
                    <p>Official Devizes to Westminster Page</p>
                </div>
                    
                <div class="col-md-4 feature">
                    <i class="glyphicon glyphicon-briefcase"></i>
                    <h3>Official Devizes to Westminster Page</h3>
                    <div class="title_border"></div>
                    <p>Official Devizes to Westminster Page</p>
                </div>
            </div>
        </div>
        
    <script type="text/javascript"><%@include file="/sponsores.js" %></script>
    <!-- Footer -->
    <%@ include file="/static.footer.html" %>
    
    <!--frameworks directory -->
    <%@include file="/ext.frameworks.html"%>
    
</body>
</html>
