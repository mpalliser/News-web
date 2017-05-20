$(document).ready(function(){
	var firstScroll = false;
	var secondScroll = false;

	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() == $(document).height()) {
			if (firstScroll == false) {
				loadNews();
				firstScroll = true;
			} else if (firstScroll == true && secondScroll == false) {
				loadNews2();
				secondScroll = true;
			}
		}

	});

});


function loadNews(){
	$.getJSON("data/1.json",function(json){
		$.each(json, function(index){
			$(".noticias").append("<article class='article'><img class='noticeImg img-responsive img-thumbnail' src="
			+ json[index].image+" alt='Cinque Terre' width='304' height='236'><header><a href='#'><h3>"
			+ json[index].title+"</h3></a></header><hr><section class='description'><p class='text-justify noticeText'>"
			+ json[index].body +"<a href='#'><span> Leer mas...</span></a></p></section><footer class='date'><span>Publicado día: "
			+ json[index].data +"</span><span class='author'> Author: <a href='#'>"
			+ json[index].author +"</a></span></footer></article><hr>");
		});
		$("#publi").append("<a href='http://www.conectabalear.com/'><img src='img/publi/publi1.png'></a>");
		$("#publi").append("<a href='https://www.kingston.com/es/ssd/consumer/suv400s3'><img src='img/publi/publi4.png'></a>");
	});
}

function loadNews2(){
	$.getJSON("data/2.json",function(json){
		$.each(json, function(index){
			$(".noticias").append("<article class='article'><img class='noticeImg img-responsive img-thumbnail' src="
			+ json[index].image+" alt='Cinque Terre' width='304' height='236'><header><a href='#'><h3>"
			+ json[index].title+"</h3></a></header><hr><section class='description'><p class='text-justify noticeText'>"
			+ json[index].body +"<a href='#'><span> Leer mas...</span></a></p></section><footer class='date'><span>Publicado día: "
			+ json[index].data +"</span><span class='author'> Author: <a href='#'>"
			+ json[index].author +"</a></span></footer></article><hr>");
		});
		$("#publi").append("<a href='https://www.digimobil.es/combo10?gclid=CMiI56-f_tMCFRYTGwodD3kGIw'><img src='img/publi/publi7.png'></a>");
		$("#publi").append("<a href='http://www.movistar.es/particulares/movil/moviles?utm_source=mov_comercial_dis&utm_medium=display&utm_campaign=terminales_Huawei_P10&utm_content=%20mov_comercial_dis-terminales_Huawei_P10-20170508'><img src='img/publi/publi6.png'></a>");
		$("#publi").append("");
	});
}
