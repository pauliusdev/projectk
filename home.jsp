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
                <h3 class="page-header text-center text-primary">The Waterside Series Of Canoe Races</h3>
                <h6 class="text-center">Organised by: Newbury Canoe Club</h6>
            </div>
        </div>
        <br>
        <br>
        <div class="row grid-divider">
            <div class="col-sm-4">
                <div class="col-padding">
                    <h3>NCC New Club House Build Project</h3>
                    <br>
                    <p>Support the development of Newbury Canoe Club's new clubhouse. 
                    Newbury Canoe Club is committed to improving canoeing opportunities in the local area
                    and ensuring the continued running of the Waterside Series.</p>
                    
                    <p>We currently have a shortfall in our funding, are you able to help? 
                    If you want to know more or wish to donate click on Know More or Donate </p>
                    
                    <p>Thanks to everyone who have already donated to Newbury Canoe Club's New Club House Build Project</p>
                    <br>
                    <button type="button" onclick="window.location.href='https://thegoodexchange.com/project/11131/newbury-canoe-club/newbury-canoe-club-redevelopment'" class="btn btn-info btn-block"><i class="fa fa-info" ></i> Information</button>
                    <button type="button" onclick="window.location.href='https://thegoodexchange.com/project/11131/newbury-canoe-club/newbury-canoe-club-redevelopment'" class="btn btn-primary btn-block"><i class="fa fa-paypal"></i> Donate</button>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="col-padding">
                    <h3>Something</h3>
                    <p>xxxx</p>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="col-padding">
                    <h3>Something</h3>
                    <p>xxxx</p>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript"><%@include file="/home.js" %></script>
    <!-- Footer -->
    <%@ include file="/static.footer.html" %>
    
    <!--frameworks directory -->
    <%@include file="/ext.frameworks.html"%>
    
</body>
</html>
