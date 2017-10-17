<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>JSP Page</title>
    <!-- CSS Stylesheets -->
    <%@include file="/ext.styles.html"%>    
</head>
<body>
    <%@ include file="/static.nav.html"%>
    
    <!-- Page content -->
    <div class="container">
        <div class="row">

        <br>
            <div class="col-sm-12">
                <h3 class="page-header text-center text-primary">Contact Us</h3>
                <!--h6 class="text-center">Organised by: Newbury Canoe Club</h6-->
            </div>
        </div>
        <!--br>
        <br-->
        <div class="container">
        <div class="row-fluid">
            <div class="span4">
                <h2 class="text-primary">The Waterside Series Of Canoe Races</h2>
                    <address>
                        <strong>Waterside Entry</strong><br>
                                35 Kingsley Close,
                                <br>
                                Newbury,
                                <br>
                                Berkshire
                                <br>
                                RG142EB
                                <br>
                                <a href="tel:07507 173145"/>07507 173145<br>
                                <a href="mailto:info@watersideseries.org.uk"/><p>info@watersideseries.org.uk</p> 
                            </div>
        <div class="span8">
        	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1244.1752693355184!2d-1.3162609416049078!3d51.41498709490504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876a60ff309b0d9%3A0xf1ffd83ce0b948dc!2sKingsley+Cl%2C+Newbury+RG14+2EB!5e0!3m2!1sen!2suk!4v1506338278945" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
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
