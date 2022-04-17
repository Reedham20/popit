(function($) {

  // Get the .gif images from the "data-alt".
	var getGif = function() {
		var gif = [];
		$('img').each(function() {
			var data = $(this).data('alt');
			gif.push(data);
		});
		return gif;
	}

	var gif = getGif();

	function sound(src) {
		this.sound = document.createElement("audio");
		this.sound.src = src;
		this.sound.setAttribute("preload", "auto");
		this.sound.setAttribute("controls", "none");
		this.sound.style.display = "none";
		document.body.appendChild(this.sound);
		this.play = function(){
			this.sound.play();
		}
		this.stop = function(){
			this.sound.pause();
		}    
	}
	

	// Preload all the gif images.
	var image = [];

	$.each(gif, function(index) {
		image[index]     = new Image();
		image[index].src = gif[index];
	});
	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	// Change the image to .gif when clicked and vice versa.
	var mySound;
	mySound = new sound("../audio/123.mp3");
	var score = 0;
	$('figure').on('click', async function() {
		mySound.play();
		score += 1;
		document.getElementById("score").innerHTML = score
		
		var $this   = $(this),
				$index  = $this.index(),
				$img    = $this.children('img'),
				$imgSrc = $img.attr('src'),
				$imgAlt = $img.attr('data-alt'),
				$imgExt = $imgAlt.split('.');
				
		if($imgExt[1] === 'gif') {
			$img.attr('src', $img.data('alt')).attr('data-alt', $imgSrc);
			await sleep(600);
			if($imgExt[0] === 'img/1') {
				$this.attr('style','top: 900px; left:80px')
			$img.attr('src', $imgSrc).attr('data-alt', $img.data('alt'))
			await sleep(5);
				$this.attr('style','  animation: linear 15s anim1 infinite;')
			}else if($imgExt[0] === 'img/2') {
				$this.attr('style','top: 900px; left:40px')
			$img.attr('src', $imgSrc).attr('data-alt', $img.data('alt'))
			await sleep(5);
				$this.attr('style','  animation: linear 15s anim2 infinite;')
			}	
			else if($imgExt[0] === 'img/3') {
				$this.attr('style','top: 900px; left:300px')
			$img.attr('src', $imgSrc).attr('data-alt', $img.data('alt'))
			await sleep(5);
				$this.attr('style','  animation: linear 15s anim3 infinite;')
			}	
			else if($imgExt[0] === 'img/4') {
				$this.attr('style','top: 900px; left:120px')
			$img.attr('src', $imgSrc).attr('data-alt', $img.data('alt'))
			await sleep(5);
				$this.attr('style','  animation: linear 15s anim4 infinite;')
			}	
			else if($imgExt[0] === 'img/5') {
				$this.attr('style','top: 900px; left:160px')
			$img.attr('src', $imgSrc).attr('data-alt', $img.data('alt'))
			await sleep(5);
				$this.attr('style','  animation: linear 15s anim5 infinite;')
			}	
			else if($imgExt[0] === 'img/6') {
				$this.attr('style','top: 900px; left:240px')
			$img.attr('src', $imgSrc).attr('data-alt', $img.data('alt'))
			await sleep(5);
				$this.attr('style','  animation: linear 15s anim6 infinite;')
			}	
			else if($imgExt[0] === 'img/7') {
				$this.attr('style','top: 900px; left:180px')
			$img.attr('src', $imgSrc).attr('data-alt', $img.data('alt'))
			await sleep(5);
				$this.attr('style','  animation: linear 15s anim7 infinite;')
			}	
			else if($imgExt[0] === 'img/8') {
				$this.attr('style','top: 900px; left:270px')
			$img.attr('src', $imgSrc).attr('data-alt', $img.data('alt'))
			await sleep(5);
				$this.attr('style','  animation: linear 15s anim8 infinite;')
			}	
			else if($imgExt[0] === 'img/9') {
				$this.attr('style','top: 900px; left:20px')
			$img.attr('src', $imgSrc).attr('data-alt', $img.data('alt'))
			await sleep(5);
				$this.attr('style','  animation: linear 15s anim9 infinite;')
			}	
			else if($imgExt[0] === 'img/10') {
				$this.attr('style','top: 900px; left:400px')
			$img.attr('src', $imgSrc).attr('data-alt', $img.data('alt'))
			await sleep(5);
				$this.attr('style','  animation: linear 15s anim10 infinite;')
			}	
			else if($imgExt[0] === 'img/11') {
				$this.attr('style','top: 900px; left:480px')
			$img.attr('src', $imgSrc).attr('data-alt', $img.data('alt'))
			await sleep(5);
				$this.attr('style','  animation: linear 15s anim11 infinite;')
			}	
			else if($imgExt[0] === 'img/12') {
				$this.attr('style','top: 900px; left:440px')
			$img.attr('src', $imgSrc).attr('data-alt', $img.data('alt'))
			await sleep(5);
				$this.attr('style','  animation: linear 15s anim12 infinite;')
			}	
		}
	});

})(jQuery);