	var allRolesForCompany             = new Array();
	var rolesToWhichUserDoesBelong     = new Array();
	var rolesToWhichUserDoesNotBelong  = new Array();
	var permittedActionsForCurrentRole = new Array();

	var uuidSelectedUser;
	var nameSelectedUser;
	var uuidSelectedRole;
	var uuidSelectedCompany;

	var networkOfRoles;
	var nodesForNetworkOfRoles;
	var edgesForNetworkOfRoles;

	function assignToRole(user,role)
	{
		$.post( "/FCSCLOUD/roles", 
			    { 
			    	activity:"assign",
			    	user:user,
			    	role:role
			    }
			   ).done(function( data ) 
		{
			//console.log(data);
			if (data.status)
			{
				changesSaved();

				if(!$("#role_form").hasClass("collapse"))
				{
				    $("#role_form").addClass("collapse");
				}

				if(!$("#actions_form").hasClass("collapse"))
				{
				    $("#actions_form").addClass("collapse");
				}

				populateRolesForUser(uuidSelectedUser,nameSelectedUser);
			}
		});
	}

	function removeFromRole(user,role)
	{
		$.post( "/FCSCLOUD/roles", 
			    { 
			    	activity:"remove",
			    	user:user,
			    	role:role
			    }
			   ).done(function( data ) 
		{
			//console.log(data);
			if (data.status)
			{
				changesSaved();

				if(!$("#role_form").hasClass("collapse"))
				{
				    $("#role_form").addClass("collapse");
				}

				if(!$("#actions_form").hasClass("collapse"))
				{
				    $("#actions_form").addClass("collapse");
				}
				populateRolesForUser(uuidSelectedUser,nameSelectedUser);
			}

		});
	}

	function createRole(name,description,isRoot,isAdmin)
	{
		$.post( "/FCSCLOUD/roles", 
			    { 
			    	activity:"create",
			    	company:uuidSelectedCompany,
			    	name:name,
			    	description:description,
			    	root:isRoot,
			    	administrator:isAdmin
			    }
			   ).done(function( data ) 
		{
			//console.log(data);
			if (data.status)
			{
				changesSaved();

				if(!$("#role_form").hasClass("collapse"))
				{
				    $("#role_form").addClass("collapse");
				}

				if(!$("#actions_form").hasClass("collapse"))
				{
				    $("#actions_form").addClass("collapse");
				}

	    		populateAllRolesForCompany(uuidSelectedCompany);
				populateRolesForUser(uuidSelectedUser,nameSelectedUser);
			}

		});
	}

	function updateRole(role,name,description,isRoot,isAdmin)
	{
		$.post( "/FCSCLOUD/roles", 
			    { 
			    	activity:"update",
			    	role:role,
			    	name:name,
			    	description:description,
			    	root:isRoot,
			    	administrator:isAdmin
			    }
			   ).done(function( data ) 
		{
			//console.log(data);
			if (data.status)
			{
				changesSaved();
			}
		});
	}

	function deleteRole(role)
	{
		$.post( "/FCSCLOUD/roles", 
			    { 
			    	activity:"delete",
			    	role:role
			    }
			   ).done(function( data ) 
		{
			//console.log(data);
			if (data.status)
			{
				changesSaved();

				if(!$("#role_form").hasClass("collapse"))
				{
				    $("#role_form").addClass("collapse");
				}

				if(!$("#actions_form").hasClass("collapse"))
				{
				    $("#actions_form").addClass("collapse");
				}
				populateRolesForUser(uuidSelectedUser,nameSelectedUser);
			}

		});
	}

	function updateAllActionsForRole(role)
	{
		var activity  = "actions";
		var delimiter = "";
		var list      = "";

    	$('[id^=check_action]').each(function()
    	{
	    	var action = $(this).attr('id');
	    	action = action.replace("check_","");
	    	action = action.split("_").join(".");
	    	action = ($(this).prop('checked') ? '+' : '-') + action;
	    	list   = list + delimiter + action;
	    	delimiter = ",";
	    });

		$.post( "/FCSCLOUD/roles", 
			    { 
			    	activity:activity,
			    	role:role,
			    	actions:list
			    }
			   ).done(function( data ) 
		{
			//console.log(data);
			changesSaved();
		});
	}

	function updateActionForRole(role,action,granted)
	{
		// DEPRECATED
	}

	function showActivityIndicator()
	{
		// DEPRECATED
	}

	function hideActivityIndicator()
	{
		// DEPRECATED
	}

	function changesSaved()
	{
		toastr.info('Your changes have been saved');
	}

	function populateAllRolesForCompany(currentCompany)
	{
		// Empty array without creating new array object
		allRolesForCompany.length = 0;

		$('#selUsersForRoles').empty();

		$.post( "/FCSCLOUD/query", 
			    { 
			    	script:"RolesForCompany",
			    	q: currentCompany,
			    	o: "name"
			    }
			   ).done(function( data ) 
		{
			//console.log(data);
			for( var i = 0 ; i < data.total_count ; i++)
			{
				allRolesForCompany.push(data.items[i]);
			}
		});
	}

	function populateAllUsersForCompany(currentCompany)
	{
		uuidSelectedUser = undefined;
		uuidSelectedRole = undefined;

		$('#selUsersForRoles').empty();
		$('#selUsersForRoles').append($('<option>', {value:"", text:"Choose ..."}));

		$.post( "/FCSCLOUD/query", 
			    { 
			    	script:"UsersForCompanyActive",
			    	q: currentCompany,
			    	o: "name"
			    }
			   ).done(function( data ) 
		{
			for(var i = 0 ; i < data.total_count ; i++)
			{
				var opt         = data.items[i];
				var optionValue = opt.uuidUser;
				var optionText  = opt.name;
				$('#selUsersForRoles').append($('<option>', {value:optionValue, text:optionText}));
			}
		});
	}

	function populateRolesForUser(currentUser, name)
	{
		rolesToWhichUserDoesBelong.length    = 0; 
		rolesToWhichUserDoesNotBelong.length = 0;
		$('#selAssignToRole').empty();
		$('#selRemoveFromRole').empty();

		uuidSelectedRole = undefined;

		if(!$("#relationships_form").hasClass("collapse"))
		{
		    $("#relationships_form").addClass("collapse");
		}

		if(!$("#role_form").hasClass("collapse"))
		{
		    $("#role_form").addClass("collapse");
		}

		if(!$("#actions_form").hasClass("collapse"))
		{
		    $("#actions_form").addClass("collapse");
		}

		$.post( "/FCSCLOUD/query", 
			    { 
			    	script:"RolesForUser",
			    	q: currentUser,
			    	o: "name"
			    }
			   ).done(function( data ) 
		{
			//console.log(data);

			for(var i = 0 ; i < data.total_count ; i++)
			{
				rolesToWhichUserDoesBelong.push(data.items[i]);

				var opt         = data.items[i];

				var optionValue = opt.uuidRole;
				var optionText  = opt.name;

				//console.log("User belongs to " + opt.name);

				$('#selRemoveFromRole').append($('<option>', {value:optionValue, text:optionText}));
			}

			for(var j = 0 ; j < allRolesForCompany.length ; j++)
			{
				var companyRoleName = allRolesForCompany[j].name.trim();
				var found           = false;

				for(k = 0 ; k < rolesToWhichUserDoesBelong.length ; k++)
				{
					var userRoleName = rolesToWhichUserDoesBelong[k].name;

					if (companyRoleName === userRoleName.trim())
					{
						found = true;
						break;
					}

				}
				if (!found)
				{
					rolesToWhichUserDoesNotBelong.push(allRolesForCompany[j]);

					var opt         = allRolesForCompany[j];
					var optionValue = opt.uuidRole;
					var optionText  = opt.name;

					//console.log("User doesn't belong to " + opt.name);

					$('#selAssignToRole').append($('<option>', {value:optionValue, text:optionText}));
				}
			}

			var currentRoleID = 2;

			//console.log("Before cleardown - #nodes : " + nodesForNetworkOfRoles.length + ", #edges : " + edgesForNetworkOfRoles.length);

			nodesForNetworkOfRoles.length = 0;
			edgesForNetworkOfRoles.length = 0;

			//console.log("After cleardown - #nodes : " + nodesForNetworkOfRoles.length + ", #edges : " + edgesForNetworkOfRoles.length);

			nodesForNetworkOfRoles.push({
		        id: 1,
		        _fcs_uuid: '',
		        label: name,
		        group: 'users',
			    shadow: true,
		        fixed:
		        {
		        	x: true,
		        	y: true
		        }
		      });

			//console.log("Building Network");

			for(var n = 0 ; n < 2 ; n++)
			{
				//console.log("... Pass " + n);

				var limit = (n == 0 ? rolesToWhichUserDoesBelong.length : rolesToWhichUserDoesNotBelong.length);
				for(var k = 0 ; k < limit ; k++)
				{
					var r = (n == 0 ? rolesToWhichUserDoesBelong[k] : rolesToWhichUserDoesNotBelong[k]);

					//console.log("... Pass " + n + ", Adding " + r.name);

					if (r.isRoot == 1)
					{
						//console.log("... ... Adding Root node");
						nodesForNetworkOfRoles.push({
					        id: currentRoleID,
					        _fcs_uuid: r.uuidRole,
					        label: r.name,
						    shadow: true,
					        group: 'roles',
					        icon: {
					          face: 'FontAwesome',
					          code: '\uf2bd',
					          size: 50,
					          color: '#d3280a'
					        }
					      });
					}
					else if (r.isAdministrator == 1)
					{
						//console.log("... ... Adding Administrator node");
						nodesForNetworkOfRoles.push({
					        id: currentRoleID,
					        _fcs_uuid: r.uuidRole,
					        label: r.name,
						    shadow: true,
					        group: 'roles',
					        icon: {
					          face: 'FontAwesome',
					          code: '\uf2bd',
					          size: 50,
					          color: '#ffa705'
					        }
					      });
					}
					else
					{
						//console.log("... ... Adding Role node");
						nodesForNetworkOfRoles.push({
					        id: currentRoleID,
					        _fcs_uuid: r.uuidRole,
					        label: r.name,
						    shadow: true,
					        group: 'roles'
					      });
					}

					if (n == 0)
					{
						edgesForNetworkOfRoles.push({
		        				from: currentRoleID,
		        				to: 1,
		        				arrows:'to'
		      				});
					}

					currentRoleID++;
				}
			}

			//console.log("Setting Data for Network - #nodes : " + nodesForNetworkOfRoles.length + ", #edges : " + edgesForNetworkOfRoles.length);

			var data = 
			{
				nodes: nodesForNetworkOfRoles,
				edges: edgesForNetworkOfRoles
			};

			networkOfRoles.setData(data);
			setTimeout(function() 
			{
				//console.log("Refreshing Network");
				networkOfRoles.redraw();
				networkOfRoles.fit();
			}, 100);

			if($("#relationships_form").hasClass("collapse"))
			{
				$("#relationships_form").removeClass("collapse");
			}			   
		});
	}

	function populateRole(currentRole)
	{
		if (currentRole !== undefined && currentRole.length > 0)
		{
			//console.log("Populating role identified by " + currentRole);
		    uuidSelectedRole = currentRole;

			$.post( "/FCSCLOUD/query", 
				    { 
				    	script:"DetailsForRole",
				    	q: uuidSelectedRole
				    }
				   ).done(function( data ) 
			{
				//console.log(data);
				if (data.items.length > 0)
				{
					$('#hidRoleUUID').val(data.items[0].uuidRole);
					$('#txtRoleName').val(data.items[0].name);
					$('#txtRoleDescription').val(data.items[0].description);
					$('#chkRoleIsRoot').prop(         'checked', (data.items[0].isRoot          === 1 ? true : false));
					$('#chkRoleIsAdministrator').prop('checked', (data.items[0].isAdministrator === 1 ? true : false));
					if($("#role_form").hasClass("collapse"))
					{
						$("#role_form").removeClass("collapse");
					}			

					populateActionsForRole( uuidSelectedRole );

				}
			});
		}
	}

	function populateActions()
	{
		var action_html     = '<tr><td>{{action_name}}</td><td><input type="checkbox" name="{{action_title}}" id="check_{{action_title}}"/><label for="check_{{action_title}}" class="image_checkbox_label"/></td></tr>';
		var action_template = Handlebars.compile(action_html);

		$.post( "/FCSCLOUD/query", 
			    { 
			    	script:"AllActions",
			    	o:"action_name"
			    }
			   ).done(function( data ) 
		{
			//console.log(data);
			if (data.items.length > 0)
			{
				for(var actionIndex = 0 ; actionIndex < data.items.length ; actionIndex++)
				{
					var action = data.items[actionIndex];
					//console.log(action_template(action));
					$('#table_of_actions').append(action_template(action));
				}
			}
		});
	}

	function populateActionsForRole(currentRole)
	{
		$('[id^=check_action]').each(function()
    	{
    		 $(this).prop('checked',false);
    	});

		$.post( "/FCSCLOUD/query", 
			    { 
			    	script:"ActionsForRole",
			    	q:currentRole
			    }
			   ).done(function( data ) 
		{
			//console.log(data);

			if (data.items.length > 0)
			{
				for(var actionIndex = 0 ; actionIndex < data.items.length ; actionIndex++)
				{
					var action = data.items[actionIndex];

					$('#check_' + action.actionTitle).prop('checked',(action.granted === 1 ? true : false));
				}

				if($("#actions_form").hasClass("collapse"))
				{
					$("#actions_form").removeClass("collapse");
				}	
			}
		});
	}

	function createNetwork(idContainer)
	{
		//console.log("Creating Network:" + idContainer);

		var options = 
		{
			height: '100%',
			width:  '100%',
			interaction: 
			{
				zoomView: false
			},
			groups: 
			{
				roles: 
				{
					shape: 'icon',
					icon: 
					{
						face: 'FontAwesome',
						code: '\uf0a3',
						size: 50,
						color: '#27af23'
					}
				},
				users: 
				{
					shape: 'icon',
					icon: 
					{
						face: 'FontAwesome',
						code: '\uf007',
						size: 50,
						color: '#244de2'
					}
				}
			}
		};

		var container = document.getElementById(idContainer);

		nodesForNetworkOfRoles = new Array();
		edgesForNetworkOfRoles = new Array();

		var data = 
		{
			nodes: nodesForNetworkOfRoles,
			edges: edgesForNetworkOfRoles
		};

		var n = new vis.Network(container, data, options);

	    n.on("selectNode", function (params) {
	    	var nodeIndex = params.nodes[0];
	    	var selectedNode = nodesForNetworkOfRoles[nodeIndex - 1];
	    	populateRole(selectedNode._fcs_uuid);
    	});

		return n;
	}

	var setUp = function(uuidCompany,uuidEmployee,uuidPerson,uuidUser,apiKey)
	{
		// ==============================================---------------------------
		// Helpers
		// ==============================================---------------------------

		var formatMultipleLines = function ( data, type, full, meta )
		{
			if (typeof data !== "undefined")
			{
				var result = data.split("\n").join("<br>");
				if (typeof result !== "undefined")
				{
					result = result.replace('Mobile:'   ,'<i class="fa fa-mobile     fa-fw fa-drop-shadow"></i>&nbsp;')
					result = result.replace('Telephone:','<i class="fa fa-phone      fa-fw fa-drop-shadow"></i>&nbsp;')
					result = result.replace('Email:'    ,'<i class="fa fa-envelope-o fa-fw fa-drop-shadow"></i>&nbsp;')
					return result;
				}
			}
			return data;
		}

		var formatPhoto = function ( data, type, full, meta )
		{
			if (data == null)
			{
				return '<img class="img-rounded shadow" src="/FCSCLOUD/images/avatars/male.png" width="56" alt="Photo"/>'
			}
			return '<img class="img-rounded shadow" src="' + data + '" width="56" alt="Personal Photo"/>';
		}

		// ==============================================---------------------------
		// Navigation Bar
		// ==============================================---------------------------

		$('.nav.navbar-nav > li').removeClass('active');
		$('#menu_people').addClass('active');

		// ==============================================---------------------------
		// Datatable for People
		// ==============================================---------------------------

		$('#table_of_people tfoot th').each( function () {
		        var title = $(this).text();
				if (title != '')
				{
					$(this).html( '<input type="text" placeholder="Search '+ title + '" />' );
				}
		    } );

		var buttonPeopleEdit      = "<button data-action=\"person.edit\"      class=\"btn btn-primary  btn-sm\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Edit Person\">         <i class=\"fa fa-pencil    fa-lg fa-fw\"></i></button>";
		var buttonPeopleIncident  = "<button data-action=\"person.incident\"  class=\"btn btn-success  btn-sm\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Incidents\">           <i class=\"fa fa-flag      fa-lg fa-fw\"></i></button>";
		var buttonPeopleEmployee  = "<button data-action=\"person.employee\"  class=\"btn btn-primary  btn-sm\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Make/View Employee\">  <i class=\"fa fa-user-plus fa-lg fa-fw\"></i></button>";

		var buttonsForPeople  = buttonPeopleEdit + 
		                        "&nbsp;" +
								buttonPeopleIncident +
		                        "&nbsp;" +
								buttonPeopleEmployee;

	    var tableOfPeople = $('#table_of_people').DataTable( {
		    dom: 'lBrtip',
		    buttons: [],
			//	'csv',
		    //    'pdf',
		    //    'print'
		    //],
	        "serverSide" : true,
	        "processing" : true,
	        "ajax" : {
	            "url" : "/FCSCLOUD/datatables",
	            "type" : "POST",
				"data" : {
					"fcs_query":"PeopleAssociatedWithCompany",
					"fcs_parameters":1,
					"fcs_parameter0":uuidCompany,
					"fcs_type0":"string",
					"fcs_rowData":"FFFFFR"
				}
	        },
	        "columns" : [ 
				{ "data" : "Person__lastName"                , "orderable": false                       , "width": "0%"  , "visible":false },
				{ "data" : "name"                            , "orderable": false , "searchable": false , "render":{ "display" : formatMultipleLines } },
                                { "data" : "title"                           , "orderable": false , "searchable": false , "render":{ "display" : formatMultipleLines } },
				{ "data" : "contactDetails"                  , "orderable": false , "searchable": false , "render":{ "display" : formatMultipleLines } },
				{ "data" : "photoUri"                        , "orderable": false , "searchable": false , "render":{ "display" : formatPhoto } },
				{ "data" : "uuidPerson"                      , "orderable": false , "searchable": false , "defaultContent": buttonsForPeople },
				{ "data" : null                              , "orderable": false , "searchable": false , "width": "0%"  , "visible":false }
		    ],
			"paging":true ,
			"pagingType":"full_numbers" ,
			"pageLength": 5 ,
			"lengthChange":true ,
	        "ordering":true ,
	        "info":true
	    } );

	    $('#table_of_people tbody').on( 'click', 'tr', {"table":tableOfPeople}, function (event) 
	    {
	    	var table     = event.data.table;

			if ( $(this).hasClass('selected') ) 
			{
    			$(this).removeClass('selected');
			}
			else 
			{
    			table.$('tr.selected').removeClass('selected');
    			$(this).addClass('selected');
			}
		});

		$('#table_of_people tbody').on( 'click', 'button', {"table":tableOfPeople}, function (event) 
		{
			var action    = $(this).data("action");
			var tableRow  = $(this).parents('tr');
			var table     = event.data.table;
			var data      = table.row( tableRow ).data();
				
			if (action == 'person.edit')
			{
				var dtrowdata = data.DT_RowData;
				if (typeof dtrowdata !== "undefined")
				{
					console.log(dtrowdata);
					var uuid = dtrowdata.uuidPerson;
					if (typeof uuid !== "undefined")
					{
						//console.log("uuidEmployee:" + uuid);
						window.location.href = "/FCSCLOUD/edit_person.jsp?" + uuid;
					}
				}
			}
			else if(action == 'person.incident')
			{
				// We're looking to create a new assessment with the Injured Person set to this person.
				var dtrowdata = data.DT_RowData;
				if (typeof dtrowdata !== "undefined")
				{
					console.log(dtrowdata);
					var uuid = dtrowdata.uuidPerson;
					if (typeof uuid !== "undefined")
					{
						window.location.href = "/FCSCLOUD/assessments.jsp?uuidQuestionnaire=0AEDF98A-8EA2-11E7-A7D9-98D57D88C246f&uuidData=" + uuid;
					}
				}
			}
			else if(action == 'person.employee')
			{
				var dtrowdata = data.DT_RowData;
				if (typeof dtrowdata !== "undefined")
				{
					console.log(dtrowdata);
					var uuid = dtrowdata.uuidPerson;  
					if (typeof uuid !== "undefined")
					{
						window.location.href = "/FCSCLOUD/promoter.jsp?mode=employee&uuidPerson=" + uuid + "&uuidCompany=" + uuidCompany;
					}
				}
			}
		} );
		

		$('#txtSearchPeople').on('keyup change', function()
		{
			var criteria = $('#txtSearchPeople').val();
			tableOfPeople.columns(0).search( $('#txtSearchPeople').val() + "%" ).draw();
		});


		// ==============================================---------------------------
		// Datatable for Employees
		// ==============================================---------------------------

		$('#table_of_employees tfoot th').each( function () {
		        var title = $(this).text();
				if (title != '')
				{
					$(this).html( '<input type="text" placeholder="Search '+ title + '" />' );
				}
		    } );

		var buttonEmployeeEdit      = "<button data-action=\"employee.edit\"      class=\"btn btn-primary  btn-sm\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Edit Employee\">  <i class=\"fa fa-pencil    fa-lg fa-fw\"></i></button>";
		var buttonEmployeeIncident  = "<button data-action=\"employee.incident\"  class=\"btn btn-success  btn-sm\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Incidents\">      <i class=\"fa fa-flag      fa-lg fa-fw\"></i></button>";
		var buttonEmployeeUser      = "<button data-action=\"employee.user\"      class=\"btn btn-success  btn-sm\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Make/View User\"> <i class=\"fa fa-user-plus fa-lg fa-fw\"></i></button>";

		var buttonsForEmployee  = buttonEmployeeEdit + 
		                          "&nbsp;" +
								  buttonEmployeeIncident +
		                          "&nbsp;" +
		                          buttonEmployeeUser;

	    var tableOfEmployees = $('#table_of_employees').DataTable( {
		    dom: 'lBrtip',
		    buttons: [],
			//	'csv',
		    //    'pdf',
		    //    'print'
		    //],
	        "serverSide" : true,
	        "processing" : true,
	        "ajax" : {
	            "url" : "/FCSCLOUD/datatables",
	            "type" : "POST",
				"data" : {
					"fcs_query":"EmployeesForCompany",
					"fcs_parameters":1,
					"fcs_parameter0":uuidCompany,
					"fcs_type0":"string",
					"fcs_rowData":"FFFFFFFFRR"
				}
	        },
	        "columns" : [ 
				{ "data" : "Person__lastName"         , "orderable": false                       , "width": "0%"  , "visible":false },
				{ "data" : "businessCard"             , "orderable": false , "searchable": false , "render":{ "display" : formatMultipleLines } },
				{ "data" : "brandAndDepartmentName"   , "orderable": false , "searchable": false , "render":{ "display" : formatMultipleLines } },
				{ "data" : "boss"                     , "orderable": false , "searchable": false },
				{ "data" : "employed"                 , "orderable": false , "searchable": false , "render":{ "display" : formatMultipleLines } },
				{ "data" : "location"                 , "orderable": false , "searchable": false , "render":{ "display" : formatMultipleLines } },
				{ "data" : "photoUri"                 , "orderable": false , "searchable": false , "render":{ "display" : formatPhoto } },
			    { "data" : "contactDetails"           , "orderable": false , "searchable": false , "render":{ "display" : formatMultipleLines } },
				{ "data" : "uuidEmployee"             , "orderable": false , "searchable": false , "defaultContent": buttonsForEmployee },
				{ "data" : null                       , "orderable": false , "searchable": false , "width": "0%"  , "visible":false }
		    ],
			"paging":true ,
			"pagingType":"full_numbers" ,
			"pageLength": 10 ,
			"lengthChange":true ,
	        "ordering":true ,
	        "info":true
	    } );
		
	    $('#table_of_employees tbody').on( 'click', 'tr', {"table":tableOfEmployees}, function (event) 
	    {
	    	var table     = event.data.table;

			if ( $(this).hasClass('selected') ) 
			{
    			$(this).removeClass('selected');
			}
			else 
			{
    			table.$('tr.selected').removeClass('selected');
    			$(this).addClass('selected');
			}
		});

		$('#table_of_employees tbody').on( 'click', 'button', {"table":tableOfEmployees}, function (event) 
		{
			var action    = $(this).data("action");
			var tableRow  = $(this).parents('tr');
			var table     = event.data.table;
			var data      = table.row( tableRow ).data();
				
			if (action == 'employee.edit')
			{
				var dtrowdata = data.DT_RowData;
				if (typeof dtrowdata !== "undefined")
				{
					//console.log(dtrowdata);
					var uuid = dtrowdata.uuidEmployee;
					if (typeof uuid !== "undefined")
					{
						//console.log("uuidEmployee:" + uuid);
						window.location.href = "/FCSCLOUD/edit_employee.jsp?" + uuid;
					}
				}
			}
			else if (action == 'employee.incident')
			{
				// We're looking to create a new assessment with the Injured Person set to this person.

				var dtrowdata = data.DT_RowData;
				if (typeof dtrowdata !== "undefined")
				{
					console.log(dtrowdata);
					var uuid = dtrowdata.uuidEmployee;  
					if (typeof uuid !== "undefined")
					{
						window.location.href = "/FCSCLOUD/assessments.jsp?uuidQuestionnaire=0AEDF98A-8EA2-11E7-A7D9-98D57D88C246&uuidData=" + uuid;
					}
				}
			}
			else if (action == 'employee.user')
			{
				// FIND/CREATE A USER BASED ON THIS EMPLOYEE AND THEN SWITCH TO EDITING THAT USER

				var dtrowdata = data.DT_RowData;
				if (typeof dtrowdata !== "undefined")
				{
					console.log(dtrowdata);
					var uuid = dtrowdata.uuidEmployee;  
					if (typeof uuid !== "undefined")
					{
						window.location.href = "/FCSCLOUD/promoter.jsp?mode=user&uuidEmployee=" + uuid + "&uuidCompany=" + uuidCompany;
					}
				}
			}
		} );
		

		$('#txtSearchEmployees').on('keyup change', function()
		{
			var criteria = $('#txtSearchEmployees').val();
			tableOfEmployees.columns(0).search( $('#txtSearchEmployees').val() + "%" ).draw();
		});

		// ==============================================---------------------------
		// Datatable for Users
		// ==============================================---------------------------

		$('#table_of_users tfoot th').each( function () {
		        var title = $(this).text();
				if (title != '')
				{
					$(this).html( '<input type="text" placeholder="Search '+ title + '" />' );
				}
		    } );

		var buttonUserEdit  = "<button data-action=\"user.edit\" class=\"btn btn-primary  btn-sm\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Edit User\"> <i class=\"fa fa-pencil  fa-lg fa-fw\"></i></button>";

		var buttonsForUser  = buttonUserEdit;

	    var tableOfUsers = $('#table_of_users').DataTable( {
		    dom: 'lBrtip',
		    buttons: [],
			//	'csv',
		    //    'pdf',
		    //    'print'
		    //],
	        "serverSide" : true,
	        "processing" : true,
	        "ajax" : {
	            "url" : "/FCSCLOUD/datatables",
	            "type" : "POST",
				"data" : {
					"fcs_query":"UsersForCompany",
					"fcs_parameters":1,
					"fcs_parameter0":uuidCompany,
					"fcs_type0":"string",
					"fcs_rowData":"FFFFFFFR"
				}
	        },
	        "columns" : [ 
				{ "data" : "User__username"              , "orderable": false                       , "width": "0%"  , "visible":false },
				{ "data" : "username"                    , "orderable": false , "searchable": false },
				{ "data" : "name"                        , "orderable": false , "searchable": false },
				{ "data" : "contactDetails"              , "orderable": false , "searchable": false , "render":{ "display" : formatMultipleLines } },
				{ "data" : "formattedAccountSuspendedAt" , "orderable": false , "searchable": false },
				{ "data" : "suspensionReasonDescription" , "orderable": false , "searchable": false },
				{ "data" : "formattedAccountExpiresAt"   , "orderable": false , "searchable": false },
				{ "data" : "uuidUser"                    , "orderable": false , "searchable": false , "defaultContent": buttonsForUser },
				{ "data" : null                          , "orderable": false , "searchable": false , "width": "0%"  , "visible":false }
		    ],
			"paging":true ,
			"pagingType":"full_numbers" ,
			"pageLength": 10 ,
			"lengthChange":true ,
	        "ordering":true ,
	        "info":true
	    } );

		$('#table_of_users tbody').on( 'click', 'button', {"table":tableOfUsers}, function (event) 
		{
			var action    = $(this).data("action");
			var tableRow  = $(this).parents('tr');
			var table     = event.data.table;
			var data      = table.row( tableRow ).data();
				
			if (action == 'user.edit')
			{
				var dtrowdata = data.DT_RowData;
				if (typeof dtrowdata !== "undefined")
				{
					//console.log(dtrowdata);
					var uuid = dtrowdata.uuidUser;
					if (typeof uuid !== "undefined")
					{
						//console.log("uuidEmployee:" + uuid);
						window.location.href = "/FCSCLOUD/edit_user.jsp?" + uuid;
					}
				}
			}
		} );

		$('#txtSearchUsers').on('keyup change', function()
		{
			var criteria = $('#txtSearchUsers').val();
			tableOfUsers.columns(0).search( $('#txtSearchUsers').val() + "%" ).draw();
		});

		// ==============================================---------------------------
		// Roles
		// ==============================================---------------------------

	    uuidSelectedCompany = uuidCompany;

	    networkOfRoles = createNetwork('networkOfRoles');

	    populateActions();

	    populateAllRolesForCompany(uuidCompany);
	    populateAllUsersForCompany(uuidCompany);

	    $('#selUsersForRoles').change(function() {
	    	if ($(this).val().length)
	    	{
	    		uuidSelectedUser = $(this).val();
	    		nameSelectedUser = $(this).find(':selected').text();
	    		populateRolesForUser( $(this).val(), $(this).find(':selected').text() );
	    	}
  		});

	    $('#buttonAssign').click(function(){
	    	var uuidRole = $('#selAssignToRole').find(':selected').val();
	    	if (uuidRole !== undefined && uuidSelectedUser !== undefined)
		    	assignToRole(uuidSelectedUser,uuidRole);
	    });

	    $('#buttonRemove').click(function(){
	    	var uuidRole = $('#selRemoveFromRole').find(':selected').val();
	    	if (uuidRole !== undefined && uuidSelectedUser !== undefined)
		    	removeFromRole(uuidSelectedUser,uuidRole);
	    });

	    $('#buttonCreate').click(function(){
	    	createRole(
		    	$('#txtRoleName').val(),
		    	$('#txtRoleDescription').val(),
		    	($('#chkRoleIsRoot').prop('checked')          ? 1 : 0),
		    	($('#chkRoleIsAdministrator').prop('checked') ? 1 : 0));
	    });

	    $('#buttonUpdate').click(function(){
	    	updateRole(
		    	$('#hidRoleUUID').val(),
		    	$('#txtRoleName').val(),
		    	$('#txtRoleDescription').val(),
		    	($('#chkRoleIsRoot').prop('checked')          ? 1 : 0),
		    	($('#chkRoleIsAdministrator').prop('checked') ? 1 : 0));
	    });

	    $('#buttonDelete').click(function(){
	    	toastr.error("Deleting a role is currently unavailable.");
	    });

	    $('#buttonUpdateActions').click(function(){
	    	updateAllActionsForRole( $('#hidRoleUUID').val() );
	    });
	}
