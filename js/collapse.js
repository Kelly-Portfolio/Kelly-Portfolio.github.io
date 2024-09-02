<script>
  document.getElementById("seeMoreBtn").addEventListener("click", function() {
    var moreText = document.getElementById("moreText");
    var btnText = this;

    if (moreText.style.display === "none") {
      moreText.style.display = "block";
      btnText.textContent = "See Less";
    } else {
      moreText.style.display = "none";
      btnText.textContent = "See More";
    }
  });
</script>
