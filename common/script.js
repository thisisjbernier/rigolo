function togglenav(){
    if (document.getElementById("navmen").style.width = "250px") {
        console.log("Condition 1 succeeded")
        document.getElementById("topbarnavbtn").style.transform = "rotate(0deg)";
        document.getElementById("topbarnavbtn").style.transition = "transform 0.2s ease";
        document.getElementById("navmen").style.width = "0px";
        return;
  } else if (document.getElementById("navmen").style.width = "0px") {
        console.log("Condition 2 succeeded")
        document.getElementById("topbarnavbtn").style.transform = "rotate(90deg)";
        document.getElementById("topbarnavbtn").style.transition = "transform 0.2s ease";
        document.getElementById("navmen").style.width = "250px";
        return;
  }
  console.log("Function failure")
}
