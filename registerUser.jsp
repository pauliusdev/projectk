<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>JSP Page</title>
    <!-- CSS Stylesheets -->
    <%@ include file="/internal.styles.html" %>
</head>
<body>
    <br>
    <br>
    <!-- EDITOR -->
    <div class="container">
    <form class="form-horizontal" method="POST" name="formPerson" id="formPerson" action="/FCSCLOUD/person" enctype="multipart/form-data" data-parsley-validate="" data-parsley-ui-enabled="false">
    <fieldset>


    <div class="panel panel-info">
        <div class="panel-heading">
            <h3 class="panel-title">User Register Form</h3>
        </div>

        <div class="panel-body">
            <div class="form-group">
                <label class="col-sm-4 control-label" for="selTitle">Title</i></label>
                    <div class="col-sm-4">
        <select id="selTitle" name="selTitle" class="form-control">
            <option value="Mr" selected>Mr</option>
            <option value="Master">Master</option>
            <option value="Miss">Miss</option>
            <option value="Ms">Ms</option>
            <option value="Mrs">Mrs</option>
            <option value="Dr">Dr</option>
            <option value="Prof.">Prof.</option>
            <option value="Hon.">Hon.</option>
            <option value="Rt Hon.">Rt Hon.</option>
            <option value="Sir">Sir</option>
            <option value="Dame">Dame</option>
            <option value="Lord">Lord</option>
            <option value="Lady">Lady</option>
            <option value="Father">Father</option>
            <option value="Pastor">Pastor</option>
            <option value="Bishop">Bishop</option>
            <option value="Abbot">Abbot</option>
            <option value="Reverend">Reverend</option>
            <option value="Rabbi">Rabbi</option>
            <option value="Imam">Imam</option>
            <option value="M.">M.</option>
            <option value="Mme.">Mme.</option>
            <option value="Mlle.">Mlle.</option>
            <option value="Herr">Herr</option>
            <option value="Frau">Frau</option>
            <option value="Fraulein">Fraulein</option>
            <option value="Lt.">Lt.</option>
            <option value="Capt.">Capt.</option>
            <option value="Maj.">Maj.</option>
            <option value="Brig.">Brig.</option>
            <option value="Maj Gen.">Maj Gen.</option>
            <option value="Lt">Lt Gen.</option>
            <option value="Cdr.">Cdr.</option>
            <option value="Cdre.">Cdre.</option>
            <option value="Lt Cdr">Lt Cdr.</option>
            <option value="Sgt.">Sgt.</option>
            <option value="Sgt Maj.">Sgt Maj.</option>
            <option value="Cpl.">Cpl.</option>
            <option value="LCpl.">LCpl.</option>
        </select>
    </div>
        </div>

        <div class="form-group">
            <label class="col-sm-4 control-label" for="txtName">Name <i class="text-info fa fa-asterisk fa-fw fa-spin" aria-hidden="true"></i></label>  
                <div class="col-sm-4">
                    <input id="txtName" name="txtName" type="text" placeholder="" class="form-control" required="">
                <span class="parsley_error_message">REQUIRED</span>
            </div>
        </div>

        <div class="form-group">
            <label class="col-sm-4 control-label" for="radGender">Gender</label>
                <div class="col-sm-4"> 
                    <label class="radio-inline" for="radGenderMale">
                        <input type="radio" name="radGender" id="radGenderMale" value="MALE" checked="checked">
                        Male
                    </label> 
                    <label class="radio-inline" for="radGenderFemale">
                        <input type="radio" name="radGender" id="radGenderFemale" value="FEMALE">
                        Female
                    </label>
                </div>
            </div>

        <div class="form-group">
            <label class="col-sm-4 control-label" for="btnUploadPhoto">Photo</label>
                <div class="col-sm-4">
                    <input id="btnUploadPhoto" name="btnUploadPhoto" class="input-file" type="file"><img id="imgAvatar" class="img-rounded shadow" src="/FCSCLOUD/images/avatars/male.png" width="56" alt="Photo"/>
                </div>
            </div>

        <div class="form-group">
            <label class="col-sm-4 control-label" for="txtDateOfBirth">Date Of Birth </label>  
                <div class="col-sm-4">
                    <div class="input-group">
                        <input id="txtDateOfBirth" name="txtDateOfBirth" type="date" data-parsley-value="" onchange="$(this).data('parsley-value',parsleyDate($(this).val()));" class="form-control input-sm"/>
                        <span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
                     </div>
                </div>
            </div>





        <div class="form-group">
            <label class="col-sm-4 control-label" for="txtAddrTown">Town/City</label>  
                <div class="col-sm-4">
                    <input id="txtAddrTown" name="txtAddrTown" type="text" placeholder="" class="form-control input-sm" required="">
                    <span class="parsley_error_message">REQUIRED</span>
                </div>
            </div>


    <div class="form-group">
        <label class="col-sm-4 control-label" for="selAddrCountry">Country </label>  
            <div class="col-sm-4">
                <select id="selAddrCountry" name="selAddrCountry" onchange="${'#selCounty'}.attr('data-parameter-0',$('#selAddrCountry').val());" class="form-control">
            <option value="221" selected>United Kingdom</option>
            <option value="1">Andorra, Principality of</option>
            <option value="2">United Arab Emirates</option>
            <option value="3">Afghanistan, Islamic State of</option>
            <option value="4">Antigua and Barbuda</option>
            <option value="5">Anguilla</option>
            <option value="6">Albania</option>
            <option value="7">Armenia</option>
            <option value="8">Netherlands Antilles</option>
            <option value="9">Angola</option>
            <option value="10">Argentina</option>
            <option value="11">American Samoa</option>
            <option value="12">Austria</option>
            <option value="13">Australia</option>
            <option value="14">Aruba</option>
            <option value="15">Azerbaidjan</option>
            <option value="16">Bosnia-Herzegovina</option>
            <option value="17">Barbados</option>
            <option value="18">Bangladesh</option>
            <option value="19">Belgium</option>
            <option value="20">Burkina Faso</option>
            <option value="21">Bulgaria</option>
            <option value="22">Bahrain</option>
            <option value="23">Burundi</option>
            <option value="24">Benin</option>
            <option value="25">Bermuda</option>
            <option value="26">Brunei Darussalam</option>
            <option value="27">Bolivia</option>
            <option value="28">Brazil</option>
            <option value="29">Bahamas</option>
            <option value="30">Bhutan</option>
            <option value="31">Bouvet Island</option>
            <option value="32">Botswana</option>
            <option value="33">Belarus</option>
            <option value="34">Belize</option>
            <option value="35">Canada</option>
            <option value="36">Congo, The Democratic Republic of the (was Zaire)</option>
            <option value="37">Central African Republic</option>
            <option value="38">Congo, People's Replublic Of</option>
            <option value="39">Switzerland</option>
            <option value="40">Ivory Coast (Cote D'Ivoire)</option>
            <option value="41">Cook Islands</option>
            <option value="42">Chile</option>
            <option value="43">Cameroon</option>
            <option value="44">China</option>
            <option value="45">Colombia</option>
            <option value="46">Costa Rica</option>
            <option value="47">Former Czechoslovakia</option>
            <option value="48">Cuba</option>
            <option value="49">Cape Verde</option>
            <option value="50">Christmas Island</option>
            <option value="51">Cyprus</option>
            <option value="52">Czech Republic</option>
            <option value="53">Germany</option>
            <option value="54">Djibouti</option>
            <option value="55">Denmark</option>
            <option value="56">Dominica</option>
            <option value="57">Dominican Republic</option>
            <option value="58">Algeria</option>
            <option value="59">Ecuador</option>
            <option value="60">Estonia</option>
            <option value="61">Egypt</option>
            <option value="62">Western Sahara</option>
            <option value="63">Morocco/Western Sahara</option>
            <option value="64">Eritrea</option>
            <option value="65">Spain</option>
            <option value="66">Ethiopia</option>
            <option value="67">Finland</option>
            <option value="68">Fiji</option>
            <option value="69">Falkland Islands</option>
            <option value="70">Micronesia</option>
            <option value="71">Faroe Islands</option>
            <option value="72">France</option>
            <option value="73">France (European Territory)</option>
            <option value="74">Gabon</option>
            <option value="75">Great Britain</option>
            <option value="76">Grenada</option>
            <option value="77">Georgia</option>
            <option value="78">French Guyana</option>
            <option value="79">Ghana</option>
            <option value="80">Gibraltar</option>
            <option value="81">Greenland</option>
            <option value="82">Gambia</option>
            <option value="83">Guinea</option>
            <option value="84">Guadeloupe (French)</option>
            <option value="85">Equatorial Guinea</option>
            <option value="86">Greece</option>
            <option value="87">S. Georgia & S. Sandwich Isls.</option>
            <option value="88">Guatemala</option>
            <option value="89">Guam (USA)</option>
            <option value="90">Guinea Bissau</option>
            <option value="91">Guyana</option>
            <option value="92">Hong Kong</option>
            <option value="93">Heard and McDonald Islands</option>
            <option value="94">Honduras</option>
            <option value="95">Croatia (Hrvatska)</option>
            <option value="96">Haiti</option>
            <option value="97">Hungary</option>
            <option value="98">Indonesia</option>
            <option value="99">Ireland</option>
            <option value="100">Israel</option>
            <option value="101">India</option>
            <option value="102">British Indian Ocean Territory</option>
            <option value="103">Iraq</option>
            <option value="104">Iran</option>
            <option value="105">Iceland</option>
            <option value="106">Italy</option>
            <option value="107">Jamaica</option>
            <option value="108">Jordan</option>
            <option value="109">Japan</option>
            <option value="110">Kenya</option>
            <option value="111">Kyrgyz Republic (Kyrgyzstan)</option>
            <option value="112">Cambodia, Kingdom of</option>
            <option value="113">Kiribati</option>
            <option value="114">Saint Kitts & Nevis Anguilla</option>
            <option value="115">North Korea</option>
            <option value="116">South Korea</option>
            <option value="117">Kuwait</option>
            <option value="118">Cayman Islands</option>
            <option value="119">Kazakhstan</option>
            <option value="120">Laos</option>
            <option value="121">Lebanon</option>
            <option value="122">Saint Lucia</option>
            <option value="123">Liechtenstein</option>
            <option value="124">Sri Lanka</option>
            <option value="125">Liberia</option>
            <option value="126">Lesotho</option>
            <option value="127">Lithuania</option>
            <option value="128">Luxembourg</option>
            <option value="129">Latvia</option>
            <option value="130">Libya</option>
            <option value="131">Monaco</option>
            <option value="132">Moldavia</option>
            <option value="133">Madagascar</option>
            <option value="134">Marshall Islands</option>
            <option value="135">Macedonia</option>
            <option value="136">Mali</option>
            <option value="137">Myanmar</option>
            <option value="138">Mongolia</option>
            <option value="139">Macau</option>
            <option value="140">Northern Mariana Islands</option>
            <option value="141">Martinique (French)</option>
            <option value="142">Mauritania</option>
            <option value="143">Montserrat</option>
            <option value="144">Malta</option>
            <option value="145">Mauritius</option>
            <option value="146">Maldives</option>
            <option value="147">Malawi</option>
            <option value="148">Mexico</option>
            <option value="149">Malaysia</option>
            <option value="150">Mozambique</option>
            <option value="151">Namibia</option>
            <option value="152">New Caledonia (French)</option>
            <option value="153">Niger</option>
            <option value="154">Antarctica</option>
            <option value="155">Norfolk Island</option>
            <option value="156">Nigeria</option>
            <option value="157">Nicaragua</option>
            <option value="158">Netherlands</option>
            <option value="159">Norway</option>
            <option value="160">Nepal</option>
            <option value="161">Nauru</option>
            <option value="162">New Zealand</option>
            <option value="163">Oman</option>
            <option value="164">Panama</option>
            <option value="165">Peru</option>
            <option value="166">Polynesia (French)</option>
            <option value="167">Papua New Guinea</option>
            <option value="168">Philippines</option>
            <option value="169">Pakistan</option>
            <option value="170">Poland</option>
            <option value="171">Saint Pierre and Miquelon</option>
            <option value="172">Pitcairn Island</option>
            <option value="173">Puerto Rico</option>
            <option value="174">Palestinian Territory (Occupied)</option>
            <option value="175">Portugal</option>
            <option value="176">Palau</option>
            <option value="177">Paraguay</option>
            <option value="178">Qatar</option>
            <option value="179">Reunion (French)</option>
            <option value="180">Romania</option>
            <option value="181">Russian Federation</option>
            <option value="182">Rwanda</option>
            <option value="183">Saudi Arabia</option>
            <option value="184">Solomon Islands</option>
            <option value="185">Seychelles</option>
            <option value="186">Sudan</option>
            <option value="187">Sweden</option>
            <option value="188">Singapore</option>
            <option value="189">Saint Helena</option>
            <option value="190">Slovenia</option>
            <option value="191">Svalbard and Jan Mayen Islands</option>
            <option value="192">Slovak Republic</option>
            <option value="193">Sierra Leone</option>
            <option value="194">San Marino</option>
            <option value="195">Senegal</option>
            <option value="196">Somalia</option>
            <option value="197">Suriname</option>
            <option value="198">Saint Tome (Sao Tome) and Principe</option>
            <option value="199">Former USSR</option>
            <option value="200">El Salvador</option>
            <option value="201">Syria</option>
            <option value="202">Swaziland</option>
            <option value="203">Turks and Caicos Islands</option>
            <option value="204">Chad</option>
            <option value="205">French Southern Territories</option>
            <option value="206">Togo</option>
            <option value="207">Thailand</option>
            <option value="208">Tadjikistan</option>
            <option value="209">Tokelau</option>
            <option value="210">Turkmenistan</option>
            <option value="211">Tunisia</option>
            <option value="212">Tonga</option>
            <option value="213">East Timor</option>
            <option value="214">Turkey</option>
            <option value="215">Trinidad and Tobago</option>
            <option value="216">Tuvalu</option>
            <option value="217">Taiwan</option>
            <option value="218">Tanzania</option>
            <option value="219">Ukraine</option>
            <option value="220">Uganda</option>
            <option value="222">USA Minor Outlying Islands</option>
            <option value="223">United Nations</option>
            <option value="224">United States</option>
            <option value="225">Uruguay</option>
            <option value="226">Uzbekistan</option>
            <option value="227">Holy See (Vatican City State)</option>
            <option value="228">Saint Vincent & Grenadines</option>
            <option value="229">Venezuela</option>
            <option value="230">Virgin Islands (British)</option>
            <option value="231">Virgin Islands (USA)</option>
            <option value="232">Vietnam</option>
            <option value="233">Vanuatu</option>
            <option value="234">Wallis and Futuna Islands</option>
            <option value="235">Samoa</option>
            <option value="236">Yemen</option>
            <option value="237">Comoros</option>
            <option value="238">Mayotte</option>
            <option value="239">Yugoslavia</option>
            <option value="240">South Africa</option>
            <option value="241">Zambia</option>
            <option value="242">Cocos (Keeling) Islands</option>
            <option value="243">Zaire</option>
            <option value="244">Zimbabwe</option>
                </select>
            </div>
        </div>

        <div class="form-group">
            <label class="col-sm-4 control-label" for="txtMobile">Mobile <i class="text-info fa fa-asterisk fa-fw fa-spin" aria-hidden="true"></i></label>  
                <div class="col-sm-4">
                    <input id="txtMobile" name="txtMobile" type="tel" placeholder="" class="form-control input-sm">
                </div>
            </div>

        <div class="form-group">
            <label class="col-sm-4 control-label" for="txtEmailAddress">Email Address </label>  
                <div class="col-sm-4">
                <input id="txtEmailAddress" name="txtEmailAddress" type="email" placeholder="" class="form-control input-sm">
            </div>
        </div>
    </div>
    </div>

    <div class="form-group">
        <label class="col-sm-4 control-label" for="btnSave"></label>
            <div class="col-md-8">
                <button id="btnSave"   type="submit" name="btnSave"   class="btn btn-success">Save</button>
                <button id="btnCancel" type="button" name="btnCancel" onclick="window.location.href='home.jsp';" class="btn btn-danger">Cancel</button>
            </div>
        </div>
    </fieldset>
    </form>
    </div>


		
<!-- Script Elements - must be in this order -->
<%@ include file="/internal.frameworks.html" %>
    
    </body>
</html>
