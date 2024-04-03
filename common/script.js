let function togglenav() {
  if (document.getElementById("navmen").style.width = "0") {
        document.getElementById("topbarnavbtn").style.transform = "rotate(0deg)";
        document.getElementById("topbarnavbtn").style.transition = "transform 0.2s ease";
        document.getElementById("navmen").style.width = "0";
  }
  else if (document.getElementById("navmen").style.width = "250") {
        document.getElementById("topbarnavbtn").style.transform = "rotate(0deg)";
        document.getElementById("topbarnavbtn").style.transition = "transform 0.2s ease";
        document.getElementById("navmen").style.width = "250";
  }
}
