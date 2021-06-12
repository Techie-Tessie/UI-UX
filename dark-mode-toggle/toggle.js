//changes colour scheme to dark mode when toggle switch checked
//additional note - semicolons aren't necessary in JS but are good practice!
function darkMode()
{
				var checkBox = document.getElementById("toggle");
				if (checkBox.checked == true)
				{
					document.body.style.backgroundColor = "black";
				}
				else
				{
					document.body.style.backgroundColor = "white";
  				}
}
