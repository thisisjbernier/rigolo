function togglenav(){
    if (document.getElementById("navmen").style.width = "250px") {
        document.getElementById("topbarnavbtn").style.transform = "rotate(0deg)";
        document.getElementById("topbarnavbtn").style.transition = "transform 0.2s ease";
        document.getElementById("navmen").style.width = "0px";
        return;
  } else if (document.getElementById("navmen").style.width = "0px") {
        document.getElementById("topbarnavbtn").style.transform = "rotate(90deg)";
        document.getElementById("topbarnavbtn").style.transition = "transform 0.2s ease";
        document.getElementById("navmen").style.width = "250px";
        return;
  }
}
