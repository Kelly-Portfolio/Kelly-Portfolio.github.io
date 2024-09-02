<script>
  document.getElementById("seeMoreBtn").addEventListener("click", function() {
    var moreText = document.getElementById("moreText");
    var btnText = document.getElementById("seeMoreBtn");

    if (moreText.classList.contains("show")) {
      moreText.classList.remove("show");
      btnText.textContent = "See More";
    } else {
      moreText.classList.add("show");
      btnText.textContent = "See Less";
    }
  });
</script>
