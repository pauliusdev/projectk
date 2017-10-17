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

<!-- Navigation Bar -->
<%@ include file="/static.nav.html" %>
        <div class="container">
            <div class="row">
                <br>
                <!--br>
                <div class="col-sm-12">
                    <h3 class="page-header text-center text-primary">Events</h3>
                    <!--h6 class="text-center">Organised by: Newbury Canoe Club</h6-->
                </div>

                <!--div class="col-sm-12">
                    <input type="text" value="" placeholder="Search" id="txtSearchPeople"/>
                    <button id="btnAddPerson" type="button" name="btnAddPerson" onclick="window.location.href='/FCSCLOUD/edit_person.jsp?mode=add';" class="btn btn-primary"><i class="fa fa-plus-circle fa-2x" aria-hidden="true"></i></button>
                    <br/>
                    <br/-->
                
                <table id="table_of_users" class="table table-hover table-striped table-bordered table-responsive table-condensed" cellspacing="0" width="100%">
					        <thead>
					            <tr>
					            	<th></th>
					                <th class="text-center" style="vertical-align: top;">User</th>
					                <th class="text-center" style="vertical-align: top;">Person</th>
					                <th class="text-center" style="vertical-align: top;">Contact Details</th>
					                <th class="text-center" style="vertical-align: top;">Suspended?</th>
					                <th class="text-center" style="vertical-align: top;">Suspension Reason</th>
					                <th class="text-center" style="vertical-align: top;">Expiry</th>
                                    <th class="text-center" style="vertical-align: top;">Actions</th>
					                <th></th>
					            </tr>
					        </thead>
					        <tfoot>
					            <tr>
					            	<th></th>
					                <th></th>
									<th></th>
									<th></th>
					                <th></th>
					                <th></th>
					                <th></th>
									<th></th>
									<th></th>
					            </tr>
					        </tfoot>
						</table>

					</div>
				</div>
		

    <!-- Footer -->
    <%@ include file="/static.footer.html" %>
    <!--frameworks directory -->
    <%@include file="/ext.frameworks.html"%>
</body>
</html>
