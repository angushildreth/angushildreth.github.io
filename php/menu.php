<?php
echo'
<div class="container-fluid" id="titleBar">
<div class="row">
  <div class="col-md-11">
    <h1 class="titleText"><span id="titleName">Angus Hildreth</span></h1>
    <h2 class="titleText"><span id="titleDetails">University of California, Berkeley</span><h2>
  </div>
  <div class="col-md-1">
    <img src="../resources/berkeleyLogo.gif" class="img-responsive" id="titleLogo" alt="" />
  </div>
</div>


</div>

<nav class="navbar navbar-default" role="navigation">
<div class="container-fluid">
  <ul class="nav navbar-nav navbar-right">
    <li><a href="/home/" id="homeBtn">Home</a></li>
    <li><a href="/about/" id="docBtn">About</a></li>
    <li class="navbtn dropdown">
    <a class="dropdown-toggle" id="labbutton" class="labbutton" href="/lab/">
    Lab
    </a>
    <ul class="dropdown-menu">
    <li class="navbtn"><a href="/lab/#labOverview" class="labbutton">Overview</a></li>
    <li class="navbtn"><a href="/lab/#labApply" class="labbutton">Apply</a></li>
    <li class="navbtn"><a href="/lab/#labMembers" class="labbutton">Team</a></li>
    <li class="navbtn"><a href="/lab/#labAlumni" class="labbutton">Alumni</a></li>
    </ul>
    </li>
    <li><a href="/research/" id="docBtn">Research</a></li>
    <li><a href="/vita/" id="aboutBtn">Vita</a></li>
  </ul>
</div>
</nav>';
?>
