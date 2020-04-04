var imagenes=Array("0.jpg","1.jpeg","2.jpg");
var imagenVisible=0;
const inputs = document.querySelectorAll('.controls input');
function changeImg(img)
	{
		imagenVisible++;
		if(imagenVisible>=imagenes.length)
		{
			imagenVisible=0;
		}
		img.src=imagenes[imagenVisible];
		nextImage();
	}
 
    function nextImage()
	{
		if((imagenVisible+1)<imagenes.length)
		{
			console.log(imagenVisible+1);
			var imgTmp=new Image();
			imgTmp.src=imagenes[imagenVisible+1];
		}
	}
	window.onload=function() {
		nextImage();
	}

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}


inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
