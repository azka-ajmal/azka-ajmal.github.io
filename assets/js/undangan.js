var a = 1;
setInterval(function () {
	if (a < 15) {
		if ((a % 4) == 0) {
			$("#loadpoint").html('');
		} else if ((a % 4) == 1) {
			$("#loadpoint").html('.');
		} else if ((a % 4) == 2) {
			$("#loadpoint").html('..');
		} else {
			$("#loadpoint").html('...');
		}
	}
	if (a == 15) {
		$('.text-load').html(`<button style="background:none; border-radius:15%; border-color:#ba9346; color:#ba9346;" onclick="tutupload()">Open</button>`);
		$('#mess-internet').show()
		clearInterval(this);
	}
	a++;
}, 500);



function tutupload() {
	$(".preloader").fadeOut();
	$('#mess-internet').hide()
}


$('#mess-internet').hide()

$(window).on('load', function () {

	$(".preloader").fadeOut();
	let videooffline = document.getElementById('videooffline');
	let audiona = document.getElementById('audiona');
	$('.pause').hide();
	$('.off-sound').hide();
	offsound();




	$('#live-frame').hide();

	let i = 0;
	setInterval(function () {
		hitungmundur();
		i++;
		if ((i > 7) && (i < 10)) {
			offsound();
		}
	}, 1000);


	//countdown
	function hitungmundur() {
		var endTime = new Date($('.countdown')[0].dataset.count);
		endTime = (Date.parse(endTime) / 1000);

		var now = new Date();
		now = (Date.parse(now) / 1000);

		var timeLeft = endTime - now;

		var days = Math.floor(timeLeft / 86400);
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

		if (hours < "10") {
			hours = "0" + hours;
		}
		if (minutes < "10") {
			minutes = "0" + minutes;
		}
		if (seconds < "10") {
			seconds = "0" + seconds;
		}

		if (($('.countdown').length) && (timeLeft > 0)) {
			$('.countdown').html(` <div class="box-ctdn text-center">
			<p>
				${days}
			</p>
			<small>Hari</small>
		</div>
		<div class="box-ctdn text-center">
			<p>
				${hours}
			</p>
			<small>Jam</small>
		</div>
		<div class="box-ctdn text-center">
			<p>
				${minutes}
			</p>
			<small>Menit</small>
		</div>
		<div class="box-ctdn text-center">
			<p>
				${seconds}
			</p>
			<small>Detik</small>
		</div>`);
		} else {
			$('.countdown').html(``);
		}
	}

	$('#live').on('click', () => {
		$('#live-frame').fadeIn();
		$('#live').fadeOut();
		$('#yutub').html(`<iframe src="https://www.youtube.com/embed/_GUEOfnm8u8"
		title="YouTube video player" frameborder="1"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen>
	</iframe>`);
	});

});

function play() {
	videooffline.play();
	$('.play').hide();
	$('.pause').show();
}

function pause() {
	videooffline.pause();
	$('.pause').hide();
	$('.play').show();
}

function onsound() {
	audiona.pause();
	$('.on-sound').hide();
	$('.off-sound').show();
}

function offsound() {
	audiona.play();
	$('.off-sound').hide();
	$('.on-sound').show();
}

function navhide() {
	$('.navbar').hide();
}

$('.modal').on('hidden.bs.modal', function () {
	$('.navbar').show();
});

$('.kirimpesan').on('click', function () {
	window.open(`https://wa.me/6285720012744?text=${$('#floatingTextarea2').val()}. -${$('#floatingInput').val()}`, '_blank')
});